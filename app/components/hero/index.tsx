'use client';

import { Text } from "@react-three/drei";

import { useProgress } from "@react-three/drei";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { isMobile } from "react-device-detect";
import * as THREE from "three";
import { useThemeStore } from "@stores";
import CloudContainer from "../models/Cloud";
import StarsContainer from "../models/Stars";
import WindowModel from "../models/WindowModel";
import TextWindow from "./TextWindow";

const Hero = () => {
  const titleRef = useRef<THREE.Mesh>(null);
  const nameRef = useRef<THREE.Mesh>(null);
  const { progress } = useProgress();
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    if (progress === 100) {
      if (titleRef.current) {
        gsap.fromTo(titleRef.current.position, {
          y: -10,
          duration: 1,
        }, {
          y: 0.4,
          duration: 3
        });
      }
      if (nameRef.current) {
        gsap.fromTo(nameRef.current.position, {
          y: -10,
          duration: 1,
        }, {
          y: -0.8,
          duration: 3,
          delay: 0.4
        });
      }
    }
  }, [progress]);

  const fontProps = {
    font: "./soria-font.ttf",
    fontSize: isMobile ? 0.75 : 1.2,
  };

  const nameFontProps = {
    font: "./soria-font.ttf",
    fontSize: isMobile ? 0.50 : 0.75,
    color: theme.type === 'dark' ? '#c0c0c0' : '#3a3a3a',
  };

  return (
    <>
      <Text position={[0, 2, -10]} {...fontProps} ref={titleRef}>Between Logic & Art, I Build.</Text>
      <Text position={[0, -10, -10]} {...nameFontProps} ref={nameRef}>I'm Vasu Sadariya</Text>
      <StarsContainer />
      <CloudContainer/>
      <group position={[0, -25, 5.69]}>
        <pointLight castShadow position={[1, 1, -2.5]} intensity={60} distance={10}/>
        <WindowModel receiveShadow/>
        <TextWindow/>
      </group>
    </>
  );
};

export default Hero;

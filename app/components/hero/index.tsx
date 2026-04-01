'use client';

import { Text } from "@react-three/drei";

import { useProgress } from "@react-three/drei";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useThemeStore } from "@stores";
import CloudContainer from "../models/Cloud";
import StarsContainer from "../models/Stars";
import WindowModel from "../models/WindowModel";
import TextWindow from "./TextWindow";

const Hero = () => {
  const titleRef = useRef<THREE.Mesh>(null);
  const quoteRef = useRef<THREE.Mesh>(null);
  const { progress } = useProgress();
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    if (progress === 100) {
      if (titleRef.current) {
        gsap.fromTo(titleRef.current.position, {
          y: -10,
          duration: 1,
        }, {
          y: 0,
          duration: 3
        });
      }
      if (quoteRef.current) {
        gsap.fromTo(quoteRef.current.position, {
          y: -10,
          duration: 1,
        }, {
          y: -1.5,
          duration: 3,
          delay: 0.5
        });
      }
    }
  }, [progress]);

  const fontProps = {
    font: "./soria-font.ttf",
    fontSize: 1.2,
  };

  const quoteFontProps = {
    font: "./soria-font.ttf",
    fontSize: 0.60,
    color: theme.type === 'dark' ? 'white' : '#1a1a1a',
  };

  return (
    <>
      <Text position={[0, 2, -10]} {...fontProps} ref={titleRef}>Hi, I am Vasu Sadariya.</Text>
      <Text position={[0, -10, -10]} {...quoteFontProps} ref={quoteRef}>“Simplicity is the ultimate sophistication.” — Leonardo da Vinci</Text>
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

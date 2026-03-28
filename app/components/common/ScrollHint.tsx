import gsap from "gsap";
import Image from "next/image";
import { useEffect, useState } from "react";

import { usePortalStore, useScrollStore } from "@stores";

export const ScrollHint = () => {
  const [hintText, setHintText] = useState('');
  const [showScrollHint, setShowScrollHint] = useState(false);
  const portal = usePortalStore((state) => state.activePortalId);
  const scrollProgress = useScrollStore((state) => state.scrollProgress);

  // Show 'Scroll' for Hero and work portals, 'Pan' for Projects portal.
  useEffect(() => {
    if (!portal) {
      if (scrollProgress === 0) {
        setHintText('SCROLL');
        setShowScrollHint(true);
      } else {
        setShowScrollHint(false);
      }
    } else {
      if (portal === 'work') {
        setHintText('SCROLL');
        setShowScrollHint(scrollProgress === 0);
      } else {
        setHintText('PAN');
        setShowScrollHint(true);
      }
    }
  }, [portal, scrollProgress]);

  useEffect(() => {
    if (showScrollHint) {
      gsap.to('.scroll-hint', {
        opacity: 1,
        duration: 1.5,
        delay: 1.5,
      });
    } else {
      gsap.killTweensOf('.scroll-hint');
      gsap.to('.scroll-hint', {
        opacity: 0,
        duration: 0.5,
      });
    }
  }, [showScrollHint]);

  const showSkills = usePortalStore((state) => state.showSkills);
  const setShowSkills = usePortalStore((state) => state.setShowSkills);

  const svgSrc = hintText === 'PAN' ? 'icons/chevrons-left-right.svg' : 'icons/chevrons-up-down.svg';

  return (
    <div className="fixed w-full bottom-5 scroll-hint pointer-events-none z-50" style={{ opacity: 0 }}>
      {/* Container holding both PAN and Toggle Skills */}
      <div className="flex flex-row items-center justify-center gap-8">
        
        {/* The Toggle Skills Button (Only visible when PAN / Projects portal is active) */}
        {hintText === 'PAN' && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowSkills(!showSkills);
            }}
            className="flex items-center justify-center text-white/90 tracking-[0.15em] text-sm uppercase pointer-events-auto hover:text-white hover:animate-pulse transition-colors duration-300 drop-shadow-lg font-light"
          >
            {showSkills ? "<> VIEW PROJECTS" : "<> VIEW SKILLS"}
          </button>
        )}

        {/* Existing PAN / SCROLL hint */}
        <div className="flex items-center justify-center animate-pulse gap-2">
          { showScrollHint }
          <Image src={svgSrc} width={18} height={18} alt="hint icon" loading="lazy" />
          <span className="text-white tracking-[0.15em] uppercase text-sm">{hintText}</span>
        </div>
      </div>
    </div>
  );
}
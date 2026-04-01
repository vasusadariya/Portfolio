import { useEffect, useMemo, useState } from "react";
import { isMobile } from "react-device-detect";
import ProjectTile from "./ProjectTile";

import { usePortalStore } from "@stores";
import { Project } from "@types";

interface ProjectsCarouselProps {
  projects: Project[];
  activeId: number | null;
  setActiveId: (id: number | null) => void;
}

const ProjectsCarousel = ({ projects, activeId, setActiveId }: ProjectsCarouselProps) => {
  const isActive = usePortalStore((state) => state.activePortalId === "projects");

  // internal activeId effect removed as it is now lifted to parent

  const onClick = (id: number) => {
    if (!isMobile) return;
    setActiveId(id === activeId ? null : id);
  };

  const tiles = useMemo(() => {
    const fov = Math.PI;
    const distance = 13;
    const count = projects.length;

    return projects.map((project, i) => {
      const angle = (fov / count) * i;
      const z = -distance * Math.sin(angle);
      const x = -distance * Math.cos(angle);
      const rotY = Math.PI / 2 - angle;

      return (
        <ProjectTile
          key={i}
          project={project}
          index={i}
          position={[x, 1, z]}
          rotation={[0, rotY, 0]}
          activeId={activeId}
          onClick={() => onClick(i)}
        />
      );
    });
  }, [activeId, isActive, projects]);

  return (
    <group rotation={[0, -Math.PI / 12, 0]}>
      {tiles}
    </group>
  );
};

export default ProjectsCarousel;
import { create } from 'zustand';

interface PortalStore {
  activePortalId: string | null;
  setActivePortal: (activePortalId: string | null) => void;
  showSkills: boolean;
  setShowSkills: (showSkills: boolean) => void;
}

export const usePortalStore = create<PortalStore>((set) => ({
  activePortalId: null,
  setActivePortal: (activePortalId) => set(() => ({ activePortalId })),
  showSkills: false,
  setShowSkills: (showSkills) => set(() => ({ showSkills })),
}))

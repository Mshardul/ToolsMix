import { create } from 'zustand';
import type { Tool } from '@/lib/constants/toolsManifest';

interface AppState {
  sidebarOpen: boolean;
  expandedCategories: string[];
  selectedTool: Tool | null;
  toggleSidebar: () => void;
  toggleCategory: (categoryId: string) => void;
  collapseAll: () => void;
  selectTool: (tool: Tool) => void;
}

export const useAppStore = create<AppState>((set) => ({
  sidebarOpen: true,
  expandedCategories: [],
  selectedTool: null,
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  toggleCategory: (categoryId) =>
    set((state) => ({
      expandedCategories: state.expandedCategories.includes(categoryId)
        ? state.expandedCategories.filter((id) => id !== categoryId)
        : [...state.expandedCategories, categoryId],
    })),
  collapseAll: () => set({ expandedCategories: [] }),
  selectTool: (tool) => set({ selectedTool: tool }),
}));
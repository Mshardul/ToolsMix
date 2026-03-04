import { useAppStore } from '@/store/appStore';
import { categories } from '@/lib/constants/toolsManifest';
import SidebarCategory from './SidebarCategory';
import { SidebarSearch } from './SidebarSearch';
import { Button } from '@/components/ui/button';
import { ChevronsUpDown } from 'lucide-react'; // collapse all icon

export default function Sidebar() {
  const { expandedCategories, toggleCategory, collapseAll, selectTool } = useAppStore();

  return (
    <aside className="w-64 h-full border-r flex flex-col">
      <SidebarSearch />
      <div className="flex-1 overflow-y-auto">
        {categories.map((category) => (
          <SidebarCategory
            key={category.id}
            category={category}
            isExpanded={expandedCategories.includes(category.id)}
            onToggle={() => toggleCategory(category.id)}
            onSelectTool={selectTool}
          />
        ))}
      </div>
      <div className="p-2 border-t flex justify-between items-center">
        <Button variant="ghost" size="icon" onClick={collapseAll} title="Collapse all">
          <ChevronsUpDown className="h-4 w-4" />
        </Button>
        {/* Settings icon (app-level) */}
      </div>
    </aside>
  );
}
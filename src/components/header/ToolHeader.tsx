import { useMemo } from 'react';
import { useAppStore } from '@/store/appStore';
import { categories } from '@/lib/constants/toolsManifest';
import Breadcrumbs from './Breadcrumbs';
import ToolSettings from './ToolSettings';
import type { Tool } from '@/lib/constants/toolsManifest';

interface Props {
  tool: Tool | null;
}

export default function ToolHeader({ tool }: Props) {
  const selectTool = useAppStore((state) => state.selectTool);

  const currentCategory = useMemo(() => {
    if (!tool) return null;
    return categories.find((cat) =>
      cat.tools.some((t) => t.id === tool.id)
    ) || null;
  }, [tool]);

  if (!tool || !currentCategory) {
    return <div className="h-16 border-b" />; // empty header when no tool
  }

  return (
    <header className="border-b">
      <div className="flex items-center justify-between px-4 py-2">
        <Breadcrumbs
          category={currentCategory}
          tool={tool}
          onNavigate={selectTool}
        />
        <ToolSettings tool={tool} />
      </div>
      <div className="px-4 pb-2 flex items-center gap-2">
        <tool.icon className="h-6 w-6" />
        <h2 className="text-xl font-semibold">{tool.name}</h2>
      </div>
    </header>
  );
}
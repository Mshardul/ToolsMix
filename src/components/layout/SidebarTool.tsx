import { Button } from '@/components/ui/button';
import type { Tool } from '@/lib/constants/toolsManifest';

interface Props {
  tool: Tool;
  onSelect: (tool: Tool) => void;
}

export default function SidebarTool({ tool, onSelect }: Props) {
  const Icon = tool.icon;
  return (
    <Button
      variant="ghost"
      size="sm"
      className="w-full justify-start gap-2 text-sm"
      onClick={() => onSelect(tool)}
    >
      <Icon className="h-3.5 w-3.5" />
      <span>{tool.name}</span>
    </Button>
  );
}
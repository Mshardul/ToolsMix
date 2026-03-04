import { ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import SidebarTool from './SidebarTool';
import type { Category, Tool } from '@/lib/constants/toolsManifest';

interface Props {
  category: Category;
  isExpanded: boolean;
  onToggle: () => void;
  onSelectTool: (tool: Tool) => void;
}

export default function SidebarCategory({ category, isExpanded, onToggle, onSelectTool }: Props) {
  const Icon = category.icon;
  return (
    <Collapsible open={isExpanded} onOpenChange={onToggle}>
      <div className="flex items-center px-2 py-1 hover:bg-muted/50 rounded">
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="flex-1 justify-start gap-2">
            {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            <Icon className="h-4 w-4" />
            <span>{category.name}</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent>
        <div className="ml-6 space-y-1">
          {category.tools.map((tool) => (
            <SidebarTool key={tool.id} tool={tool} onSelect={onSelectTool} />
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
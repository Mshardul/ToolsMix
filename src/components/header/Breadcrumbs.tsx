import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { IconChevronDown } from '@tabler/icons-react';
import type { Category, Tool } from '@/lib/constants/toolsManifest';

interface Props {
  category: Category;
  tool: Tool;
  onNavigate: (tool: Tool) => void;
}

export default function Breadcrumbs({ category, tool, onNavigate }: Props) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1">
              {category.name} <IconChevronDown className="h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {category.tools.map((t) => (
                <DropdownMenuItem key={t.id} onClick={() => onNavigate(t)}>
                  {t.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1">
              {tool.name} <IconChevronDown className="h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {category.tools.map((t) => (
                <DropdownMenuItem key={t.id} onClick={() => onNavigate(t)}>
                  {t.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
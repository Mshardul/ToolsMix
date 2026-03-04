import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { IconSettings } from '@tabler/icons-react';
import type { Tool } from '@/lib/constants/toolsManifest';

interface Props {
  tool: Tool | null;
}

export default function ToolSettings({ tool }: Props) {
  if (!tool) return null;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <IconSettings className="h-4 w-4" />
          <span className="sr-only">Tool settings</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Settings for {tool.name}</SheetTitle>
          <SheetDescription>
            Configure how this tool behaves. Settings are saved locally.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <p className="text-sm text-muted-foreground">
            No settings available for this tool yet.
          </p>
          {/* Here you can add tool‑specific settings UI later */}
        </div>
      </SheetContent>
    </Sheet>
  );
}
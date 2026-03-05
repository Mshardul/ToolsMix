import { Suspense, lazy, useEffect, useState } from 'react';
import type { ComponentType } from 'react';
import { useAppStore } from '@/store/appStore';
import ToolHeader from '@/components/header/ToolHeader';
import Welcome from '@/pages/Welcome';

export default function RightPane() {
  const selectedTool = useAppStore((state) => state.selectedTool);
  const [LazyComponent, setLazyComponent] = useState<React.LazyExoticComponent<ComponentType<any>> | null>(null);

  useEffect(() => {
    if (selectedTool) {
      setLazyComponent(lazy(selectedTool.component));
    } else {
      setLazyComponent(null);
    }
  }, [selectedTool]);

  return (
    <div className="h-full w-full flex flex-col"> {/* Added w-full */}
      <ToolHeader tool={selectedTool} />
      <div className="flex-1 overflow-auto p-4">
        {selectedTool && LazyComponent ? (
          <Suspense fallback={<div className="p-4">Loading tool...</div>}>
            <LazyComponent />
          </Suspense>
        ) : (
          <Welcome />
        )}
      </div>
    </div>
  );
}
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { IconSearch } from '@tabler/icons-react';

export function SidebarSearch() {
  const [query, setQuery] = useState('');

  // TODO: Connect to store or filtering logic
  const handleSearch = (value: string) => {
    setQuery(value);
    // You can dispatch an action to filter categories/tools
  };

  return (
    <div className="p-2">
      <div className="relative">
        <IconSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search tools..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-8"
        />
      </div>
    </div>
  );
}
import { Icon } from '@tabler/icons-react';
import {
  IconBase64,
  IconHash,
  IconJson,
  IconNetwork,
  IconColorPicker,
  IconCode,
  // ... import all needed icons (or use dynamic import)
} from '@tabler/icons-react';

// For lazy loading components, we'll store a function that returns a Promise of the component.
// We'll use React.lazy with import().

export interface Tool {
  id: string;               // unique slug, e.g., 'base64-encode'
  name: string;             // display name, e.g., 'Base64 Encoder/Decoder'
  icon: Icon;               // Tabler icon component
  component: () => Promise<{ default: React.ComponentType<any> }>; // lazy loader
}

export interface Category {
  id: string;
  name: string;
  icon: Icon;
  tools: Tool[];
}

export const categories: Category[] = [
  {
    id: 'encoding',
    name: 'Encoding',
    icon: IconBase64, // replace with appropriate icon
    tools: [
      {
        id: 'base64-encode',
        name: 'Base64 Encoder / Decoder',
        icon: IconBase64,
        component: () => import('../../components/tools/encoding/Base64Tool')
      },
      {
        id: 'base64-image',
        name: 'Base64 Image Encoder / Decoder',
        icon: IconBase64,
        component: () => import('../../components/tools/encoding/Base64ImageTool')
      },
      // ... other tools
    ]
  },
  // ... other categories
];
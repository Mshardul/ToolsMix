import type { ComponentType, ElementType } from 'react';

import {
  // Icon,
  // IconBase64,
  IconCode,
  IconHash,
  IconJson,
  IconLock,
  IconNetwork,
  IconColorPicker,
  // ... import all needed icons (or use dynamic import)
} from '@tabler/icons-react';

// For lazy loading components, we'll store a function that returns a Promise of the component.
// We'll use React.lazy with import().

export interface Tool {
  id: string;               // unique slug, e.g., 'base64-encode'
  name: string;             // display name, e.g., 'Base64 Encoder/Decoder'
  icon: ElementType;  // Tabler icon component
  component: () => Promise<{ default: ComponentType<any> }>; // lazy loader
}

export interface Category {
  id: string;
  name: string;
  icon: ElementType;
  tools: Tool[];
}

export const categories: Category[] = [
  {
    id: 'developer-tools',
    name: 'Developer Tools',
    icon: IconCode,
    tools: [
      {
        id: 'uuid-generator',
        name: 'UUID Generator',
        icon: IconHash,
        component: () => import('../../components/tools/UUIDGenerator')
      },
      {
        id: 'password-generator',
        name: 'Password Generator & Strength Checker',
        icon: IconLock,
        component: () => import('../../components/tools/PasswordGenerator')
      }
    ]
  }
];
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { IconTools } from '@tabler/icons-react';

export default function Welcome() {
  return (
    <div className="h-full flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <div className="flex items-center gap-2">
            <IconTools className="h-8 w-8 text-primary" />
            <CardTitle className="text-3xl">Welcome to ToolsMix</CardTitle>
          </div>
          <CardDescription className="text-lg">
            Your all-in-one toolbox for developers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Select a tool from the sidebar to get started. ToolsMix provides a wide range of utilities for encoding, cryptography, conversion, formatting, network, web development, and more.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-lg border p-3">
              <h3 className="font-semibold">Encoding</h3>
              <p className="text-sm text-muted-foreground">Base64, URL, HTML entities, JWT, etc.</p>
            </div>
            <div className="rounded-lg border p-3">
              <h3 className="font-semibold">Cryptography</h3>
              <p className="text-sm text-muted-foreground">MD5, SHA, AES, RSA, bcrypt...</p>
            </div>
            <div className="rounded-lg border p-3">
              <h3 className="font-semibold">Converters</h3>
              <p className="text-sm text-muted-foreground">JSON, XML, YAML, CSV, timestamp...</p>
            </div>
            <div className="rounded-lg border p-3">
              <h3 className="font-semibold">Developer Tools</h3>
              <p className="text-sm text-muted-foreground">UUID, password, cron, diff...</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
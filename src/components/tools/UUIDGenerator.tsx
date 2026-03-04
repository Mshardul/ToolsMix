import { useState } from 'react';
import { v1 as uuidv1, v4 as uuidv4 } from 'uuid';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { useToast } from '@/components/ui/use-toast'; // if you have toast; otherwise omit

export default function UUIDGenerator() {
  const [version, setVersion] = useState<'v1' | 'v4'>('v4');
  const [count, setCount] = useState(1);
  const [uuids, setUuids] = useState<string[]>([]);
  // const { toast } = useToast(); // if using toast

  const generate = () => {
    const newUuids = [];
    for (let i = 0; i < count; i++) {
      newUuids.push(version === 'v1' ? uuidv1() : uuidv4());
    }
    setUuids(newUuids);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Optional toast notification
    // toast({ description: 'Copied to clipboard' });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>UUID Generator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <RadioGroup value={version} onValueChange={(val) => setVersion(val as 'v1' | 'v4')}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="v4" id="v4" />
            <Label htmlFor="v4">UUID v4 (random)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="v1" id="v1" />
            <Label htmlFor="v1">UUID v1 (time-based)</Label>
          </div>
        </RadioGroup>

        <div className="flex items-center space-x-2">
          <Label htmlFor="count">Number of UUIDs:</Label>
          <Input
            id="count"
            type="number"
            min="1"
            max="100"
            value={count}
            onChange={(e) => setCount(parseInt(e.target.value) || 1)}
            className="w-20"
          />
        </div>

        <Button onClick={generate}>Generate</Button>

        {uuids.length > 0 && (
          <div className="mt-4 space-y-2">
            {uuids.map((uuid, index) => (
              <div key={index} className="flex items-center space-x-2">
                <code className="flex-1 p-2 bg-muted rounded text-sm font-mono">{uuid}</code>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => copyToClipboard(uuid)}
                >
                  Copy
                </Button>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
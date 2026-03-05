import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Simple password strength estimator
const estimateStrength = (password: string): { score: number; label: string } => {
  if (!password) return { score: 0, label: 'None' };
  let score = 0;
  if (password.length >= 8) score += 1;
  if (password.length >= 12) score += 1;
  if (/[a-z]/.test(password)) score += 1;
  if (/[A-Z]/.test(password)) score += 1;
  if (/[0-9]/.test(password)) score += 1;
  if (/[^a-zA-Z0-9]/.test(password)) score += 1;
  // Normalize to 0-4 scale
  const normalized = Math.min(4, Math.floor(score / 1.5));
  const labels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
  return { score: normalized, label: labels[normalized] };
};

export default function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [generatedPassword, setGeneratedPassword] = useState('');
  const [passwordToCheck, setPasswordToCheck] = useState('');
  const [strength, setStrength] = useState({ score: 0, label: 'None' });

  const generatePassword = () => {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let chars = '';
    if (includeUppercase) chars += uppercase;
    if (includeLowercase) chars += lowercase;
    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;

    if (chars.length === 0) return;

    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }
    setGeneratedPassword(password);
    setPasswordToCheck(password);
    setStrength(estimateStrength(password));
  };

  const checkStrength = (pwd: string) => {
    setPasswordToCheck(pwd);
    setStrength(estimateStrength(pwd));
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="space-y-6">
      {/* Generate Password Card */}
      <Card>
        <CardHeader>
          <CardTitle>Generate Password</CardTitle>
          <CardDescription>
            Choose criteria and generate a secure password
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="length">Length: {length}</Label>
            </div>
            <Slider
              id="length"
              min={4}
              max={32}
              step={1}
              value={[length]}
              onValueChange={(val) => setLength(val[0])}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="uppercase"
                checked={includeUppercase}
                onCheckedChange={(checked) => setIncludeUppercase(!!checked)}
              />
              <Label htmlFor="uppercase">A-Z</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="lowercase"
                checked={includeLowercase}
                onCheckedChange={(checked) => setIncludeLowercase(!!checked)}
              />
              <Label htmlFor="lowercase">a-z</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="numbers"
                checked={includeNumbers}
                onCheckedChange={(checked) => setIncludeNumbers(!!checked)}
              />
              <Label htmlFor="numbers">0-9</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="symbols"
                checked={includeSymbols}
                onCheckedChange={(checked) => setIncludeSymbols(!!checked)}
              />
              <Label htmlFor="symbols">!@#$%</Label>
            </div>
          </div>

          <Button onClick={generatePassword}>Generate Password</Button>

          {generatedPassword && (
            <div className="flex items-center space-x-2 rounded-md border p-2">
              <code className="flex-1 font-mono text-sm">{generatedPassword}</code>
              <Button size="sm" variant="outline" onClick={() => copyToClipboard(generatedPassword)}>
                Copy
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Check Password Strength Card */}
      <Card>
        <CardHeader>
          <CardTitle>Check Password Strength</CardTitle>
          <CardDescription>
            Enter a password to evaluate its strength
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-2">
            <Input
              type="text"
              value={passwordToCheck}
              onChange={(e) => checkStrength(e.target.value)}
              placeholder="Enter a password"
              className="flex-1"
            />
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>Strength: {strength.label}</span>
              <span>{strength.score}/4</span>
            </div>
            <Progress value={(strength.score / 4) * 100} className="h-2" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
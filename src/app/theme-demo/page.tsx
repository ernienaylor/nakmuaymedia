import { Container, Section } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ModeToggle } from "@/components/ui/mode-toggle";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyLarge,
  TypographySmall,
  TypographyMuted,
  TypographyLead,
  TypographyBlockquote,
} from "@/components/ui/typography";

export default function ThemeDemoPage() {
  return (
    <>
      <Section className="bg-background">
        <Container>
          <div className="flex justify-between items-center mb-8">
            <TypographyH1 className="text-accent">Theme Demo</TypographyH1>
            <ModeToggle />
          </div>
          
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Typography & Colors</CardTitle>
              <CardDescription>
                Showcasing the typography and color system for Nak Muay Media
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Typography Section */}
              <div className="space-y-6">
                <TypographyH2>Typography</TypographyH2>
                
                <div className="space-y-4">
                  <div>
                    <TypographyH1>Heading 1 - Montserrat</TypographyH1>
                    <TypographyMuted>Font: Montserrat, Bold, Uppercase, Tracking Wide</TypographyMuted>
                  </div>
                  
                  <div>
                    <TypographyH2>Heading 2 - Montserrat</TypographyH2>
                    <TypographyMuted>Font: Montserrat, Bold, Uppercase, Tracking Wide</TypographyMuted>
                  </div>
                  
                  <div>
                    <TypographyH3>Heading 3 - Montserrat</TypographyH3>
                    <TypographyMuted>Font: Montserrat, Bold, Uppercase, Tracking Wide</TypographyMuted>
                  </div>
                  
                  <div>
                    <TypographyH4>Heading 4 - Montserrat</TypographyH4>
                    <TypographyMuted>Font: Montserrat, Bold, Uppercase, Tracking Wide</TypographyMuted>
                  </div>
                  
                  <div>
                    <TypographyLead>Lead Text - Roboto</TypographyLead>
                    <TypographyMuted>Font: Roboto, Regular, 1.25rem, Line Height 1.75</TypographyMuted>
                  </div>
                  
                  <div>
                    <TypographyP>Body Text - Roboto. This is the standard paragraph text used throughout the website. It uses Roboto font with a comfortable line height for readability.</TypographyP>
                    <TypographyMuted>Font: Roboto, Regular, 1rem, Line Height 1.6</TypographyMuted>
                  </div>
                  
                  <div>
                    <TypographySmall>Small Text - Roboto</TypographySmall>
                    <TypographyMuted>Font: Roboto, Regular, 0.875rem</TypographyMuted>
                  </div>
                  
                  <div>
                    <TypographyBlockquote>
                      "The greatest victory is that which requires no battle." — Sun Tzu, The Art of War
                    </TypographyBlockquote>
                    <TypographyMuted>Blockquote with accent border</TypographyMuted>
                  </div>
                </div>
              </div>
              
              {/* Colors Section */}
              <div className="space-y-6">
                <TypographyH2>Color System</TypographyH2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-6 bg-accent text-primary rounded-md">
                    <p className="font-bold">Accent</p>
                    <p className="text-sm opacity-90">#B12025</p>
                  </div>
                  
                  <div className="p-6 bg-primary text-secondary border rounded-md">
                    <p className="font-bold">Primary</p>
                    <p className="text-sm opacity-90">#FFFFFF</p>
                  </div>
                  
                  <div className="p-6 bg-secondary text-primary rounded-md">
                    <p className="font-bold">Secondary</p>
                    <p className="text-sm opacity-90">#2D2D2D</p>
                  </div>
                  
                  <div className="p-6 bg-neutral-light text-secondary rounded-md">
                    <p className="font-bold">Neutral Light</p>
                    <p className="text-sm opacity-90">#F5F5F5</p>
                  </div>
                  
                  <div className="p-6 bg-neutral-medium text-secondary rounded-md">
                    <p className="font-bold">Neutral Medium</p>
                    <p className="text-sm opacity-90">#C4C4C4</p>
                  </div>
                  
                  <div className="p-6 bg-background text-foreground border rounded-md">
                    <p className="font-bold">Background</p>
                    <p className="text-sm opacity-90">Dynamic (Light/Dark)</p>
                  </div>
                </div>
              </div>
              
              {/* Components Section */}
              <div className="space-y-6">
                <TypographyH2>Components</TypographyH2>
                
                <div className="space-y-8">
                  {/* Buttons */}
                  <div className="space-y-4">
                    <TypographyH3>Buttons</TypographyH3>
                    <div className="flex flex-wrap gap-4">
                      <Button variant="default">Default</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="link">Link</Button>
                      <Button variant="destructive">Destructive</Button>
                    </div>
                  </div>
                  
                  {/* Badges */}
                  <div className="space-y-4">
                    <TypographyH3>Badges</TypographyH3>
                    <div className="flex flex-wrap gap-4">
                      <Badge variant="default">Default</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="outline">Outline</Badge>
                      <Badge variant="destructive">Destructive</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <TypographyMuted>
                This page demonstrates the typography and theming for Nak Muay Media.
              </TypographyMuted>
            </CardFooter>
          </Card>
        </Container>
      </Section>
    </>
  );
} 
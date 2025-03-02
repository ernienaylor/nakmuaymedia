import { TopStories, sampleMainStory, sampleSecondaryStories } from "@/components/home/top-stories"
import { Container, Section } from "@/components/ui/container"

export default function TopStoriesDemoPage() {
  return (
    <main>
      <Section className="py-12 md:py-16 bg-background">
        <Container>
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Top Stories Component</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A premium editorial section that highlights the most important content with a clear visual hierarchy, combining the editorial authority of WSJ with the visual impact of ESPN.
            </p>
          </div>
        </Container>
      </Section>
      
      <TopStories 
        mainStory={sampleMainStory}
        secondaryStories={sampleSecondaryStories}
        subtitle="The stories you need to read today"
        className="bg-neutral-light"
      />
    </main>
  )
} 
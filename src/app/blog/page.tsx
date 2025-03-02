import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Force dynamic rendering to avoid theme context issues during static generation
export const dynamic = 'force-dynamic';

export default function BlogPage() {
  // Sample blog posts
  const blogPosts = [
    {
      id: 1,
      title: "The Evolution of Muay Thai: From Ancient Battlefield to Modern Sport",
      excerpt: "Explore the rich history of Muay Thai and how it transformed from a military combat system to the beloved sport we know today.",
      date: "May 15, 2023",
      category: "History",
      readTime: "8 min read",
    },
    {
      id: 2,
      title: "Breaking Down Saenchai's Legendary Cartwheel Kick",
      excerpt: "A technical analysis of one of Muay Thai's most creative fighters and his signature move that has stunned opponents worldwide.",
      date: "June 3, 2023",
      category: "Technique Analysis",
      readTime: "6 min read",
    },
    {
      id: 3,
      title: "Nutrition Guide for Muay Thai Fighters: Pre-Fight Meal Planning",
      excerpt: "Learn how to fuel your body properly before a fight with this comprehensive nutrition guide for combat athletes.",
      date: "July 12, 2023",
      category: "Nutrition",
      readTime: "10 min read",
    },
    {
      id: 4,
      title: "Training Muay Thai in Thailand: What to Expect at Traditional Camps",
      excerpt: "Planning to train in Thailand? Here's everything you need to know about authentic training camps and the experience that awaits.",
      date: "August 22, 2023",
      category: "Training",
      readTime: "12 min read",
    },
    {
      id: 5,
      title: "The Mental Game: Psychological Preparation for Muay Thai Competition",
      excerpt: "Discover the mental techniques and strategies used by elite fighters to prepare for the psychological demands of competition.",
      date: "September 5, 2023",
      category: "Psychology",
      readTime: "9 min read",
    },
    {
      id: 6,
      title: "Injury Prevention: Common Muay Thai Injuries and How to Avoid Them",
      excerpt: "Stay healthy and train consistently with these expert tips on preventing the most common injuries in Muay Thai.",
      date: "October 18, 2023",
      category: "Health",
      readTime: "7 min read",
    },
  ];

  // Sample categories
  const categories = [
    "All",
    "Technique",
    "Training",
    "Nutrition",
    "History",
    "Events",
    "Interviews",
    "Health",
  ];

  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-accent">Blog</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Insights, analyses, and stories from the world of Muay Thai. Stay updated with the latest news, 
            techniques, and perspectives from our expert contributors.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className="rounded-full"
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        <Card className="overflow-hidden">
          <div className="aspect-video bg-neutral-light flex items-center justify-center">
            <p className="text-muted-foreground">Featured Post Image Placeholder</p>
          </div>
          <CardHeader>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="default">Featured</Badge>
              <span className="text-xs text-muted-foreground">March 1, 2024</span>
              <span className="text-xs text-muted-foreground">15 min read</span>
            </div>
            <CardTitle>The Rise of Female Muay Thai Fighters on the Global Stage</CardTitle>
            <CardDescription>
              In recent years, female Muay Thai fighters have been making waves in the international scene, 
              breaking barriers and challenging stereotypes. This article explores the journey of these 
              remarkable athletes and their impact on the sport.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Link
              href="#"
              className="inline-flex items-center text-sm font-medium text-accent"
            >
              Read Full Article
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1 h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </CardFooter>
        </Card>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className="bg-accent/10 text-accent">
                    {post.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription>{post.excerpt}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-sm font-medium text-accent"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2">
          <Button variant="outline" size="icon" aria-label="Previous Page">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
          <Button variant="default" size="icon">1</Button>
          <Button variant="outline" size="icon">2</Button>
          <Button variant="outline" size="icon">3</Button>
          <Button variant="outline" size="icon" aria-label="Next Page">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}
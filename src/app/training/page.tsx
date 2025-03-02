import Link from "next/link";

export default function TrainingPage() {
  // Sample training categories
  const trainingCategories = [
    {
      title: "Beginner Techniques",
      description: "Master the fundamentals of Muay Thai with our beginner-friendly guides.",
      link: "#",
    },
    {
      title: "Advanced Combinations",
      description: "Take your skills to the next level with complex combinations and setups.",
      link: "#",
    },
    {
      title: "Clinch Work",
      description: "Learn the art of the Thai clinch with detailed tutorials and drills.",
      link: "#",
    },
    {
      title: "Defensive Techniques",
      description: "Improve your defense with these essential blocking and evasion techniques.",
      link: "#",
    },
    {
      title: "Conditioning",
      description: "Build the strength and endurance needed for Muay Thai with these workouts.",
      link: "#",
    },
    {
      title: "Fight Strategy",
      description: "Develop your fight IQ with tactical analyses and strategic concepts.",
      link: "#",
    },
  ];

  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-accent">Training Resources</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Enhance your Muay Thai skills with our comprehensive collection of training resources, 
            technique breakdowns, and workout programs designed for all skill levels.
          </p>
        </div>

        {/* Featured Training Video */}
        <div className="rounded-lg overflow-hidden border shadow-sm"
             style={{ backgroundColor: 'hsl(var(--card))' }}>
          <div className="aspect-video bg-neutral-light flex items-center justify-center">
            <p className="text-muted-foreground">Featured Training Video Placeholder</p>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold">Basic Muay Thai Stance and Movement</h2>
            <p className="mt-2 text-muted-foreground">
              Learn the proper Muay Thai stance and fundamental footwork patterns in this comprehensive guide.
              Master the basics that will form the foundation of your Muay Thai journey.
            </p>
            <Link
              href="#"
              className="mt-4 inline-flex items-center text-sm font-medium text-accent"
            >
              Watch Full Video
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
          </div>
        </div>

        {/* Training Categories */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Training Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingCategories.map((category, index) => (
              <div key={index} className="rounded-lg border p-6 shadow-sm hover:shadow-md transition-shadow"
                   style={{ backgroundColor: 'hsl(var(--card))' }}>
                <h3 className="text-xl font-bold">{category.title}</h3>
                <p className="mt-2 text-muted-foreground">{category.description}</p>
                <Link
                  href={category.link}
                  className="mt-4 inline-flex items-center text-sm font-medium text-accent"
                >
                  Explore
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
              </div>
            ))}
          </div>
        </div>

        {/* Training Programs */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Training Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg border p-6 shadow-sm"
                 style={{ backgroundColor: 'hsl(var(--card))' }}>
              <h3 className="text-xl font-bold">8-Week Beginner Program</h3>
              <p className="mt-2 text-muted-foreground">
                A structured program designed to take you from zero to confident practitioner in just 8 weeks.
                Includes technique tutorials, conditioning workouts, and progress tracking.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-accent font-bold">Free</span>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-accent px-4 text-sm font-medium text-primary shadow transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Start Program
                </Link>
              </div>
            </div>
            <div className="rounded-lg border p-6 shadow-sm"
                 style={{ backgroundColor: 'hsl(var(--card))' }}>
              <h3 className="text-xl font-bold">Advanced Fighter Preparation</h3>
              <p className="mt-2 text-muted-foreground">
                Designed for experienced practitioners preparing for competition. This 12-week program focuses on
                fight-specific conditioning, technical refinement, and tactical development.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-accent font-bold">Premium</span>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-secondary px-4 text-sm font-medium text-primary shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
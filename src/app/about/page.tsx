export default function AboutPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-accent">About Nak Muay Media</h1>
          <p className="text-muted-foreground text-lg">
            Your premier source for Muay Thai news, training resources, and community.
          </p>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p className="text-muted-foreground">
            At Nak Muay Media, we are dedicated to promoting the art and sport of Muay Thai through high-quality content, 
            educational resources, and community engagement. Our mission is to connect practitioners, enthusiasts, and 
            newcomers to the rich tradition and evolving landscape of Muay Thai around the world.
          </p>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Story</h2>
          <p className="text-muted-foreground">
            Founded by a group of passionate Muay Thai practitioners and media professionals, Nak Muay Media began as a 
            small blog sharing training tips and fight analyses. Over time, we've grown into a comprehensive platform 
            serving the global Muay Thai community with news, technique breakdowns, fighter profiles, and training resources.
          </p>
          <p className="text-muted-foreground">
            Our team consists of experienced fighters, coaches, journalists, and content creators who bring diverse 
            perspectives and expertise to our platform. We work directly with gyms, fighters, and promotions around the 
            world to bring you authentic and insightful content.
          </p>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">What We Offer</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Latest news and updates from the world of Muay Thai</li>
            <li>In-depth technique breakdowns and training guides</li>
            <li>Fighter profiles and interviews</li>
            <li>Event coverage and fight analyses</li>
            <li>Gym directories and reviews</li>
            <li>Community forums and discussions</li>
            <li>Training programs and resources</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Join Our Community</h2>
          <p className="text-muted-foreground">
            Whether you're a seasoned fighter, a coach, a beginner, or simply a fan of the sport, Nak Muay Media has 
            something for you. Join our growing community and be part of the conversation shaping the future of Muay Thai.
          </p>
        </div>
      </div>
    </div>
  );
} 
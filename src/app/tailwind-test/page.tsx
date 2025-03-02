export default function TailwindTestPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-heading text-primary mb-4">Tailwind Test Page</h1>
      <p className="text-secondary mb-6">This page tests various Tailwind styles to ensure everything is working correctly.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Color Tests */}
        <div className="card p-6">
          <h2 className="heading-medium text-secondary mb-4">Color Tests</h2>
          <div className="space-y-4">
            <div className="bg-primary p-4 text-white rounded">Primary</div>
            <div className="bg-primary-dark p-4 text-white rounded">Primary Dark</div>
            <div className="bg-primary-light p-4 text-white rounded">Primary Light</div>
            <div className="bg-secondary p-4 text-white rounded">Secondary</div>
            <div className="bg-secondary-dark p-4 text-white rounded">Secondary Dark</div>
            <div className="bg-secondary-light p-4 text-white rounded">Secondary Light</div>
            <div className="bg-accent p-4 text-white rounded">Accent</div>
            <div className="bg-accent-dark p-4 text-white rounded">Accent Dark</div>
            <div className="bg-accent-light p-4 text-black rounded">Accent Light</div>
          </div>
        </div>
        
        {/* Typography Tests */}
        <div className="card p-6">
          <h2 className="heading-medium text-secondary mb-4">Typography Tests</h2>
          <div className="space-y-4">
            <h1 className="text-3xl">Heading 1 (Oswald)</h1>
            <h2 className="text-2xl">Heading 2 (Oswald)</h2>
            <h3 className="text-xl">Heading 3 (Oswald)</h3>
            <p className="font-sans">Body text (Roboto)</p>
            <p className="text-sm text-muted-foreground">Small muted text</p>
            <a href="#" className="text-accent hover:text-accent-dark">Link with hover effect</a>
          </div>
        </div>
        
        {/* Component Tests */}
        <div className="card p-6">
          <h2 className="heading-medium text-secondary mb-4">Component Tests</h2>
          <div className="space-y-4">
            <button className="btn btn-primary w-full">Primary Button</button>
            <button className="btn btn-secondary w-full">Secondary Button</button>
            <button className="btn btn-outline w-full">Outline Button</button>
            <div className="flex space-x-2">
              <button className="btn-sm bg-primary text-white">Small</button>
              <button className="btn-md bg-primary text-white">Medium</button>
              <button className="btn-lg bg-primary text-white">Large</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animation Tests */}
      <h2 className="heading-medium text-secondary mb-4">Animation Tests</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card p-6 animate-fade-slide-in">
          <h3 className="text-xl mb-2">Fade Slide In</h3>
          <p>This card uses the fade-slide-in animation.</p>
        </div>
        <div className="card p-6 animate-fade-in delay-200">
          <h3 className="text-xl mb-2">Fade In (Delayed)</h3>
          <p>This card uses the fade-in animation with a delay.</p>
        </div>
        <div className="card p-6 animate-scale-in delay-400">
          <h3 className="text-xl mb-2">Scale In (Delayed)</h3>
          <p>This card uses the scale-in animation with a longer delay.</p>
        </div>
      </div>
      
      {/* Layout Tests */}
      <h2 className="heading-medium text-secondary my-6">Layout Tests</h2>
      <div className="container-tight bg-muted p-4 mb-4 rounded">
        <p>This is a tight container with max-width: 56rem</p>
      </div>
      <div className="container-wide bg-muted p-4 rounded">
        <p>This is a wide container with max-width: 80rem</p>
      </div>
      
      <div className="section-padding bg-muted mt-8 rounded">
        <h2 className="heading-small text-center">Section with Padding</h2>
        <p className="text-center">This section uses the section-padding class.</p>
      </div>
    </div>
  );
} 
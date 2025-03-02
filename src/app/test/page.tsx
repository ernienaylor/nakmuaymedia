export default function TestPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl text-primary mb-4">Test Heading</h1>
      <p className="text-secondary mb-4">This text should be in your secondary color.</p>
      <button className="bg-accent text-white px-4 py-2 rounded">Test Button</button>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-card p-6">
          <h2 className="text-2xl text-primary-dark mb-2">Primary Colors</h2>
          <div className="flex flex-col space-y-2">
            <div className="bg-primary p-4 text-white">Primary Default</div>
            <div className="bg-primary-dark p-4 text-white">Primary Dark</div>
            <div className="bg-primary-light p-4 text-white">Primary Light</div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-card p-6">
          <h2 className="text-2xl text-secondary mb-2">Secondary Colors</h2>
          <div className="flex flex-col space-y-2">
            <div className="bg-secondary p-4 text-white">Secondary Default</div>
            <div className="bg-secondary-dark p-4 text-white">Secondary Dark</div>
            <div className="bg-secondary-light p-4 text-white">Secondary Light</div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-card p-6">
          <h2 className="text-2xl text-accent mb-2">Accent Colors</h2>
          <div className="flex flex-col space-y-2">
            <div className="bg-accent p-4 text-white">Accent Default</div>
            <div className="bg-accent-dark p-4 text-white">Accent Dark</div>
            <div className="bg-accent-light p-4 text-white">Accent Light</div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-card p-6">
          <h2 className="text-2xl text-secondary mb-2">Typography</h2>
          <h3 className="text-xl mb-2">Oswald Heading Font</h3>
          <p className="font-sans mb-2">Roboto Body Font</p>
          <p className="text-sm text-muted-foreground">This should be in Roboto with a smaller size and muted color.</p>
        </div>
      </div>
    </div>
  );
} 
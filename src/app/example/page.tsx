export default function ExamplePage() {
  return (
    <div>
      <header>
        <div className="container">
          <div className="flex justify-between items-center">
            <h1 className="site-title">
              <a href="/">Nak Muay Media</a>
            </h1>
            <nav>
              <ul>
                <li><a href="/news">News</a></li>
                <li><a href="/events">Events</a></li>
                <li><a href="/fighters">Fighters</a></li>
                <li><a href="/videos">Videos</a></li>
                <li><a href="/about">About</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="container py-8">
        {/* Hero Section */}
        <section>
          <h1 className="text-4xl md:text-5xl mb-4">
            WELCOME TO NAK MUAY MEDIA
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Your source for Muay Thai news, fighter profiles, and event coverage from around the world.
          </p>
        </section>

        {/* Featured Fighter Section */}
        <section>
          <h2>FEATURED FIGHTER</h2>
          
          <div className="fighter-profile">
            <h3>RODTANG JITMUANGNON</h3>
            <p className="mb-2">Record: 270-42-10 (61 KOs)</p>
            <p className="mb-4">
              Known as 'The Iron Man', Rodtang is the current ONE Flyweight Muay Thai World Champion and is famous for his aggressive fighting style and iron chin.
            </p>
            <a href="/fighters/rodtang-jitmuangnon" className="btn">
              Fighter Profile
            </a>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section>
          <h2>UPCOMING EVENTS</h2>
          
          <div className="event-card">
            <h3>ONE CHAMPIONSHIP: ETERNAL GLORY</h3>
            <p className="text-gray-600 mb-6">March 15, 2025 | Impact Arena, Bangkok</p>
            
            <div className="space-y-4">
              <div className="bout">
                <div className="fighter">
                  <h4>Superlek</h4>
                  <p className="text-sm text-gray-600">128-29-2</p>
                </div>
                
                <div className="vs">VS</div>
                
                <div className="fighter">
                  <h4>Jonathan Haggerty</h4>
                  <p className="text-sm text-gray-600">26-4-0</p>
                </div>
              </div>
              
              <div className="bout">
                <div className="fighter">
                  <h4>Nong-O Gaiyanghadao</h4>
                  <p className="text-sm text-gray-600">262-54-10</p>
                </div>
                
                <div className="vs">VS</div>
                
                <div className="fighter">
                  <h4>Alaverdi Ramazanov</h4>
                  <p className="text-sm text-gray-600">61-5-0</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Nak Muay Media. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
} 
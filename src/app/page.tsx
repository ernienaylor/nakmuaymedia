"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Main content */}
      <main className="container">
        <section>
          <h1>WELCOME TO NAK MUAY MEDIA</h1>
          <p>Your source for Muay Thai news, fighter profiles, and event coverage from around the world.</p>
        </section>

        <section>
          <h2>FEATURED FIGHTER</h2>
          
          <div className="fighter-profile">
            <h3>RODTANG JITMUANGNON</h3>
            <p>Record: 270-42-10 (61 KOs)</p>
            <p>Known as 'The Iron Man', Rodtang is the current ONE Flyweight Muay Thai World Champion and is famous for his aggressive fighting style and iron chin.</p>
            <Link href="/fighters/rodtang-jitmuangnon" className="btn">
              Fighter Profile
            </Link>
          </div>
        </section>

        <section>
          <h2>UPCOMING EVENTS</h2>
          
          <div className="event-card">
            <h3>ONE CHAMPIONSHIP: ETERNAL GLORY</h3>
            <p>March 15, 2025 | Impact Arena, Bangkok</p>
            
            <div className="bouts">
              <div className="bout">
                <div className="fighter">
                  <h4>Superlek</h4>
                  <p>128-29-2</p>
                </div>
                
                <div className="vs">VS</div>
                
                <div className="fighter">
                  <h4>Jonathan Haggerty</h4>
                  <p>26-4-0</p>
                </div>
              </div>
              
              <div className="bout">
                <div className="fighter">
                  <h4>Nong-O Gaiyanghadao</h4>
                  <p>262-54-10</p>
                </div>
                
                <div className="vs">VS</div>
                
                <div className="fighter">
                  <h4>Alaverdi Ramazanov</h4>
                  <p>61-5-0</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 
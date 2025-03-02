"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  // Sample data for the page
  const sampleArticles = [
    {
      id: 1,
      title: "Rodtang Defeats Superlek in Epic Showdown",
      slug: "rodtang-defeats-superlek",
      excerpt: "In what many are calling the fight of the year, Rodtang edged out a split decision victory over Superlek at ONE Championship's latest event.",
      featuredImage: "/images/placeholder.jpg",
      date: "March 1, 2025",
      category: "Event Coverage"
    },
    {
      id: 2,
      title: "Top 5 Muay Thai Camps in Thailand",
      slug: "top-muay-thai-camps",
      excerpt: "Looking to train in Thailand? We explore the top Muay Thai camps that offer authentic training experiences for fighters of all levels.",
      featuredImage: "/images/placeholder.jpg",
      date: "February 25, 2025",
      category: "Training"
    },
    {
      id: 3,
      title: "The Evolution of Muay Thai Clinch Techniques",
      slug: "muay-thai-clinch-evolution",
      excerpt: "How clinch techniques have evolved over the decades and why they remain crucial to success in modern Muay Thai competition.",
      featuredImage: "/images/placeholder.jpg",
      date: "February 20, 2025",
      category: "Technique"
    }
  ];

  const sampleFighter = {
    name: "Rodtang Jitmuangnon",
    slug: "rodtang-jitmuangnon",
    image: "/images/placeholder.jpg",
    wins: 270,
    losses: 42,
    draws: 10,
    ko: 61,
    shortBio: "Known as 'The Iron Man', Rodtang is the current ONE Flyweight Muay Thai World Champion and is famous for his aggressive fighting style and iron chin."
  };

  const sampleEvent = {
    title: "ONE Championship: Eternal Glory",
    date: "March 15, 2025",
    venue: "Impact Arena, Bangkok",
    bouts: [
      {
        fighter1: {
          name: "Superlek",
          record: "128-29-2"
        },
        fighter2: {
          name: "Jonathan Haggerty",
          record: "26-4-0"
        }
      },
      {
        fighter1: {
          name: "Nong-O Gaiyanghadao",
          record: "262-54-10"
        },
        fighter2: {
          name: "Alaverdi Ramazanov",
          record: "61-5-0"
        }
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      {/* Hero Section */}
      <section className="bg-primary text-white rounded-lg mb-12 py-12 px-6 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
          Welcome to Nak Muay Media
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Your source for Muay Thai news, fighter profiles, and event coverage from around the world.
        </p>
      </section>

      {/* Featured Fighter Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-heading font-bold mb-4 pb-2 border-b-2 border-primary inline-block">
          Featured Fighter
        </h2>
        <div className="bg-gradient-to-r from-secondary to-secondary-light rounded-lg overflow-hidden text-white flex flex-col md:flex-row">
          <div className="relative w-full md:w-2/5 h-64 md:h-auto">
            <Image
              src={sampleFighter.image}
              alt={sampleFighter.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="p-6 md:w-3/5">
            <h2 className="text-2xl md:text-3xl font-heading font-bold uppercase text-accent mb-2">
              {sampleFighter.name}
            </h2>
            <p className="mb-3">
              Record: {sampleFighter.wins}-{sampleFighter.losses}-{sampleFighter.draws} ({sampleFighter.ko} KOs)
            </p>
            <p className="mb-4">
              {sampleFighter.shortBio}
            </p>
            <Link 
              href={`/fighters/${sampleFighter.slug}`} 
              className="inline-block bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded transition-colors duration-300"
            >
              Fighter Profile
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-heading font-bold mb-4 pb-2 border-b-2 border-primary inline-block">
          Upcoming Events
        </h2>
        <div className="bg-white rounded-lg shadow-card p-6">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-heading font-bold uppercase text-primary">
              {sampleEvent.title}
            </h3>
            <div className="text-gray-600">
              {sampleEvent.date} | {sampleEvent.venue}
            </div>
          </div>
          
          <div className="space-y-4">
            {sampleEvent.bouts.map((bout, index) => (
              <div 
                key={index} 
                className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0"
              >
                <div className="text-center w-2/5">
                  <h4 className="font-heading font-bold">
                    {bout.fighter1.name}
                  </h4>
                  <div className="text-sm text-gray-600">
                    {bout.fighter1.record}
                  </div>
                </div>
                
                <div className="font-bold text-primary text-lg">VS</div>
                
                <div className="text-center w-2/5">
                  <h4 className="font-heading font-bold">
                    {bout.fighter2.name}
                  </h4>
                  <div className="text-sm text-gray-600">
                    {bout.fighter2.record}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section>
        <h2 className="text-2xl font-heading font-bold mb-6 pb-2 border-b-2 border-primary inline-block">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleArticles.map((article) => (
            <div 
              key={article.id} 
              className="bg-white rounded-lg shadow-card hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={article.featuredImage}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-heading font-bold mb-2">
                  <Link href={`/articles/${article.slug}`} className="text-secondary hover:text-primary transition-colors duration-300">
                    {article.title}
                  </Link>
                </h3>
                
                <div className="text-sm text-gray-600 mb-3">
                  {article.date} | {article.category}
                </div>
                
                <p className="text-gray-700 mb-4">
                  {article.excerpt}
                </p>
                
                <Link 
                  href={`/articles/${article.slug}`} 
                  className="inline-block bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded transition-colors duration-300"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 
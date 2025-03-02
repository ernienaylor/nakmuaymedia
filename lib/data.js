// Sample data for the application
// In a real app, this would come from an API or CMS

export const featuredFighter = {
  name: "Buakaw Banchamek",
  record: "240-24-12",
  bio: "Buakaw Banchamek (formerly Por. Pramuk) is a Thai welterweight Muay Thai fighter, former Omnoi Stadium champion and K-1 World MAX champion.",
  image: "/images/fighters/buakaw.jpg"
};

export const topStories = [
  {
    id: 1,
    title: "ONE Championship Announces New Event Series",
    date: "October 15, 2023",
    excerpt: "ONE Championship has announced a new event series focused exclusively on Muay Thai, set to begin in January 2024.",
    image: "/images/news/one-championship.jpg"
  },
  {
    id: 2,
    title: "Rodtang Defends Flyweight Muay Thai Title",
    date: "September 29, 2023",
    excerpt: "Rodtang Jitmuangnon successfully defended his ONE Flyweight Muay Thai World Championship against challenger Superlek Kiatmoo9.",
    image: "/images/news/rodtang.jpg"
  },
  {
    id: 3,
    title: "Lumpinee Stadium Announces International Expansion",
    date: "September 22, 2023",
    excerpt: "Thailand's historic Lumpinee Boxing Stadium has announced plans to host international events in partnership with global promotions.",
    image: "/images/news/lumpinee.jpg"
  }
];

export const upcomingEvents = [
  {
    id: 1,
    title: "ONE Championship: Muay Thai Grand Prix",
    date: "November 18, 2023",
    location: "Impact Arena, Bangkok, Thailand",
    image: "/images/events/one-grand-prix.jpg"
  },
  {
    id: 2,
    title: "Lion Fight 75",
    date: "December 2, 2023",
    location: "Foxwoods Resort Casino, Connecticut, USA",
    image: "/images/events/lion-fight.jpg"
  }
];

export const featuredVideo = {
  title: "Muay Thai Technique Breakdown: The Art of Elbow Strikes",
  thumbnail: "/images/videos/elbow-strikes.jpg",
  url: "https://www.youtube.com/watch?v=example"
};

export const latestPodcast = {
  title: "The Muay Thai Mindset: Interview with Saenchai",
  thumbnail: "/images/podcast/saenchai.jpg",
  url: "/podcast/muay-thai-mindset"
};

export const allFighters = [
  {
    id: 1,
    name: "Buakaw Banchamek",
    record: "240-24-12",
    image: "/images/fighters/buakaw.jpg"
  },
  {
    id: 2,
    name: "Rodtang Jitmuangnon",
    record: "267-42-10",
    image: "/images/fighters/rodtang.jpg"
  },
  {
    id: 3,
    name: "Superlek Kiatmoo9",
    record: "128-29-4",
    image: "/images/fighters/superlek.jpg"
  }
];

export const allVideos = [
  featuredVideo,
  {
    id: 2,
    title: 'Teep (Push Kick) Defense Strategies',
    slug: 'teep-defense-strategies',
    thumbnail: '/images/placeholder.jpg',
    url: 'https://www.youtube.com/watch?v=example2',
    videoId: 'example2',
    platform: 'youtube',
    duration: '12:37',
    date: 'February 8, 2025',
    category: 'Technique Breakdown',
  },
  {
    id: 3,
    title: 'Inside Evolve MMA: Tour with Nong-O',
    slug: 'evolve-mma-tour',
    thumbnail: '/images/placeholder.jpg',
    url: 'https://www.youtube.com/watch?v=example3',
    videoId: 'example3',
    platform: 'youtube',
    duration: '18:05',
    date: 'February 1, 2025',
    category: 'Behind The Scenes',
  },
  {
    id: 4,
    title: 'ONE Championship Fight Week Vlog',
    slug: 'one-championship-fight-week',
    thumbnail: '/images/placeholder.jpg',
    url: 'https://www.youtube.com/watch?v=example4',
    videoId: 'example4',
    platform: 'youtube',
    duration: '22:14',
    date: 'January 25, 2025',
    category: 'Behind The Scenes',
  },
  {
    id: 5,
    title: 'Interview with Liam Harrison',
    slug: 'liam-harrison-interview',
    thumbnail: '/images/placeholder.jpg',
    url: 'https://www.youtube.com/watch?v=example5',
    videoId: 'example5',
    platform: 'youtube',
    duration: '28:43',
    date: 'January 18, 2025',
    category: 'Fighter Interview',
  },
  {
    id: 6,
    title: 'Top 5 Muay Thai Combinations for Beginners',
    slug: 'muay-thai-combinations-beginners',
    thumbnail: '/images/placeholder.jpg',
    url: 'https://www.youtube.com/watch?v=example6',
    videoId: 'example6',
    platform: 'youtube',
    duration: '14:22',
    date: 'January 10, 2025',
    category: 'Technique Breakdown',
  },
];

export const allPodcasts = [
  latestPodcast,
  {
    id: 2,
    title: 'The Future of Muay Thai in the West',
    slug: 'future-of-muay-thai-west',
    image: '/images/placeholder.jpg',
    playUrl: '#',
    shareUrl: '#',
    downloadUrl: '#',
    embedUrl: 'https://open.spotify.com/embed/episode/example2',
    platform: 'spotify',
    episode: 41,
    duration: '52 minutes',
    date: 'Feb 3, 2025',
    description: 'A discussion on the growing popularity of Muay Thai in Western countries and what it means for the sport.',
    hosts: ['John Smith', 'Jane Doe'],
    guests: ['Liam Harrison', 'Kevin Ross'],
  },
  {
    id: 3,
    title: 'Training Muay Thai in Thailand vs. The West',
    slug: 'training-thailand-vs-west',
    image: '/images/placeholder.jpg',
    playUrl: '#',
    shareUrl: '#',
    downloadUrl: '#',
    embedUrl: 'https://open.spotify.com/embed/episode/example3',
    platform: 'spotify',
    episode: 40,
    duration: '48 minutes',
    date: 'Jan 27, 2025',
    description: 'Exploring the differences between training Muay Thai in Thailand versus Western countries.',
    hosts: ['John Smith', 'Jane Doe'],
    guests: ['John Wayne Parr'],
  },
];

export const shopProducts = [
  {
    id: 1,
    name: 'Nak Muay Media T-Shirt',
    slug: 'nak-muay-media-tshirt',
    image: '/images/placeholder.jpg',
    price: 29.99,
    category: 'Apparel',
    description: 'Show your love for Muay Thai with our premium Nak Muay Media t-shirt.',
    variants: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red'],
    inStock: true,
  },
  {
    id: 2,
    name: 'Muay Thai Technique Poster',
    slug: 'muay-thai-technique-poster',
    image: '/images/placeholder.jpg',
    price: 19.99,
    category: 'Posters',
    description: 'A beautiful poster showcasing the 8 weapons of Muay Thai with detailed illustrations.',
    variants: ['18"x24"', '24"x36"'],
    colors: [],
    inStock: true,
  },
]; 
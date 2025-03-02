// Sample data for development

export const featuredFighters = [
  {
    id: 'rodtang-jitmuangnon',
    name: 'Rodtang Jitmuangnon',
    nickname: 'The Iron Man',
    record: '270-42-10 (61 KOs)',
    image: '/images/fighters/rodtang.jpg',
    gym: 'Jitmuangnon',
    weight: '125 lbs (56.7 kg)',
    height: '5\'5" (165 cm)',
    age: 26,
    description: 'Known as "The Iron Man", Rodtang is the current ONE Flyweight Muay Thai World Champion and is famous for his aggressive fighting style and iron chin.'
  },
  {
    id: 'superlek-kiatmoo9',
    name: 'Superlek Kiatmoo9',
    nickname: 'The Kicking Machine',
    record: '128-29-2',
    image: '/images/fighters/superlek.jpg',
    gym: 'Kiatmoo9',
    weight: '135 lbs (61.2 kg)',
    height: '5\'7" (170 cm)',
    age: 28,
    description: 'Superlek "The Kicking Machine" Kiatmoo9 is a multiple-time Lumpinee Stadium champion known for his technical precision and devastating kicks.'
  }
];

export const upcomingEvents = [
  {
    id: 'one-eternal-glory',
    title: 'ONE Championship: Eternal Glory',
    date: 'March 15, 2025',
    location: 'Impact Arena, Bangkok',
    promotion: 'ONE Championship',
    image: '/images/events/one-eternal-glory.jpg',
    bouts: [
      {
        fighter1: {
          name: 'Superlek',
          record: '128-29-2'
        },
        fighter2: {
          name: 'Jonathan Haggerty',
          record: '26-4-0'
        },
        weightClass: 'Flyweight',
        isTitle: true
      },
      {
        fighter1: {
          name: 'Nong-O Gaiyanghadao',
          record: '262-54-10'
        },
        fighter2: {
          name: 'Alaverdi Ramazanov',
          record: '61-5-0'
        },
        weightClass: 'Bantamweight',
        isTitle: false
      }
    ]
  },
  {
    id: 'lumpinee-stadium-friday-fights',
    title: 'Lumpinee Stadium Friday Fights',
    date: 'April 5, 2025',
    location: 'Lumpinee Stadium, Bangkok',
    promotion: 'Lumpinee Stadium',
    image: '/images/events/lumpinee.jpg',
    bouts: [
      {
        fighter1: {
          name: 'Petchmorakot',
          record: '164-34-2'
        },
        fighter2: {
          name: 'Yodlekpet',
          record: '98-27-0'
        },
        weightClass: 'Featherweight',
        isTitle: true
      }
    ]
  }
];

export const latestNews = [
  {
    id: 'rodtang-signs-new-contract',
    title: 'Rodtang Signs New Multi-Year Contract with ONE Championship',
    excerpt: 'ONE Flyweight Muay Thai World Champion Rodtang Jitmuangnon has signed a new multi-year contract with ONE Championship.',
    date: 'February 28, 2025',
    image: '/images/articles/rodtang-contract.jpg',
    category: 'fighters'
  },
  {
    id: 'one-championship-announces-us-event',
    title: 'ONE Championship Announces Return to United States in 2025',
    excerpt: 'ONE Championship has announced its return to the United States with an event scheduled for July 2025 in Denver, Colorado.',
    date: 'February 25, 2025',
    image: '/images/articles/one-us-event.jpg',
    category: 'events'
  },
  {
    id: 'technique-breakdown-teep',
    title: 'Technique Breakdown: Mastering the Teep',
    excerpt: 'Learn how to properly execute the teep (push kick), one of the most fundamental weapons in Muay Thai.',
    date: 'February 20, 2025',
    image: '/images/articles/teep-technique.jpg',
    category: 'technique'
  }
];

export const featuredVideos = [
  {
    id: 'rodtang-vs-haggerty-2',
    title: 'Rodtang vs. Jonathan Haggerty 2 - Full Fight',
    duration: '15:42',
    date: 'October 13, 2023',
    thumbnail: '/images/videos/rodtang-haggerty.jpg',
    category: 'highlights'
  },
  {
    id: 'muay-thai-training-camp',
    title: 'A Day in a Thai Training Camp',
    duration: '22:15',
    date: 'January 5, 2024',
    thumbnail: '/images/videos/training-camp.jpg',
    category: 'documentaries'
  }
];

export const podcastEpisodes = [
  {
    id: 'ep-45',
    title: 'EP 45: Interview with Buakaw Banchamek',
    duration: '58:23',
    date: 'February 15, 2025',
    description: 'In this episode, we talk with Muay Thai legend Buakaw Banchamek about his career and future plans.'
  },
  {
    id: 'ep-44',
    title: 'EP 44: ONE Championship\'s Global Expansion',
    duration: '45:17',
    date: 'February 1, 2025',
    description: 'We discuss ONE Championship\'s expansion plans and what it means for Muay Thai\'s global popularity.'
  }
];

export const products = [
  {
    id: 'nak-muay-gloves',
    name: 'Nak Muay Premium Boxing Gloves',
    price: 99.99,
    image: '/images/shop/boxing-gloves.jpg',
    description: 'Premium quality boxing gloves designed specifically for Muay Thai training and competition.',
    options: {
      colors: ['Black/Red', 'White/Gold', 'Blue/Silver'],
      weights: ['10oz', '12oz', '14oz', '16oz']
    }
  },
  {
    id: 'nak-muay-shorts',
    name: 'Traditional Muay Thai Shorts',
    price: 39.99,
    image: '/images/shop/muay-thai-shorts.jpg',
    description: 'Authentic Muay Thai shorts made in Thailand with traditional designs.',
    options: {
      colors: ['Red/Gold', 'Blue/Silver', 'Black/Gold'],
      sizes: ['S', 'M', 'L', 'XL']
    }
  }
]; 
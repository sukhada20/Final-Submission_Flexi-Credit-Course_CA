import type { Property, RoommateListing } from './types';

export const properties: Property[] = [
  {
    id: 'p1',
    title: 'Modern Downtown Loft',
    location: 'New York, NY',
    type: 'Short-Term',
    price: 3500,
    bedrooms: 1,
    bathrooms: 1,
    area: 800,
    description: 'A beautifully furnished loft in the heart of downtown. Perfect for a short city getaway.',
    amenities: ['Wi-Fi', 'AC', 'Furnished', 'Kitchen'],
    owner: { name: 'Jane Doe', contact: 'jane.d@email.com' },
    imageId: 'modern-loft'
  },
  {
    id: 'p2',
    title: 'Cozy Suburban House',
    location: 'Austin, TX',
    type: 'Long-Term',
    price: 2800,
    bedrooms: 3,
    bathrooms: 2,
    area: 1500,
    description: 'Spacious suburban home with a large backyard. Ideal for families looking for a long-term stay.',
    amenities: ['Wi-Fi', 'AC', 'Furnished', 'Parking', 'Washer/Dryer'],
    owner: { name: 'John Smith', contact: 'john.s@email.com' },
    imageId: 'suburban-house'
  },
  {
    id: 'p3',
    title: 'Sunny Beachfront Condo',
    location: 'Miami, FL',
    type: 'Short-Term',
    price: 4500,
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    description: 'Stunning condo with direct beach access and ocean views. Enjoy the sun and sea!',
    amenities: ['Wi-Fi', 'AC', 'Furnished', 'Pool', 'Beach Access'],
    owner: { name: 'Emily White', contact: 'emily.w@email.com' },
    imageId: 'beachfront-condo'
  },
  {
    id: 'p4',
    title: 'Rustic Mountain Cabin',
    location: 'Denver, CO',
    type: 'Short-Term',
    price: 2200,
    bedrooms: 2,
    bathrooms: 1,
    area: 1000,
    description: 'Escape to the mountains in this cozy cabin. Perfect for hiking and nature lovers.',
    amenities: ['Wi-Fi', 'Heating', 'Furnished', 'Fireplace'],
    owner: { name: 'Michael Brown', contact: 'michael.b@email.com' },
    imageId: 'mountain-cabin'
  },
  {
    id: 'p5',
    title: 'Urban Studio Apartment',
    location: 'Chicago, IL',
    type: 'Long-Term',
    price: 1800,
    bedrooms: 0,
    bathrooms: 1,
    area: 500,
    description: 'A compact and modern studio in a vibrant urban neighborhood. Great for a single professional.',
    amenities: ['Wi-Fi', 'AC', 'Furnished', 'Gym'],
    owner: { name: 'Sarah Green', contact: 'sarah.g@email.com' },
    imageId: 'studio-apartment'
  },
  {
    id: 'p6',
    title: 'Luxury Penthouse Suite',
    location: 'Los Angeles, CA',
    type: 'Long-Term',
    price: 8000,
    bedrooms: 3,
    bathrooms: 4,
    area: 2500,
    description: 'Experience luxury living with panoramic city views from this exclusive penthouse.',
    amenities: ['Wi-Fi', 'AC', 'Furnished', 'Pool', 'Gym', 'Concierge'],
    owner: { name: 'David Black', contact: 'david.b@email.com' },
    imageId: 'luxury-penthouse'
  }
];

export const roommates: RoommateListing[] = [
  {
    id: 'r1',
    title: 'Room in a 2-bed apartment',
    location: 'Brooklyn, NY',
    type: 'Roommate',
    price: 1200,
    bedrooms: 1,
    bathrooms: 1,
    area: 200,
    description: 'Looking for a clean and respectful roommate to share a spacious apartment in a great neighborhood.',
    amenities: ['Wi-Fi', 'AC', 'Furnished Room', 'Kitchen'],
    owner: { name: 'Chris Johnson', contact: 'chris.j@email.com' },
    imageId: 'roommate-apt-1'
  },
  {
    id: 'r2',
    title: 'Shared house near campus',
    location: 'San Francisco, CA',
    type: 'Roommate',
    price: 950,
    bedrooms: 1,
    bathrooms: 2,
    area: 180,
    description: 'Student-friendly house with a vacant room. Close to public transport and university campus.',
    amenities: ['Wi-Fi', 'Washer/Dryer', 'Kitchen'],
    owner: { name: 'Patricia Miller', contact: 'patricia.m@email.com' },
    imageId: 'roommate-apt-2'
  }
];

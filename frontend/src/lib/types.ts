export interface Property {
  id: string;
  title: string;
  location: string;
  type: 'Short-Term' | 'Long-Term';
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  description: string;
  amenities: string[];
  owner: {
    name: string;
    contact: string;
  };
  imageId: string;
}

export interface RoommateListing {
  id: string;
  title: string;
  location: string;
  type: 'Roommate';
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  description: string;
  amenities: string[];
  owner: {
    name: string;
    contact: string;
  };
  imageId: string;
}

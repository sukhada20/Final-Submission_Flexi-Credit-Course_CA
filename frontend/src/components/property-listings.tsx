'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PropertyCard from './property-card';
import type { Property, RoommateListing } from '@/lib/types';

interface PropertyListingsProps {
  properties: Property[];
  roommates: RoommateListing[];
}

export default function PropertyListings({ properties, roommates }: PropertyListingsProps) {
  const allListings = [...properties, ...roommates];
  
  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList className="grid w-full grid-cols-2 sm:w-auto sm:grid-cols-4 mx-auto mb-8">
        <TabsTrigger value="all">All Properties</TabsTrigger>
        <TabsTrigger value="short-term">Short-Term</TabsTrigger>
        <TabsTrigger value="long-term">Long-Term</TabsTrigger>
        <TabsTrigger value="roommate">Roommate</TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allListings.map((item) => (
            <PropertyCard key={item.id} listing={item} />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="short-term">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.filter(p => p.type === 'Short-Term').map((item) => (
            <PropertyCard key={item.id} listing={item} />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="long-term">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.filter(p => p.type === 'Long-Term').map((item) => (
            <PropertyCard key={item.id} listing={item} />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="roommate">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roommates.map((item) => (
            <PropertyCard key={item.id} listing={item} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}

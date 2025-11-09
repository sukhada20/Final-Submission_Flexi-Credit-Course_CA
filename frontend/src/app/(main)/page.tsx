import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import PropertyListings from '@/components/property-listings';
import { properties, roommates } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function HomePage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-living-room');

  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] w-full text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight text-primary fade-in">
            Discover Your Next Home
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-neutral-200 fade-in-delay">
            The best rental properties and roommates, all in one place. Your future home is just a click away.
          </p>
          <div className="mt-8 w-full max-w-2xl bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow-2xl fade-in-delay">
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="search"
                placeholder="Enter location, property type, or keywords..."
                className="bg-background/80 text-foreground border-0 focus-visible:ring-primary h-12"
              />
              <Button size="lg" className="h-12">
                <Search className="mr-2 h-5 w-5" />
                Start Exploring
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <section id="listings" className="container mx-auto px-4 py-12 md:py-16">
        <PropertyListings properties={properties} roommates={roommates} />
      </section>
    </div>
  );
}

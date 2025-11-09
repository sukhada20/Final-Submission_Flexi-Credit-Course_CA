import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Property, RoommateListing } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BedDouble, Bath, Ruler, Wifi, Wind, Sofa } from 'lucide-react';

interface PropertyCardProps {
  listing: Property | RoommateListing;
}

const amenityIcons: { [key: string]: React.ReactNode } = {
  'Wi-Fi': <Wifi className="h-4 w-4" />,
  'AC': <Wind className="h-4 w-4" />,
  'Furnished': <Sofa className="h-4 w-4" />,
};

export default function PropertyCard({ listing }: PropertyCardProps) {
  const image = PlaceHolderImages.find(p => p.id === listing.imageId);

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative h-56 w-full">
          {image ? (
            <Image
              src={image.imageUrl}
              alt={listing.title}
              data-ai-hint={image.imageHint}
              fill
              className="object-cover"
            />
          ) : (
            <div className="h-full w-full bg-secondary"></div>
          )}
          <Badge variant={listing.type === 'Roommate' ? 'secondary' : 'default'} className="absolute top-4 right-4">{listing.type}</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="font-headline text-xl mb-2 truncate">{listing.title}</CardTitle>
        <p className="text-muted-foreground text-sm mb-4">{listing.location}</p>
        
        <div className="flex justify-between items-center text-primary font-bold text-2xl mb-4">
          <span>${listing.price}</span>
          <span className="text-sm text-muted-foreground font-normal">/ month</span>
        </div>

        <div className="flex justify-around text-muted-foreground border-t border-b py-3 text-sm">
          <div className="flex items-center gap-2">
            <BedDouble className="h-4 w-4" />
            <span>{listing.bedrooms} Bed{listing.bedrooms !== 1 ? 's' : ''}</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath className="h-4 w-4" />
            <span>{listing.bathrooms} Bath{listing.bathrooms !== 1 ? 's' : ''}</span>
          </div>
          <div className="flex items-center gap-2">
            <Ruler className="h-4 w-4" />
            <span>{listing.area} sqft</span>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2">
          {listing.amenities.slice(0, 3).map((amenity) => (
            <Badge key={amenity} variant="outline" className="flex items-center gap-1">
              {amenityIcons[amenity]}
              {amenity}
            </Badge>
          ))}
          {listing.amenities.length > 3 && (
            <Badge variant="outline">+{listing.amenities.length - 3} more</Badge>
          )}
        </div>
        
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full">
          <Link href={`/property/${listing.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

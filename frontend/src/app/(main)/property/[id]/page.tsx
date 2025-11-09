import { notFound } from 'next/navigation';
import Image from 'next/image';
import { properties, roommates } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, BedDouble, Bath, Ruler, Wifi, Wind, Sofa, ParkingCircle, WashingMachine, Snowflake, ConciergeBell } from 'lucide-react';

const amenityIcons: { [key: string]: React.ReactNode } = {
  'Wi-Fi': <Wifi className="h-5 w-5 text-primary" />,
  'AC': <Wind className="h-5 w-5 text-primary" />,
  'Furnished': <Sofa className="h-5 w-5 text-primary" />,
  'Kitchen': <Sofa className="h-5 w-5 text-primary" />, // Using Sofa as a placeholder
  'Parking': <ParkingCircle className="h-5 w-5 text-primary" />,
  'Washer/Dryer': <WashingMachine className="h-5 w-5 text-primary" />,
  'Pool': <WashingMachine className="h-5 w-5 text-primary" />, // Using Washer as a placeholder
  'Beach Access': <WashingMachine className="h-5 w-5 text-primary" />, // Using Washer as a placeholder
  'Heating': <Snowflake className="h-5 w-5 text-primary" />,
  'Fireplace': <Snowflake className="h-5 w-5 text-primary" />, // Using Snowflake as a placeholder
  'Gym': <WashingMachine className="h-5 w-5 text-primary" />, // Using Washer as a placeholder
  'Concierge': <ConciergeBell className="h-5 w-5 text-primary" />,
  'Furnished Room': <Sofa className="h-5 w-5 text-primary" />,
};


export default function PropertyDetailsPage({ params }: { params: { id: string } }) {
  const allListings = [...properties, ...roommates];
  const listing = allListings.find((p) => p.id === params.id);

  if (!listing) {
    notFound();
  }

  const image = PlaceHolderImages.find((p) => p.id === listing.imageId);
  const otherImages = PlaceHolderImages.filter(p => p.id.startsWith('suburban') || p.id.startsWith('modern')).slice(0, 2);

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">{listing.title}</h1>
        <p className="text-lg text-muted-foreground mt-2">{listing.location}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="relative h-[60vh] w-full rounded-lg overflow-hidden shadow-lg mb-4">
            {image && (
              <Image
                src={image.imageUrl}
                alt={listing.title}
                data-ai-hint={image.imageHint}
                fill
                className="object-cover"
              />
            )}
          </div>
          <div className="grid grid-cols-2 gap-4 h-48">
            {otherImages.map(img => (
                <div key={img.id} className="relative rounded-lg overflow-hidden">
                    <Image src={img.imageUrl} alt={img.description} fill className="object-cover" />
                </div>
            ))}
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{listing.description}</p>
            </CardContent>
          </Card>
          
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Amenities</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {listing.amenities.map((amenity) => (
                <div key={amenity} className="flex items-center gap-3">
                  {amenityIcons[amenity] || <Wifi className="h-5 w-5 text-primary" />}
                  <span className="font-medium">{amenity}</span>
                </div>
              ))}
            </CardContent>
          </Card>

        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-24 shadow-xl">
            <CardHeader>
              <div className="flex justify-between items-baseline">
                <span className="text-3xl font-bold text-primary">${listing.price}</span>
                <span className="text-muted-foreground">/ month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-around text-muted-foreground border-t border-b py-4">
                <div className="text-center">
                  <BedDouble className="h-6 w-6 mx-auto mb-1 text-primary" />
                  <p className="font-semibold">{listing.bedrooms}</p>
                  <p className="text-xs">Bedrooms</p>
                </div>
                <div className="text-center">
                  <Bath className="h-6 w-6 mx-auto mb-1 text-primary" />
                  <p className="font-semibold">{listing.bathrooms}</p>
                  <p className="text-xs">Bathrooms</p>
                </div>
                <div className="text-center">
                  <Ruler className="h-6 w-6 mx-auto mb-1 text-primary" />
                  <p className="font-semibold">{listing.area}</p>
                  <p className="text-xs">sq.ft.</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Owner Information</h4>
                <p className="text-muted-foreground">{listing.owner.name}</p>
                <p className="text-sm text-muted-foreground">{listing.owner.contact}</p>
              </div>
              <Button size="lg" className="w-full">
                <Mail className="mr-2 h-4 w-4" /> Message Owner
              </Button>
              <Button size="lg" variant="outline" className="w-full">
                <Phone className="mr-2 h-4 w-4" /> Contact Owner
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters.'),
  price: z.coerce.number().min(1, 'Price must be greater than 0.'),
  description: z.string().min(20, 'Description must be at least 20 characters.'),
  // More fields could be added, like preferences for roommates, etc.
});

export default function FindRoommatePage() {
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      price: 500,
      description: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Simulate API call to save data
    console.log('New Roommate Listing:', values);
    toast({
      title: "Roommate Listing Created!",
      description: "Your listing for a roommate is now live.",
    });
    router.push('/');
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold font-headline mb-2">Find a Roommate</h1>
        <p className="text-muted-foreground mb-8">Describe the space you're offering and what you're looking for in a roommate.</p>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Listing Title</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Sunny room in a 2-bed apartment" {...field} />
                  </FormControl>
                  <FormDescription>Give a clear and appealing title.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rent (per month)</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell potential roommates about the space, the apartment, and yourself..."
                      className="resize-none"
                      rows={7}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Include details about shared spaces, rules, and your lifestyle.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" size="lg">Create Listing</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

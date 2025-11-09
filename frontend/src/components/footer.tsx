import Link from 'next/link';
import Logo from './logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-card text-card-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Discover Your Next Home.
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold tracking-wide text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold tracking-wide text-foreground">For Renters</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/#listings" className="text-muted-foreground hover:text-primary">Browse Properties</Link></li>
              <li><Link href="/find-roommate" className="text-muted-foreground hover:text-primary">Find a Roommate</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold tracking-wide text-foreground">For Landlords</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/list-property" className="text-muted-foreground hover:text-primary">List a Property</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Dashboard</Link></li>
            </ul>
          </div>
        </div>
        <hr className="my-8 border-border" />
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} STAYLY. All Rights Reserved.
          </p>
          <div className="mt-4 flex space-x-6 sm:mt-0">
            {/* Social icons can go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}

'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Produce Catalog', href: '/catalog' },
  { label: 'International Trade', href: '#' },
  { label: 'Global Presence', href: '#' },
  { label: 'Contact', href: '/contact' },
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-emerald-950/90 backdrop-blur-md">
      <div className="flex justify-between items-center h-20 px-8 w-full max-w-screen-2xl mx-auto">
        <Link href="/" className="flex items-center">
          <Image
            src="/farmnegy-all-black.PNG"
            alt="Farmnegy International"
            width={160}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-tight">
          {navLinks.map(({ label, href }) => {
            const isActive =
              href === '/'
                ? pathname === '/'
                : pathname.startsWith(href) && href !== '#';
            return (
              <Link
                key={label}
                href={href}
                className={
                  isActive
                    ? 'text-emerald-900 dark:text-emerald-50 border-b-2 border-lime-400 pb-1'
                    : 'text-emerald-800/70 dark:text-emerald-200/70 hover:text-emerald-900 dark:hover:text-emerald-50 transition-colors'
                }
              >
                {label}
              </Link>
            );
          })}
        </div>

        <Link
          href="/contact"
          className="bg-primary hover:bg-primary-container text-on-primary px-6 py-2.5 text-sm font-bold tracking-wide transition-all active:opacity-80 active:scale-[0.99] duration-200"
        >
          Trade Now
        </Link>
      </div>
    </nav>
  );
}

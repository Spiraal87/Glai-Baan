'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Menu', href: '#dishes' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-bg-dark/95 backdrop-blur-md border-b border-gold/20 py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 hover:scale-110 transition-transform">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white border-2 border-gold overflow-hidden flex-shrink-0">
              <Image
                src="/images/glai-baan-logo.png"
                alt="Glai Baan"
                width={56}
                height={56}
                className="object-contain w-12 h-12"
              />
            </div>
            <span className="hidden sm:block font-display text-lg text-cream hover:text-gold transition-colors">
              Glai Baan
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-cream/80 hover:text-gold transition-colors duration-200 font-medium text-sm uppercase tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+16025551234"
            className="ml-4 bg-gold hover:bg-accent-rust text-dark font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg"
          >
            Call
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-bg-warm rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-gold" />
          ) : (
            <Menu className="w-6 h-6 text-cream" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden absolute top-full right-6 bg-bg-warm border border-gold/20 rounded-lg shadow-xl z-40 min-w-max">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-cream/80 hover:text-gold transition-colors font-medium text-sm uppercase"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+16025551234"
              className="mt-4 bg-gold hover:bg-accent-rust text-dark font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 text-center"
            >
              Call Us
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

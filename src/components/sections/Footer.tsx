'use client';

import { motion } from 'framer-motion';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#dishes' },
  { label: 'Gallery', href: '#testimonials' },
  { label: 'Visit Us', href: '#visit' },
];

export default function Footer() {
  return (
    <footer
      className="border-t py-12 px-6 md:px-12 lg:px-20 transition-colors duration-300"
      style={{ backgroundColor: "#1a1a1a", borderColor: "rgba(218, 165, 32, 0.2)" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left - Restaurant Name & Copyright */}
        <motion.div
          className="text-center md:text-left"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="font-display text-gold text-xl hover:text-gold-light transition-colors">
            Glai Baan
          </h3>
          <p className="text-cream/40 text-xs mt-2">
            © {new Date().getFullYear()} Glai Baan. All rights reserved.
          </p>
        </motion.div>

        {/* Center - Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6">
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="text-cream/60 hover:text-gold transition-colors duration-200 text-sm font-body"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        {/* Right - Social & Reviews */}
        <div className="flex gap-3">
          {/* Google */}
          <motion.a
            href="https://www.google.com/search?sca_esv=f0f46d557053f7c4&sxsrf=ANbL-n7kJXXdfiGFBI_PVLPKPoOtc1pGIw:1776114115494&q=glai+baan&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOYBv9b20_ipBC_CKFqmcTkSLGI9HlvAaKlIpnDzisQW-v-bPhUH-fGp9cU0_H1ngtVUj0ofasUuaMzRUTO3NWtUUkAS8&sa=X&ved=2ahUKEwiPyrzX3OuTAxU4PkQIHepmIEoQrrQLegQIHBAB&biw=1553&bih=1195&dpr=1.1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/60 hover:text-gold transition-colors p-2 rounded-lg hover:bg-gold/10"
            title="Find us on Google"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm3.5-10c.828 0 1.5-.672 1.5-1.5S16.328 9 15.5 9 14 9.672 14 10.5s.672 1.5 1.5 1.5zm-7 0c.828 0 1.5-.672 1.5-1.5S9.328 9 8.5 9 7 9.672 7 10.5 7.672 12 8.5 12zm3.5 6.5c2.33 0 4.31-1.46 5.16-3.5H6.84c.85 2.04 2.83 3.5 5.16 3.5z" />
            </svg>
          </motion.a>

          {/* Yelp */}
          <motion.a
            href="https://www.yelp.com/biz/glai-baan-phoenix?osq=Glai+Baan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/60 hover:text-gold transition-colors p-2 rounded-lg hover:bg-gold/10"
            title="Read reviews on Yelp"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M10.73 1.02c-.27-.09-.56-.09-.83 0L6.14 3.45c-.31.16-.49.47-.49.81v5.68c0 .68.55 1.23 1.23 1.23h3.39c.68 0 1.23-.55 1.23-1.23V4.26c0-.34-.18-.65-.49-.81L10.73 1.02zm6.88 4.07c-.27-.08-.56-.08-.83 0l-3.76 2.42c-.31.16-.49.47-.49.81v5.68c0 .68.55 1.23 1.23 1.23h3.39c.68 0 1.23-.55 1.23-1.23V5.9c0-.34-.18-.65-.49-.81l-3.28-1.8zm-10.15 11.2c-.27-.09-.56-.09-.83 0L2.87 18.71c-.31.16-.49.47-.49.81v5.68c0 .68.55 1.23 1.23 1.23h3.39c.68 0 1.23-.55 1.23-1.23V19.52c0-.34-.18-.65-.49-.81l-3.28-2.42z" />
            </svg>
          </motion.a>

          {/* Instagram */}
          <motion.a
            href="https://instagram.com/glaibaan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/60 hover:text-gold transition-colors p-2 rounded-lg hover:bg-gold/10"
            title="Follow us on Instagram"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
            </svg>
          </motion.a>
        </div>
      </div>
    </footer>
  );
}

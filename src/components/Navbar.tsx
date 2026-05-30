"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Mail, Phone, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" className={props.className} width="16" height="16" style={props.style}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.388 2.016 13.91 1.02 11.278 1.02c-5.434 0-9.858 4.372-9.863 9.8-.001 1.83.487 3.62 1.4 5.2l-.184.993-.385 1.4-1.2 4.382 4.502-1.168.9-.481zm12.352-7.51c-.33-.165-1.951-.951-2.253-1.061-.3-.11-.52-.165-.74.165-.22.33-.85 1.061-1.04 1.282-.19.22-.38.247-.712.082-.33-.165-1.396-.508-2.66-1.625-1.002-.894-1.68-2.001-1.878-2.33-.198-.329-.022-.507.142-.671.148-.148.33-.384.495-.577.165-.192.22-.33.33-.55.11-.22.055-.412-.028-.577-.082-.165-.74-1.76-.988-2.361-.242-.582-.489-.5-.67-.508-.172-.008-.371-.01-.57-.01-.2 0-.527.074-.803.374-.275.3-.1.577-1.1.577-.6.3-1.745 1.705-1.745 4.157 0 2.453 1.815 4.825 2.063 5.155.247.33 3.574 5.395 8.66 7.578 1.21.52 2.155.83 2.89 1.064 1.21.38 2.31.325 3.18.196 1.085-.16 1.951-.951 2.253-1.061.302-.11.52-.165.74-.165.22 0 .527.074.803.374z" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger scroll handler immediately on load
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Facilities", path: "/facilities" },
    { name: "Gallery", path: "/gallery" },
    { name: "Admission", path: "/admission" },
  ];

  const pageDropdownItems = [
    { name: "Student Life", path: "/student-life" },
    { name: "Events", path: "/events" },
  ];

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
    setPagesDropdownOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top utility contacts bar */}
      <div className="bg-navy-dark text-slate-300 py-2.5 px-4 sm:px-6 lg:px-8 border-b border-white/5 text-xs font-medium relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Contact info list */}
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 sm:gap-6">
            <a
              href="mailto:principal.srsmemorial@gmail.com"
              className="flex items-center gap-1.5 hover:text-gold-primary transition-colors duration-200"
            >
              <Mail className="w-3.5 h-3.5 text-gold-primary" />
              <span>principal.srsmemorial@gmail.com</span>
            </a>
            <a
              href="tel:+919876543210"
              className="flex items-center gap-1.5 hover:text-gold-primary transition-colors duration-200"
            >
              <Phone className="w-3.5 h-3.5 text-gold-primary" />
              <span>+91 98765 43210</span>
            </a>
          </div>

          {/* Social media handles */}
          <div className="flex items-center gap-4">
            <span className="text-slate-400 hidden md:inline">Follow Us:</span>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gold-primary transition-colors duration-200 p-0.5"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gold-primary transition-colors duration-200 p-0.5"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gold-primary transition-colors duration-200 p-0.5"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main sticky navigation navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isHome
            ? scrolled
              ? "bg-navy-primary/95 backdrop-blur-md shadow-lg border-b border-white/5 py-3"
              : "bg-transparent py-5 -mb-[92px]"
            : "bg-navy-primary shadow-lg border-b border-white/5 py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Elegant Emblem School Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-11 h-11 flex items-center justify-center bg-gradient-to-br from-gold-primary to-yellow-500 rounded-xl shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-105">
                {/* SVG Shield / Book emblem overlay */}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-7 h-7 text-navy-dark"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M12 8v8" />
                  <path d="M8 12h8" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg md:text-xl tracking-tight leading-none group-hover:text-gold-primary transition-colors duration-200">
                  S.R.S. MEMORIAL
                </span>
                <span className="text-gold-primary font-medium text-[10px] sm:text-xs tracking-wider uppercase leading-none mt-1">
                  Kids Garden School
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`relative text-sm font-medium tracking-wide transition-colors duration-200 py-1.5 nav-link-underline ${
                      isActive
                        ? "text-gold-primary nav-link-active"
                        : "text-white/90 hover:text-gold-primary"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              {/* Pages interactive dropdown */}
              <div className="relative">
                <button
                  onClick={() => setPagesDropdownOpen(!pagesDropdownOpen)}
                  onMouseEnter={() => setPagesDropdownOpen(true)}
                  className={`flex items-center gap-1.5 text-sm font-medium tracking-wide transition-colors duration-200 py-1.5 ${
                    pageDropdownItems.some((sub) => pathname === sub.path)
                      ? "text-gold-primary"
                      : "text-white/90 hover:text-gold-primary"
                  }`}
                >
                  <span>Pages</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${pagesDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {pagesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.15 }}
                      onMouseLeave={() => setPagesDropdownOpen(false)}
                      className="absolute left-0 mt-2.5 w-48 bg-navy-dark border border-white/10 rounded-xl shadow-xl py-2 overflow-hidden z-50"
                    >
                      {pageDropdownItems.map((sub) => {
                        const isSubActive = pathname === sub.path;
                        return (
                          <Link
                            key={sub.name}
                            href={sub.path}
                            className={`block px-5 py-2.5 text-sm font-medium transition-colors duration-150 ${
                              isSubActive
                                ? "bg-gold-primary text-navy-dark"
                                : "text-white/80 hover:bg-white/5 hover:text-gold-primary"
                            }`}
                          >
                            {sub.name}
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/contact"
                className={`relative text-sm font-medium tracking-wide transition-colors duration-200 py-1.5 nav-link-underline ${
                  pathname === "/contact"
                    ? "text-gold-primary nav-link-active"
                    : "text-white/90 hover:text-gold-primary"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* CTA action button */}
            <div className="hidden lg:block">
              <Link
                href="/admission"
                className="bg-gold-primary hover:bg-gold-hover text-navy-dark font-bold text-xs px-5 py-2.5 rounded-full shadow-md uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 inline-flex items-center gap-1.5"
              >
                <span>Admission Open</span>
                <span className="w-1.5 h-1.5 bg-navy-dark rounded-full animate-ping" />
              </Link>
            </div>

            {/* Mobile Hamburger menu control */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white hover:text-gold-primary transition-colors duration-200 p-1.5 bg-white/5 rounded-lg border border-white/10"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>

        {/* Mobile Fullscreen slide out drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-navy-dark/98 backdrop-blur-md shadow-2xl border-l border-white/10 z-50 flex flex-col p-6 h-[100vh]"
              style={{ top: "0px" }}
            >
              {/* Mobile Drawer Header */}
              <div className="flex justify-between items-center border-b border-white/10 pb-5 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 flex items-center justify-center bg-gold-primary rounded-lg">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-5 h-5 text-navy-dark"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-sm tracking-tight leading-none">
                      S.R.S. MEMORIAL
                    </span>
                    <span className="text-gold-primary font-semibold text-[8px] tracking-wider uppercase leading-none mt-1">
                      Kids Garden School
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white hover:text-gold-primary transition-colors duration-200 p-1 bg-white/10 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile navigation links */}
              <nav className="flex-1 flex flex-col gap-4 overflow-y-auto pr-2">
                {navItems.map((item) => {
                  const isActive = pathname === item.path;
                  return (
                    <Link
                      key={item.name}
                      href={item.path}
                      className={`text-base font-semibold py-2 px-3.5 rounded-xl transition-all duration-200 ${
                        isActive
                          ? "bg-gold-primary text-navy-dark shadow-md"
                          : "text-white/80 hover:bg-white/5 hover:text-gold-primary"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}

                {/* Mobile Pages Accordion */}
                <div className="border-t border-b border-white/10 py-2 my-2">
                  <div className="px-3.5 text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                    Academic Life & Events
                  </div>
                  <div className="flex flex-col gap-2">
                    {pageDropdownItems.map((sub) => {
                      const isSubActive = pathname === sub.path;
                      return (
                        <Link
                          key={sub.name}
                          href={sub.path}
                          className={`text-base font-semibold py-2 px-3.5 rounded-xl transition-all duration-200 ${
                            isSubActive
                              ? "bg-white/10 text-gold-primary"
                              : "text-white/80 hover:bg-white/5 hover:text-gold-primary"
                          }`}
                        >
                          {sub.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className={`text-base font-semibold py-2 px-3.5 rounded-xl transition-all duration-200 ${
                    pathname === "/contact"
                      ? "bg-gold-primary text-navy-dark shadow-md"
                      : "text-white/80 hover:bg-white/5 hover:text-gold-primary"
                  }`}
                >
                  Contact Us
                </Link>
              </nav>

              {/* Mobile CTA Drawer button */}
              <div className="mt-auto pt-6 border-t border-white/10 flex flex-col gap-4">
                <Link
                  href="/admission"
                  className="bg-gold-primary hover:bg-gold-hover text-navy-dark font-bold text-center py-3.5 rounded-xl shadow-md uppercase tracking-wider transition-all duration-300 text-sm"
                >
                  Apply Admission 2025-26
                </Link>
                <div className="text-center text-xs text-slate-400">
                  Call desk: +91 98765 43210
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

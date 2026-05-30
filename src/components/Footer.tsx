"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, ArrowUp } from "lucide-react";

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

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-slate-300 pt-16 pb-8 border-t-2 border-gold-primary relative overflow-hidden">

      {/* Decorative background overlay */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Core footer grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">

          {/* Column 1: School Identity and Socials */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 flex items-center justify-center bg-gold-primary rounded-lg shadow-md">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-navy-dark" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-base tracking-tight leading-none">
                  S.R.S. MEMORIAL
                </span>
                <span className="text-gold-primary font-semibold text-[9px] tracking-wider uppercase leading-none mt-1">
                  Kids Garden School
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Established in 2013, S.R.S. Memorial Kids Garden School is dedicated to nurturing young minds with joy, academic vigor, and robust moral values in a modern educational environment.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-gold-primary flex items-center justify-center text-slate-300 hover:text-navy-dark hover:bg-gold-primary transition-all duration-300 hover:-translate-y-1"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-gold-primary flex items-center justify-center text-slate-300 hover:text-navy-dark hover:bg-gold-primary transition-all duration-300 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-gold-primary flex items-center justify-center text-slate-300 hover:text-navy-dark hover:bg-gold-primary transition-all duration-300 hover:-translate-y-1"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-base font-bold tracking-wide uppercase border-l-2 border-gold-primary pl-3">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm font-medium">
              <li>
                <Link href="/" className="hover:text-gold-primary hover:pl-1.5 transition-all duration-200 text-slate-400">
                  Home Page
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold-primary hover:pl-1.5 transition-all duration-200 text-slate-400">
                  About Our School
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-gold-primary hover:pl-1.5 transition-all duration-200 text-slate-400">
                  Academics & Syllabus
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-gold-primary hover:pl-1.5 transition-all duration-200 text-slate-400">
                  School Facilities
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-gold-primary hover:pl-1.5 transition-all duration-200 text-slate-400">
                  Photo Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Useful Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-base font-bold tracking-wide uppercase border-l-2 border-gold-primary pl-3">
              Useful Links
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm font-medium">
              <li>
                <Link href="/admission" className="hover:text-gold-primary hover:pl-1.5 transition-all duration-200 text-slate-400">
                  Admission Process
                </Link>
              </li>
              <li>
                <Link href="/student-life" className="hover:text-gold-primary hover:pl-1.5 transition-all duration-200 text-slate-400">
                  Student Life & Activities
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-gold-primary hover:pl-1.5 transition-all duration-200 text-slate-400">
                  Events & Celebrations
                </Link>
              </li>
              <li>
                <Link href="/admission" className="hover:text-gold-primary hover:pl-1.5 transition-all duration-200 text-slate-400">
                  Download Prospectus
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-primary hover:pl-1.5 transition-all duration-200 text-slate-400">
                  Contact Support Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact details */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-base font-bold tracking-wide uppercase border-l-2 border-gold-primary pl-3">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-3.5 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-gold-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Jaitpur Tiraha / Gwalior Road, Bihpura, Agra, Uttar Pradesh - 282001
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-primary shrink-0" />
                <a href="mailto:principal.srsmemorial@gmail.com" className="hover:text-gold-primary transition-colors duration-200">
                  principal.srsmemorial@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-primary shrink-0" />
                <a href="tel:+919876543210" className="hover:text-gold-primary transition-colors duration-200">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-gold-primary shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Office Timings</div>
                  <div>Mon - Sat: 08:00 AM - 02:00 PM</div>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright details and scrolling anchor */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-semibold text-slate-500">
          <div className="text-center sm:text-left">
            &copy; {currentYear} S.R.S. Memorial Kids Garden School. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Designed with ❤️ by HarshVardhan Tiwari</span>
            <button
              onClick={scrollToTop}
              className="bg-gold-primary hover:bg-gold-hover text-navy-dark w-9 h-9 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-90 animate-bounce"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Play,
  CheckCircle2,
  BookOpen,
  BookMarked,
  MonitorPlay,
  Smile,
  Droplet,
  Bus,
  Zap,
  ShieldAlert,
  ArrowRight,
  Sparkles,
  Award,
  Users,
  Compass,
  Star,
  Download,
  Calendar,
  X
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { facilities, testimonials, galleryItems } from "@/data/schoolData";

// Custom Lucide Icon Mapper
const IconMapper = ({ name, className }: { name: string; className: string }) => {
  switch (name) {
    case "BookOpen":
      return <BookOpen className={className} />;
    case "BookMarked":
      return <BookMarked className={className} />;
    case "MonitorPlay":
      return <MonitorPlay className={className} />;
    case "Smile":
      return <Smile className={className} />;
    case "Droplet":
      return <Droplet className={className} />;
    case "Bus":
      return <Bus className={className} />;
    case "Zap":
      return <Zap className={className} />;
    case "ShieldAlert":
      return <ShieldAlert className={className} />;
    default:
      return <BookOpen className={className} />;
  }
};

export default function HomePage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="relative overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 md:pt-32 pb-20 overflow-hidden">
        {/* Full-width School Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1600')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-primary/90 to-navy-dark/80" />

        {/* Diagonal Light Beam and Grid Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        <div className="absolute -top-[40%] -left-[20%] w-[80%] h-[80%] rounded-full bg-gradient-to-br from-gold-primary/10 via-transparent to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Area */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-gold-primary/10 border border-gold-primary/30 text-gold-primary px-4.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Admissions Open for 2025-26</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl text-white font-extrabold tracking-tight leading-[1.1] mb-6 font-heading"
              >
                Learning with <span className="text-gold-primary">Joy</span>,<br />
                Growing with <span className="text-gold-primary">Values</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-200 text-lg md:text-xl leading-relaxed mb-8 max-w-xl font-medium"
              >
                Nurturing young minds in a safe, smart, and interactive environment for a brighter and successful tomorrow.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 sm:gap-5 w-full sm:w-auto"
              >
                <Link
                  href="/admission"
                  className="w-full sm:w-auto text-center bg-gold-primary hover:bg-gold-hover text-navy-dark font-extrabold text-sm px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 uppercase tracking-wider"
                >
                  Admission Open
                </Link>
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/15 text-white font-bold text-sm px-7 py-4 rounded-full border border-white/20 transition-all duration-300 hover:scale-105 active:scale-95 uppercase tracking-wider backdrop-blur-sm"
                >
                  <Play className="w-4.5 h-4.5 text-gold-primary fill-gold-primary" />
                  <span>Virtual Campus</span>
                </button>
              </motion.div>
            </div>

            {/* Right side children collage */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative w-full max-w-md aspect-square"
              >
                {/* Visual children card with glass glows */}
                <div className="absolute inset-0 bg-gradient-to-tr from-gold-primary/20 via-transparent to-navy-light/40 rounded-3xl blur-2xl -z-10" />
                <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800"
                    alt="School Students Reading Together"
                    className="w-full h-full object-cover"
                  />
                  {/* Glass Card Caption Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-navy-dark/80 backdrop-blur-md border border-white/10 p-4.5 rounded-2xl flex items-center justify-between">
                    <div>
                      <div className="text-white font-bold text-sm">Empowering Young Minds</div>
                      <div className="text-gold-primary text-xs font-semibold mt-0.5">Classes: Nursery to VIII</div>
                    </div>
                    <Sparkles className="w-5 h-5 text-gold-primary animate-pulse" />
                  </div>
                </div>
              </motion.div>
            </div>

          </div>

          {/* Bottom Floating Glassmorphism Statistics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-16 md:mt-24 bg-white/8 backdrop-blur-xl border border-white/15 rounded-3xl shadow-xl p-6 md:p-8 max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="pt-4 md:pt-0">
                <div className="text-gold-primary text-3xl md:text-4xl font-extrabold tracking-tight">2013</div>
                <div className="text-slate-200 text-xs md:text-sm font-semibold tracking-wide uppercase mt-1">Established</div>
              </div>
              <div className="pt-4 md:pt-0">
                <div className="text-gold-primary text-3xl md:text-4xl font-extrabold tracking-tight">480+</div>
                <div className="text-slate-200 text-xs md:text-sm font-semibold tracking-wide uppercase mt-1">Students Enrolled</div>
              </div>
              <div className="pt-4 md:pt-0">
                <div className="text-gold-primary text-3xl md:text-4xl font-extrabold tracking-tight">1:20</div>
                <div className="text-slate-200 text-xs md:text-sm font-semibold tracking-wide uppercase mt-1">Teacher Ratio</div>
              </div>
              <div className="pt-4 md:pt-0">
                <div className="text-gold-primary text-3xl md:text-4xl font-extrabold tracking-tight">Nursery-8</div>
                <div className="text-slate-200 text-xs md:text-sm font-semibold tracking-wide uppercase mt-1">Grades Taught</div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. WELCOME SECTION */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Texts and Bullets */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <ScrollReveal direction="up" className="w-full">
                <span className="text-gold-primary font-bold text-xs md:text-sm tracking-wider uppercase bg-gold-light border border-gold-primary/20 px-3 py-1 rounded-full mb-4.5 inline-block">
                  Welcome to S.R.S. Memorial
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy-primary font-extrabold tracking-tight leading-tight mb-6">
                  S.R.S Memorial Kids Garden School
                </h2>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6 font-medium">
                  Established in 2013, S.R.S. Memorial Kids Garden School represents a milestone in value-based holistic education. We offer an English-medium curriculum designed to ignite curiosity, critical reasoning, and moral character in child-centric classes.
                </p>
                <p className="text-slate-600 text-base leading-relaxed mb-8">
                  Our mission is simple: to provide a vibrant, safe, and modern environment where children learn through play, discover real-world sciences, and grow with core ethics.
                </p>

                {/* Bullets grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8 font-semibold text-slate-700">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5.5 h-5.5 text-gold-primary" />
                    <span>Qualified & Caring Teachers</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5.5 h-5.5 text-gold-primary" />
                    <span>Safe & Secure Environment</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5.5 h-5.5 text-gold-primary" />
                    <span>Play-way & Activity Based Learning</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5.5 h-5.5 text-gold-primary" />
                    <span>Focus on Overall Character</span>
                  </div>
                </div>

                <Link
                  href="/about"
                  className="bg-navy-primary hover:bg-navy-light text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-md transition-all duration-300 hover:scale-105 active:scale-95 inline-flex items-center gap-2"
                >
                  <span>Know More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </ScrollReveal>
            </div>

            {/* Right Interactive Building Image with pulsing overlay */}
            <div className="lg:col-span-5 relative">
              <ScrollReveal direction="left" className="relative group">
                <div className="absolute inset-0 bg-navy-primary/10 rounded-3xl blur-2xl pointer-events-none -z-10 group-hover:bg-gold-primary/15 transition-all duration-500" />
                <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800"
                    alt="SRS School Campus Building"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Large pulsing video play button */}
                  <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                    <button
                      onClick={() => setIsVideoModalOpen(true)}
                      className="w-18 h-18 rounded-full bg-gold-primary text-navy-dark flex items-center justify-center shadow-2xl relative transition-all duration-300 hover:scale-115"
                      aria-label="Play video"
                    >
                      <span className="absolute inset-0 rounded-full bg-gold-primary/40 animate-ping" />
                      <Play className="w-7 h-7 fill-navy-dark text-navy-dark ml-1" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-navy-dark/90 backdrop-blur-md px-4 py-2 rounded-xl text-white font-bold text-xs flex items-center gap-2 border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span>Watch Campus Video</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 3. WHY PARENTS CHOOSE US SECTION */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal direction="up">
              <span className="text-gold-primary font-bold text-xs md:text-sm tracking-wider uppercase bg-gold-light border border-gold-primary/20 px-3.5 py-1 rounded-full mb-4 inline-block">
                Our Core Strengths
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy-primary font-extrabold tracking-tight mb-4">
                Why Parents Choose Us
              </h2>
              <div className="w-16 h-1.5 bg-gold-primary rounded-full mx-auto mb-6" />
              <p className="text-slate-600 text-base md:text-lg">
                We believe in providing a comprehensive nurturing foundation for students, combining progressive classrooms with high moral standards.
              </p>
            </ScrollReveal>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Holistic Development",
                description: "Balancing top-tier standard syllabus with active physical sports, public speaking, and fine arts programs.",
                icon: <Award className="w-8 h-8 text-gold-primary" />,
                bg: "bg-blue-50"
              },
              {
                title: "Activity Based Learning",
                description: "Igniting curiosity through sensory sandbox games, colorful teaching flashcards, and practical laboratory tests.",
                icon: <Smile className="w-8 h-8 text-green-600" />,
                bg: "bg-green-50"
              },
              {
                title: "Safe & Secure Campus",
                description: "Continuous CCTV surveillance across gates, GPS school buses, and fully fenced hygienic campus walls.",
                icon: <Users className="w-8 h-8 text-purple-600" />,
                bg: "bg-purple-50"
              },
              {
                title: "Moral & Ethical Values",
                description: "Instilling mutual respect, duty to society, regular moral lecturing, and robust civic responsibilities.",
                icon: <Compass className="w-8 h-8 text-orange-600" />,
                bg: "bg-orange-50"
              }
            ].map((card, idx) => (
              <ScrollReveal direction="up" delay={idx * 0.1} key={card.title} className="flex">
                <div className="glow-card w-full bg-white border border-slate-100 p-8 rounded-3xl shadow-sm flex flex-col items-start">
                  <div className={`p-4.5 rounded-2xl ${card.bg} mb-6.5`}>
                    {card.icon}
                  </div>
                  <h3 className="text-navy-primary font-bold text-xl mb-3">
                    {card.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mt-auto font-medium">
                    {card.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 4. OUR FACILITIES (DARK NAVY BACKGROUND) */}
      <section className="py-20 md:py-28 bg-navy-primary relative text-white">
        
        {/* Glow circle overlay */}
        <div className="absolute top-[10%] right-[10%] w-80 h-80 rounded-full bg-gold-primary/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal direction="up">
              <span className="text-gold-primary font-bold text-xs md:text-sm tracking-wider uppercase bg-white/5 border border-gold-primary/20 px-3.5 py-1 rounded-full mb-4 inline-block">
                Modern Environment
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-extrabold tracking-tight mb-4">
                Our Premium Facilities
              </h2>
              <div className="w-16 h-1.5 bg-gold-primary rounded-full mx-auto mb-6" />
              <p className="text-slate-300 text-base">
                Providing our young learners with top-of-the-line amenities to facilitate smooth and interactive physical and intellectual growth.
              </p>
            </ScrollReveal>
          </div>

          {/* Grid Layout of 8 facilities */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {facilities.map((fac, idx) => (
              <ScrollReveal direction="up" delay={idx * 0.05} key={fac.id} className="flex">
                <div className="glassmorphism w-full p-6.5 rounded-3xl hover:bg-white/10 hover:border-gold-primary/50 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-gold-primary/10 border border-gold-primary/30 flex items-center justify-center text-gold-primary mb-5 group-hover:scale-110 transition-transform duration-300">
                    <IconMapper name={fac.iconName} className="w-6 h-6" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    {fac.title}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed font-medium">
                    {fac.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom Button */}
          <div className="text-center">
            <ScrollReveal direction="up">
              <Link
                href="/facilities"
                className="bg-gold-primary hover:bg-gold-hover text-navy-dark font-extrabold text-sm px-8 py-3.5 rounded-full shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 uppercase tracking-wider inline-flex items-center gap-2"
              >
                <span>View All Facilities</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* 5. GALLERY PREVIEW */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal direction="up">
              <span className="text-gold-primary font-bold text-xs md:text-sm tracking-wider uppercase bg-gold-light border border-gold-primary/20 px-3.5 py-1 rounded-full mb-4 inline-block">
                Glimpses of Our School
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy-primary font-extrabold tracking-tight mb-4">
                Life & Celebrations
              </h2>
              <div className="w-16 h-1.5 bg-gold-primary rounded-full mx-auto mb-6" />
              <p className="text-slate-600 text-base md:text-lg">
                Explore the wonderful moments of active growth, learning experiments, sports meets, and national celebrations.
              </p>
            </ScrollReveal>
          </div>

          {/* 8 Card Grid Gallery exactly like reference */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-12">
            {galleryItems.slice(0, 8).map((item, idx) => (
              <ScrollReveal direction="none" delay={idx * 0.05} key={item.id}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm group cursor-pointer border border-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4.5">
                    <span className="bg-gold-primary text-navy-dark text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md w-fit mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-white font-bold text-xs md:text-sm truncate">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom Button */}
          <div className="text-center">
            <ScrollReveal direction="up">
              <Link
                href="/gallery"
                className="bg-navy-primary hover:bg-navy-light text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-md transition-all duration-300 hover:scale-105 active:scale-95 uppercase tracking-wider inline-flex items-center gap-2"
              >
                <span>View Full Gallery</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* 6. STATISTICS SECTION (DARK NAVY BAND) */}
      <section className="py-16 bg-navy-dark border-y border-white/5 relative">
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Years of Excellence", val: "10+" },
              { label: "Happy Students", val: "480+" },
              { label: "Dedicated Teachers", val: "35+" },
              { label: "Co-Curricular Activities", val: "20+" }
            ].map((stat, idx) => (
              <ScrollReveal direction="up" delay={idx * 0.1} key={stat.label}>
                <div className="flex flex-col items-center">
                  <div className="text-gold-primary text-3xl md:text-5xl font-extrabold tracking-tight">
                    {stat.val}
                  </div>
                  <div className="text-slate-300 text-xs md:text-sm font-semibold tracking-wide uppercase mt-2">
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS SECTION */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal direction="up">
              <span className="text-gold-primary font-bold text-xs md:text-sm tracking-wider uppercase bg-gold-light border border-gold-primary/20 px-3.5 py-1 rounded-full mb-4 inline-block">
                Testimonials
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy-primary font-extrabold tracking-tight mb-4">
                What Parents Say
              </h2>
              <div className="w-16 h-1.5 bg-gold-primary rounded-full mx-auto mb-6" />
              <p className="text-slate-600 text-base md:text-lg">
                Discover the actual feedback shared by parents who trusted S.R.S. Memorial with their child's early developmental foundations.
              </p>
            </ScrollReveal>
          </div>

          {/* Testimonial Cards Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((test, idx) => (
              <ScrollReveal direction="up" delay={idx * 0.1} key={test.id} className="flex">
                <div className="glow-card w-full bg-white border border-slate-100 rounded-3xl p-8 shadow-sm flex flex-col relative">
                  
                  {/* Elegant gold quote background symbol */}
                  <span className="absolute top-6 right-8 text-gold-primary/10 text-7xl font-serif select-none pointer-events-none">
                    “
                  </span>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-5">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-primary text-gold-primary" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium italic">
                    "{test.quote}"
                  </p>

                  {/* Parent profile */}
                  <div className="flex items-center gap-3.5 mt-auto pt-4 border-t border-slate-100">
                    <img
                      src={test.image}
                      alt={test.name}
                      className="w-12 h-12 rounded-full object-cover border border-slate-200"
                    />
                    <div>
                      <h4 className="text-navy-primary font-bold text-sm">
                        {test.name}
                      </h4>
                      <p className="text-slate-400 text-xs font-semibold mt-0.5">
                        {test.role}
                      </p>
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 8. BOTTOM ADMISSIONS CTA */}
      <section className="py-16 md:py-20 bg-navy-primary relative overflow-hidden text-white text-center">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 font-heading text-white">
              Admissions Open for 2025-26
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto">
              Give your child the ideal blend of joy-filled learning activities, digital smart classes, and strong character development. Limited seats are available.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/admission"
                className="bg-gold-primary hover:bg-gold-hover text-navy-dark font-extrabold text-sm px-8 py-3.5 rounded-full shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 uppercase tracking-wider"
              >
                Enroll Now
              </Link>
              <Link
                href="/admission"
                className="bg-white/5 hover:bg-white/10 text-white font-bold text-sm px-7 py-3.5 rounded-full border border-white/20 transition-all duration-300 hover:scale-105 active:scale-95 uppercase tracking-wider backdrop-blur-sm inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-gold-primary" />
                <span>Download Prospectus</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 9. VIRTUAL CAMPUS VIDEO MODAL */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-8"
          >
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors duration-200 bg-white/10 p-2 rounded-full border border-white/20 hover:scale-105"
              aria-label="Close Modal"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/10"
            >
              {/* Premium generic walkthrough video element */}
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" // Placeholder video link, change to actual walkthrough if needed
                title="SRS School Virtual Tour Walkthrough"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

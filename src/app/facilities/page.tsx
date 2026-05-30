"use client";

import React from "react";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { facilities } from "@/data/schoolData";
import {
  BookOpen,
  BookMarked,
  MonitorPlay,
  Smile,
  Droplet,
  Bus,
  Zap,
  ShieldAlert,
  CheckCircle2,
  Sparkles
} from "lucide-react";

// Icon Renderer Mapper
const FacilityIcon = ({ name, className }: { name: string; className: string }) => {
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

export default function FacilitiesPage() {
  return (
    <div className="relative">
      
      {/* Reusable Subpage Banner */}
      <PageHeader
        title="School Facilities"
        breadcrumb="Facilities"
        backgroundImage="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200"
      />

      {/* 1. DETAILED FACILITIES PRESENTATION */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal direction="up">
              <span className="text-gold-primary font-bold text-xs md:text-sm tracking-wider uppercase bg-gold-light border border-gold-primary/20 px-3.5 py-1 rounded-full mb-4 inline-block">
                Modern Campus Amenities
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy-primary font-extrabold tracking-tight mb-4">
                State-of-the-Art Infrastructure
              </h2>
              <div className="w-16 h-1.5 bg-gold-primary rounded-full mx-auto mb-6" />
              <p className="text-slate-600 text-base md:text-lg">
                We provide our nursery and primary classes with modern infrastructure, encouraging interactive pedagogy and physical wellbeing in every step.
              </p>
            </ScrollReveal>
          </div>

          {/* Grid Layout of Expanded Facilities */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((fac, idx) => (
              <ScrollReveal direction="up" delay={idx * 0.08} key={fac.id} className="flex">
                <div className="w-full bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden flex flex-col group hover:shadow-md hover:border-gold-primary/30 transition-all duration-300">
                  
                  {/* Facility Image with Hover Zoom */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={fac.image}
                      alt={fac.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                    
                    {/* Pulsing crest overlay */}
                    <div className="absolute bottom-4 left-4 w-11 h-11 bg-navy-dark/95 border border-white/10 rounded-xl flex items-center justify-center text-gold-primary shadow-lg">
                      <FacilityIcon name={fac.iconName} className="w-5.5 h-5.5" />
                    </div>
                  </div>

                  {/* Text descriptions */}
                  <div className="p-7 flex flex-col flex-1">
                    <h3 className="text-navy-primary font-bold text-xl mb-3.5">
                      {fac.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                      {fac.description}
                    </p>

                    {/* Checkmarks specs list depending on card */}
                    <div className="mt-auto pt-4.5 border-t border-slate-100 flex items-center gap-2 font-semibold text-slate-700 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-gold-primary shrink-0" />
                      <span>Regular Hygiene Certified</span>
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 2. CAMPUS WELL-BEING CTA */}
      <section className="py-16 md:py-20 bg-navy-primary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 font-heading text-white">
              Experience Our Smart Campus Firsthand
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto">
              We warmly invite prospective parents to book a school campus tour. Walk through our smart visual classrooms, explore the library, and inspect our safe playground structures.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/contact"
                className="bg-gold-primary hover:bg-gold-hover text-navy-dark font-extrabold text-sm px-8 py-3.5 rounded-full shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 uppercase tracking-wider"
              >
                Schedule Campus Visit
              </a>
              <a
                href="/admission"
                className="bg-white/5 hover:bg-white/10 text-white font-bold text-sm px-7 py-3.5 rounded-full border border-white/20 transition-all duration-300 hover:scale-105 active:scale-95 uppercase tracking-wider backdrop-blur-sm"
              >
                Learn Admission Rules
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}

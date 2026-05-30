"use client";

import React from "react";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { events } from "@/data/schoolData";
import { Calendar, ArrowRight, Clock, MapPin, Sparkles } from "lucide-react";
import Link from "next/link";

export default function EventsPage() {
  return (
    <div className="relative">
      
      {/* Subpage Banner */}
      <PageHeader
        title="Events & Celebrations"
        breadcrumb="Events"
        backgroundImage="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200"
      />

      {/* 1. DETAILED EVENTS GRID */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal direction="up">
              <span className="text-gold-primary font-bold text-xs md:text-sm tracking-wider uppercase bg-gold-light border border-gold-primary/20 px-3.5 py-1 rounded-full mb-4 inline-block">
                School Celebrations
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy-primary font-extrabold tracking-tight mb-4">
                Our Events & Activities
              </h2>
              <div className="w-16 h-1.5 bg-gold-primary rounded-full mx-auto mb-6" />
              <p className="text-slate-600 text-base md:text-lg">
                We believe in celebrating moments that inspire learning, cultural unity, patriotism, and competitive sport development.
              </p>
            </ScrollReveal>
          </div>

          {/* Grid matching reference exactly */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, idx) => (
              <ScrollReveal direction="up" delay={idx * 0.08} key={event.id} className="flex">
                <div className="w-full bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden flex flex-col group hover:shadow-md hover:border-gold-primary/30 transition-all duration-300 relative">
                  
                  {/* Calendar Overlay date badge on top-left */}
                  <div className="absolute top-4 left-4 z-20 bg-navy-primary border border-white/10 text-white w-14 h-15 rounded-xl shadow-lg flex flex-col items-center justify-center font-bold">
                    <span className="text-gold-primary text-xl leading-none">{event.day}</span>
                    <span className="text-[10px] tracking-widest uppercase mt-1 leading-none">{event.month}</span>
                  </div>

                  {/* Visual Event image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                  </div>

                  {/* Texts details */}
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-slate-400 text-xs font-semibold uppercase tracking-wider mb-3">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-gold-primary" />
                        <span>09:00 AM</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-gold-primary" />
                        <span>Campus Ground</span>
                      </div>
                    </div>

                    <h3 className="text-navy-primary font-bold text-lg md:text-xl mb-3 truncate">
                      {event.title}
                    </h3>
                    
                    <p className="text-slate-500 text-xs leading-relaxed mb-6 font-medium">
                      {event.description}
                    </p>

                    {/* CTA link */}
                    <Link
                      href="/contact"
                      className="mt-auto pt-4.5 border-t border-slate-100 font-bold text-navy-primary group-hover:text-gold-primary text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors duration-200"
                    >
                      <span>Inquire Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 2. CALENDAR INFO CTA */}
      <section className="py-16 md:py-20 bg-slate-50 text-center relative overflow-hidden border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <ScrollReveal direction="up">
            <span className="w-10 h-10 rounded-xl bg-gold-primary/10 border border-gold-primary/30 flex items-center justify-center text-gold-primary mx-auto mb-5 shadow-sm">
              <Calendar className="w-5.5 h-5.5" />
            </span>
            <h2 className="text-2xl md:text-3xl text-navy-primary font-extrabold tracking-tight mb-4">
              Regular Activities & Science Fairs
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
              Our calendar is packed with weekly quizzes, creative arts fests, science modeling competitions, and local community service excursions to keep children active and engaged.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-navy-primary hover:bg-navy-light text-white font-bold text-xs px-7 py-3.5 rounded-full shadow-md transition-all duration-300 hover:scale-105 active:scale-95 uppercase tracking-wider inline-flex items-center gap-1.5"
              >
                <span>Request Annual Calendar</span>
                <Sparkles className="w-4 h-4 text-gold-primary" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}

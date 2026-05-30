"use client";

import React from "react";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import {
  BookOpen,
  Smile,
  Trophy,
  Palette,
  Users,
  ShieldAlert,
  ArrowRight,
  Sparkles
} from "lucide-react";
import Link from "next/link";

export default function StudentLifePage() {
  const pillars = [
    {
      title: "Learning",
      desc: "Interactive storytelling, basic digital programming, and visual sciences that build core brain logic.",
      icon: <BookOpen className="w-7 h-7 text-blue-600" />,
      bg: "bg-blue-50"
    },
    {
      title: "Fun",
      desc: "Sensory sandbox sessions, early drawing, puppet dramas, and toy-based early learning classrooms.",
      icon: <Smile className="w-7 h-7 text-green-600" />,
      bg: "bg-green-50"
    },
    {
      title: "Sports",
      desc: "Track athletics races, football, physical gymnastics workouts, and coordination drill practices.",
      icon: <Trophy className="w-7 h-7 text-orange-600" />,
      bg: "bg-orange-50"
    },
    {
      title: "Creativity",
      desc: "Visual arts workshops, custom origami paper crafting, dance theater, and creative singing choirs.",
      icon: <Palette className="w-7 h-7 text-purple-600" />,
      bg: "bg-purple-50"
    },
    {
      title: "Friendship",
      desc: "Fostering collaboration through shared projects, teamwork exercises, and mutual support values.",
      icon: <Users className="w-7 h-7 text-red-600" />,
      bg: "bg-red-50"
    },
    {
      title: "Discipline",
      desc: "Regular moral lessons, leadership responsibilities, daily assembly civic duties, and respect protocols.",
      icon: <ShieldAlert className="w-7 h-7 text-indigo-600" />,
      bg: "bg-indigo-50"
    }
  ];

  return (
    <div className="relative">
      {/* Subpage Banner */}
      <PageHeader
        title="Student Life"
        breadcrumb="Student Life"
        backgroundImage="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=1200"
      />

      {/* 1. PILLARS OF STUDENT DEVELOPMENT */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left 6-pillar grid */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <ScrollReveal direction="up" className="w-full">
                <span className="text-gold-primary font-bold text-xs md:text-sm tracking-wider uppercase bg-gold-light border border-gold-primary/20 px-3.5 py-1 rounded-full mb-4.5 inline-block">
                  Co-Curricular Dynamics
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy-primary font-extrabold tracking-tight leading-tight mb-6">
                  Life at S.R.S. Memorial Kids Garden School
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-10 font-medium">
                  We believe that primary school shouldn't just be limited to text notebooks. We offer an active co-curricular life where children make friends, build discipline, and discover their unique creative potentials.
                </p>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                  {pillars.map((pil, idx) => (
                    <div
                      key={pil.title}
                      className="glow-card border border-slate-100 p-6 rounded-2xl flex items-start gap-4.5 bg-white shadow-sm"
                    >
                      <div className={`p-3 rounded-xl ${pil.bg} shrink-0`}>
                        {pil.icon}
                      </div>
                      <div>
                        <h3 className="text-navy-primary font-bold text-base mb-1">
                          {pil.title}
                        </h3>
                        <p className="text-slate-500 text-xs leading-relaxed font-medium">
                          {pil.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Right side large collage visual */}
            <div className="lg:col-span-5 relative">
              <ScrollReveal direction="left">
                <div className="absolute inset-0 bg-navy-primary/10 rounded-3xl blur-2xl pointer-events-none -z-10" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[3/4]">
                  <img
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800"
                    alt="Active sports and events collage"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-navy-dark/90 backdrop-blur-md p-4 rounded-xl border border-white/10 text-white flex items-center justify-between">
                    <div>
                      <div className="font-bold text-xs">Healthy Sports Culture</div>
                      <div className="text-[10px] text-gold-primary font-semibold mt-0.5">Physical Gym & Athletics</div>
                    </div>
                    <Sparkles className="w-4.5 h-4.5 text-gold-primary" />
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 2. ENVELOPS & CLUB CTA */}
      <section className="py-16 md:py-20 bg-slate-50 text-center relative overflow-hidden border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <ScrollReveal direction="up">
            <h2 className="text-2xl md:text-3xl text-navy-primary font-extrabold tracking-tight mb-4">
              Explore Our Active Hobby Clubs
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-8 max-w-xl mx-auto font-medium">
              We host weekly hobby clubs including the Eco-Club (Plantation), Science-Club (Models), Creative Arts-Club, and the Literary-Club (Debating) to keep young minds inspired and collaborative.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/admission"
                className="bg-navy-primary hover:bg-navy-light text-white font-bold text-xs px-8 py-3.5 rounded-full shadow-md transition-all duration-300 hover:scale-105 active:scale-95 uppercase tracking-wider inline-flex items-center gap-2"
              >
                <span>Enroll in S.R.S. Memorial</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}

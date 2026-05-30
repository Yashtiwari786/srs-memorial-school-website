"use client";

import React from "react";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { coreValues } from "@/data/schoolData";
import {
  Shield,
  Heart,
  UserCheck,
  Award,
  HeartHandshake,
  Calendar,
  Users,
  Target,
  Eye,
  CheckCircle2,
  Sparkles
} from "lucide-react";

// Custom Icon Mapper for Core Values
const ValueIconMapper = ({ name, className }: { name: string; className: string }) => {
  switch (name) {
    case "Shield":
      return <Shield className={className} />;
    case "Heart":
      return <Heart className={className} />;
    case "UserCheck":
      return <UserCheck className={className} />;
    case "Award":
      return <Award className={className} />;
    case "HeartHandshake":
      return <HeartHandshake className={className} />;
    default:
      return <Shield className={className} />;
  }
};

export default function AboutPage() {
  return (
    <div className="relative">
      {/* Page Header Banner */}
      <PageHeader
        title="About Us"
        breadcrumb="About Us"
        backgroundImage="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200"
      />

      {/* 1. ABOUT SCHOOL DETAIL SECTION */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Description Text */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="up">
                <span className="text-gold-primary font-bold text-xs md:text-sm tracking-wider uppercase bg-gold-light border border-gold-primary/20 px-3.5 py-1 rounded-full mb-4.5 inline-block">
                  Our Legacy & Story
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy-primary font-extrabold tracking-tight mb-6">
                  About Our School
                </h2>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6 font-medium">
                  S.R.S. Memorial Kids Garden School was founded in 2013 with a pioneering mission to revolutionize primary and upper-primary schooling. We offer a progressive English-medium education system that doesn't just prioritize rote examinations, but nurtures curiosity, practical thinking, and lifelong values in a safe, activity-based environment.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-8">
                  Over the past decade, we have grown from a small developmental garden into a highly respected regional benchmark. Our campus is fully equipped with smart digital classroom networks, high-security CCTV cameras, multi-route GPS-enabled school buses, filtered RO cold water stations, and robust sporting programs.
                </p>

                {/* 4 point quick stats grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-slate-100">
                  <div className="flex flex-col">
                    <span className="text-gold-primary font-extrabold text-2xl md:text-3xl">2013</span>
                    <span className="text-slate-500 text-xs font-semibold uppercase mt-1">Established</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gold-primary font-extrabold text-2xl md:text-3xl">480+</span>
                    <span className="text-slate-500 text-xs font-semibold uppercase mt-1">Happy Kids</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gold-primary font-extrabold text-2xl md:text-3xl">35+</span>
                    <span className="text-slate-500 text-xs font-semibold uppercase mt-1">Educators</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gold-primary font-extrabold text-2xl md:text-3xl">100%</span>
                    <span className="text-slate-500 text-xs font-semibold uppercase mt-1">Satisfaction</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Campus Visual Card */}
            <div className="lg:col-span-5 relative">
              <ScrollReveal direction="left">
                <div className="absolute inset-0 bg-navy-primary/10 rounded-3xl blur-2xl pointer-events-none -z-10" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[3/4]">
                  <img
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800"
                    alt="Active students in SRS School Garden"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-navy-dark/90 backdrop-blur-md p-4 rounded-xl border border-white/10 text-white flex items-center justify-between">
                    <div>
                      <div className="font-bold text-xs">Agra Regional Crest</div>
                      <div className="text-[10px] text-gold-primary font-semibold mt-0.5">Value Based Pedagogy</div>
                    </div>
                    <Sparkles className="w-4.5 h-4.5 text-gold-primary" />
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 2. MISSION & VISION SECTION (SIDE BY SIDE CARDS) */}
      <section className="py-20 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            
            {/* Mission Card */}
            <ScrollReveal direction="right" className="flex">
              <div className="w-full bg-white border border-slate-150 p-8 rounded-3xl shadow-sm flex flex-col items-start hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 rounded-2xl bg-gold-light border border-gold-primary/30 flex items-center justify-center text-gold-primary mb-6.5">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-navy-primary font-extrabold text-2xl mb-4 font-heading">
                  Our Mission
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  To offer highly accessible, premium quality modern education that integrates smart interactive technology with robust ethical foundations. We strive to foster structural curiosity, physical vigor, emotional balance, and civil duty in early learners.
                </p>
                <div className="mt-6 flex flex-col gap-2 font-semibold text-slate-700 text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-primary" />
                    <span>Holistic Character Sculpting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-primary" />
                    <span>Affordable Premium Standards</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Vision Card */}
            <ScrollReveal direction="left" className="flex">
              <div className="w-full bg-white border border-slate-150 p-8 rounded-3xl shadow-sm flex flex-col items-start hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-navy-primary/10 flex items-center justify-center text-navy-primary mb-6.5">
                  <Eye className="w-7 h-7" />
                </div>
                <h3 className="text-navy-primary font-extrabold text-2xl mb-4 font-heading">
                  Our Vision
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  To become a leading benchmark regional school model in Uttar Pradesh, renowned for raising confident, empathetic, and innovative students who will become global leaders of tomorrow, firmly anchored in Indian civil ethics.
                </p>
                <div className="mt-6 flex flex-col gap-2 font-semibold text-slate-700 text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-primary" />
                    <span>Progressive Smart Tech</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-primary" />
                    <span>Leadership with Compassion</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 3. CORE VALUES SECTION (DARK NAVY BACKGROUND WITH ELEGANTE CIRCLES) */}
      <section className="py-20 md:py-28 bg-navy-primary text-white text-center relative overflow-hidden">
        
        {/* Decorative backdrop elements */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-gold-primary/5 via-transparent to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="max-w-3xl mx-auto mb-16">
            <ScrollReveal direction="up">
              <span className="text-gold-primary font-bold text-xs md:text-sm tracking-wider uppercase bg-white/5 border border-gold-primary/20 px-3.5 py-1 rounded-full mb-4 inline-block">
                Our Core Pillars
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-extrabold tracking-tight mb-4">
                Our Core Values
              </h2>
              <div className="w-16 h-1.5 bg-gold-primary rounded-full mx-auto mb-6" />
              <p className="text-slate-300 text-base md:text-lg">
                The core guidelines we introduce to our curriculum to support deep civic responsibility and emotional intelligence.
              </p>
            </ScrollReveal>
          </div>

          {/* Grid list of Core Values with Custom circles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {coreValues.map((value, idx) => (
              <ScrollReveal direction="up" delay={idx * 0.08} key={value.id} className="flex">
                <div className="glassmorphism w-full p-6.5 rounded-3xl hover:bg-white/10 hover:border-gold-primary/45 transition-all duration-300 group flex flex-col items-center">
                  
                  {/* Gold-bordered custom circular emblems */}
                  <div className="w-16 h-16 rounded-full border-2 border-gold-primary/75 bg-navy-dark flex items-center justify-center text-gold-primary mb-5 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <ValueIconMapper name={value.iconName} className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-white font-bold text-lg mb-2">
                    {value.title}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed font-medium">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}

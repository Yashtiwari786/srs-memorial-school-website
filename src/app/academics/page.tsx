"use client";

import React, { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smile,
  Compass,
  Award,
  BookOpen,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Users,
  ShieldCheck,
  Flame,
  Check
} from "lucide-react";

type AcademicTab = "pre-primary" | "primary" | "upper-primary";

export default function AcademicsPage() {
  const [activeTab, setActiveTab] = useState<AcademicTab>("pre-primary");

  const tabContents = {
    "pre-primary": {
      title: "Pre-Primary Level (Nursery, LKG, UKG)",
      subtitle: "Play-Way & Activity Centered Foundation",
      description: "Our early-childhood curriculum concentrates on social learning, basic phonics, sensory play, motor control, and creative expression. Toddlers are nurtured inside cozy reading corners, sensory sandboxes, and smart interactive play rooms.",
      checklist: [
        "Play-way based informal teaching",
        "Introduction to Alphabets and Numbers",
        "Sensory and Montessori activities",
        "Nurturing emotional & motor development",
        "Class size limited to 20 toddlers"
      ],
      ageGroup: "3 - 5 Years",
      curriculumFocus: "Motor Skills & Phonetics"
    },
    "primary": {
      title: "Primary School Level (Classes I to V)",
      subtitle: "Curriculum of Curiosity & Critical Reasoning",
      description: "We follow a progressive, activity-based academic scheme integrating deep language skills (English & Hindi), logical mathematics, environmental sciences (EVS), computer basics, and public speaking. Kids learn by doing.",
      checklist: [
        "Language proficiency & creative reading",
        "Logical reasoning & arithmetic foundations",
        "Environmental awareness & local geography",
        "Basic computer skills and coding blocks",
        "Continuous and comprehensive testing"
      ],
      ageGroup: "6 - 10 Years",
      curriculumFocus: "Logical Thinking & EVS"
    },
    "upper-primary": {
      title: "Upper Primary Level (Classes VI to VIII)",
      subtitle: "Preparing Confident Thinkers & Future Leaders",
      description: "Providing students with high-end analytical capabilities in sciences, social sciences, advanced algebraic mathematics, general knowledge, and moral structures. We encourage project presentations and science lab experiments.",
      checklist: [
        "Advanced scientific theories & experiments",
        "Social sciences & civic responsibility history",
        "English grammar, writing & debates",
        "Creative problem-solving assignments",
        "Active sports programs and leadership roles"
      ],
      ageGroup: "11 - 13 Years",
      curriculumFocus: "Science Labs & Social Studies"
    }
  };

  return (
    <div className="relative">
      
      {/* Subpage Banner */}
      <PageHeader
        title="Academics"
        breadcrumb="Academics"
        backgroundImage="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1200"
      />

      {/* 1. ACADEMIC INTRODUCTION */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal direction="up">
              <span className="text-gold-primary font-bold text-xs md:text-sm tracking-wider uppercase bg-gold-light border border-gold-primary/20 px-3.5 py-1 rounded-full mb-4 inline-block">
                Nurturing Excellence
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy-primary font-extrabold tracking-tight mb-4">
                Empowering Students Through Quality Education
              </h2>
              <div className="w-16 h-1.5 bg-gold-primary rounded-full mx-auto mb-6" />
              <p className="text-slate-600 text-base md:text-lg">
                Our balanced academic curricula promote individual attention, modern digital smart board visuals, active sports, and robust value-based pedagogy.
              </p>
            </ScrollReveal>
          </div>

          {/* Interactive Custom Tabs Switcher with Framer Motion */}
          <div className="max-w-5xl mx-auto mb-20">
            <ScrollReveal direction="none">
              
              {/* Tab Buttons */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-4 p-2 bg-slate-100 rounded-2xl border border-slate-200 mb-10">
                {(["pre-primary", "primary", "upper-primary"] as AcademicTab[]).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative z-10 px-6 py-3.5 rounded-xl text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                      activeTab === tab
                        ? "bg-navy-primary text-white shadow-md"
                        : "text-slate-600 hover:text-navy-primary hover:bg-slate-50"
                    }`}
                  >
                    {tab.replace("-", " ")}
                  </button>
                ))}
              </div>

              {/* Tab Display Panel */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white border border-slate-150 rounded-3xl p-8 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  {/* Left content description */}
                  <div className="lg:col-span-7 flex flex-col items-start">
                    <span className="text-gold-primary text-xs font-bold uppercase tracking-wider mb-2 block">
                      {tabContents[activeTab].subtitle}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-navy-primary mb-4 font-heading">
                      {tabContents[activeTab].title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                      {tabContents[activeTab].description}
                    </p>

                    {/* Checkmarks list */}
                    <div className="flex flex-col gap-3 font-semibold text-slate-700 text-xs mb-8">
                      {tabContents[activeTab].checklist.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-gold-primary shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/admission"
                      className="bg-navy-primary hover:bg-navy-light text-white font-bold text-xs px-6 py-3 rounded-full transition-transform duration-300 hover:scale-105 active:scale-95 uppercase tracking-wide inline-flex items-center gap-1.5"
                    >
                      <span>Inquire Admission</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  {/* Right side stats blocks */}
                  <div className="lg:col-span-5 bg-slate-50 border border-slate-100 p-8 rounded-2xl">
                    <div className="flex flex-col gap-6 text-center">
                      <div className="border-b border-slate-200 pb-4">
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Recommended Age</div>
                        <div className="text-navy-primary text-2xl font-extrabold mt-1">{tabContents[activeTab].ageGroup}</div>
                      </div>
                      <div className="border-b border-slate-200 pb-4">
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Curriculum Focus</div>
                        <div className="text-navy-primary text-2xl font-extrabold mt-1">{tabContents[activeTab].curriculumFocus}</div>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Academic Scheme</div>
                        <div className="text-gold-primary text-2xl font-extrabold mt-1">Activity Based (CCE)</div>
                      </div>
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>

            </ScrollReveal>
          </div>

          {/* 4 Pedagogy Pillar Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Play-way Learning",
                description: " Toddlers grasp basics through colorful toys, flashcards, sensory sandboxes, and pictorial story cards.",
                icon: <Smile className="w-7 h-7 text-gold-primary" />,
                bg: "bg-gold-light"
              },
              {
                title: "Activity Based Methods",
                description: "Encouraging kids to construct science projects, perform roleplays, and make charts for real practical understanding.",
                icon: <Compass className="w-7 h-7 text-green-600" />,
                bg: "bg-green-50"
              },
              {
                title: "Individual Attention",
                description: "Strict class ratio limits (1:20) allowing our qualified educators to study and support each toddler's pace.",
                icon: <Users className="w-7 h-7 text-purple-600" />,
                bg: "bg-purple-50"
              },
              {
                title: "Continuous Evaluation",
                description: "CCE pattern utilizing weekly checklists, classroom speaking performance, rather than single high-stress exams.",
                icon: <Award className="w-7 h-7 text-orange-600" />,
                bg: "bg-orange-50"
              }
            ].map((pillar, idx) => (
              <ScrollReveal direction="up" delay={idx * 0.08} key={pillar.title} className="flex">
                <div className="glow-card w-full bg-white border border-slate-100 rounded-3xl p-7 flex flex-col items-start shadow-sm">
                  <div className={`p-4 rounded-xl ${pillar.bg} mb-5`}>
                    {pillar.icon}
                  </div>
                  <h3 className="text-navy-primary font-bold text-lg mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed mt-auto font-medium">
                    {pillar.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 2. HEALTHY & SAFE ENVIRONMENT SECTION */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left side checkbox list */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <ScrollReveal direction="up">
                <span className="text-gold-primary font-bold text-xs md:text-sm tracking-wider uppercase bg-gold-light border border-gold-primary/20 px-3 py-1 rounded-full mb-4.5 inline-block">
                  Hygienic Campus Directives
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy-primary font-extrabold tracking-tight leading-tight mb-6">
                  Healthy & Safe Environment
                </h2>
                <p className="text-slate-600 text-base leading-relaxed mb-8 font-medium">
                  At S.R.S. Memorial, physical health, personal safety, and sanitization are foundational requirements. We strictly implement standard daily hygiene procedures to provide children with a robust and protected educational space.
                </p>

                {/* Checkbox checklist */}
                <div className="flex flex-col gap-4 font-semibold text-slate-700 text-sm mb-8 w-full">
                  {[
                    "Separate and hygienically maintained toilets for Boys & Girls",
                    "Dedicated multiple hand-washing stations with liquid soap dispensers",
                    "100% RO purified, multi-stage filtered cold drinking water plants",
                    "Clean, spacious, and aesthetic classroom corridors and play fields",
                    "Regular campus sanitization and garbage disposal schedules"
                  ].map((checkText, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-gold-primary/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-gold-primary fill-gold-primary" />
                      </div>
                      <span className="leading-tight">{checkText}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/admission"
                  className="bg-navy-primary hover:bg-navy-light text-white font-bold text-xs px-7 py-3.5 rounded-full shadow-md transition-all duration-300 hover:scale-105 active:scale-95 uppercase tracking-wide inline-flex items-center gap-1.5"
                >
                  <span>Admission Enquiry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </ScrollReveal>
            </div>

            {/* Right side student hygiene visual mockup */}
            <div className="lg:col-span-5 relative">
              <ScrollReveal direction="left">
                <div className="absolute inset-0 bg-navy-primary/10 rounded-3xl blur-2xl pointer-events-none -z-10" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] w-full">
                  <img
                    src="https://images.unsplash.com/photo-1608889175123-8ec330b86f84?q=80&w=800"
                    alt="SRS School Student Washing Hands"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-navy-dark/90 backdrop-blur-md px-3.5 py-2 rounded-xl text-white font-bold text-xs border border-white/10 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                    <span>Safe Campus Certified</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

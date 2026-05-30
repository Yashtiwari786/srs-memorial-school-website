"use client";

import React, { useState } from "react";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import {
  FileText,
  Download,
  Calendar,
  Sparkles,
  ArrowRight,
  ClipboardList,
  CheckCircle2,
  PhoneCall,
  User,
  GraduationCap
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AdmissionPage() {
  // Form submission state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    grade: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.studentName && formData.phone && formData.grade) {
      setFormSubmitted(true);
      // Simulate success toast
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          studentName: "",
          parentName: "",
          grade: "",
          phone: "",
          email: "",
          message: ""
        });
      }, 5000);
    }
  };

  const steps = [
    { num: 1, name: "Enquiry", desc: "Submit online query form or visit help desk." },
    { num: 2, name: "Visit School", desc: "Explore campus infrastructure & visual classrooms." },
    { num: 3, name: "Submit Form", desc: "Fill registration booklet with key certificates." },
    { num: 4, name: "Interaction", desc: "Short child-friendly interaction and parent align." },
    { num: 5, name: "Confirmation", desc: "Submit fees & secure seat enrollment card." }
  ];

  return (
    <div className="relative min-h-screen bg-slate-50">

      {/* Subpage Banner */}
      <PageHeader
        title="School Admission"
        breadcrumb="Admission"
        backgroundImage="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1200"
      />

      {/* 1. ADMISSION PROCESS TIMELINE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal direction="up">
              <span className="text-gold-primary font-bold text-xs md:text-sm tracking-wider uppercase bg-gold-light border border-gold-primary/20 px-3.5 py-1 rounded-full mb-4 inline-block">
                Simple Enrollments
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy-primary font-extrabold tracking-tight mb-4">
                Admission Process
              </h2>
              <div className="w-16 h-1.5 bg-gold-primary rounded-full mx-auto mb-6" />
              <p className="text-slate-600 text-base md:text-lg">
                Our admission procedures are transparent, fast, and designed to ensure mutual alignment. Here are the simple steps:
              </p>
            </ScrollReveal>
          </div>

          {/* Timeline steps grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative max-w-6xl mx-auto">
            {/* Background connecting bar for desktop screen */}
            <div className="absolute top-[34px] left-[10%] right-[10%] h-[3px] bg-slate-200 hidden lg:block -z-10" />

            {steps.map((step, idx) => (
              <ScrollReveal direction="up" delay={idx * 0.08} key={step.num} className="flex">
                <div className="w-full text-center flex flex-col items-center group">
                  {/* Number Circle indicator */}
                  <div className="w-18 h-18 rounded-full bg-slate-50 border-[3px] border-slate-200 group-hover:border-gold-primary group-hover:bg-gold-light flex items-center justify-center text-navy-primary font-extrabold text-2xl transition-all duration-300 shadow-sm relative mb-5 shrink-0">
                    <span className="group-hover:scale-110 transition-transform duration-300">{step.num}</span>
                  </div>

                  <h3 className="text-navy-primary font-extrabold text-lg mb-2 font-heading">
                    {step.name}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed max-w-[200px]">
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 2. SPLIT SECTION: REQUIRED DOCUMENTS VS CTA CARD */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">

            {/* Left: Required Documents List */}
            <div className="lg:col-span-7 flex">
              <ScrollReveal direction="right" className="w-full">
                <div className="bg-white border border-slate-150 p-8 md:p-10 rounded-3xl shadow-sm h-full flex flex-col items-start">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-navy-primary/10 flex items-center justify-center text-navy-primary mb-6">
                    <ClipboardList className="w-6 h-6" />
                  </div>
                  <h3 className="text-navy-primary font-extrabold text-2xl mb-4 font-heading">
                    Documents Required for Admission
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-6 font-semibold">
                    Please keep copy credentials of these items ready when visiting the school office to submit the registration booklet:
                  </p>

                  <div className="flex flex-col gap-4.5 font-semibold text-slate-700 text-sm w-full mb-4">
                    {[
                      "Official Birth Certificate of the Child",
                      "Aadhaar Card copy of the Student",
                      "Aadhaar Card copy of both Parents/Guardian",
                      "3 passport-sized color photos of the child",
                      "Previous School Report Card / TC (Class 2 and above)",
                      "Parent Income certificate / Caste certificate (if applicable)"
                    ].map((doc, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-gold-primary shrink-0" />
                        <span>{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: admissions Open 2025-26 CTA Banner card */}
            <div className="lg:col-span-5 flex">
              <ScrollReveal direction="left" className="w-full">
                <div className="bg-navy-primary border border-white/5 p-8 md:p-10 rounded-3xl shadow-xl text-white h-full flex flex-col items-start relative overflow-hidden">

                  {/* Decorative background circle */}
                  <div className="absolute top-[10%] right-[10%] w-64 h-64 rounded-full bg-white/3 blur-3xl pointer-events-none" />

                  <span className="text-gold-primary font-bold text-xs tracking-wider bg-white/5 border border-gold-primary/30 px-3 py-1 rounded-md mb-5.5">
                    HURRY! LIMITED SEATS
                  </span>

                  <h3 className="text-2xl md:text-3xl font-extrabold font-heading text-white mb-4.5">
                    Admissions Open 2025-26
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-8">
                    Enrollments are ongoing for nursery playgroups up to upper-primary grade 8 classes. Save a seat by making a quick digital enquiry.
                  </p>

                  {/* Bullet features */}
                  <div className="flex flex-col gap-3 text-slate-200 text-xs font-semibold mb-8 w-full">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-gold-primary" />
                      <span>Individual Attention (1:20 Ratio)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-gold-primary" />
                      <span>Smart Video Enabled Classrooms</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4.5 w-full mt-auto">
                    <a
                      href="#enquiry-form"
                      className="text-center bg-gold-primary hover:bg-gold-hover text-navy-dark font-extrabold text-xs px-6 py-3.5 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 active:scale-95 uppercase tracking-wide flex-1"
                    >
                      Enquire Now
                    </a>
                    <a
                      href="#"
                      className="text-center bg-white/5 hover:bg-white/10 text-white font-semibold text-xs px-6 py-3.5 rounded-full border border-white/20 transition-transform duration-300 hover:scale-105 active:scale-95 uppercase tracking-wide flex-1 inline-flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4 text-gold-primary" />
                      <span>Download Form</span>
                    </a>
                  </div>

                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE ENQUIRY FORM CONTAINER */}
      <section id="enquiry-form" className="py-20 bg-white border-t border-slate-200 relative">
        <div className="max-w-4xl mx-auto px-4">

          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-14">
            <ScrollReveal direction="up">
              <span className="text-gold-primary font-bold text-xs md:text-sm tracking-wider uppercase bg-gold-light border border-gold-primary/20 px-3 py-1 rounded-full mb-4 inline-block">
                Query Desk
              </span>
              <h2 className="text-2xl md:text-4xl text-navy-primary font-extrabold tracking-tight mb-3">
                Admission Enquiry Form
              </h2>
              <p className="text-slate-500 text-sm">
                Submit details below. Our administrative registration office desk will contact you via email or phone call within 24 business hours.
              </p>
            </ScrollReveal>
          </div>

          {/* Enquiry form with interactive state feedback */}
          <ScrollReveal direction="up">
            <div className="bg-white border border-slate-150 p-8 md:p-10 rounded-3xl shadow-sm">
              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12 flex flex-col items-center justify-center"
                  >
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-6.5 shadow-sm border border-green-200 animate-bounce">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-navy-primary font-extrabold text-2xl mb-2 font-heading">
                      Form Submitted Successfully!
                    </h3>
                    <p className="text-slate-500 text-sm max-w-md leading-relaxed mb-6 font-medium">
                      Thank you for inquiring at S.R.S. Memorial School. We have received your request and our admission desk will reach out shortly.
                    </p>
                    <div className="text-xs text-slate-400">
                      Auto-resetting form in a few seconds...
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                      {/* Student Name */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-navy-primary font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                          <User className="w-3.5 h-3.5 text-gold-primary" />
                          <span>Student Full Name *</span>
                        </label>
                        <input
                          type="text"
                          name="studentName"
                          value={formData.studentName}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter child's full name"
                          className="px-4.5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-gold-primary bg-slate-50/50 text-sm font-semibold text-slate-700"
                        />
                      </div>

                      {/* Parent Name */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-navy-primary font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                          <User className="w-3.5 h-3.5 text-gold-primary" />
                          <span>Parent / Guardian Name *</span>
                        </label>
                        <input
                          type="text"
                          name="parentName"
                          value={formData.parentName}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter parent's name"
                          className="px-4.5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-gold-primary bg-slate-50/50 text-sm font-semibold text-slate-700"
                        />
                      </div>

                      {/* Grade Seeking */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-navy-primary font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                          <GraduationCap className="w-3.5 h-3.5 text-gold-primary" />
                          <span>Grade Seeking Admission *</span>
                        </label>
                        <select
                          name="grade"
                          value={formData.grade}
                          onChange={handleInputChange}
                          required
                          className="px-4.5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-gold-primary bg-slate-50/50 text-sm font-semibold text-slate-750"
                        >
                          <option value="">Select Grade Level</option>
                          <option value="Nursery">Nursery / Playgroup</option>
                          <option value="LKG">Lower KG (LKG)</option>
                          <option value="UKG">Upper KG (UKG)</option>
                          <option value="Class-1">Class I (1st)</option>
                          <option value="Class-2">Class II (2nd)</option>
                          <option value="Class-3">Class III (3rd)</option>
                          <option value="Class-4">Class IV (4th)</option>
                          <option value="Class-5">Class V (5th)</option>
                          <option value="Class-6">Class VI (6th)</option>
                          <option value="Class-7">Class VII (7th)</option>
                          <option value="Class-8">Class VIII (8th)</option>
                        </select>
                      </div>

                      {/* Phone number */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-navy-primary font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                          <PhoneCall className="w-3.5 h-3.5 text-gold-primary" />
                          <span>Active Mobile Number *</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter 10-digit number"
                          className="px-4.5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-gold-primary bg-slate-50/50 text-sm font-semibold text-slate-700"
                        />
                      </div>

                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-navy-primary font-bold text-xs uppercase tracking-wider">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter email address"
                        className="px-4.5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-gold-primary bg-slate-50/50 text-sm font-semibold text-slate-700 w-full"
                      />
                    </div>

                    {/* Query Message */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-navy-primary font-bold text-xs uppercase tracking-wider">
                        Specific Query / Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Type any questions you have here..."
                        className="px-4.5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-gold-primary bg-slate-50/50 text-sm font-semibold text-slate-700 w-full resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-navy-primary hover:bg-navy-light text-white font-extrabold py-4.5 rounded-xl shadow-md uppercase tracking-wider transition-all duration-300 hover:scale-[1.01] active:scale-95 inline-flex items-center justify-center gap-2"
                    >
                      <span>Submit Query Details</span>
                      <ArrowRight className="w-4 h-4 text-gold-primary" />
                    </button>

                  </form>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>

        </div>
      </section>

    </div>
  );
}

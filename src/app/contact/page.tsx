"use client";

import React, { useState } from "react";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  User,
  PhoneCall,
  MailOpen
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.message) {
      setFormSubmitted(true);
      // Simulate success toast
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
      }, 5000);
    }
  };

  const contactDetails = [
    {
      title: "School Campus Address",
      desc: "Jaitpur Tiraha / Gwalior Road, Bihpura, Agra, Uttar Pradesh - 282001",
      icon: <MapPin className="w-6 h-6 text-gold-primary" />,
      bg: "bg-gold-light"
    },
    {
      title: "Administrative Hotline",
      desc: "+91 98765 43210 (Desk Help)",
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      bg: "bg-blue-50"
    },
    {
      title: "Administrative Support Email",
      desc: "principal.srsmemorial@gmail.com",
      icon: <Mail className="w-6 h-6 text-green-600" />,
      bg: "bg-green-50"
    },
    {
      title: "Office Hours",
      desc: "Monday - Saturday: 08:00 AM - 02:00 PM (Sunday Closed)",
      icon: <Clock className="w-6 h-6 text-purple-600" />,
      bg: "bg-purple-50"
    }
  ];

  return (
    <div className="relative min-h-screen bg-slate-50">
      
      {/* Subpage Banner */}
      <PageHeader
        title="Contact Us"
        breadcrumb="Contact Us"
        backgroundImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200"
      />

      {/* 1. CONTACT INFO & FORM GRID */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Contact details */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <ScrollReveal direction="right" className="w-full h-full flex flex-col gap-6">
              <div>
                <span className="text-gold-primary font-bold text-xs md:text-sm tracking-wider uppercase bg-gold-light border border-gold-primary/20 px-3.5 py-1 rounded-full mb-4 inline-block">
                  Get in Touch
                </span>
                <h2 className="text-3xl md:text-4xl text-navy-primary font-extrabold tracking-tight mb-4">
                  We Would Love to Hear From You
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                  Have questions about seats availability, curriculum details, or transport routes? Get in touch with our help desk using contacts below or submit the form.
                </p>
              </div>

              {/* Grid of contact details cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-grow">
                {contactDetails.map((card) => (
                  <div
                    key={card.title}
                    className="border border-slate-100 p-5 rounded-2xl flex flex-col items-start bg-white shadow-sm"
                  >
                    <div className={`p-3 rounded-xl ${card.bg} mb-4.5`}>
                      {card.icon}
                    </div>
                    <h3 className="text-navy-primary font-bold text-sm mb-1.5">
                      {card.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed font-semibold">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Contact form */}
          <div className="lg:col-span-6 flex">
            <ScrollReveal direction="left" className="w-full">
              <div className="bg-white border border-slate-150 p-8 md:p-10 rounded-3xl shadow-sm h-full flex flex-col justify-center">
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
                        Message Sent!
                      </h3>
                      <p className="text-slate-500 text-sm max-w-sm leading-relaxed mb-6 font-medium">
                        Your message has been successfully dispatched to S.R.S. Memorial administration. We will reply back via email or call soon.
                      </p>
                      <div className="text-xs text-slate-400">
                        Auto-resetting form in a few seconds...
                      </div>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      
                      {/* Name */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-navy-primary font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-gold-primary" />
                          <span>Full Name *</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Your name"
                          className="px-4.5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-gold-primary bg-slate-50/50 text-sm font-semibold text-slate-700 w-full"
                        />
                      </div>

                      {/* Email */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-navy-primary font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                          <MailOpen className="w-3.5 h-3.5 text-gold-primary" />
                          <span>Email Address</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="yourname@example.com"
                          className="px-4.5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-gold-primary bg-slate-50/50 text-sm font-semibold text-slate-700 w-full"
                        />
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-navy-primary font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                          <PhoneCall className="w-3.5 h-3.5 text-gold-primary" />
                          <span>Phone Number *</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder="Your 10-digit number"
                          className="px-4.5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-gold-primary bg-slate-50/50 text-sm font-semibold text-slate-700 w-full"
                        />
                      </div>

                      {/* Message */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-navy-primary font-bold text-xs uppercase tracking-wider">
                          Your Message / Query *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={4}
                          placeholder="Write your message here..."
                          className="px-4.5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-gold-primary bg-slate-50/50 text-sm font-semibold text-slate-700 w-full resize-none"
                        />
                      </div>

                      {/* Send Button */}
                      <button
                        type="submit"
                        className="w-full bg-navy-primary hover:bg-navy-light text-white font-extrabold py-4 rounded-xl shadow-md uppercase tracking-wider transition-all duration-300 hover:scale-[1.01] active:scale-95 inline-flex items-center justify-center gap-2"
                      >
                        <span>Send Message</span>
                        <Send className="w-4 h-4 text-gold-primary" />
                      </button>

                    </form>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* 2. RESPONSIVE EMBEDDED GOOGLE MAPS */}
      <section className="relative h-96 w-full border-t border-slate-200">
        <ScrollReveal direction="none" className="w-full h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113579.79469738096!2d77.90997380312015!3d27.176670104113283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974775d7b5bf3b3%3A0xc0c8f53716a4a243!2sAgra%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="S.R.S. Memorial Kids Garden School Location Map"
          />
        </ScrollReveal>
      </section>

    </div>
  );
}

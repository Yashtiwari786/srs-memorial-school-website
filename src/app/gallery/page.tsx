"use client";

import React, { useState } from "react";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { galleryItems } from "@/data/schoolData";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn, Grid } from "lucide-react";

type GalleryCategory = "All" | "Annual Function" | "Sports" | "Celebrations" | "Activities" | "Classroom";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(8);

  const categories: GalleryCategory[] = [
    "All",
    "Annual Function",
    "Sports",
    "Celebrations",
    "Activities",
    "Classroom"
  ];

  // Filtering Logic
  const filteredItems = activeFilter === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const displayedItems = filteredItems.slice(0, visibleCount);

  // Lightbox handlers
  const handleOpenLightbox = (index: number) => {
    // Find absolute index in the filtered items array
    setLightboxIndex(index);
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 4, filteredItems.length));
  };

  return (
    <div className="relative min-h-screen bg-slate-50">
      
      {/* Subpage Banner */}
      <PageHeader
        title="Photo Gallery"
        breadcrumb="Gallery"
        backgroundImage="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200"
      />

      {/* 1. FILTER TABS & IMAGE GRID */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2.5 md:gap-3.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveFilter(cat);
                setVisibleCount(8); // Reset visible count on filter change
              }}
              className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-semibold tracking-wide uppercase transition-all duration-300 border ${
                activeFilter === cat
                  ? "bg-navy-primary text-white border-navy-primary shadow-md"
                  : "bg-white text-slate-600 hover:text-navy-primary border-slate-200 hover:bg-slate-100"
              }`}
            >
              {cat === "All" ? "All Events" : cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          <AnimatePresence mode="popLayout">
            {displayedItems.map((item, index) => {
              // Find full item absolute index in filteredItems array
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  onClick={() => handleOpenLightbox(index)}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm group border border-slate-150 bg-white cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                  {/* Glass Hover zoom overlay */}
                  <div className="absolute inset-0 bg-navy-dark/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <div className="w-10 h-10 rounded-full bg-gold-primary/20 border border-gold-primary/40 flex items-center justify-center text-gold-primary self-center mb-auto mt-6 transition-transform duration-300 group-hover:scale-110">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                    <span className="bg-gold-primary text-navy-dark text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md w-fit mb-1.5">
                      {item.category}
                    </span>
                    <h3 className="text-white font-bold text-xs md:text-sm truncate">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {filteredItems.length > displayedItems.length && (
          <div className="text-center">
            <ScrollReveal direction="up">
              <button
                onClick={handleLoadMore}
                className="bg-navy-primary hover:bg-navy-light text-white font-extrabold text-xs px-9 py-4 rounded-full shadow-md transition-all duration-300 hover:scale-105 active:scale-95 uppercase tracking-wider"
              >
                Load More
              </button>
            </ScrollReveal>
          </div>
        )}

      </section>

      {/* 2. FULL FEATURED LIGHTBOX VIEWER */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex flex-col items-center justify-center p-4 md:p-8"
          >
            {/* Close handler */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors duration-200 bg-white/10 p-2 rounded-full border border-white/20 hover:scale-105"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/15 p-3 rounded-full border border-white/20 transition-transform duration-200 hover:scale-110 active:scale-90"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/15 p-3 rounded-full border border-white/20 transition-transform duration-200 hover:scale-110 active:scale-90"
              aria-label="Next Image"
            >
              <ChevronRight className="w-7 h-7" />
            </button>

            {/* Image Slider Wrapper */}
            <motion.div
              initial={{ scale: 0.92, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 15 }}
              className="w-full max-w-4xl max-h-[75vh] aspect-[4/3] relative rounded-2xl overflow-hidden bg-black/50 border border-white/10 shadow-2xl flex items-center justify-center"
            >
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>

            {/* Caption Text Below Visual */}
            <div className="text-center mt-6 max-w-xl px-4">
              <span className="bg-gold-primary text-navy-dark text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md mb-2 inline-block">
                {filteredItems[lightboxIndex].category}
              </span>
              <h2 className="text-white text-base md:text-lg font-bold">
                {filteredItems[lightboxIndex].title}
              </h2>
              <div className="text-slate-400 text-xs font-semibold mt-1">
                Image {lightboxIndex + 1} of {filteredItems.length}
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

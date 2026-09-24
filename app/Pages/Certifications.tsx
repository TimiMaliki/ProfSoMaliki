'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import cert1 from "../images/cert1.jpg"
import cert2 from "../images/cert2.jpg"
import cert3 from "../images/cert3.jpg"
import cert4 from "../images/cert4.jpg"
import cert5 from "../images/cert5.jpg"
import cert6 from "../images/cert6.jpg"
import cert7 from "../images/cert7.jpg"
import TrippleLines from '../component/TrippleLines';
import StraightLines from '../component/StraightLines';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  imageSrc: string;
  alt: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Adekunle Kukoyi Prize in Mathematics",
    issuer: "University of Ibadan",
    date: "July 1986",
    imageSrc: cert1.src,
    alt: "Adekunle Kukoyi Prize Certificate"
  },
  {
    id: 2,
    title: "Mathematics Department Prize",
    issuer: "University of Ibadan",
    date: "July 1986",
    imageSrc: cert2.src,
    alt: "Mathematics Department Prize Certificate"
  },
  {
    id: 3,
    title: "ASICTP Federation Scheme Award",
    issuer: "ASICTP, Trieste, Italy",
    date: "Oct - Dec 1994",
    imageSrc: cert3.src,
    alt: "ASICTP Federation Scheme Award"
  },
  {
    id: 4,
    title: "ASICTP Research Fellowship Award",
    issuer: "ASICTP, Trieste, Italy",
    date: "July 1996",
    imageSrc: cert4.src,
    alt: "ASICTP Research Fellowship Certificate"
  },
  {
    id: 5,
    title: "GAEC Visiting Scientist Appointment",
    issuer: "Ghana Atomic Energy Commission",
    date: "July - Aug 1996",
    imageSrc: cert5.src,
    alt: "GAEC Visiting Scientist Certificate"
  },
  {
    id: 6,
    title: "AIMS Postdoctoral Fellowship",
    issuer: "African Institute for Mathematical Sciences",
    date: "2007",
    imageSrc: cert6.src,
    alt: "AIMS Postdoctoral Fellowship Certificate"
  },
  {
    id: 7,
    title: "International Mathematical Olympiad Gold Medal",
    issuer: "International Mathematical Olympiad",
    date: "2008",
    imageSrc: cert7.src,
    alt: "International Mathematical Olympiad Gold Medal Certificate"
  }
];

export default function CertificateCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  }, []);

  // Handle Keyboard Navigation (Arrow Keys + Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'Escape') setIsLightboxOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return ( 
   <>
    <div className="md:">
        <StraightLines header="Certifications" title=""/>
     </div>
      <div className="py-2 md:py-4 p-2 md:p-20">
        <TrippleLines />
     </div>
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
       
      {/* Title Header */}
      <div className="mb-8 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
          Certificates & Recognition
        </h2>
        <div className="mt-2 h-1 w-20 bg-black rounded-full mx-auto md:mx-0"></div>
      </div>

      {/* Main Carousel Display */}
      <div className="relative group bg-gray-900 rounded-3xl overflow-hidden shadow-2xl">
        {/* Active Slide Image */}
        <div 
          className="relative h-87.5 sm:h-125 w-full cursor-pointer flex items-center justify-center bg-black/40"
          onClick={() => setIsLightboxOpen(true)}
        >
          <Image
            src={certificates[currentIndex].imageSrc}
            alt={certificates[currentIndex].alt}
            fill
            priority
            className="object-contain transition-transform duration-500 group-hover:scale-105"
          />

          {/* Hover Zoom Prompt Overlay */}
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-sm sm:text-base">
            <Maximize2 className="w-5 h-5" />
            <span>Click to View Fullscreen</span>
          </div>

          {/* Certificate Title Badge at Bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/90 via-black/50 to-transparent text-white">
            <span className="text-xs font-semibold tracking-wider uppercase text-gray-300">
              {certificates[currentIndex].date} • {certificates[currentIndex].issuer}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold mt-1">
              {certificates[currentIndex].title}
            </h3>
          </div>
        </div>

        {/* Carousel Navigation Arrows */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg backdrop-blur-md transition-all hover:scale-110 active:scale-95"
          aria-label="Previous Certificate"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg backdrop-blur-md transition-all hover:scale-110 active:scale-95"
          aria-label="Next Certificate"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide Indicators / Thumbnails */}
      <div className="flex justify-center items-center gap-2 mt-6">
        {certificates.map((cert, index) => (
          <button
            key={cert.id}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? 'w-8 bg-black'
                : 'w-2.5 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8"
          >
            {/* Lightbox Header Bar */}
            <div className="flex items-center justify-between text-white max-w-7xl mx-auto w-full z-10">
              <div>
                <h4 className="text-lg font-bold">{certificates[currentIndex].title}</h4>
                <p className="text-xs text-gray-400">{certificates[currentIndex].issuer} ({certificates[currentIndex].date})</p>
              </div>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-2 text-gray-400 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Image Viewport */}
            <div className="relative flex-1 w-full max-w-6xl mx-auto my-4 flex items-center justify-center">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="relative w-full h-full"
              >
                <Image
                  src={certificates[currentIndex].imageSrc}
                  alt={certificates[currentIndex].alt}
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>

              {/* Lightbox Prev Button */}
              <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 sm:p-4 rounded-full backdrop-blur-md transition-all hover:scale-110"
                aria-label="Previous Certificate"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              {/* Lightbox Next Button */}
              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 sm:p-4 rounded-full backdrop-blur-md transition-all hover:scale-110"
                aria-label="Next Certificate"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>

            {/* Lightbox Footer Counter */}
            <div className="text-center text-xs text-gray-400 font-mono">
              {currentIndex + 1} / {certificates.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
   </>
  );
}
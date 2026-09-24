import React from 'react';
import Image from 'next/image';
import { Calendar, Clock, MapPin, ExternalLink, Presentation } from 'lucide-react';
import maple1 from "../images/maple2024.jpg"
import maple2 from "../images/maple2025.jpg"


interface SpeakingEvent {
  id: string;
  title: string;
  subtitle: string;
  organizer: string;
  topic: string;
  date: string;
  time: string;
  type: string;
  imageSrc: string;
  link: string;
}

const speakingEvents: SpeakingEvent[] = [
  {
    id: '01',
    title: 'Online Maple Software Workshop 2025',
    subtitle: 'Using Maple/MapleSim Software to Solve Problems in Sciences, Differential Equations, Engineering',
    organizer: 'Tangier Int’l Co. (TIC)',
    topic: 'Introduction to Artificial Intelligence with Maple Applications',
    date: '10th – 14th February, 2025',
    time: '8:00 AM – 4:00 PM',
    type: 'Online Workshop',
    imageSrc: maple2.src, 
    link: 'https://workshop.tangier1.com.ng/',
  },
  {
    id: '02',
    title: 'Online Maple Software Workshop 2024',
    subtitle: 'Using Maple/MapleSim Software to Solve Problems in Robotics, Mathematical Modeling, Physics, Engineering and Science',
    organizer: 'Tangier Int’l Co. (TIC)',
    topic: 'Introduction to Artificial Intelligence with Maple Applications',
    date: '14th – 16th October, 2024',
    time: '8:00 AM – 4:00 PM',
    type: 'Online Workshop',
    imageSrc: maple1.src, 
    link: 'https://workshop.tangier1.com.ng/',
  },
];

export default function SpeakingEvents() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto text-gray-900">
      {/* Section Header */}
      <div className="mb-12 border-b border-gray-200 pb-8">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-500">
          <Presentation className="w-4 h-4 text-black" />
          <span>Keynotes & Workshops</span>
        </div>
        <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-gray-900">
          Speaking Events
        </h2>
        <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl">
          Featured workshops and computational mathematics presentations led as a key resource person.
        </p>
      </div>

      {/* 2-Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {speakingEvents.map((event) => (
          <article
            key={event.id}
            className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
          >
            {/* Event Flyer / Image Banner */}
            <div className="relative w-full h-80 sm:h-100 bg-gray-100 overflow-hidden">
              <Image
                src={event.imageSrc}
                alt={event.title}
                fill
                priority
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-xs font-semibold bg-black/80 text-white backdrop-blur-md rounded-full shadow-md">
                  {event.type}
                </span>
              </div>
            </div>

            {/* Event Details Content */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                {/* Meta info: Date & Time */}
                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-medium text-gray-500 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-gray-700" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-gray-700" />
                    <span>{event.time}</span>
                  </div>
                </div>

                {/* Event Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-black transition-colors">
                  {event.title}
                </h3>

                {/* Organizer */}
                <p className="mt-1 text-xs font-semibold tracking-wider uppercase text-gray-500">
                  Organized by: {event.organizer}
                </p>

                {/* Speaker Topic Highlight */}
                <div className="mt-5 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <span className="text-xs font-bold uppercase text-gray-400 tracking-wider">
                    Session Topic
                  </span>
                  <p className="mt-1 text-base font-bold text-gray-900">
                    "{event.topic}"
                  </p>
                </div>

                {/* Scope Description */}
                <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                  {event.subtitle}
                </p>
              </div>

              {/* Action Link Footer */}
              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-gray-400">
                  EVENT #{event.id}
                </span>
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors"
                >
                  <span>Workshop Website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
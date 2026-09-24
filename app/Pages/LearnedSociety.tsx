import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import TrippleLines from '../component/TrippleLines';
import StraightLines from '../component/StraightLines';

interface PaperCard {
  id: string;
  category: string;
  title: string;
  href?: string;
}

const featuredPapers: PaperCard[] = [
  {
    id: '01',
    category: '(AMU)',
    title: 'African Mathematical Union',
    href: '/publications/deconstructing-bias',
  },
  {
    id: '02',
    category: '(MAN)',
    title: 'Mathematics Association of Nigeria',
    href: '/publications/digital-syntax',
  },
  {
    id: '03',
    category: '(NAMP)',
    title: 'Nigerian Association of Mathematical Physics',
    href: '/publications/semiotic-turing-test',
  },
    {
    id: '04',
    category: '(IACSIT)',
    title: 'International Association of Computer Science and Information Technology. Membership no: 80342669',
    href: '/publications/semiotic-turing-test',
  },
    {
    id: '05',
    category: '(NMS)',
    title: 'Nigerian Mathematical Society',
    href: '/publications/semiotic-turing-test',
  },
 
];

export default function SelectedWorks() {
  return (
   <>
      <div className="md:p-10">
        <StraightLines header="Membership of Learned Society" title=""/>
     </div>
     <div className="py-2 md:py-4 p-2 md:p-20">
        <TrippleLines />
     </div>

     
    <section className="py-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto text-gray-900">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-gray-200">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Selected Works &amp; Papers
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            A curated collection of my most impactful contributions to the field. For a comprehensive list, please visit the publications page.
          </p>
        </div>

        {/* View All Button */}
        <div className="shrink-0">
          <Link
            href="/publications"
            className="inline-flex items-center gap-2 font-semibold text-sm sm:text-base text-gray-900 hover:text-gray-600 transition-colors group"
          >
            <span>View All Publications</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>

      {/* Publications / Selected Works Grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {featuredPapers.map((paper) => (
          <Link
            key={paper.id}
            href={paper.href || '#'}
            className="group relative flex flex-col justify-between p-8 bg-gray-50 hover:bg-black hover:text-white rounded-2xl transition-all duration-300 ease-in-out border border-gray-100 hover:border-gray-800 shadow-sm hover:shadow-xl"
          >
            <div>
              {/* Category / Venue */}
              <p className="text-xs font-semibold tracking-wider text-gray-500 uppercase group-hover:text-white transition-colors">
                {paper.category}
              </p>

              {/* Title */}
              <h3 className="mt-4 text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-white transition-colors leading-snug">
                {paper.title}
              </h3>
            </div>

            {/* Bottom Row */}
            <div className="mt-12 flex items-center justify-between pt-4 border-t border-gray-200/60 group-hover:border-gray-800 transition-colors">
              <span className="text-xs font-mono font-medium text-gray-400 group-hover:text-white">
                {paper.id}
              </span>
              <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </Link>
        ))}
      </div>
    </section>
   </>
  );
}
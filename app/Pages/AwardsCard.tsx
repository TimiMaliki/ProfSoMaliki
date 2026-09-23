import React from 'react';

interface Award {
  id: number;
  title: string;
  institution: string;
  description: string;
  date: string;
  category: string;
}

const awards: Award[] = [
  {
    id: 1,
    title: "Adekunle Kukoyi Prize in Mathematics",
    institution: "University of Ibadan",
    description: "Awarded for outstanding performance in final year B.Sc. Examinations.",
    date: "July 1986",
    category: "Academic Excellence"
  },
  {
    id: 2,
    title: "Mathematics Department Prize",
    institution: "University of Ibadan",
    description: "Awarded for overall best graduating student in the class of July 1986.",
    date: "July 1986",
    category: "Top Scholar"
  },
  {
    id: 3,
    title: "Federation Scheme Award",
    institution: "ASICTP, Trieste, Italy",
    description: "Federation Scheme Award of the Abdus Salam International Centre for Theoretical Physics.",
    date: "Oct – Dec 1994",
    category: "International Award"
  },
  {
    id: 4,
    title: "ASICTP Research Fellowship",
    institution: "ASICTP, Trieste, Italy",
    description: "Research Fellowship Award of the Abdus Salam International Centre for Theoretical Physics.",
    date: "July 1996",
    category: "Fellowship"
  },
  {
    id: 5,
    title: "Visiting Scientist Appointment",
    institution: "Ghana Atomic Energy Commission",
    description: "Centre for Mathematics Research, GAEC, Legon, Accra, Ghana.",
    date: "July – Aug 1996",
    category: "Visiting Scholar"
  },
  {
    id: 6,
    title: "AIMS Postdoctoral Fellowship",
    institution: "African Institute for Mathematical Sciences",
    description: "Postdoctoral Fellowship Award at AIMS, Muizenberg, South Africa.",
    date: "2007",
    category: "Postdoc Fellowship"
  }
];

export default function HonorsAndAwards() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
          Honors & Awards
        </h2>
        <div className="mt-2 h-1 w-20 bg-black rounded-full mx-auto md:mx-0"></div>
      </div>

      {/* 6-Card Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {awards.map((award) => (
          <div
            key={award.id}
            className="group relative flex flex-col justify-between p-6 sm:p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
            <div>
              {/* Category & Date Header */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gray-700 bg-gray-100 rounded-full">
                  {award.category}
                </span>
                <span className="text-xs font-medium text-gray-500">
                  {award.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-black transition-colors">
                {award.title}
              </h3>

              {/* Institution */}
              <p className="mt-1 text-sm font-semibold text-gray-600">
                {award.institution}
              </p>

              {/* Description */}
              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                {award.description}
              </p>
            </div>

            {/* Bottom Accent Border Indicator */}
            <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
              <span className="text-xs font-bold text-gray-400 group-hover:text-black transition-colors">
                #{award.id.toString().padStart(2, '0')}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
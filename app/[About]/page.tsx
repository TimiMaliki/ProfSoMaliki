
import React from "react";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  BookOpen,
  BrainCircuit,
  CalendarDays,
  GraduationCap,
  Library,
  Microscope,
  Network,
  Presentation,
  Sigma,
} from "lucide-react";

const appointments = [
  {
    date: "October 1988",
    role: "Graduate Assistant",
    institution: "University of Ibadan, Nigeria.",
  },
  {
    date: "January 1989",
    role: "Assistant Lecturer",
    institution: "University of Ibadan, Nigeria.",
  },
  {
    date: "October 1992",
    role: "Lecturer Grade II",
    institution: "University of Ibadan, Nigeria.",
  },
  {
    date: "October 1998",
    role: "Lecturer Grade II",
    institution: "Olabisi Onabanjo University, Nigeria.",
  },
  {
    date: "August 2001",
    role: "Lecturer I",
    institution: "Ebonyi State University, Nigeria.",
  },
  {
    date: "October 2005",
    role: "Senior Lecturer",
    institution: "Ebonyi State University, Nigeria.",
  },
  {
    date: "June 2014",
    role: "Associate Professor",
    institution: "Michael Okpara Federal University, Nigeria.",
  },
  {
    date: "September 2021",
    role: "Adjunct (Full) Professor",
    institution:
      "David Umahi Federal University of Health Sciences, Uburu, Ebonyi State, Nigeria.",
  },
  {
    date: "October 2022",
    role: "Professor",
    institution: "Michael Okpara Federal University, Nigeria.",
  },
];

const researchExperience = [
  {
    date: "June 1994",
    role: "Research Associate",
    description:
      "Computation Fluid Flow in DRISERS. Senate Interdisciplinary Research, University of Ibadan.",
  },
  {
    date: "February 1999",
    role: "Research Fellow",
    description:
      "In charge of Computation and Program Development, Data Base for the Sciences Research Project, Laboratory of Biophysical Chemistry, Department of Chemistry, University of Ibadan.",
  },
  {
    date: "July 1999",
    role: "Regular Associate",
    description:
      "Non-Commutative Stochastic Differential Equations. Abdus Salam International Center for Theoretical Physics, Trieste, Italy.",
  },
  {
    date: "October 2007",
    role: "Postdoctoral Fellow",
    description:
      "Quantum geometry. African Institute for Mathematical Sciences (AIMS), Muizenberg, South Africa.",
  },
];

const publications = [
  {
    year: "2024",
    title:
      "Deep learning approach for automatic speech recognition in the presence of noise.",
    citation:
      "Oruh Jane, Maliki Olaniyi S. South Florida Journal of Development, Miami, v.5, n.7, p. 01-13, (2024). ISSN 2675-5459. DOI: 10.46932/sfjdv5n7-009.",
  },
  {
    year: "2023",
    title:
      "Stability and HOPF Bifurcation Analysis of Periodic Solutions of a Duffing Equation.",
    citation:
      "Onuma M. O., Eze E. O., Maliki S. O. Scholars Journal of Physics, Mathematics and Statistics, (2023), Aug 10(6): 132-139. DOI: 10.36347/sjpms.2022.v10i06.002.",
  },
  {
    year: "2022",
    title:
      "Solution of Combined Heat and Power Economic Dispatch Problem Using Direct Optimization Algorithm.",
    citation:
      "Dedacus N. O., Maliki S. O., Chinedu P. A. O., Hillary E. O. Energy and Power Engineering, 2022, 14, 737-746. https://www.scirp.org/journal/epe.",
  },
  {
    year: "2021",
    title:
      "A Novel Method for Solving Ordinary Differential Equations with Artificial Neural Networks.",
    citation:
      "R. N. Okereke, S. O. Maliki, B. I. Oruh. Applied Mathematics, (2021), 12, 900-918.",
  },
  {
    year: "2021",
    title:
      "A Mathematical Model for the Control of Cholera Epidemic without Natural Recovery.",
    citation:
      "S. O. Maliki, C. C. Ogbonna. Applied Mathematics, (2021), 12, 655-668.",
  },
  {
    year: "2021",
    title:
      "Application of q-Calculus to the Solution of Partial q-Differential Equations.",
    citation:
      "S. O. Maliki, B. O. Orie. Applied Mathematics, (2021), 12, 669-678.",
  },
  {
    year: "2021",
    title:
      "Analysis of an Inventory System for Items with Price-Dependent Demand and Time Dependent Three-Parameter Weibull Deterioration Function.",
    citation:
      "P. O. Nwoba, W. I. E. Chukwu, S. O. Maliki. American Journal of Operations Research, Vol. 11 No. 4, July 30, 2021.",
  },
  {
    year: "2020",
    title:
      "Determining the stability condition of a predator-prey interaction with a prescribed delay in the system.",
    citation:
      "S. O. Maliki, B. O. Orie, U. E. Samuel. MathLAB Journal, Vol. 7 (2020). ISSN: 2582-0389.",
  },
  {
    year: "2020",
    title:
      "A novel approach for solving variable coefficient initial value problems using artificial neural networks.",
    citation:
      "R. N. Okereke, S. O. Maliki. Transactions of the Nigerian Association of Mathematical Physics, Vol. 12, 89-96, 2020.",
  },
  {
    year: "2020",
    title:
      "A new perspective for solving third order initial value problems using artificial neural networks.",
    citation:
      "R. N. Okereke, S. O. Maliki. Transactions of the Nigerian Association of Mathematical Physics, Vol. 11, 123-130, 2020.",
  },
  {
    year: "2019",
    title:
      "Analysis of an inventory system for items with stochastic demand and time dependent three-parameter Weibull deterioration function.",
    citation:
      "P. O. Nwoba, W. I. E. Chukwu, S. O. Maliki. Applied Mathematics, 10, 728-742, 2019.",
  },
  {
    year: "2018",
    title:
      "On existence of Periodic Solutions of Certain Second Order Nonlinear Ordinary Differential Equations via Phase Portrait Analysis.",
    citation:
      "S. O. Maliki, S. Ologun. Applied Mathematics, 9, 1225-1237, 2018.",
  },
  {
    year: "2018",
    title:
      "A Mathematical Modelling of the Effect of Treatment in the Control of Malaria in a Population with Infected Immigrants.",
    citation:
      "S. O. Maliki, R. Ngwu, B. O. Onyemegbulem. Applied Mathematics, 9, 1238-1257, 2018.",
  },
  {
    year: "2018",
    title: "On the Stability Analysis of a Coupled Rigid Body.",
    citation:
      "S. O. Maliki, V. O. Anozie. Applied Mathematics, 9, 210-222, 2018.",
  },
  {
    year: "2017",
    title:
      "Geometry is the common thread in a Grand Unified Field Theory.",
    citation:
      "S. O. Maliki. Journal of Physical Science and Applications 7 (4), 38-46, 2017. DOI: 10.17265/2159-5348/2017.04.001.",
  },
  {
    year: "2016",
    title:
      "Asymptotic behaviour of solutions of certain third order nonlinear differential equations via Phase Portrait Analysis.",
    citation:
      "S. O. Maliki, R. N. Okereke. Applied Mathematics, 7, 2324-2335, 2016.",
  },
  {
    year: "2016",
    title: "A note on differential equation with a large parameter.",
    citation:
      "S. O. Maliki, R. N. Okereke. Applied Mathematics, 7, 183-192, 2016.",
  },
  {
    year: "2014",
    title: "On q-deformed Calculus in Quantum Geometry.",
    citation:
      "S. O. Maliki, E. I. Ugwu. Applied Mathematics, 5, 1586-1593, 2014.",
  },
  {
    year: "2014",
    title:
      "Neural Network in the forecasting of GPD of Nigeria as a function of RGDP of Nigeria as a function of key stock market indicators.",
    citation:
      "S. O. Maliki, E. Ibina, O. E. Eze. Pelagia Research Library Advances in Applied Science Research, 5(3): 212-203; 2014.",
  },
  {
    year: "2014",
    title:
      "Stability analysis of a system of coupled harmonic oscillators.",
    citation:
      "S. O. Maliki, P. O. Nwoba. Pelagia Research Library Advances in Applied Science Research, 5(3): 195-203; 2014.",
  },
  {
    year: "2013",
    title:
      "Neural Network function approximation applied to robotic control.",
    citation:
      "S. O. Maliki, C. O. Agwu, C. Ituma, S. C. Chinagolum. American Journal of Scientific and Industrial Research (Science Huβ). ISSN 2153-649X, (2013).",
  },
  {
    year: "2013",
    title:
      "Assessment of Electromagnetic Wave Propagation through Copper(II) Oxide, CuO Thin Film with Dielectric perturbed medium.",
    citation:
      "E. I. Ugwu, S. O. Maliki. IJEIT, Vol. 3, Issue 6, 2013.",
  },
  {
    year: "2012",
    title:
      "Application of Artificial Neural Network in the forecasting of RGDP of Nigeria as a function of crude oil consumption and other key economic variables.",
    citation:
      "S. O. Maliki, A. O. Maliki, C. O. Agwu. Proceedings of the International Conference in Mathematics (ICM 2012, 11-14 March, Al Ain), Tom II, 5-9, 2012.",
  },
  {
    year: "2012",
    title: "Structure and Analysis of Compartmental Epidemiological Models.",
    citation:
      "S. O. Maliki. Advances in Applied Sciences, 3 (2): 1214-1219 (2012).",
  },
  {
    year: "2012",
    title: "Overcoming Computational Complexity in Nonlinear Optimization.",
    citation:
      "S. O. Maliki, A. O. Maliki. Journal of Mathematical Modelling and Application, Vol. 1 No. 5. ISSN 2178-2423 (2012).",
  },
  {
    year: "2012",
    title: "A note on gravitational radiation with geometric constraints.",
    citation:
      "S. O. Maliki, E. I. Ugwu. Pelagia Research Library Advances in Applied Science Research, 3(3): 1361-1364; 2012.",
  },
  {
    year: "2011",
    title:
      "Analysis of numerical and exact solutions of certain SIR and SIS epidemic models.",
    citation:
      "S. O. Maliki. Journal of Mathematical Modelling and Application, Vol. 1 No. 4, 51-56. ISSN 2178-2423 (2011).",
  },
  {
    year: "2011",
    title:
      "Computational Study of wave propagation through a dielectric thin film medium using the WKB approximation.",
    citation:
      "E. I. Ugwu, S. O. Maliki, M. O. Elebe. American Journal of Scientific and Industrial Research (Science Huβ), ISSN 2153-649X, 547-551 (2011).",
  },
  {
    year: "2011",
    title:
      "Comparison of Regression Model and Artificial Neural Network Model for the prediction of Electrical Power generated in Nigeria.",
    citation:
      "S. O. Maliki, A. O. Maliki, A. O. Agbo, C. O. Agwu, L. M. Ibeh. Advances in Applied Sciences, 2 (5): 329-339 (2011).",
  },
  {
    year: "2006",
    title: "On Noncommutative Geometry.",
    citation:
      "S. O. Maliki. Journal of Information Communication and Computer Technologies, 74-78, Vol. 2 (2006).",
  },
  {
    year: "2005",
    title: "Time Delayed Feedback Control in Spatio-Temporal State Space.",
    citation:
      "S. O. Maliki. Journal of Information Communication and Computer Technologies, 88-89, Vol. 1 (2005).",
  },
  {
    year: "2005",
    title: "A Bio-mathematical Model of Acute Leukemia.",
    citation:
      "S. O. Maliki. Journal of Information Communication and Computer Technologies, 70-75, Vol. I (2005).",
  },
  {
    year: "1995",
    title:
      "Existence and Uniqueness Theorems for a Class of Quantum Stochastic Differential Equations.",
    citation:
      "S. O. Maliki. International Centre for Theoretical Physics (ICTP) Preprint 1C/95/329 (1995).",
  },
];

const book = {
  year: "2008",
  title: "Statistical Computational Techniques",
  edition: "2nd Edition",
  authors: "S. O. Maliki, A. O. Maliki",
  publisher: "Guzan Publishers, Abakaliki, Nigeria.",
  isbn: "978-37454-2-5",
};

const seminarPapers = [
  {
    year: "1993",
    title: "On Noncommutative Stochastic Calculus",
    details:
      "Groupe Interafricain en Analyse et Geometrie (GIRAGA), Lokossa, Republic of Benin, 10-25 November 1993.",
  },
  {
    year: "1994",
    title: "Quantum Stochastic Integrals in *-Algebras",
    details:
      "Third Autumn Course on Mathematical Ecology, ICTP, Trieste, Italy. 20 Oct-30 Dec. 1994.",
  },
  {
    year: "1999",
    title: "On Quantum Stochastic Evolutions",
    details:
      "The Society for African Physicist and Mathematicians: Fifth Edward Bouchet Regional College on Functional Analysis and its Application to Differential Equations. Accra, Ghana, 12th to 23rd July 1999.",
  },
  {
    year: "2004",
    title: "Non-commutative Stochastic Differential Equations and Applications",
    details:
      "23rd Annual Conference of the Nigerian Mathematical Society, Department of Industrial Mathematics and Applied Statistics, Ebonyi State University, Abakaliki, 20th-23rd April 2004.",
  },
  {
    year: "2005",
    title: "On Non-commutative Geometry",
    details:
      "School/Workshop on Representation Theory in Geometry and Physics, Porto-Novo, Republic of Benin, August 01-17, 2005.",
  },
  {
    year: "2006",
    title: "On MathCAD Programming",
    details:
      "International Conference on New Trends in the Mathematical & Computer Sciences with Applications to Real World Problems, 19-23 June 2006, Covenant University, Ota, Ogun State, Nigeria.",
  },
  {
    year: "2007",
    title: "A gentle introduction to quantum geometry",
    details:
      "A postdoctoral seminar presentation at the African Institute for Mathematical Sciences (AIMS), Muizenberg, South Africa (2007).",
  },
  {
    year: "2010",
    title: "On Computational Complexity in Nonlinear Optimization Theory",
    details:
      "10th International Conference on Parametric Optimization and Related Topics (ParaoptX), Karlsruhe, Germany, September 20-24, 2010.",
  },
  {
    year: "2012",
    title:
      "Application of Artificial Neural Network in the forecasting of RGDP of Nigeria as a function of crude oil consumption and other key economic variables",
    details:
      "The Fourth International Conference on Mathematical Sciences, ICM 2012, United Arab Emirates University, March 11-14, 2012.",
  },
];

const dissertations = [
  {
    year: "1989",
    degree: "MSc Dissertation",
    title:
      "On Representations of the Canonical Commutation Relations in Quantum Mechanics",
    details:
      "Submitted to the Department of Mathematics, University of Ibadan, January 1989.",
    supervisor: "Prof. G. O. S. Ekhaguere",
  },
  {
    year: "1999",
    degree: "PhD Thesis",
    title:
      "A Functional Calculus for a class of Noncommutative Stochastic Differential Equations",
    details:
      "Submitted to the Department of Mathematics, University of Ibadan, January 1999.",
    supervisor: "Prof. G. O. S. Ekhaguere",
  },
];

const researchInterests = [
  {
    title: "Quantum Geometry",
    description: "Hopf Algebras and their applications.",
    icon: Network,
  },
  {
    title: "Mathematical Modeling",
    description: "Mathematical Modeling of disease transmission.",
    icon: Sigma,
  },
  {
    title: "Artificial Neural Networks",
    description: "Mathematical foundations and applications.",
    icon: BrainCircuit,
  },
  {
    title: "Computational Mathematics",
    description:
      "Use of MathCAD and MAPLE to solve nonlinear differential equations.",
    icon: Microscope,
  },
];

const computingSkills = [
  {
    category: "Operating Systems",
    tools: "Unix/Linux and Windows.",
  },
  {
    category: "Numerical Programming",
    tools: "MATHCAD, MATLAB, MAPLE, TORA, SPSS, PYTHON, MLP neural network.",
  },
  {
    category: "Text / Mathematical Editing",
    tools: "MATHTYPE, LATEX, TEX, Microsoft Word.",
  },
  {
    category: "Other Software",
    tools: "Power Point; Excel Graphics.",
  },
];

const conferences = [
  {
    year: "1989",
    title:
      "Foundation Postgraduate Course in Algebra",
    details:
      "National Mathematical Center, Abuja, Nigeria, 2-31 July 1989.",
  },
  {
    year: "1990",
    title: "Pan African Congress of Mathematicians",
    details: "Nairobi, Kenya, 1990.",
  },
  {
    year: "1991",
    title: "Foundation Postgraduate Course in Differential Geometry",
    details:
      "National Mathematical Center, Abuja, Nigeria, 15-30 April 1991.",
  },
  {
    year: "1991",
    title: "International Workshop on Contemporary Problems in Stochastic Analysis",
    details: "University of Ibadan, Nigeria, 10-12 June 1991.",
  },
  {
    year: "1993",
    title: "Groupe Interafricain en Analyse et Geometric (GIRAGA)",
    details: "Lokossa, Republic of Benin, 10-25 November 1993.",
  },
  {
    year: "1994",
    title:
      "Foundation Postgraduate Course on the Mathematical Foundations of Quantum Mechanics",
    details: "National Mathematical Center, Abuja, Nigeria, 1-31 September 1994.",
  },
  {
    year: "1994",
    title: "Third Autumn Course on Mathematical Ecology",
    details: "ICTP, Trieste, Italy, 20 Oct-30 Dec 1994.",
  },
  {
    year: "1995",
    title:
      "Foundation Postgraduate Course on the Applications of Mathematics in Biology and Medicine",
    details: "National Mathematical Center, Abuja, Nigeria, 1-30 July 1995.",
  },
  {
    year: "1995",
    title: "Autumn Workshop on Plasma Physics",
    details: "ICTP, Trieste, Italy, October 1995.",
  },
  {
    year: "1996",
    title:
      "The Society for African Physicists and Mathematicians: Second Edward Bouchet Regional College on Functional Analysis and its Application to Differential Equations",
    details: "Accra, Ghana, 22 May-2 August 1996.",
  },
  {
    year: "1996",
    title: "Third Autumn Workshop on Mathematical Ecology",
    details: "ICTP, Trieste, Italy, 14 October-1 November 1996.",
  },
  {
    year: "1996",
    title: "Visiting Scientist",
    details: "ICTP, Trieste, Italy, 5 October-29 December 1996.",
  },
  {
    year: "1999",
    title: "Regional College on Mathematics in Economics",
    details: "Accra, Ghana, 28 April-4 May 1999.",
  },
  {
    year: "1999",
    title:
      "The Society for African Physicists and Mathematicians: Fifth Edward Bouchet Regional College on Functional Analysis and its Application to Differential Equations",
    details: "Accra, Ghana, 12-23 July 1999.",
  },
  {
    year: "2004",
    title: "23rd Annual Conference of the Nigerian Mathematical Society",
    details:
      "Department of Industrial Mathematics and Applied Statistics, Ebonyi State University, Abakaliki, Nigeria, 20-23 April 2004.",
  },
  {
    year: "2005",
    title: "School/Workshop on Representation Theory in Geometry and Physics",
    details: "Porto-Novo, Republic of Benin, 1-17 August 2005.",
  },
  {
    year: "2005",
    title: "Workshop on Mathematical Analysis, New Trends in Problem Solving",
    details:
      "Department of Industrial Mathematics and Applied Statistics, Ebonyi State University, Abakaliki, 20-23 April 2005.",
  },
  {
    year: "2006",
    title:
      "International Conference on New Trends in the Mathematical & Computer Sciences with Applications to Real World Problems",
    details: "Covenant University, Ota, Ogun State, Nigeria, 19-23 June 2006.",
  },
  {
    year: "2007",
    title: "Postdoctoral Fellowship Award of the African Institute for Mathematical Sciences (AIMS)",
    details: "Muizenberg, South Africa, November 2007.",
  },
  {
    year: "2008",
    title: "Workshop on Mathematical Analysis, New Trends in Problem Solving",
    details:
      "Department of Industrial Mathematics and Applied Statistics, Ebonyi State University, Abakaliki, 2-23 October 2008.",
  },
  {
    year: "2009",
    title: "First International Conference on Application of Mathematics in Technical and Natural Sciences",
    details: "Sozopol, Bulgaria, 22-27 June 2009.",
  },
  {
    year: "2009",
    title: "First International Conference on Application of Mathematics in Technical and Natural Sciences",
    details: "Sozopol, Bulgaria, 22-27 June 2009. (Second entry as listed in the supplied profile.)",
  },
  {
    year: "2010",
    title: "10th International Conference on Parametric Optimization and Related Topics (ParaoptX)",
    details: "Karlsruhe, Germany, 20-24 September 2010.",
  },
  {
    year: "2011",
    title:
      "International Workshop and Training in Mathematical Modelling, Neural Network, Data Mining and Scientific Computing with MAPLE and MATLAB",
    details:
      "Covenant University, Ota, Ogun State, Nigeria, 23-27 May 2011.",
  },
];

const sections = [
  { id: "career", label: "Academic Appointments" },
  { id: "research-experience", label: "Research Experience" },
  { id: "research-interests", label: "Research Interests" },
  { id: "publications", label: "Published Articles" },
  { id: "book", label: "Book" },
  { id: "seminars", label: "Seminar Papers" },
  { id: "dissertations", label: "Dissertations" },
  { id: "skills", label: "Computing Skills" },
  { id: "conferences", label: "Conferences & Workshops" },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-800">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function Record({
  date,
  title,
  children,
}: {
  date: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="grid gap-3 border-b border-slate-100 py-6 sm:grid-cols-[150px_1fr] sm:gap-8">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-blue-800">
        {date}
      </p>
      <div>
        <h3 className="text-base font-semibold leading-7 text-slate-900">
          {title}
        </h3>
        <div className="mt-2 text-sm leading-7 text-slate-500">
          {children}
        </div>
      </div>
    </article>
  );
}

function AcademicSection({
  id,
  number,
  title,
  description,
  children,
  defaultOpen = false,
}: {
  id: string;
  number: string;
  title: string;
  description: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  return (
    <details
      id={id}
      open={defaultOpen}
      className="group scroll-mt-24 border-b border-slate-200"
    >
      <summary className="flex cursor-pointer list-none items-center gap-5 py-6 sm:py-7 [&::-webkit-details-marker]:hidden">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-500 transition group-open:border-blue-800 group-open:bg-blue-800 group-open:text-white">
          {number}
        </span>

        <span className="min-w-0 flex-1">
          <span className="block text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
            {title}
          </span>
          <span className="mt-1 block text-xs leading-5 text-slate-500 sm:text-sm">
            {description}
          </span>
        </span>

        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition group-open:rotate-45 group-open:border-blue-800 group-open:text-blue-800">
          <ArrowRight size={17} />
        </span>
      </summary>

      <div className="pb-8 pl-0 sm:pl-16">{children}</div>
    </details>
  );
}

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* HERO */}
      <section
        id="home"
        className="relative isolate border-b border-slate-100"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-32 -top-40 h-112.5 w-112.5 rounded-full border border-slate-200" />
          <div className="absolute -right-12 -top-20 h-75 w-75 rounded-full border border-slate-200" />
          <div className="absolute right-10 top-20 h-48 w-48 rounded-full bg-blue-50 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-12">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-blue-800" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                Academic Profile
              </span>
            </div>

            <h1 className="mt-8 text-5xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Advancing mathematics.
              <span className="mt-3 block font-serif font-normal italic text-blue-800">
                Expanding knowledge.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Professor S. O. Maliki
            </p>

            <p className="mt-2 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
              Professor of Applied Mathematics at Michael Okpara Federal
              University, Nigeria. His academic profile documents
              appointments, research experience, scholarly publications,
              seminar presentations, mathematical research, and
              professional development.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="#career"
                className="group inline-flex items-center gap-3 rounded-full bg-slate-950 px-6 py-4 text-sm font-medium text-white transition hover:bg-blue-800"
              >
                Explore academic profile
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="#publications"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-4 text-sm font-medium text-slate-700 transition hover:border-blue-800 hover:text-blue-800"
              >
                View publications
                <ArrowDownRight size={17} />
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 border-t border-slate-200 pt-7">
              <div>
                <p className="text-2xl font-semibold">1988</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Career begins
                </p>
              </div>
              <div className="border-l border-slate-200 pl-4 sm:pl-7">
                <p className="text-2xl font-semibold">2022</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Professorship
                </p>
              </div>
              <div className="border-l border-slate-200 pl-4 sm:pl-7">
                <p className="text-2xl font-semibold">1995</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Earliest listed article
                </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-tr-4xl border-r border-t border-blue-200" />

            <div className="relative overflow-hidden rounded-4xl bg-slate-950 p-8 text-white shadow-2xl shadow-slate-900/10 sm:p-10">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
              <div className="absolute -right-8 -top-8 h-44 w-44 rounded-full border border-white/10" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    Professional Overview
                  </span>
                  <Sigma size={25} className="text-blue-300" />
                </div>

                <div className="my-12 flex h-36 w-36 items-center justify-center rounded-full border border-white/15 bg-white/4">
                  <GraduationCap
                    size={72}
                    strokeWidth={1}
                    className="text-blue-200"
                  />
                </div>

                <p className="text-sm text-blue-300">
                  Professor of Applied Mathematics
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                  S. O. Maliki
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  Michael Okpara Federal University, Nigeria.
                </p>

                <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
                  <BookOpen size={19} className="text-blue-300" />
                  <span className="text-xs text-slate-300">
                    Research, Teaching & Scholarship
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-3 hidden rounded-xl border border-slate-100 bg-white px-5 py-4 shadow-xl sm:block md:-left-7">
              <p className="text-xs text-slate-400">Academic appointment</p>
              <p className="mt-1 text-sm font-semibold">
                Professor · October 2022
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PAGE NAVIGATION */}
      <section className="border-b border-slate-200 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-6 py-8 sm:px-10 lg:px-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Explore this profile
          </p>

          <nav className="flex flex-wrap gap-2">
            {sections.map((section) => (
              <Link
                key={section.id}
                href={`#${section.id}`}
                className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs font-medium text-slate-600 transition hover:border-blue-800 hover:text-blue-800 sm:text-sm"
              >
                {section.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      {/* BIOGRAPHY */}
      <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-800">
              Professional overview
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">
              A career in mathematics, research and academic development.
            </h2>
          </div>

          <div className="space-y-6 text-sm leading-8 text-slate-600 sm:text-base">
            <p>
              Professor S. O. Maliki&apos;s academic record begins with
              his appointment as a Graduate Assistant at the University
              of Ibadan in October 1988. The record documents subsequent
              appointments at the University of Ibadan, Olabisi Onabanjo
              University, Ebonyi State University, Michael Okpara Federal
              University, and David Umahi Federal University of Health
              Sciences.
            </p>

            <p>
              His research experience includes computation fluid flow,
              scientific computation and program development, noncommutative
              stochastic differential equations, and quantum geometry.
              His research interests also include mathematical modelling
              of disease transmission, artificial neural networks, and
              computational methods for nonlinear differential equations.
            </p>

            <p>
              The supplied academic record documents journal articles
              from 1995 through 2024, a book published in 2008, seminar
              presentations, two dissertations, and participation in
              conferences, workshops, and postgraduate courses.
            </p>

            <div className="border-l-2 border-blue-800 py-2 pl-6">
              <p className="font-serif text-xl italic leading-8 text-slate-800 sm:text-2xl">
                Mathematical inquiry, computational methods, and
                scientific investigation form recurring themes across
                the documented research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ACADEMIC RECORDS */}
      <section className="bg-slate-50 px-6 py-20 sm:px-10 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Complete academic record"
            title="A detailed account of academic and research work."
            description="Open each section to explore the full records supplied in the academic profile. The information is grouped for easier reading without hiding individual entries behind summaries."
          />

          <div className="border-t border-slate-200">
            {/* ACADEMIC APPOINTMENTS */}
            <AcademicSection
              id="career"
              number="01"
              title="Academic Appointments"
              description="All nine appointments, from 1988 to 2022."
              defaultOpen
            >
              {appointments.map((item, index) => (
                <Record
                  key={`${item.date}-${index}`}
                  date={item.date}
                  title={item.role}
                >
                  {item.institution}
                </Record>
              ))}
            </AcademicSection>

            {/* RESEARCH EXPERIENCE */}
            <AcademicSection
              id="research-experience"
              number="02"
              title="Research Experience"
              description="Research roles, projects, and institutions."
            >
              {researchExperience.map((item) => (
                <Record
                  key={`${item.date}-${item.role}`}
                  date={item.date}
                  title={item.role}
                >
                  {item.description}
                </Record>
              ))}
            </AcademicSection>

            {/* RESEARCH INTERESTS */}
            <AcademicSection
              id="research-interests"
              number="03"
              title="Research Interests"
              description="All four research interests from the source profile."
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {researchInterests.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className="rounded-2xl border border-slate-200 bg-white p-6"
                    >
                      <Icon
                        size={24}
                        strokeWidth={1.5}
                        className="text-blue-800"
                      />
                      <h3 className="mt-5 text-base font-semibold">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-500">
                        {item.description}
                      </p>
                    </article>
                  );
                })}
              </div>
            </AcademicSection>

            {/* ALL PUBLICATIONS */}
            <AcademicSection
              id="publications"
              number="04"
              title="Published Articles"
              description={`${publications.length} listed publication entries, from 1995 to 2024.`}
            >
              <div className="mb-6 rounded-xl border border-blue-100 bg-blue-50/60 p-4">
                <p className="text-sm leading-6 text-slate-600">
                  The citations below retain the article titles,
                  author information, journals, dates, and identifiers
                  provided in the source profile. Some source entries
                  have abbreviated or inconsistent bibliographic details;
                  these should be verified against the original publications.
                </p>
              </div>

              {publications.map((item, index) => (
                <Record
                  key={`${item.year}-${index}`}
                  date={item.year}
                  title={item.title}
                >
                  {item.citation}
                </Record>
              ))}
            </AcademicSection>

            {/* BOOK */}
            <AcademicSection
              id="book"
              number="05"
              title="Book"
              description="The listed book publication."
            >
              <article className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-800">
                  <Library size={23} />
                </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-blue-800">
                  {book.year} · {book.edition}
                </p>

                <h3 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  {book.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Authors: {book.authors}
                </p>
                <p className="mt-1 text-sm leading-7 text-slate-600">
                  Publisher: {book.publisher}
                </p>
                <p className="mt-1 text-sm leading-7 text-slate-600">
                  ISBN: {book.isbn}
                </p>
              </article>
            </AcademicSection>

            {/* SEMINAR PAPERS */}
            <AcademicSection
              id="seminars"
              number="06"
              title="Seminar Papers"
              description={`${seminarPapers.length} seminar-paper entries, from 1993 to 2012.`}
            >
              {seminarPapers.map((item, index) => (
                <Record
                  key={`${item.year}-${index}`}
                  date={item.year}
                  title={item.title}
                >
                  {item.details}
                </Record>
              ))}
            </AcademicSection>

            {/* DISSERTATIONS */}
            <AcademicSection
              id="dissertations"
              number="07"
              title="Dissertations"
              description="MSc dissertation and PhD thesis, including titles and supervisor."
            >
              {dissertations.map((item) => (
                <article
                  key={item.year}
                  className="border-b border-slate-100 py-7 last:border-0"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-800">
                    {item.year} · {item.degree}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold leading-8 text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {item.details}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    Supervisor: {item.supervisor}
                  </p>
                </article>
              ))}
            </AcademicSection>

            {/* COMPUTING SKILLS */}
            <AcademicSection
              id="skills"
              number="08"
              title="Computing Skills"
              description="All four computing and software categories."
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {computingSkills.map((item) => (
                  <article
                    key={item.category}
                    className="rounded-2xl border border-slate-200 bg-white p-6"
                  >
                    <h3 className="text-base font-semibold">
                      {item.category}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {item.tools}
                    </p>
                  </article>
                ))}
              </div>
            </AcademicSection>

            {/* CONFERENCES AND WORKSHOPS */}
            <AcademicSection
              id="conferences"
              number="09"
              title="Conferences & Workshops"
              description={`${conferences.length} entries, covering postgraduate courses, conferences, workshops, and a visiting scientist appointment.`}
            >
              <div className="mb-6 flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
                <CalendarDays
                  size={20}
                  className="mt-0.5 shrink-0 text-blue-800"
                />
                <p className="text-sm leading-6 text-slate-500">
                  Entries are arranged in chronological order. The repeated
                  2009 conference entry is retained because it appears twice
                  in the supplied profile.
                </p>
              </div>

              {conferences.map((item, index) => (
                <Record
                  key={`${item.year}-${index}`}
                  date={item.year}
                  title={item.title}
                >
                  {item.details}
                </Record>
              ))}
            </AcademicSection>
          </div>
        </div>
      </section>

      {/* RESEARCH SUMMARY */}
      <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Research focus"
            title="Connecting mathematical theory with practical problems."
            description="These visual highlights are drawn from the research interests and subject areas reflected in the supplied academic record."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Quantum Geometry",
                text: "Noncommutative geometry, Hopf algebras, and quantum stochastic equations.",
                icon: Network,
              },
              {
                title: "Disease Modelling",
                text: "Mathematical models for disease transmission, epidemics, and population dynamics.",
                icon: Microscope,
              },
              {
                title: "Neural Networks",
                text: "Function approximation, forecasting, and solutions to differential equations.",
                icon: BrainCircuit,
              },
              {
                title: "Scientific Computing",
                text: "Computational mathematics, nonlinear differential equations, and optimization.",
                icon: Presentation,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-900/4"
                >
                  <Icon
                    size={25}
                    strokeWidth={1.5}
                    className="text-blue-800"
                  />
                  <h3 className="mt-6 text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="px-6 pb-20 sm:px-10 sm:pb-24 lg:px-12">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-4xl bg-slate-950 px-7 py-12 text-white sm:px-12 sm:py-16 lg:px-16">
          <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
                Academic record
              </p>

              <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                Explore the work, research, and academic journey of
                Professor S. O. Maliki.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
                Browse the academic appointments, research experience,
                publications, seminar papers, dissertations, technical
                skills, and conference records documented in this profile.
              </p>
            </div>

            <Link
              href="#home"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-blue-50"
            >
              Back to top
              <ArrowRight
                size={17}
                className="transition-transform group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 px-6 py-7 sm:px-10 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Professor S. O. Maliki · Academic Profile</p>
          <p>Research · Scholarship · Mathematical Sciences</p>
        </div>
      </footer>
    </main>
  );
}

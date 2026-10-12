import Link from 'next/link';
import Image from 'next/image';


export default function Footer() {
  return (
    <footer 
      itemType="https://schema.org/WPFooter" 
      itemScope 
      id="colophon" 
      role="contentinfo"
      className="text-white"
    >
      {/* Main Footer Section */}
      <div 
        className="relative bg-cover bg-center bg-no-repeat py-[88px] px-4 md:px-8 lg:px-16"
        style={{
          backgroundImage: `url("https://profsomaliki.com.ng/wp-content/uploads/2023/05/Mathematical_equations.webp")`,
        }}
      >
        {/* Optional dark overlay for readability against equations */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-start">
          
          {/* Column 1: Site Title, Bio & Portrait */}
          <div className="px-2 md:pr-6 space-y-4">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-white">
              <Link href="https://profsomaliki.com.ng" className="hover:opacity-90 transition-opacity">
                Profsomaliki
              </Link>
            </h2>

            <p className="font-sans text-[16px] leading-[26px] text-white">
              Professor of Applied Mathematics at Michael Okpara Federal University of Agriculture, Umudike (MOUAU), Nigeria.
            </p>

            <div className="pt-2">
              <Image
                width={150}
                height={150}
                src="https://profsomaliki.com.ng/wp-content/uploads/2023/05/Prof-Niyi-Maliki--150x150.jpeg"
                alt="Prof Niyi Maliki"
                className="w-[35%] rounded-[60px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] object-cover"
              />
            </div>
          </div>

          {/* Column 2: Quick Links Navigation */}
          <div className="px-2 space-y-4">
            <h3 className="font-sans text-[20px] font-extrabold leading-[35px] [text-shadow:0px_0px_10px_#000000] text-white">
              Quick Links
            </h3>

            <nav className="flex flex-col space-y-1 font-sans">
              <Link 
                href="https://profsomaliki.com.ng/" 
                className="py-[15px] px-[15px] text-white hover:text-[#00FF13] transition-colors"
              >
                Home
              </Link>
              <Link 
                href="https://profsomaliki.com.ng/about/" 
                className="py-[15px] px-[15px] text-white hover:text-[#00FF13] transition-colors"
              >
                About
              </Link>
              <Link 
                href="https://profsomaliki.com.ng/services/" 
                className="py-[15px] px-[15px] text-white hover:text-[#00FF13] transition-colors"
              >
                Services
              </Link>
              <Link 
                href="https://profsomaliki.com.ng/contact/" 
                className="py-[15px] px-[15px] text-white hover:text-[#00FF13] transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Column 3: Social Links */}
          <div className="px-2 space-y-4">
            <h3 className="font-sans text-[20px] font-extrabold leading-[35px] [text-shadow:0px_0px_10px_rgba(0,0,0,0.97)] text-white">
              Social Links
            </h3>

            <div className="flex flex-wrap gap-3 pt-1">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/profniyimaliki/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-105"
              >
                <svg className="w-[18px] h-[18px] fill-current text-white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a 
                href="https://www.facebook.com/sadikolaniyi.maliki/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-105"
              >
                <svg className="w-[18px] h-[18px] fill-current text-white" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://ng.linkedin.com/in/olaniyi-maliki-a34b429" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-105"
              >
                <svg className="w-[18px] h-[18px] fill-current text-white" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a 
                href="https://www.youtube.com/channel/UC5_pZ_2Uqh6mKsInCh-0juw" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-105"
              >
                <svg className="w-[18px] h-[18px] fill-current text-white" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a 
                href="http://wa.link/yzg29r" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-105"
              >
                <svg className="w-[18px] h-[18px] fill-current text-white" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99 0-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      
      {/* Copyright Bar */}
      <div className="bg-black py-4 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="http://profsomaliki.com.ng"
            className="text-[16px] text-white hover:opacity-80 transition-opacity inline-block"
          >
            Copyright©2023. All Rights Reserved by Profsomaliki.com.ng.
          </Link>
        </div>
      </div>
    </footer>
  );
}
import React from 'react';

const Location = () => {
  return (
    <section id="locations" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-red-600 font-black uppercase tracking-[0.4em] text-[10px]">Exclusivité Rabat</span>
          <h2 className="text-5xl md:text-7xl font-black italic uppercase mt-4 tracking-tighter leading-none">
            Notre Unique <br/> <span className="text-gray-200 text-stroke">Showroom</span>
          </h2>
        </div>

        <div className="bg-[#faf9f6] rounded-[4rem] p-8 md:p-16 border border-gray-100 shadow-sm flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left Side: Store Info */}
          <div className="lg:w-1/2 w-full space-y-10">
            <div className="flex items-center gap-6">
              <div className="bg-red-600 w-16 h-16 rounded-3xl flex items-center justify-center shadow-2xl shadow-red-200">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-3xl font-black italic uppercase tracking-tighter text-gray-900">
                  Takadoum <span className="text-red-600">Rabat</span>
                </h3>
                <span className="text-[10px] font-black uppercase tracking-widest bg-green-100 text-green-700 px-3 py-1 rounded-full">
                  Ouvert Maintenant
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10 pt-4">
              <div className="space-y-2">
                <p className="text-[10px] font-black text-red-600 uppercase tracking-widest">Adresse</p>
                <p className="text-gray-600 font-bold leading-relaxed">
                  Groupe El Boustane <br /> 
                  Bloc 12 N 26, Takadoum <br /> 
                  Rabat 10200, Maroc
                </p>
              </div>
              
              <div className="space-y-2">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Contact</p>
                <p className="text-xl font-black text-gray-900">06.68.60.91.96</p>
                <p className="text-sm font-bold text-gray-500">05.37.75.03.77</p>
              </div>

              <div className="space-y-2">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Horaires</p>
                <p className="text-gray-900 font-bold italic uppercase">Lundi — Samedi</p>
                <p className="text-sm font-medium text-gray-500">09:30 - 19:30</p>
              </div>

              <div className="flex items-end">
                <a 
                  href="https://www.google.com/maps?q=Optique+Diamant+Rouge+Takadoum+Rabat" 
                  target="_blank" 
                  className="w-full bg-zinc-900 text-white text-center py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-red-600 transition-all active:scale-95"
                >
                  Ouvrir dans Maps
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Visual Placeholder (Map or Image) */}
          <div className="lg:w-1/2 w-full h-[400px] bg-white rounded-[3rem] border border-gray-100 overflow-hidden relative group">
            {/* Replace the src with a real static map or showroom photo later */}
            <div className="absolute inset-0 bg-gray-200 animate-pulse group-hover:hidden flex items-center justify-center">
               <span className="font-black text-gray-400 uppercase tracking-widest italic">Carte Interaction</span>
            </div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.2324!2d-6.83!3d33.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDU4JzEyLjAiTiA2wrA0OSc0OC4wIlc!5e0!3m2!1sfr!2sma!4v1625000000000!5m2!1sfr!2sma" 
              className="w-full h-full grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;
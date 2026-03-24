import React from 'react';

const Story = () => {
  return (
    <section id="story" className="py-24 bg-black text-white overflow-hidden relative">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Side: Overlapping Images */}
        <div className="relative h-[500px] md:h-[650px]">
          {/* Main Large Image (The Workshop/Examen) */}
          <div className="absolute top-0 left-0 w-[85%] h-[80%] rounded-[3rem] overflow-hidden shadow-2xl rotate-[-3deg] border-4 border-white/5 hover:rotate-0 transition-transform duration-700">
            <img 
              src="https://images.unsplash.com/photo-1582142407894-ec85a1260a46?auto=format&fit=crop&q=80&w=800" 
              alt="Optician Workshop" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          
          {/* Smaller Overlapping Image (The Style/Lenses) */}
          <div className="absolute bottom-4 right-0 w-[60%] h-[55%] rounded-[3rem] overflow-hidden shadow-[0_30px_60px_rgba(220,38,38,0.3)] rotate-[5deg] border-[12px] border-black z-10 hover:rotate-0 transition-transform duration-700">
            <img 
              src="https://images.unsplash.com/photo-1556306535-0f09a537f0a3?auto=format&fit=crop&q=80&w=800" 
              alt="Lens Precision" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Circle Badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-red-600 w-28 h-28 rounded-full flex items-center justify-center border-4 border-black animate-[spin_10s_linear_infinite] shadow-2xl shadow-red-600/20">
             <span className="text-[10px] font-black uppercase tracking-tighter text-center leading-none text-white">
               Rabat <br/> Quality <br/> Style
             </span>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="relative z-10">
          <span className="text-red-600 font-bold uppercase tracking-[0.5em] text-xs">Depuis Notre Ouverture</span>
          <h2 className="text-6xl md:text-8xl font-black italic uppercase leading-[0.85] mt-6 mb-10 tracking-tighter">
            L'EXCELLENCE <br/> 
            <span className="text-transparent" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.3)' }}>VISUELLE</span> <br/>
            POUR TOUS.
          </h2>
          
          <p className="text-gray-400 text-lg leading-relaxed max-w-md mb-12 font-light">
            Optique Diamant Rouge est votre destination locale pour des montures de luxe et des verres de haute précision, servis dans un cadre moderne et professionnel à Rabat.
          </p>

          <div className="flex flex-wrap gap-12 items-center">
            <div className="group cursor-default">
              <p className="text-5xl font-black italic text-red-600 transition-transform group-hover:scale-110">15+</p>
              <p className="text-[10px] uppercase text-gray-500 font-bold tracking-[0.2em] mt-2">Ans d'Expertise</p>
            </div>
            <div className="w-[1px] h-12 bg-zinc-800 hidden sm:block"></div>
            <div className="group cursor-default">
              <p className="text-5xl font-black italic text-white transition-transform group-hover:scale-110">24H</p>
              <p className="text-[10px] uppercase text-gray-500 font-bold tracking-[0.2em] mt-2">Montage Rapide</p>
            </div>
            <div className="w-[1px] h-12 bg-zinc-800 hidden sm:block"></div>
            <div className="group cursor-default">
              <p className="text-5xl font-black italic text-white transition-transform group-hover:scale-110">100%</p>
              <p className="text-[10px] uppercase text-gray-500 font-bold tracking-[0.2em] mt-2">Authenticité</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Story;
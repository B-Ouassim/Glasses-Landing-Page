import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-[#faf9f6]">
      
      {/* Background Large Text (Replaces "Freshly Baked") */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0">
        <h1 className="text-[13vw] font-black text-gray-200/60 uppercase italic leading-none select-none tracking-tighter">
          Diamant Rouge
        </h1>
      </div>

      {/* Floating Elements Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        
        {/* Category Toggles (Replaces Small/Medium/Large) */}
        <div className="mb-12 flex gap-2 bg-white/80 p-1.5 rounded-full border border-gray-200 shadow-xl backdrop-blur-sm">
          {['Solaire', 'Optique', 'Lentilles'].map((cat) => (
            <button 
              key={cat} 
              className={`px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                cat === 'Solaire' 
                ? 'bg-red-600 text-white shadow-lg shadow-red-200' 
                : 'hover:bg-gray-100 text-gray-500 hover:text-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main Floating Glasses (Replaces Pizza) */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative group cursor-pointer"
        >
          <img 
            src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1000&auto=format&fit=crop" 
            alt="Luxury Frames" 
            className="w-[320px] md:w-[550px] drop-shadow-[0_45px_45px_rgba(220,38,38,0.2)] transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-3 animate-float"
          />
          {/* Decorative floating sparkle */}
          <div className="absolute -top-6 -right-6 text-4xl animate-pulse opacity-80">
            ✨
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="mt-16">
          <h2 className="text-5xl md:text-8xl font-black italic uppercase text-gray-900 tracking-tighter leading-tight">
            Vision <span className="text-red-600 underline decoration-4 underline-offset-8 decoration-red-600/20">Cristalline</span>
          </h2>
          <p className="mt-6 text-gray-500 font-medium max-w-lg mx-auto leading-relaxed text-sm md:text-base">
            Expertise optique à Rabat. Découvrez notre sélection exclusive de montures de luxe et verres de haute précision.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center items-center">
             <button className="bg-red-600 text-white px-12 py-5 rounded-full font-black uppercase text-xs tracking-[0.2em] shadow-red-200 shadow-2xl hover:bg-zinc-900 transition-all hover:-translate-y-1">
               Voir La Collection
             </button>
             <button className="group border-2 border-zinc-900 text-zinc-900 px-12 py-5 rounded-full font-black uppercase text-xs tracking-[0.2em] hover:bg-zinc-900 hover:text-white transition-all flex items-center gap-2">
               Nos Services
               <span className="group-hover:translate-x-1 transition-transform">→</span>
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
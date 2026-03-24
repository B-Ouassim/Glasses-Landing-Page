import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState('Accueil');

  const navLinks = [
    { name: 'Services', id: 'services' },
    { name: 'Collections', id: 'menu' },
    { name: 'Notre Histoire', id: 'story' },
    { name: 'Avis', id: 'reviews' }
  ];

  return (
    <nav className="fixed top-0 w-[95%] left-1/2 -translate-x-1/2 z-[100] mt-4 px-8 py-3 flex justify-between items-center bg-white/80 backdrop-blur-xl rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.1)] border border-white/40 transition-all duration-500">
      
      {/* Brand Identity */}
      <div className="flex items-center gap-3 group cursor-pointer">
        <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shadow-red-200 shadow-xl group-hover:rotate-[360deg] transition-transform duration-700">
          <span className="text-white font-black text-xl italic">D</span>
        </div>
        <div className="flex flex-col leading-none">
          <span className="font-black text-lg tracking-tighter uppercase italic text-slate-900">
            Diamant <span className="text-red-600 underline decoration-2 underline-offset-2">Rouge</span>
          </span>
          <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-slate-400">Optique • Rabat</span>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="hidden lg:flex space-x-10 font-bold text-[11px] uppercase tracking-widest text-slate-700">
        {navLinks.map((item) => (
          <a 
            key={item.id} 
            href={`#${item.id}`} 
            onClick={() => setActive(item.name)}
            className={`transition-all relative group py-1 ${active === item.name ? 'text-red-600' : 'hover:text-red-600'}`}
          >
            {item.name}
            <span className={`absolute -bottom-1 left-0 h-[2.5px] bg-red-600 transition-all duration-300 rounded-full ${active === item.name ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </a>
        ))}
      </div>

      {/* CTA Button */}
      <button className="bg-zinc-900 text-white px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-[0.2em] hover:bg-red-600 hover:shadow-[0_8px_25px_rgba(220,38,38,0.4)] hover:-translate-y-0.5 transition-all active:scale-95 shadow-lg">
        Prendre RDV
      </button>
    </nav>
  );
};

export default Navbar;
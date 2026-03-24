import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#faf9f6] pt-24 pb-12 px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Identity Column */}
          <div className="col-span-1 md:col-span-1">
             <h4 className="font-black italic uppercase text-2xl mb-6 tracking-tighter">
               Diamant <span className="text-red-600 underline decoration-2 underline-offset-4">Rouge</span>
             </h4>
             <p className="text-xs text-gray-500 font-bold uppercase tracking-widest leading-relaxed">
               Expertise Optique. <br />
               Style de Luxe. <br />
               Rabat, Maroc.
             </p>
          </div>
          
          {/* Quick Links Column */}
          <div>
            <h5 className="font-black uppercase text-[10px] tracking-[0.3em] text-gray-400 mb-8">Navigation</h5>
            <ul className="space-y-4 font-black uppercase text-[11px] tracking-widest">
              <li><a href="#menu" className="hover:text-red-600 transition-colors">Collections</a></li>
              <li><a href="#services" className="hover:text-red-600 transition-colors">Services Pro</a></li>
              <li><a href="#locations" className="hover:text-red-600 transition-colors">Showrooms</a></li>
              <li><a href="#story" className="hover:text-red-600 transition-colors">L'Atelier</a></li>
            </ul>
          </div>

          {/* Social Connect Column */}
          <div>
            <h5 className="font-black uppercase text-[10px] tracking-[0.3em] text-gray-400 mb-8">Réseaux Sociaux</h5>
            <div className="flex gap-4">
               {['IG', 'FB', 'WA'].map(social => (
                 <a 
                   key={social} 
                   href={social === 'IG' ? "https://instagram.com/optiquediamantrouge" : "#"}
                   target="_blank"
                   className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center font-black text-[11px] hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 shadow-sm"
                 >
                   {social}
                 </a>
               ))}
            </div>
          </div>

          {/* Contact/Newsletter Column */}
          <div>
            <h5 className="font-black uppercase text-[10px] tracking-[0.3em] text-gray-400 mb-8">Contact Direct</h5>
            <p className="font-black text-xs uppercase tracking-widest text-gray-900 mb-4">
              06.68.60.91.96
            </p>
            <div className="flex border-b-2 border-zinc-900 pb-3 group">
              <input 
                type="email" 
                placeholder="VOTRE EMAIL" 
                className="bg-transparent outline-none text-[10px] w-full font-black tracking-widest placeholder:text-gray-300" 
              />
              <button className="font-black text-xs uppercase tracking-widest hover:text-red-600 transition-colors">→</button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-10 flex flex-col md:row justify-between items-center gap-6 text-[9px] font-black text-gray-400 uppercase tracking-[0.4em]">
          <p>© 2026 OPTIQUE DIAMANT ROUGE RABAT.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-red-600 transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-red-600 transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
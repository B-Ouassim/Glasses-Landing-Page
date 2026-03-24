import React from 'react';

const Menu = () => {
  const collections = [
    { 
      name: "Solaire Luxe", 
      price: "1200", 
      tag: "Best Seller", 
      img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800", 
      color: "bg-red-50" 
    },
    { 
      name: "Optique Pro", 
      price: "850", 
      tag: "Nouveauté", 
      img: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=800", 
      color: "bg-slate-100" 
    },
    { 
      name: "Contact Soft", 
      price: "450", 
      tag: "Confort+", 
      img: "https://plus.unsplash.com/premium_photo-1673283303460-7212046465f2?q=80&w=800", 
      color: "bg-rose-50" 
    },
  ];

  return (
    <section id="menu" className="py-24 bg-[#faf9f6] scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        
        {/* Left Side: Navigation & Text */}
        <div className="md:col-span-4">
          <span className="text-red-600 font-bold uppercase tracking-widest text-[10px]">Excellence Visuelle</span>
          <h2 className="text-7xl font-black italic uppercase leading-[0.85] mt-4 mb-8 tracking-tighter">
            VOTRE <br/> <span className="text-red-600 underline decoration-4 underline-offset-4">REGARD.</span>
          </h2>
          <p className="text-gray-500 font-medium mb-10 leading-relaxed text-sm">
            Montures de créateurs, verres haute définition et ajustements sur-mesure par nos experts à Rabat.
          </p>
          
          <ul className="space-y-6">
            {['Solaire Premium', 'Vue & Style', 'Lentilles Color', 'Examen de vue'].map(item => (
              <li key={item} className="text-xl font-black italic uppercase hover:text-red-600 hover:translate-x-3 transition-all cursor-pointer flex items-center gap-4 group">
                <span className="w-8 h-[2px] bg-gray-300 group-hover:bg-red-600 group-hover:w-12 transition-all duration-300"></span> 
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Grid of Products */}
        <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
          {collections.map((item, i) => (
            <div 
              key={i} 
              className={`${item.color} p-10 rounded-[3.5rem] relative overflow-hidden group min-h-[420px] flex flex-col justify-end transition-all duration-700 hover:shadow-2xl hover:shadow-red-100/50 ${i === 0 ? 'md:row-span-2' : ''}`}
            >
              {/* Product Image */}
              <img 
                src={item.img} 
                className={`absolute ${i === 0 ? '-top-10 -right-20 w-[450px]' : '-top-5 -right-10 w-72'} group-hover:scale-110 group-hover:-rotate-6 transition-all duration-1000 ease-out drop-shadow-2xl grayscale-[0.2] group-hover:grayscale-0`} 
                alt={item.name} 
              />
              
              {/* Content Card */}
              <div className="relative z-10">
                <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[9px] font-black uppercase mb-4 inline-block shadow-sm tracking-widest border border-black/5">
                  {item.tag}
                </span>
                <h3 className="text-4xl font-black italic uppercase mb-2 tracking-tighter text-gray-900 leading-none">
                  {item.name.split(' ')[0]} <br /> <span className="text-red-600">{item.name.split(' ')[1]}</span>
                </h3>
                
                <div className="flex justify-between items-center mt-6">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">À partir de</span>
                    <p className="text-3xl font-black text-gray-900">{item.price} <span className="text-lg">DH</span></p>
                  </div>
                  <button className="bg-zinc-900 text-white w-14 h-14 rounded-full flex items-center justify-center hover:bg-red-600 hover:scale-110 transition-all shadow-xl active:scale-90 group">
                    <span className="text-xl font-light group-hover:rotate-90 transition-transform">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Menu;
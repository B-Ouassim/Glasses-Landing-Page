import React from 'react';

const Reviews = () => {
  const reviews = [
    { name: "Yassine Alami", text: "Meilleur opticien à Rabat. Les montures sont uniques et le service est impeccable." },
    { name: "Sofia Bennani", text: "Ma deuxième paire chez Diamant Rouge. Les verres anti-lumière bleue ont changé ma vie au bureau." },
    { name: "Karim Tazi", text: "Service rapide et professionnel. Montage de mes verres progressifs en un temps record !" },
    { name: "Meriem D.", text: "Un choix incroyable de lunettes de soleil de luxe. On sent l'expertise dès qu'on entre." },
  ];

  // Double the array for a seamless infinite loop
  const doubleReviews = [...reviews, ...reviews];

  return (
    <section id="reviews" className="py-24 bg-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <span className="text-red-600 font-black uppercase tracking-[0.4em] text-[10px]">Témoignages</span>
        <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter mt-4 leading-none">
          Nos <span className="text-red-600">Experts</span> <br /> du Regard.
        </h2>
      </div>
      
      {/* Marquee Container */}
      <div className="relative overflow-hidden flex group">
        <div className="animate-marquee flex gap-8 py-8 px-4">
          {doubleReviews.map((item, i) => (
            <div 
              key={i} 
              className="bg-[#faf9f6] p-10 rounded-[3rem] min-w-[350px] md:min-w-[420px] flex flex-col justify-between shadow-sm hover:shadow-2xl hover:bg-white hover:-translate-y-2 transition-all duration-500 border border-black/5"
            >
              {/* Star Rating Icon (Extra Detail) */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, index) => (
                  <span key={index} className="text-red-600 text-xs">★</span>
                ))}
              </div>

              <p className="text-lg font-bold italic leading-relaxed text-gray-800 tracking-tight">
                "{item.text}"
              </p>

              <div className="mt-10 flex items-center gap-4">
                {/* Avatar with Logo Initial */}
                <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-white font-black text-sm border-2 border-red-600 shadow-lg">
                  {item.name[0]}
                </div>
                
                <div className="flex flex-col">
                  <span className="font-black uppercase text-xs tracking-widest text-gray-900">
                    {item.name}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-[9px] text-red-600 font-black uppercase tracking-widest">Client Vérifié</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Proof Stats */}
      <div className="mt-12 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
          Rejoignez plus de <span className="text-red-600 text-sm">27,000</span> abonnés sur Instagram
        </p>
      </div>
    </section>
  );
};

export default Reviews;
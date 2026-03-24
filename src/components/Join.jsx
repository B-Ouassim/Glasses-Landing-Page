export const Join = () => (
  <section className="py-32 px-6 flex justify-center">
    <div className="max-w-3xl w-full bg-zinc-900 p-12 rounded-[50px] text-center border border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 font-black text-9xl">DR</div>
        <h2 className="text-4xl font-black uppercase mb-6 italic">Rejoignez le club</h2>
        <p className="text-gray-400 mb-8">Recevez nos dernières collections et offres exclusives.</p>
        <div className="flex flex-col md:flex-row gap-4">
            <input className="flex-1 bg-black border border-white/10 rounded-full px-6 py-4 focus:outline-none focus:border-red-600" placeholder="Votre Email" />
            <button className="bg-red-600 text-white px-10 py-4 rounded-full font-black uppercase text-xs">S'inscrire</button>
        </div>
    </div>
  </section>
);
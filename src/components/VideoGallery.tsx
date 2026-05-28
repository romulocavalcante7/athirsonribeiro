"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function VideoGallery() {
  return (
    <section className="relative w-full py-32 bg-black overflow-hidden" id="videos">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">
            Athirson Ribeiro Play
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
            <button className="px-6 py-2 rounded-full border border-gold text-gold whitespace-nowrap bg-gold/10">Clipes Oficiais</button>
            <button className="px-6 py-2 rounded-full border border-white/20 text-gray-400 hover:text-white hover:border-white/50 whitespace-nowrap transition-colors">Grandes Momentos na TV</button>
            <button className="px-6 py-2 rounded-full border border-white/20 text-gray-400 hover:text-white hover:border-white/50 whitespace-nowrap transition-colors">Bastidores da Estrada</button>
          </div>
        </motion.div>

        {/* Hero Video (Featured) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-video md:aspect-[21/9] bg-gray-900 rounded-3xl overflow-hidden mb-8 group cursor-pointer border border-white/10"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10"></div>
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="w-20 h-20 rounded-full bg-gold/20 backdrop-blur-sm border border-gold/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Play fill="currentColor" className="text-gold w-8 h-8 ml-1" />
            </div>
          </div>
          <div className="absolute bottom-8 left-8 z-20">
            <h3 className="text-3xl font-serif text-white mb-2 text-glow">História de Amor (Clipe Oficial)</h3>
            <p className="text-gray-300">A tradução visual das canções românticas.</p>
          </div>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item * 0.1 }}
              className="relative aspect-[9/16] bg-gray-900 rounded-xl overflow-hidden group cursor-pointer border border-white/5 hover:border-gold/30 transition-colors"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors z-10"></div>
              <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                <Play fill="currentColor" className="text-white w-12 h-12 drop-shadow-lg" />
              </div>
              <div className="absolute bottom-4 left-4 z-20">
                <p className="text-white font-bold text-sm">Momento no Ratinho</p>
                <p className="text-gold text-xs">SBT</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

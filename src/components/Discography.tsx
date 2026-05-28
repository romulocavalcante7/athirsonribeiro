"use client";

import { motion } from "framer-motion";
import { Disc3 } from "lucide-react";

export default function Discography() {
  return (
    <section className="relative w-full py-32 bg-black overflow-hidden" id="discografia">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">
            Discografia & Grandes Produções
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-6">
            Cada faixa, um capítulo. Cada álbum, um registro eterno de paixão e energia gravado na memória do público. Explore os lançamentos de estúdio e sinta a atmosfera única dos palcos.
          </p>
          <div className="w-24 h-1 gold-gradient mx-auto rounded-full"></div>
        </motion.div>

        {/* Temporary placeholder for 3D cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item * 0.1 }}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black border border-white/10 flex flex-col items-center justify-center group-hover:border-gold/50 transition-colors duration-500">
                <Disc3 size={64} className="text-gold/50 group-hover:text-gold transition-colors duration-500 mb-4" />
                <h3 className="text-2xl font-serif text-white group-hover:text-gold transition-colors duration-500">
                  Em Breve
                </h3>
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                <button className="gold-gradient text-black px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  Ver Detalhes
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

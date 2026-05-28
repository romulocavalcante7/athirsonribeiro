"use client";

import { motion } from "framer-motion";
import { Play, Download, Share2, Heart, Music2 } from "lucide-react";

const MUSICAS = [
  { id: 1, titulo: "História de Amor", legenda: "O mais novo lançamento que une o ritmo contagiante e a emoção de uma paixão avassaladora.", plays: "1.2M", duration: "3:15" },
  { id: 2, titulo: "Passarinho na Gaiola", legenda: "Uma canção profundamente emocional, que reconta a história real e tocante de superação.", plays: "850K", duration: "4:02" },
  { id: 3, titulo: "Jogado na Rua, Casa Amarela", legenda: "Clássico instantâneo com a essência do forró.", plays: "500K", duration: "3:45" },
  { id: 4, titulo: "Por Covardia Minha", legenda: "Romantismo contemporâneo.", plays: "420K", duration: "3:20" },
  { id: 5, titulo: "Saudades do Que Não Viveu", legenda: "Aquele modão de arrastar o chifre no asfalto.", plays: "310K", duration: "3:55" },
  { id: 6, titulo: "Eu Não Te Superei", legenda: "Para os corações partidos.", plays: "650K", duration: "3:30" }
];

export default function MusicPlatform() {
  return (
    <section className="relative w-full py-32 bg-[#050505] overflow-hidden" id="musicas">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">
            Sons da Alma
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-6">
            Dê o play e viva a essência do nosso forró e romantismo contemporâneo.
          </p>
          <div className="w-24 h-1 gold-gradient mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col gap-4">
          {MUSICAS.map((musica, index) => (
            <motion.div
              key={musica.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col md:flex-row items-center justify-between p-4 md:p-6 rounded-2xl glass-panel hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-gold/30"
            >
              <div className="flex items-center gap-6 w-full md:w-auto mb-4 md:mb-0">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center shrink-0 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all">
                  <Music2 className="text-gold opacity-50 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm cursor-pointer">
                    <Play fill="currentColor" className="text-white w-8 h-8" />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors">
                    {musica.titulo}
                  </h3>
                  <p className="text-sm text-gray-400 max-w-md hidden md:block mt-1">
                    {musica.legenda}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end">
                <div className="flex items-center gap-4 text-gray-400">
                  <span className="text-xs font-mono bg-white/5 px-2 py-1 rounded">{musica.duration}</span>
                  <span className="text-xs hidden sm:block">{musica.plays} plays</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-500/10 rounded-full transition-colors">
                    <Heart size={20} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors">
                    <Download size={20} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors">
                    <Share2 size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

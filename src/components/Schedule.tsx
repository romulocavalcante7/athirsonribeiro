"use client";

import { motion } from "framer-motion";
import { MapPin, CalendarDays, Ticket } from "lucide-react";

const SHOWS = [
  { id: 1, data: "12 AGO", cidade: "São Paulo, SP", local: "Villa Country", status: "ingressos" },
  { id: 2, data: "20 AGO", cidade: "Goiânia, GO", local: "Pecuária de Goiânia", status: "ingressos" },
  { id: 3, data: "05 SET", cidade: "Bonfim do Piauí, PI", local: "Praça Principal", status: "esgotado" },
];

export default function Schedule() {
  return (
    <section className="relative w-full py-32 bg-[#050505] overflow-hidden" id="agenda">
      <div className="absolute left-0 top-1/2 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold tracking-widest text-white text-glow uppercase mb-4">
              Próximos Shows
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              Sinta a vibração ao vivo. Escolha sua cidade e garanta o seu lugar na noite mais inesquecível do ano.
            </p>
          </div>
          <button className="hidden md:block border border-gold text-gold hover:bg-gold hover:text-black px-6 py-3 rounded-full font-bold transition-colors">
            Ver Toda a Agenda
          </button>
        </motion.div>

        <div className="flex flex-col gap-6">
          {SHOWS.map((show, index) => (
            <motion.div
              key={show.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-panel p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 hover:border-gold/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-auto text-center md:text-left">
                <div className="w-24 h-24 rounded-xl bg-black border border-white/10 flex flex-col items-center justify-center shrink-0">
                  <span className="text-3xl font-serif text-gold font-bold">{show.data.split(' ')[0]}</span>
                  <span className="text-sm text-gray-400 uppercase tracking-widest">{show.data.split(' ')[1]}</span>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gold transition-colors">{show.cidade}</h3>
                  <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                    <MapPin size={16} />
                    <span>{show.local}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 w-full md:w-auto">
                <button 
                  className={`w-full md:w-auto px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all ${
                    show.status === 'esgotado' 
                    ? 'bg-white/5 text-gray-500 cursor-not-allowed'
                    : 'gold-gradient text-black hover:scale-105 shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                  }`}
                  disabled={show.status === 'esgotado'}
                >
                  {show.status === 'esgotado' ? (
                    'ESGOTADO'
                  ) : (
                    <>
                      <Ticket size={20} />
                      GARANTIR INGRESSO
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <button className="md:hidden mt-8 w-full border border-gold text-gold hover:bg-gold hover:text-black px-6 py-4 rounded-full font-bold transition-colors">
          Ver Toda a Agenda
        </button>
      </div>
    </section>
  );
}

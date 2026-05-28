"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

export default function History() {
  return (
    <section className="relative w-full py-32 bg-black overflow-hidden" id="historia">
      {/* Background Decorative */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 to-transparent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">
            A Trajetória de um Sonhador
          </h2>
          <div className="w-24 h-1 gold-gradient mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] rounded-2xl overflow-hidden glass-panel group"
          >
            <Image
              src="/images/fotonosbt.jpg"
              alt="Athirson Ribeiro no SBT"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            
            <div className="absolute bottom-8 left-8 right-8">
              <Quote className="text-gold w-10 h-10 mb-4 opacity-80" />
              <p className="text-xl md:text-2xl font-serif italic text-white mb-4 leading-relaxed">
                "Sou nordestino com orgulho, piauiense de coração e grato pelas minhas origens. Minha história começou aqui e é daqui que vem a minha força."
              </p>
              <p className="text-gold font-bold">— Athirson Ribeiro</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed">
                Nascido e criado no interior do Piauí, na histórica região de Bonfim do Piauí — berço da Serra da Capivara —, <strong className="text-white">Athirson Ribeiro</strong> carrega em sua voz a força, a resiliência e a poesia do povo nordestino. Desde a infância, a música não era apenas um sonho distante, mas o seu destino.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                Enfrentando os desafios comuns a tantos talentos do interior, ele ouviu de muitos que a arte não seria capaz de sustentá-lo. Mas um verdadeiro sonhador nunca recua.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                Com determinação inabalável, o jovem cantor viajou para São Paulo em busca de seus objetivos. Em pouco tempo, sua potência vocal e seu carisma magnético transformaram o "matuto na cidade grande" em um fenômeno de rede nacional. Unindo o som tradicional da sanfona com a sofisticação da produção moderna, Athirson Ribeiro transcendeu fronteiras, levando o orgulho de sua terra natal para os palcos mais disputados da televisão brasileira.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="glass-panel p-6 rounded-xl text-center">
                <h3 className="text-4xl font-serif text-gold font-bold mb-2 text-glow">97</h3>
                <p className="text-sm text-gray-400">Jurados levantados na Record TV</p>
              </div>
              <div className="glass-panel p-6 rounded-xl text-center">
                <h3 className="text-4xl font-serif text-gold font-bold mb-2 text-glow">1000</h3>
                <p className="text-sm text-gray-400">Nota Máxima no "Dez ou Mil"</p>
              </div>
              <div className="glass-panel p-6 rounded-xl text-center">
                <h3 className="text-4xl font-serif text-gold font-bold mb-2 text-glow">1</h3>
                <p className="text-sm text-gray-400">Troféu Arnaldo Saccomani</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

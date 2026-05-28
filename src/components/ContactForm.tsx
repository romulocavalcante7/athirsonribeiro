"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function ContactForm() {
  const whatsappNumber = "5589981198884";
  const whatsappMessage = encodeURIComponent("Olá vim pelo site, gostaria de contratar um show seu!");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative w-full py-32 bg-black overflow-hidden" id="contratacao">
      {/* Background Decor */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
            Leve o Show para Sua Cidade
          </h2>
          <div className="w-24 h-1 gold-gradient mx-auto rounded-full mb-8"></div>
          
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-12">
            Transforme sua festa, feira ou grande evento em uma experiência cinematográfica inesquecível. Uma megaprodução com som impecável, presença de palco avassaladora e o repertório que o Brasil inteiro aprendeu a amar.
          </p>

          <Link href={whatsappLink} target="_blank">
            <button className="gold-gradient text-black font-bold py-5 px-12 rounded-full flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-[0_0_30px_rgba(212,175,55,0.4)] mx-auto text-lg md:text-xl">
              <MessageCircle size={28} />
              CONTRATAR AGORA
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

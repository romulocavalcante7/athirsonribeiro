"use client";

import { motion } from "framer-motion";
import { PlayCircle, MessageCircle, BookOpen, Disc3, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const fullText = "Olá, me chamo Athirson Ribeiro...";
  const [displayedText, setDisplayedText] = useState("");
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) {
        clearInterval(interval);
        setTimeout(() => setShowButtons(true), 800);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const whatsappNumber = "5589981198884";
  const whatsappMessage = encodeURIComponent("Olá vim pelo site, gostaria de contratar um show seu!");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black pt-20 pb-12">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/10 via-black to-black"></div>

      <div className="relative z-10 text-center px-4 w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* Profile Picture */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-gold/30 shadow-[0_0_40px_rgba(212,175,55,0.2)] mb-6 mt-4"
        >
          <Image
            src="/images/fotoPerfilathirson.jpg"
            alt="Athirson Ribeiro"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Typewriter Text */}
        <div className="h-20 md:h-24 flex items-center justify-center mb-2">
          <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-wider text-white text-glow">
            {displayedText}
            <span className="animate-pulse inline-block ml-1">|</span>
          </h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: showButtons ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="text-gray-300 text-base md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-8"
        >
          A Voz do Nordeste que Conquistou o Brasil.
        </motion.p>

        {/* Buttons - Linktree Style */}
        {showButtons && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center gap-4 w-full max-w-md mx-auto"
          >
            <Link href="/musicas" className="w-full">
              <button className="w-full gold-gradient text-black px-8 py-4 rounded-full font-bold flex items-center justify-center gap-3 hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                <PlayCircle size={22} />
                OUVIR MÚSICAS
              </button>
            </Link>
            
            <Link href={whatsappLink} target="_blank" className="w-full">
              <button className="w-full glass-panel text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-white/10 transition-colors duration-300 border-gold/30">
                <MessageCircle size={22} className="text-gold" />
                CONTRATAR SHOW
              </button>
            </Link>

            <Link href="/historia" className="w-full">
              <button className="w-full glass-panel text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-white/10 transition-colors duration-300 border-gold/30">
                <BookOpen size={22} className="text-gray-400" />
                CONHECER A MINHA HISTÓRIA
              </button>
            </Link>

            <Link href="/discografia" className="w-full">
              <button className="w-full glass-panel text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-white/10 transition-colors duration-300 border-gold/30">
                <Disc3 size={22} className="text-gray-400" />
                VER DISCOGRAFIA COMPLETA
              </button>
            </Link>

            <Link href="/videos" className="w-full">
              <button className="w-full glass-panel text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-white/10 transition-colors duration-300 border-gold/30">
                <Video size={22} className="text-gray-400" />
                ASSISTIR AOS VÍDEOS
              </button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}

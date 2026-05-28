"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Disc3 } from "lucide-react";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula o tempo de carregamento da plataforma (mais rápido agora: 1.2s)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
        >
          {/* Efeito de luz ao fundo */}
          <div className="absolute w-[400px] h-[400px] bg-gold/10 rounded-full blur-[100px] animate-pulse"></div>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center z-10"
          >
            {/* Disco rodando */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="mb-8"
            >
              <Disc3 size={80} className="text-gold" strokeWidth={1} />
            </motion.div>
            
            {/* Nome do Artista revelando */}
            <h1 className="font-serif text-3xl md:text-5xl text-white tracking-[0.2em] uppercase text-glow overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="block"
              >
                Athirson Ribeiro
              </motion.span>
            </h1>
            
            {/* Barra de progresso visual (opcional/estética) */}
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-[2px] bg-gold mt-6 rounded-full max-w-[200px]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

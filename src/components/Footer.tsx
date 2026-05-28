"use client";

import { Camera, Video, Music, Music3 } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-serif text-3xl text-white mb-8 tracking-widest uppercase">
            Athirson Ribeiro
          </h2>

          <div className="flex items-center gap-6 mb-12">
            <Link href="https://www.instagram.com/athirson_ribeiro_/" target="_blank" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold hover:scale-110 transition-all">
              <Camera size={20} />
            </Link>
            <Link href="https://www.youtube.com/@Athirson_Ribeiro" target="_blank" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold hover:scale-110 transition-all">
              <Video size={20} />
            </Link>
            <Link href="https://open.spotify.com/intl-pt/artist/3UJ02HNPtgRBnKxVJ4EH6U" target="_blank" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold hover:scale-110 transition-all">
              <Music size={20} />
            </Link>
            <Link href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold hover:scale-110 transition-all">
              <Music3 size={20} /> {/* TikTok Placeholder */}
            </Link>
          </div>

          <p className="font-serif text-xl md:text-2xl italic text-gray-300 max-w-2xl text-glow">
            "Nunca duvide de um cara sonhador que não desiste de seus objetivos."
          </p>
          <p className="text-gold mt-4 font-bold">— Athirson Ribeiro</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs text-gray-500">
          <p>© 2026 Athirson Ribeiro Oficial. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">
            Desenvolvido por{" "}
            <Link 
              href="https://www.instagram.com/romulo.dev/" 
              target="_blank" 
              className="text-gold font-bold text-glow hover:text-white hover:scale-105 inline-block transition-all animate-pulse"
            >
              Rômulo Cavalcante
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

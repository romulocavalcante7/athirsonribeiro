"use client";

import { motion } from "framer-motion";

function YouTubeVideo({ videoId, title }: { videoId: string; title: string }) {
  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 shadow-[0_0_20px_rgba(212,175,55,0.1)] group hover:border-gold/30 transition-colors">
      <iframe
        className="absolute inset-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
}

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
            Galeria de Vídeos
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl">
            Assista aos clipes oficiais, apresentações em rede nacional e um pouco dos bastidores da estrada diretamente do YouTube.
          </p>
        </motion.div>

        {/* Hero Video (Featured) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-serif text-gold mb-4 text-glow">Destaque</h3>
          {/* Exemplo de vídeo (você pode trocar o videoId depois) */}
          <YouTubeVideo videoId="SMsaxcsmY2A" title="Athirson Ribeiro - Vídeo Destaque" />
        </motion.div>

        {/* Video Grid */}
        <h3 className="text-2xl font-serif text-white mb-6">Mais Assistidos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
             <YouTubeVideo videoId="dQw4w9WgXcQ" title="Vídeo 1" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
             <YouTubeVideo videoId="dQw4w9WgXcQ" title="Vídeo 2" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
             <YouTubeVideo videoId="dQw4w9WgXcQ" title="Vídeo 3" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

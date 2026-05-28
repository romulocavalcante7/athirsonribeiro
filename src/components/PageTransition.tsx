"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Disc3 } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);
  const [savedPath, setSavedPath] = useState(pathname);

  useEffect(() => {
    if (pathname !== savedPath) {
      setIsNavigating(true);
      setSavedPath(pathname);
      
      // Simula um tempinho de carregamento mais rápido (300ms em vez de 800ms)
      const timer = setTimeout(() => {
        setIsNavigating(false);
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [pathname, savedPath]);

  return (
    <>
      <AnimatePresence>
        {isNavigating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-md"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            >
              <Disc3 size={80} className="text-gold" strokeWidth={1} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </>
  );
}

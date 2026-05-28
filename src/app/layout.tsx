import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Athirson Ribeiro Oficial | A Voz do Nordeste",
  description: "Plataforma oficial do cantor Athirson Ribeiro. Da grandiosidade da Serra da Capivara para os maiores palcos do país.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${cinzel.variable} scroll-smooth antialiased bg-black text-white`}
    >
      <body className="min-h-full flex flex-col font-sans overflow-x-hidden selection:bg-gold selection:text-black">
        <LoadingScreen />
        <Navbar />
        <main className="flex-1">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // 400 = Normal, 600 = Semibold, 700 = Bold
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Meu Portfólio - Desenvolvedor Web",
  description: "Portfólio de projetos e experiência em desenvolvimento. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className + "  min-h-screen flex flex-col"}>
        {/* A Navbar fica fora do {children}, logo aparece em TODAS as páginas */}
        <Navbar />
        
        {/* O conteúdo da página atual vai renderizar aqui */}
        <div className="flex-1">
          {children}
        </div>
          <Footer />
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Meu Portfólio",
  description: "Portfólio de projetos e experiência em desenvolvimento.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
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
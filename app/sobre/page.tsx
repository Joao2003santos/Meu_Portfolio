import Image from "next/image";
import Link from 'next/link';

export default function SobrePage() {
  const habilidades = [
    'JavaScript / TypeScript',
    'React / Next.js',
    'Tailwind CSS',
    'Git / GitHub',
    'HTML5 / CSS3',
    'Estruturas de Dados',
  ];

  return (
    <main className=" max-w-4xl mx-auto px-4 py-12 space-y-12">
      {/* Cabeçalho */}
      <section className="space-y-4 ">
        <h1 className="text-4xl font-extrabold  tracking-tight">
          Sobre Mim
        </h1>
        <p className="text-lg text-gray-200 pb-3 leading-relaxed">
          Olá! Me chamo João. Sou estudante de Ciência da Computação e entusiasta do desenvolvimento web. 
          Tenho foco em criar soluções eficientes, performáticas e orientadas a resolver 
          problemas práticos do mercado de tecnologia.
        </p>
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-50 border-b border-gray-200 pb-2 leading-relaxed">
          Objetivo
        </h2>
        <p className="text-lg text-gray-200 leading-relaxed">
          Meu objetivo é me tornar um desenvolvedor full-stack, capaz de criar aplicações web completas,
          desde o front-end até o back-end, com foco em boas práticas de desenvolvimento e experiência do usuário.
        </p>

      </section>

      {/* Trajetória & Aprendizado */}
      <section className="space-y-4 border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold ">
          Trajetória & Filosofia
        </h2>
        <p className=" leading-relaxed">
          Acredito que a melhor forma de aprender programação é **construindo projetos práticos** 
          e demonstrando habilidades reais. Atualmente, busco aprimorar meu conhecimento 
          no ecossistema React/Next.js e boas práticas de desenvolvimento de software.
        </p>
      </section>

      {/* Principais Habilidades */}
      <section className="space-y-4 border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold">
          Habilidades & Tecnologias
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {habilidades.map((skill) => (
            <div 
              key={skill}
              className="bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-semibold text-gray-700 shadow-sm"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Formação Acadêmica */}
      <section className="space-y-4 border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-gray-100">
          Formação
        </h2>
        <div className="bg-gray-100 border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900">
            Bacharelado em Ciência da Computação
          </h3>
          <p className="text-sm text-gray-500 mt-1">Em andamento...</p>
          <p className="text-gray-600 text-sm mt-3">
            Foco em fundamentos da computação, algoritmos, estruturas de dados e desenvolvimento de software.
          </p>
        </div>
        <div className="bg-gray-300 border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900">
            Técnico em Analise e Desenvolvimento de Sistemas
          </h3>
          <p className="text-sm bg-blue-900 p-1 w-36 text-white mt-1">Concluido em 2022</p>
          <p className="text-gray-600 text-sm mt-3">
            Foco em criação, implementação e manutenção de softwares e sistemas computacionais.
          </p>
        </div>
        <div className="bg-gray-300 border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900">
            Técnico em Informática para Internet
          </h3>
          <p className="text-sm bg-blue-900 p-1 w-36 text-white mt-1">Concluido em 2021</p>
          <p className="text-gray-600 text-sm mt-3">
            Foco em ensinar a criar sites, portais, sistemas web e aplicativos para dispositivos móveis
          </p>
        </div>
      </section>

      {/* Botão de Voltar */}
      <div className="pt-4">
        <Link 
          href="/" 
          className="inline-flex items-center text-sm font-semibold text-blue-600 hover:underline"
        >
          ← Voltar para a Home
        </Link>
      </div>
    </main>
  );
}
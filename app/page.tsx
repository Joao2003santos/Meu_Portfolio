import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';


export default function Home() {
  return (

   <main className="max-w-4xl mx-auto px-4 py-12 space-y-12">
      {/* Apresentação Inicial (Hero) */}
      <section className="space-y-4 text-center">
        <h1 className="text-4xl  font-extrabold text-gray-200 sm:text-5xl tracking-tight">
          Olá, sou Desenvolvedor de Software 👋​​💻​
        </h1>
        <p className="text-lg  text-gray-400 ">
          Estudante de Ciência da Computação focado na criação de soluções web eficientes, 
          performáticas e com foco na experiência do usuário.
        </p>
      </section>

      {/* Seção de Projetos */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-100 border-b border-gray-200 pb-2">
          Projetos em Destaque
        </h2>
        
        {/* Grid contendo o mapeamento da lista */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
      
  );
}



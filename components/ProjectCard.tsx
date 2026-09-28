import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

// Objeto com as cores personalizadas para cada tecnologia
const tagColors: Record<string, string> = {
  'Next.js': 'bg-black text-white border-black',
  'React': 'bg-sky-50 text-sky-700 border-sky-200',
  'TypeScript': 'bg-blue-50 text-blue-700 border-blue-200',
  'JavaScript': 'bg-amber-50 text-amber-700 border-amber-200',
  'Tailwind CSS': 'bg-cyan-50 text-cyan-700 border-cyan-200',
  'HTML': 'bg-orange-50 text-orange-700 border-orange-200',
  'CSS': 'bg-indigo-50 text-indigo-700 border-indigo-200',
  'Node.js': 'bg-emerald-50 text-emerald-700 border-emerald-200',
};

// Cor padrão caso a tag ainda não tenha uma cor definida acima
const defaultTagColor = 'bg-gray-100 text-gray-700 border-gray-200';

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm flex flex-col justify-between">
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {project.description}
        </p>
        
        {/* Renderizando as Tags com cores individuais */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => {
            // Pega a classe específica da tag ou usa a cor padrão
            const colorClass = tagColors[tag] || defaultTagColor;

            return (
              <span 
                key={tag} 
                className={`text-xs px-2.5 py-1 rounded font-medium border ${colorClass}`}
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>

      <div className="flex gap-4 text-sm font-semibold pt-4 mt-4 border-t border-gray-100">
        <a 
          href={project.githubUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:underline"
        >
          Repositório GitHub
        </a>
        {project.deployUrl && (
          <a 
            href={project.deployUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-emerald-600 hover:underline"
          >
            Ver Aplicação →
          </a>
        )}
      </div>
    </div>
  );
}
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  deployUrl?: string; // O '?' indica que este campo é opcional
}

export const projects: Project[] = [
  // {
  //   id: '1',
  //   title: 'Plataforma de Métricas e Análise',
  //   description: 'Aplicação para visualização de estatísticas, dados de desempenho e métricas em tempo real.',
  //   tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  //   githubUrl: 'https://github.com/seu-usuario/projeto-1',
  //   deployUrl: 'https://projeto-1.vercel.app',
  // },
  {
    id: '1',
    title:'Calculadora Simples',
    description: 'Calculadora desenvolvida com JavaScript',
    tags: ['HTML','CSS','JavaScript'],
    githubUrl: 'https://github.com/Joao2003santos/Calculadora_Simples',
  },
];
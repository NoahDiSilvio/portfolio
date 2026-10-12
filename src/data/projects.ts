export interface Project {
  title: string
  type: string
  description: string
  tech: string[]
  image?: string
  github?: string
  demo?: string
}

export const projects: Project[] = [
  {
    title: 'Zilveren Schakel',
    type: 'Full-stack platform',
    description: 'Platform dat vrijwilligers koppelt aan ouderen die hulp nodig hebben.',
    tech: ['Laravel 12', 'Vue 3', 'TypeScript'],
  },
  {
    title: 'Restje',
    type: 'Mobile app',
    description: 'App die een boodschappenlijst maakt op basis van je weekmenu en voorraad.',
    tech: ['Flutter'],
  },
]

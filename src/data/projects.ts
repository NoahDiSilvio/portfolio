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
    title: 'Restje',
    type: 'Mobile app',
    description: 'App die een boodschappenlijst maakt op basis van je weekmenu en voorraad. (onder constructie)',
    tech: ['Flutter'],
  },
  {
    title: "Sven's Frozen Delight",
    type: 'Teamproject · Full-stack',
    description:
      'Webshop voor een ijsmaker met bestelformulier, admin-dashboard en live tracking van de ijskarren via WebSockets.',
    tech: ['TypeScript', 'PHP', 'MySQL', 'WebSockets'],
    image: '/projects/svens-frozen-delight.png',
    github: 'https://github.com/NoahDiSilvio/svens-frozen-delight',
    demo: 'https://noahdisilvio.github.io/svens-frozen-delight/',
  },

]

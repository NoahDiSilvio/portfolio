export interface TimelineItem {
  type: 'Opleiding' | 'Stage'
  period: string
  title: string
  place: string
  description: string
  tags?: string[]
}

export const timeline: TimelineItem[] = [
  {
    type: 'Opleiding',
    period: '2021 – 2023',
    title: 'Secundair onderwijs: Elektronica & IT',
    place: 'SINT-LIEVENSCOLLEGE BUSINESS',
    description: 'Afgestudeerd aan het Sint-Lievenscollege Business, met een specialisatie in Elektronica & IT.',
  },
  {
    type: 'Opleiding',
    period: '2023 – heden',
    title: 'Bachelor Elektronica-ICT',
    place: 'Odisee',
    description: 'Focus op full-stack webontwikkeling, met projecten in Laravel, Vue en Flutter.',
    tags: ['Laravel', 'Vue 3', 'TypeScript', 'Flutter'],
  },
  {
    type: 'Stage',
    period: 'Binnenkort',
    title: 'Op zoek naar een stage',
    place: 'Misschien bij jullie?',
    description:
      'Ik zoek een stageplaats bij een webbedrijf in de regio Gent, waar ik meewerk aan maatwerkprojecten. Met onderstaande technologieën heb ik al ervaring, maar ik sta vooral te popelen om nieuwe talen en tools te leren.',
    tags: ['Laravel', 'Vue 3', 'TypeScript', 'REST API’s'],
  },
]

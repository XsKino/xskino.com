/* eslint-disable @typescript-eslint/consistent-type-definitions */
export type Project = {
  name: string
  brief?: string
  description: string
  image: string
  technologies: Technology[]
  github?: string
  link?: string
}

export type Technology =
  | 'JavaScript'
  | 'TypeScript'
  | 'Nodejs'
  | 'Astro'
  | 'React'
  | 'Vuejs'
  | 'Angular'
  | 'Nextjs'
  | 'TailwindCSS'
  | 'MongoDB'
  | 'Java'
  | 'Spring'
  | 'PHP'
  | 'Laravel'
  | 'Python'
  | 'MySQL'
  | 'PostgreSQL'
  | 'Docker'
  | 'Kubernetes'
  | 'AWS'
  | 'Google Cloud'
  | 'Unity'
  | 'Unreal Engine'
  | 'Flutter'
  | 'OpenAI API'

export type TimelineItem = {
  date: string
  title: string
  body: string
  links?: Array<{
    text: string
    url: string
  }>
}

export type SocialLink = {
  name: string
  title: string
  url: string
  mainColor?: string
  detailColor?: string
}

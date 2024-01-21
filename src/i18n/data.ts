import type { SocialLink, Project, TimelineItem, Resource, SupportedLanguage } from '@/src/types/app'

export const languages: SupportedLanguage[] = [
  {
    name: 'English',
    code: 'en',
    native: 'English'
  },
  {
    name: 'Spanish',
    code: 'es',
    native: 'Español'
  }
]

interface Data<T> {
  en: T
  es: T
}

export const socialLinks: Data<SocialLink[]> = {
  en: [
    {
      name: 'github',
      title: 'Github',
      url: 'https://github.com/XsKino',
      mainColor: 'tertiary',
      detailColor: 'primary',
      alt: "Kino's GitHub"
    },
    {
      name: 'twitter',
      title: 'Twitter',
      url: 'https://twitter.com/andresprza',
      mainColor: 'primary',
      detailColor: 'secondary',
      alt: "Kino's Twitter"
    },
    {
      name: 'linkedin',
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/andresprza',
      mainColor: 'tertiary',
      detailColor: 'primary',
      alt: "Kino's LinkedIn"
    },
    {
      name: 'mail',
      title: 'E-Mail',
      url: '#contact',
      mainColor: 'secondary',
      detailColor: 'tertiary',
      alt: 'Contact Kino'
    }
  ],
  es: [
    {
      name: 'github',
      title: 'Github',
      url: 'https://github.com/XsKino',
      mainColor: 'tertiary',
      detailColor: 'primary',
      alt: 'GitHub de Kino'
    },
    {
      name: 'twitter',
      title: 'Twitter',
      url: 'https://twitter.com/andresprza',
      mainColor: 'primary',
      detailColor: 'secondary',
      alt: 'Twitter de Kino'
    },
    {
      name: 'linkedin',
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/andresprza',
      mainColor: 'tertiary',
      detailColor: 'primary',
      alt: 'LinkedIn de Kino'
    },
    {
      name: 'mail',
      title: 'E-Mail',
      url: '#contact',
      mainColor: 'secondary',
      detailColor: 'tertiary',
      alt: 'Contacta a Kino'
    }
  ]
}

interface ProjectSet {
  main: Project[]
  other?: Project[]
}
export const projects: Data<ProjectSet> = {
  // 3 Main Projects
  en: {
    main: [
      {
        name: 'Recipee',
        brief: 'Food recipe catalogue',
        description: `
        hola lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
        `,
        image: 'web-lab.jpg',
        github: 'aksjda',
        technologies: ['MySQL', 'Vuejs', 'Laravel']
      },
      {
        name: 'Web Lab',
        brief: 'Project Collection',
        description: `
        Inspired by the 50 Days 50 Projects Challenge, I decided to create a website with a collection of web experiments where you can take a look at what's possible to do with web technologies.
        `,
        image: 'web-lab.jpg',
        github: 'https://github.com/XsKino/web-lab',
        link: 'https://xs-web-lab.vercel.app/',
        technologies: ['Astro', 'React', 'TailwindCSS']
      },
      {
        name: 'No',
        description: `
        adios
        `,
        image: 'web-lab.jpg',
        technologies: ['Nodejs', 'Kubernetes', 'TypeScript']
      }
    ],
    other: [
      {
        name: 'uno',
        brief: 'brief xd',
        description: `
        hola
        `,
        image: 'web-lab.jpg',
        technologies: ['React', 'TailwindCSS', 'TypeScript']
      },
      {
        name: 'yadayada',
        description: `
        reeeeeeeeeeeeeeeee
        `,
        image: 'ewe.png',
        technologies: ['React', 'TailwindCSS', 'TypeScript']
      },
      {
        name: 'No',
        brief: 'recipe catalogue',
        description: `
        adios
        `,
        image: 'web-lab.jpg',
        technologies: ['React', 'TailwindCSS', 'TypeScript']
      },
      {
        name: 'mememmeme',
        description: `
        hola
        `,
        image: 'uwu.png',
        technologies: ['React', 'TailwindCSS', 'TypeScript']
      },
      {
        name: 'dos',
        description: `
        reeeeeeeeeeeeeeeee
        `,
        image: 'ewe.png',
        technologies: ['React', 'TailwindCSS', 'TypeScript']
      },
      {
        name: 'laksjdlkas',
        description: `
        adios
        `,
        image: 'owo.png',
        technologies: ['React', 'TailwindCSS', 'TypeScript']
      }
    ]
  },
  es: {
    main: [
      {
        name: 'Recipee',
        brief: 'Food recipe catalogue',
        description: `
        hola lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
        `,
        image: 'web-lab.jpg',
        github: 'aksjda',
        technologies: ['MySQL', 'Vuejs', 'Laravel']
      },
      {
        name: 'Web Lab',
        brief: 'Project Collection',
        description: `
        Inspired by the 50 Days 50 Projects Challenge, I decided to create a website with a collection of web experiments where you can take a look at what's possible to do with web technologies.
        `,
        image: 'web-lab.jpg',
        github: 'https://github.com/XsKino/web-lab',
        link: 'https://xs-web-lab.vercel.app/',
        technologies: ['Astro', 'React', 'TailwindCSS']
      },
      {
        name: 'No',
        description: `
        adios
        `,
        image: 'web-lab.jpg',
        technologies: ['Nodejs', 'Kubernetes', 'TypeScript']
      }
    ],
    other: []
  }
}

export const jobsTimeline: Data<TimelineItem[]> = {
  en: [
    {
      date: '2020',
      title: 'yadayadayada',
      body: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      date: '2020',
      title: 'yadayadayada',
      body: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      date: '2020',
      title: 'yadayadayada',
      body: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ],
  es: []
}

export const educationTimeline: Data<TimelineItem[]> = {
  en: [
    {
      date: '2019 - 2022',
      title: 'High School',
      body: 'During high school I took the programming specialty, where I learned the basics of programming with Java, web development with JavaScript, PHP and Laravel, databases with MySQL, and mobile development with React Native.'
    },
    {
      date: '2021 - 2023',
      title: 'FreeCodeCamp.org',
      body: 'I have completed multiple courses on FreeCodeCamp.org, learning about web development, data structures, algorithms, and more.',
      links: [
        {
          text: 'Responsive Web Design',
          url: 'https://www.freecodecamp.org/certification/andresprza/responsive-web-design'
        },
        {
          text: 'JavaScript Algorithms and Data Structures',
          url: 'https://www.freecodecamp.org/certification/andresprza/javascript-algorithms-and-data-structures'
        },
        {
          text: 'Front End Development Libraries',
          url: 'https://www.freecodecamp.org/certification/andresprza/front-end-development-libraries'
        },
        {
          text: 'Scientific Computing with Python',
          url: 'https://www.freecodecamp.org/certification/andresprza/scientific-computing-with-python-v7'
        }
      ]
    },
    {
      date: '2021 - Present',
      title: 'Self-Taught',
      body: "I have learned a lot of things on my own, such as React, TypeScript, Nextjs, MongoDB, TailwindCSS, Astro, and more. You can tell i've got a liking for web development."
    },
    {
      date: '2022 - 2023',
      title: 'Oracle Next Education',
      body: '5th generation alumni of the Oracle Next Education program, where I took the back-end specialty, increasing my knowledge in JavaScript, Java and SQL. Also learning Spring Boot and REST APIs, and various soft skills.',
      links: [
        {
          text: 'Certificate',
          url: 'https://app.aluracursos.com/program/certificate/b9146c2e-a581-45ac-a333-ca7f09b245e7'
        }
      ]
    },
    {
      date: '2022 - Present',
      title: 'Computer Science Major',
      body: "Currently studying Computer Science at Chihuahua's Institute of Technology II (ITCHII). So far, I have strengthened my knowledge in Object-Oriented Programming, Data Structures, and Algorithms."
    }
  ],
  es: []
}

export const resources: Data<Resource[]> = {
  en: [
    {
      title: 'FreeCodeCamp.org',
      body: 'FreeCodeCamp is a non-profit organization that consists of an interactive learning web platform, an online community forum, chat rooms, Medium publications and local organizations that intend to make learning web development accessible to anyone.',
      href: 'https://www.freecodecamp.org/',
      imageUrl: 'placeholder.jpg'
    }
  ],
  es: []
}

// titles.length should be multiple of 3
export const titles: Data<string[]> = {
  en: ['Developer', 'CS Major', 'Engineer', 'Self-Taught', 'Artist', 'Designer'],
  es: ['Desarrollador', 'Estudiante', 'Ingeniero', 'Autodidacta', 'Artista', 'Diseñador']
}

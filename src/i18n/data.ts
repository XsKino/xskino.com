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

// titles.length should be multiple of 3
export const titles: Data<string[]> = {
  en: ['Developer', 'CS Major', 'Engineer', 'Self-Taught', 'Artist', 'Designer'],
  es: ['Desarrollador', 'Estudiante', 'Ingeniero', 'Autodidacta', 'Artista', 'Diseñador']
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
        name: 'Gori',
        brief: 'AI Game Master',
        description: `AI-Powered Game Master for tabletop RPGs.`,
        image: 'gori.webp',
        github: 'https://github.com/XsKino/gori',
        link: 'https://gori-ai.vercel.app/',
        technologies: ['TypeScript', 'Nextjs', 'OpenAI API']
      },
      {
        name: 'Web Lab',
        brief: 'Mini-project Collection',
        description: `
        Inspired by the 50 Days 50 Projects Challenge, I decided to create a website with a collection of web experiments where you can take a look at what's possible to do with web technologies.
        `,
        image: 'web-lab.webp',
        github: 'https://github.com/XsKino/web-lab',
        link: 'https://xs-web-lab.vercel.app/',
        technologies: ['Astro', 'React', 'TailwindCSS']
      },
      {
        name: 'Refuzzed',
        brief: 'NFT Marketplace',
        description: `NFT Collection marketplace built on Solana. A new gamified experience`,
        image: 'refuzzed.webp',
        github: 'https://github.com/XsKino/refuzzed',
        link: 'https://refuzzed.vercel.app/',
        technologies: ['Solana', 'Nextjs', 'TailwindCSS']
      }
    ],
    other: [
      {
        name: 'xs convert',
        brief: 'Currency Converter',
        description: `Currency converter built with JavaFX. with this project I got the oportunity to learn how to use JavaFX and how to use APIs in Java.`,
        image: 'xsconvert.webp',
        github: 'https://github.com/XsKino/xsconvert',
        technologies: ['Java', 'CSS']
      },
      {
        name: 'Encriptador de texto',
        brief: 'Text Encryptor',
        description: `Text Encryptor built with React and TailwindCSS for my Oracle Next Education course.`,
        image: 'encriptador.webp',
        github: 'https://github.com/XsKino/encriptador-de-texto',
        link: 'https://xskino.github.io/encriptador-de-texto/',
        technologies: ['React', 'TailwindCSS']
      },
      {
        name: 'Calculadora Estadística',
        brief: 'Statistics Calculator',
        description: `A simple statistics calculator for ungrouped values built with just HTML, CSS and JavaScript. This was actually the first project I made.`,
        image: 'calculadora.webp',
        github: 'https://github.com/XsKino/Calculadora-Estadistica',
        link: 'https://codepen.io/andresprza/full/yLvXqXG',
        technologies: ['HTML', 'JavaScript', 'CSS']
      }
    ]
  },
  es: {
    main: [
      {
        name: 'Gori',
        brief: 'AI Game Master',
        description: `Game Master potenciado por IA para juegos de rol de mesa.`,
        image: 'gori.webp',
        github: 'https://github.com/XsKino/gori',
        link: 'https://gori-ai.vercel.app/',
        technologies: ['TypeScript', 'Nextjs', 'OpenAI API']
      },
      {
        name: 'Web Lab',
        brief: 'Colección de Mini-proyectos',
        description: `
        Inspirado por el reto de 50 Días 50 Proyectos, decidí crear un sitio web con una colección de experimentos web donde puedes ver lo que es posible hacer con las tecnologías web.
        `,
        image: 'web-lab.webp',
        github: 'https://github.com/XsKino/web-lab',
        link: 'https://xs-web-lab.vercel.app/',
        technologies: ['Astro', 'React', 'TailwindCSS']
      },
      {
        name: 'Refuzzed',
        brief: 'NFT Marketplace',
        description: `Marketplace de colecciones NFT construido en Solana. Una nueva experiencia gamificada.`,
        image: 'refuzzed.webp',
        github: 'https://github.com/XsKino/refuzzed',
        link: 'https://refuzzed.vercel.app/',
        technologies: ['Solana', 'Nextjs', 'TailwindCSS']
      }
    ],
    other: [
      {
        name: 'xs convert',
        brief: 'Conversor de monedas',
        description: `Conversor de monedas hecho con JavaFX. Con este proyecto tuve la oportunidad de aprender a usar JavaFX y cómo usar APIs en Java.`,
        image: 'xsconvert.webp',
        github: 'https://github.com/XsKino/xsconvert',
        technologies: ['Java', 'CSS']
      },
      {
        name: 'Encriptador de texto',
        description: `Encriptador de texto hecho con React y TailwindCSS para mi curso de Oracle Next Education.`,
        image: 'encriptador.webp',
        github: 'https://github.com/XsKino/encriptador-de-texto',
        link: 'https://xskino.github.io/encriptador-de-texto/',
        technologies: ['React', 'TailwindCSS']
      },
      {
        name: 'Calculadora Estadística',
        description: `Una simple calculadora estadística para valores no agrupados hecha con solo HTML, CSS y JavaScript. Este fue de hecho el primer proyecto que hice.`,
        image: 'calculadora.webp',
        github: 'https://github.com/XsKino/Calculadora-Estadistica',
        link: 'https://codepen.io/andresprza/full/yLvXqXG',
        technologies: ['HTML', 'JavaScript', 'CSS']
      }
    ]
  }
}

export const jobsTimeline: Data<TimelineItem[]> = {
  en: [
    {
      date: '2017 - 2022',
      title: 'Family Business',
      body: `Organized and optimized workflow for photo editing. Developed new and more efficient methods of data management. Improved efficiency by reducing asset generation time from 1 week to a couple 
      of hours, by coding bva macros to create automatic powepoint slides.`
    },
    {
      date: 'Jan 2024 - Present',
      title: 'Fullstack Developer',
      body: `Developed a significant part of Kontigo™, a startup with an investment of over 1M$. Shipping for over 100K users at a fast pace, and a great user experience thanks to Nextjs and other bleeding-edge technologies.`,
      links: [
        {
          text: 'kontigo.lat',
          url: 'https://kontigo.lat/'
        }
      ]
    }
  ],
  es: [
    {
      date: '2017 - 2022',
      title: 'Negocio Familiar',
      body: `Organicé y optimicé el flujo de trabajo para la edición de fotos. Desarrollé nuevos y más eficientes métodos de gestión de datos. Mejoré la eficiencia al reducir el tiempo de generación de recurso
       de 1 semana a un par de horas, codificando macros de Excel en bva para crear diapositivas de powepoint automáticamente.`
    },
    {
      date: 'Ene 2024 - Presente',
      title: 'Desarrollador Fullstack',
      body: `Desarrollé parte considerable de Kontigo™, una startup con una inversión de más de 1M$. Entregando valor a más de 100K usuarios a un ritmo veloz, y una gran experiencia de usuario. gracias a Nextjs y otras tecnologías modernas.`,
      links: [
        {
          text: 'kontigo.lat',
          url: 'https://kontigo.lat/'
        }
      ]
    }
  ]
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
  es: [
    {
      date: '2019 - 2022',
      title: 'Preparatoria',
      body: 'Durante la preparatoria tomé la especialidad de programación, donde aprendí los fundamentos de la programación con Java, desarrollo web con JavaScript, PHP y Laravel, bases de datos con MySQL, y desarrollo móvil con React Native.'
    },
    {
      date: '2021 - 2023',
      title: 'FreeCodeCamp.org',
      body: 'He completado múltiples cursos en FreeCodeCamp.org, aprendiendo sobre desarrollo web, estructuras de datos, algoritmos, y más.',
      links: [
        {
          text: 'Diseño Web Responsivo',
          url: 'https://www.freecodecamp.org/certification/andresprza/responsive-web-design'
        },
        {
          text: 'Algoritmos y Estructuras de Datos con JavaScript',
          url: 'https://www.freecodecamp.org/certification/andresprza/javascript-algorithms-and-data-structures'
        },
        {
          text: 'Librerías de Desarrollo Front End',
          url: 'https://www.freecodecamp.org/certification/andresprza/front-end-development-libraries'
        },
        {
          text: 'Computación Científica con Python',
          url: 'https://www.freecodecamp.org/certification/andresprza/scientific-computing-with-python-v7'
        }
      ]
    },
    {
      date: '2021 - Presente',
      title: 'Autodidacta',
      body: 'He aprendido muchas cosas por mi cuenta, como React, TypeScript, Nextjs, MongoDB, TailwindCSS, Astro, y más. Seguro te diste cuenta que me gusta el desarrollo web.'
    },
    {
      date: '2022 - 2023',
      title: 'Oracle Next Education',
      body: 'Alumno de la 5ta generación del programa Oracle Next Education, donde tomé la especialidad de back-end, aumentando mi conocimiento en JavaScript, Java y SQL. También aprendiendo Spring Boot y REST APIs, y varias soft skills.',
      links: [
        {
          text: 'Certificado',
          url: 'https://app.aluracursos.com/program/certificate/b9146c2e-a581-45ac-a333-ca7f09b245e7'
        }
      ]
    },
    {
      date: '2022 - Presente',
      title: 'Ingeniería Informática',
      body: 'Actualmente estoy estudiando Ingeniería Informática en el Instituto Tecnológico de Chihuahua II (ITCHII). Hasta ahora, he fortalecido mi conocimiento en Programación Orientada a Objetos, Estructuras de Datos, y Algoritmos.'
    }
  ]
}

export const resources: Data<Resource[]> = {
  en: [
    {
      title: 'My Instagram',
      body: 'Sometimes I post my art and some other stuff on my Instagram. I dont post much, but I try to post something from time to time.',
      href: 'https://www.instagram.com/andresprza/',
      imageUrl: 'instagram.jpg'
    },
    {
      title: 'Anime and manga',
      body: 'All my anime and manga list summarized in a Notion page. You can visit it if you want to find some recommendations.',
      href: 'https://xskino.notion.site/Kino-s-Animanga-List-c977941f21cc4073ab683ceb8af43766',
      imageUrl: 'animanga.jpg'
    },
    {
      title: 'Video Games',
      body: 'A Notion page listing most of the games I have played.',
      href: 'https://xskino.notion.site/Kino-s-Game-List-f596ae8fc0bb47da80e529084ea3f639?pvs=4',
      imageUrl: 'games.jpg'
    },
    {
      title: 'My Spotify',
      body: 'I love listening to music, it is probably one of my favorite things in life. You can check my Spotify profile if you want to see my playlists and the music I listen to, I have pretty versatile tastes.',
      href: 'https://open.spotify.com/user/eg2bpwh66ybm3zjtwaj1c7t91?si=043e11b4e6a448b1',
      imageUrl: 'spotify.jpg'
    },
    {
      title: 'neal.fun',
      body: 'If you are bored, check this page.',
      href: 'https://neal.fun/',
      imageUrl: 'neal.jpg'
    },
    {
      title: 'Namelix',
      body: 'Name generator for business, products, etc.',
      href: 'https://namelix.com/',
      imageUrl: 'namelix.jpg'
    },
    {
      title: 'Brandmark',
      body: 'Logo generator. Very useful if you need ideas.',
      href: 'https://brandmark.io/',
      imageUrl: 'brandmark.jpg'
    },
    {
      title: 'Coolors',
      body: 'Color palette generator. One of the best I have found.',
      href: 'https://coolors.co/',
      imageUrl: 'coolors.jpg'
    },
    {
      title: 'shots',
      body: 'Create mockups really easy. Actually, most of the images on this site were created with shots.',
      href: 'https://shots.so/',
      imageUrl: 'shots.jpg'
    },
    {
      title: 'Refactoring Guru',
      body: 'Catalog of design patterns and many other interesting programming topics.',
      href: 'https://refactoring.guru/',
      imageUrl: 'refactoring.jpg'
    },
    {
      title: 'Tablericons',
      body: 'Open source svg icon catalog.',
      href: 'https://tabler.io/icons',
      imageUrl: 'tabler.jpg'
    }
  ],
  es: [
    {
      title: 'Mi Instagram',
      body: 'A veces subo mi arte y alguna otra cosa a mi Instagram. No subo mucho, pero trato de subir algo de vez en cuando.',
      href: 'https://www.instagram.com/andresprza/',
      imageUrl: 'instagram.jpg'
    },
    {
      title: 'Anime y manga',
      body: 'Toda mi lista de anime y manga resumida en una página de Notion. Puedes visitarla si quieres encontrar alguna recomendación.',
      href: 'https://xskino.notion.site/Kino-s-Animanga-List-c977941f21cc4073ab683ceb8af43766',
      imageUrl: 'animanga.jpg'
    },
    {
      title: 'Videojuegos',
      body: 'Una página de Notion enlistando la mayoría de juegos que he jugado.',
      href: 'https://xskino.notion.site/Kino-s-Game-List-f596ae8fc0bb47da80e529084ea3f639?pvs=4',
      imageUrl: 'games.jpg'
    },
    {
      title: 'Mi Spotify',
      body: 'Me encanta escuchar música, probablemente sea una de mis cosas favoritas en la vida. Puedes ver mi perfil de Spotify si quieres ver mis playlists y la música que escucho, tengo gustos bastante versátiles.',
      href: 'https://open.spotify.com/user/eg2bpwh66ybm3zjtwaj1c7t91?si=043e11b4e6a448b1',
      imageUrl: 'spotify.jpg'
    },
    {
      title: 'neal.fun',
      body: 'Si estás aburrido, revisa esta página.',
      href: 'https://neal.fun/',
      imageUrl: 'neal.jpg'
    },
    {
      title: 'Namelix',
      body: 'Generador de nombres para empresas, productos, etc.',
      href: 'https://namelix.com/',
      imageUrl: 'namelix.jpg'
    },
    {
      title: 'Brandmark',
      body: 'Generador de logos. Muy util si requieres ideas',
      href: 'https://brandmark.io/',
      imageUrl: 'brandmark.jpg'
    },
    {
      title: 'Coolors',
      body: 'Generador de paletas de colores. Uno de los mejores que he encontrado',
      href: 'https://coolors.co/',
      imageUrl: 'coolors.jpg'
    },
    {
      title: 'shots',
      body: 'App para crear mockups de manera súper fácil. De hecho, la mayoría de las imágenes de este sitio fueron creadas con shots.',
      href: 'https://shots.so/',
      imageUrl: 'shots.jpg'
    },
    {
      title: 'Refactoring Guru',
      body: 'Catálogo de patrones de diseño y muchos otros temas interesantes de programación.',
      href: 'https://refactoring.guru/es',
      imageUrl: 'refactoring.jpg'
    },
    {
      title: 'Tablericons',
      body: 'Catálogo de iconos svg de código abierto.',
      href: 'https://tabler.io/icons',
      imageUrl: 'tabler.jpg'
    }
  ]
}

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
  // en: ['Developer', 'CS Major', 'Engineer', 'Self-Taught', 'Artist wannabe', 'Influencer?'],
  // es: ['Desarrollador', 'Estudiante', 'Ingeniero', 'Autodidacta', 'Artista wannabe', 'Influencer?']
  en: ['Developer', 'CS Major', 'Engineer'],
  es: ['Desarrollador', 'Estudiante', 'Autodidacta']
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
        name: 'Web Lab',
        brief: 'Mini-project Collection',
        description: `
        Collection of frontend mini-projects.
        `,
        image: 'web-lab.webp',
        github: 'https://github.com/XsKino/web-lab',
        link: 'https://lab.xskino.com',
        technologies: ['Astro', 'React', 'TailwindCSS']
      },
      {
        name: 'KepTrack',
        brief: 'Expense Tracker',
        description: `
        Expense tracking tool for your recurring expenses.
        `,
        image: 'keptrack.webp',
        // github: 'https://github.com/XsKino/keptrack',
        link: 'https://keptrack.com',
        technologies: ['TypeScript', 'Nextjs', 'TailwindCSS']
      },
      {
        name: 'Gori',
        brief: 'AI Game Master',
        description: `AI-Powered Game Master for tabletop RPGs.`,
        image: 'gori.webp',
        github: 'https://github.com/XsKino/gori',
        link: 'https://gori-ai.vercel.app/',
        technologies: ['TypeScript', 'Nextjs', 'OpenAI API']
      }
    ],
    other: [
      {
        name: 'Refuzzed',
        brief: 'NFT Marketplace',
        description: `NFT Collection marketplace built on Solana. A new gamified experience`,
        image: 'refuzzed.webp',
        github: 'https://github.com/XsKino/refuzzed',
        link: 'https://refuzzed.vercel.app/',
        technologies: ['Solana', 'Nextjs', 'TailwindCSS']
      },
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
        name: 'Web Lab',
        brief: 'Colección de Mini-proyectos',
        description: `
        Colección de mini proyectos de front-end.
        `,
        image: 'web-lab.webp',
        github: 'https://github.com/XsKino/web-lab',
        link: 'https://xs-web-lab.vercel.app/',
        technologies: ['Astro', 'React', 'TailwindCSS']
      },
      {
        name: 'KepTrack',
        brief: 'Control de Gastos',
        description: `
        Herramienta de control de gastos para tus gastos recurrentes. Con KepTrack puedes llevar un control de tus gastos mensuales y anuales, además de poder ver tus gastos por categoría.
        `,
        image: 'keptrack.webp',
        technologies: ['TypeScript', 'Nextjs', 'TailwindCSS'],
        link: 'https://keptrack.com'
      },

      {
        name: 'Gori',
        brief: 'AI Game Master',
        description: `Game Master potenciado por IA para juegos de rol de mesa.`,
        image: 'gori.webp',
        github: 'https://github.com/XsKino/gori',
        link: 'https://gori-ai.vercel.app/',
        technologies: ['TypeScript', 'Nextjs', 'OpenAI API']
      }
    ],
    other: [
      {
        name: 'Refuzzed',
        brief: 'NFT Marketplace',
        description: `Marketplace de colecciones NFT construido en Solana. Una nueva experiencia gamificada.`,
        image: 'refuzzed.webp',
        github: 'https://github.com/XsKino/refuzzed',
        link: 'https://refuzzed.vercel.app/',
        technologies: ['Solana', 'Nextjs', 'TailwindCSS']
      },
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
      date: 'Jan - Oct 2024',
      title: 'Fullstack & Mobile Developer',
      body: `Part of the development team of Kontigo™, a startup focused on remittances based on USDc for Latin America. Responsible for the development of the mobile app with React Native, as well as carrying out fullstack development tasks with Nextjs and Node.`,
      links: [
        {
          text: 'kontigo.lat',
          url: 'https://kontigo.lat/'
        }
      ]
    },
    // {
    //   date: '2024 - Present',
    //   title: 'Indie Maker',
    //   body: `indie maker tal weu weu.`,
    //   links: [
    //     {
    //       text: 'keptrack',
    //       url: 'https://keptrack.com/'
    //     }
    //   ]
    // },
    {
      date: 'Dec 2024 - Jul 2025',
      title: 'Fullstack Developer',
      body: 'Lead full stack developer, responsible for implementing multiple features, system architecture, and UI/UX design at Vendex, a technology company focused on sales assistance solutions for businesses.',
      links: [
        {
          text: 'Vendex',
          url: 'https://vendex.mx/'
        }
      ]
    }
  ],
  es: [
    {
      date: 'Ene - Oct 2024',
      title: 'Desarrollador Fullstack y Móvil',
      body: `Parte del equipo de desarrollo de Kontigo™, una startup de +1M$ USD enfocada en remesas basadas en USDc para Latinoamérica. Encargándome del desarrollo de la aplicación móvil con React Native, además de llevar a cabo tareas de desarrollo fullstack con Nextjs y Node.`,
      links: [
        {
          text: 'kontigo.lat',
          url: 'https://kontigo.lat/'
        }
      ]
    },
    // {
    //   date: '2024 - Present',
    //   title: 'Indie Maker',
    //   body: `indie maker tal weu weu.`,
    //   links: [
    //     {
    //       text: 'keptrack',
    //       url: 'https://keptrack.com/'
    //     }
    //   ]
    // },
    {
      date: 'Dic 2024 - Jul 2025',
      title: 'Desarrollador Fullstack',
      body: 'Desarrollador full stack principal, encargado de la implementación de múltiples funcionalidades, arquitectura del sistema, y diseño de UI/UX en Vendex, una empresa de tecnología enfocada en soluciones de asistencia de ventas para negocios',
      links: [
        {
          text: 'Vendex',
          url: 'https://vendex.mx/'
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
      body: '5th generation alumni of the Oracle Next Education program, where I took the back-end specialty, increasing my knowledge in JavaScript, Java and SQL. Also learning Spring Boot and REST APIs.',
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
      body: "Currently studying Computer Science at Chihuahua's Institute of Technology II (ITCHII). I'm getting the title as a side quest :p"
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
      body: 'Alumno de la 5ta generación del programa Oracle Next Education, donde tomé la especialidad de back-end, aumentando mi conocimiento en JavaScript, Java y SQL. También aprendiendo Spring Boot y REST APIs.',
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
      body: 'Actualmente estoy estudiando Ingeniería Informática en el Instituto Tecnológico de Chihuahua II (ITCHII). Me propuse obtener el título como una side quest :p'
    }
  ]
}

export const resources: Data<Resource[]> = {
  en: [
    {
      title: 'My Instagram',
      body: 'Maybe some day I will actually start posting interesting stuff there, make sure to follow me so you dont miss it.',
      href: 'https://www.instagram.com/andresprza/',
      imageUrl: 'instagram.jpg'
    },
    {
      title: 'Anime and manga',
      body: 'I know this is kinda weird, but I have a Notion page where I list all the anime and manga I have watched or want to watch. You can visit it if you want to find some recommendations.',
      href: 'https://xskino.notion.site/Kino-s-Animanga-List-c977941f21cc4073ab683ceb8af43766',
      imageUrl: 'animanga.jpg'
    },
    {
      title: 'Video Games',
      body: 'I have a Notion page where I list all the games I have played or want to play. You can visit it if you want to find some recommendations or just stalk my taste in games, idk.',
      href: 'https://xskino.notion.site/Kino-s-Game-List-f596ae8fc0bb47da80e529084ea3f639?pvs=4',
      imageUrl: 'games.jpg'
    },
    {
      title: 'My Spotify',
      body: "I wouldn't call myself a melomaniac, but yeah... I love listening to music. You can check my Spotify profile if you want to see my playlists and the music I listen to, although I must warn you, my music taste is all over the place.",
      href: 'https://open.spotify.com/user/eg2bpwh66ybm3zjtwaj1c7t91?si=043e11b4e6a448b1',
      imageUrl: 'spotify.jpg'
    },
    {
      title: 'neal.fun',
      body: 'Check this out if you are bored.',
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
      body: 'Logo generator. Very useful for getting ideas.',
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
      title: 'Phosphor Icons',
      body: 'My favorite icon library.',
      href: 'https://phosphoricons.com/',
      imageUrl: 'phosphor.jpg'
    }
  ],
  es: [
    {
      title: 'Mi Instagram',
      body: 'Tal vez algún día comience a publicar cosas interesantes allí, sígueme para no perdértelo.',
      href: 'https://www.instagram.com/andresprza/',
      imageUrl: 'instagram.jpg'
    },
    {
      title: 'Anime y manga',
      body: 'Se que esto es un poco raro, pero tengo una página de Notion con todos los anime y manga que he visto o quiero ver. Puedes visitarla si quieres encontrar alguna recomendación.',
      href: 'https://xskino.notion.site/Kino-s-Animanga-List-c977941f21cc4073ab683ceb8af43766',
      imageUrl: 'animanga.jpg'
    },
    {
      title: 'Videojuegos',
      body: 'Tengo una página de Notion con todos los juegos que he jugado o quiero jugar. Puedes visitarla si quieres encontrar alguna recomendación o stalkear a mi gusto en videojuegos, idk.',
      href: 'https://xskino.notion.site/Kino-s-Game-List-f596ae8fc0bb47da80e529084ea3f639?pvs=4',
      imageUrl: 'games.jpg'
    },
    {
      title: 'Mi Spotify',
      body: 'No me llamaría a mí mismo melómano, pero ajá... Me encanta escuchar música. Puedes ver mi perfil de Spotify si quieres ver mis playlists y la música que escucho, aunque debo advertirte, no hay una pizca de coherencia ahí.',
      href: 'https://open.spotify.com/user/eg2bpwh66ybm3zjtwaj1c7t91?si=043e11b4e6a448b1',
      imageUrl: 'spotify.jpg'
    },
    {
      title: 'neal.fun',
      body: 'Chequea esto si estás aburrido.',
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
      title: 'Phosphor Icons',
      body: 'Mi librería de iconos favorita.',
      href: 'https://phosphoricons.com/',
      imageUrl: 'phosphor.jpg'
    }
  ]
}

import React from 'react'
import GitHubFillIcon from '@icons/jsx/GitHubFill'
import ExternalLinkIcon from '@icons/jsx/ExternalLink'
import TechnologyIcon from '@/src/components/work/TechnologyIcon'
import { useDisclosure } from '@nextui-org/react'
import ProjectModal from '@/src/components/work/ProjectModal'

import type { Project } from '@/src/types/app'

interface Props {
  class?: string
  project: Project
  labels: {
    GITHUB: string
    LIVE_PROJECT: string
    CLOSE: string
    MADE_WITH: string
  }
}

export default function MainProject({ class: className, project, labels }: Props): JSX.Element {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      {/* Desktop */}
      <article
        className={`
          hidden md:flex flex-col aspect-square md:aspect-[unset] min-h-fit
          rounded-xl bg-background text-primary selection-primary
          shadow-xl shadow-background/50
          overflow-hidden ${className}
          `}>
        <img src={`/img/projects/${project.image}`} alt={`Image of project  ${project.name}`} />
        <div className='min-h-fit flex-1 flex flex-col justify-between p-4 bg-gradient-to-t from-primary/25 via-transparent to-transparent'>
          <div className='flex justify-between items-center pb-2'>
            <h2 className='font-semibold text-xl '>{project.name}</h2>

            <div className='flex text-2xl gap-4 text-foreground select-none'>
              {project.github != null && (
                <a
                  title={labels.GITHUB}
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='opacity-75 hover:opacity-100'>
                  <GitHubFillIcon />
                </a>
              )}
              {project.link != null && (
                <a
                  title={labels.LIVE_PROJECT}
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='opacity-75 hover:opacity-100'>
                  <ExternalLinkIcon />
                </a>
              )}
            </div>
          </div>
          {typeof project.brief !== 'undefined' && (
            <h3 className='font-extralight text-xs '>{project.brief}</h3>
          )}
          <p className='text-foreground selection-foreground-important py-4 font-extralight text-sm'>
            {project.description}
          </p>
          <div className='justify-self-end flex flex-col gap-2 items-center'>
            <h3 className='font-thin text-xs text-center '>{labels.MADE_WITH}</h3>
            <div className='flex gap-4'>
              {project.technologies.map(tech => (
                <i key={`main-project-${tech}`} className='text-xl text-primary/80' title={tech}>
                  <TechnologyIcon name={tech} />
                </i>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Mobile */}
      <button
        onClick={onOpen}
        className={`${isOpen && '[transform:translateY(100vh)!important] [transition-duration:1s] opacity-0'}
          md:hidden ${className} hover:cursor-pointer
          hover:[transform:perspective(500px)_rotateX(30deg)_translateY(10%)_translateZ(0)] transition-all relative
          flex flex-col aspect-square md:aspect-[unset] min-h-fit
          rounded-xl bg-background text-foreground select-none
          shadow-xl shadow-background/50
          overflow-hidden group
          `}>
        <img
          className='h-full object-cover origin-bottom scale-125 transition-all group-hover:scale-100 group-hover:[transform:perspective(500px)_rotateX(-30deg)_translateZ(0)]'
          src={`/img/projects/${project.image}`}
          alt={`Image of project  ${project.name}`}
        />
        <div className='absolute inset-0 bg-gradient-to-b via-50% from-background via-transparent to-transparent flex flex-col justify-between'>
          <div className='flex justify-center pt-2 gap-4 text-lg flex-wrap text-foreground/50'>
            {project.technologies.map(tech => (
              <i key={`main-project-${tech}`} title={tech}>
                <TechnologyIcon name={tech} />
              </i>
            ))}
          </div>
          <h2 className='text-xs  text-center [text-shadow:0_0.2rem_1rem_var(--col-background)] py-[5%] w-full bg-background text-primary group-hover:bg-primary group-hover:text-background transition-colors'>
            {project.brief ?? project.name}
          </h2>
        </div>
      </button>

      <ProjectModal project={project} isOpen={isOpen} onOpenChange={onOpenChange} labels={labels} />
    </>
  )
}

import React from 'react'
import ProjectModal from '@/src/components/work/ProjectModal'
import TechnologyIcon from '@/src/components/work/TechnologyIcon'
import { useDisclosure } from '@nextui-org/react'

import type { Project } from '../../types/app'

interface Props {
  project: Project
  class?: string
  labels: {
    GITHUB: string
    LIVE_PROJECT: string
    CLOSE: string
    MADE_WITH: string
  }
}

export default function ProjectComponent({ project, class: className, labels }: Props): JSX.Element {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  return (
    <>
      <button
        onClick={onOpen}
        className={`
          ${className} p-2 md:p-4 px-3 md:px-6 flex md:flex-col justify-between border-2 border-background/70 hover:border-transparent hover:bg-background hover:text-primary rounded-xl
          min-w-max max-w-full grow whitespace-nowrap text-xs md:text-sm cursor-pointer transition-all [transition-duration:100ms] items-center group
        `}>
        <h3 className='text-sm'>{project.brief ?? project.name}</h3>
        <div className='flex gap-1 text-sm md:text-medium text-background/60 group-hover:text-inherit'>
          {project.technologies.map(tech => (
            <TechnologyIcon key={tech} name={tech} />
          ))}
        </div>
      </button>

      <ProjectModal project={project} isOpen={isOpen} onOpenChange={onOpenChange} labels={labels} />
    </>
  )
}

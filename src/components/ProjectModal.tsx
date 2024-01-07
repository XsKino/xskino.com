import React from 'react'
import GitHubFillIcon from '@icons/jsx/GitHubFill'
import ExternalLinkIcon from '@icons/jsx/ExternalLink'
import XIcon from '@icons/jsx/X'

import TechnologyIcon from '@components/TechnologyIcon'
import { Modal, ModalContent, Button } from '@nextui-org/react'

import type { Project } from '../types/app'

export default function ProjectModal({
  isOpen,
  onOpenChange,
  className,
  project
}: {
  isOpen: boolean | undefined
  onOpenChange?: ((isOpen: boolean) => void) | undefined
  className?: string
  project: Project
}): JSX.Element {
  return (
    <Modal backdrop='blur' className='bg-background' isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {onClose => (
          <article
            className={`
            flex-col min-h-fit relative
            rounded-xl bg-background text-primary selection-primary
            shadow-xl shadow-background/50
            overflow-hidden ${className}
            `}>
            <div className='relative'>
              <img src={`/img/projects/${project.image}`} alt={`Image of project  ${project.name}`} />
              <div className='absolute bottom-0 w-full flex gap-4 p-2 text-xl text-semibold select-none text-foreground'>
                {project.github != null && (
                  <a
                    title='GitHub repository'
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='cursor-pointer opacity-90 hover:opacity-100 p-4 px-6 rounded-full border border-foreground/20 flex items-center gap-4 flex-1 backdrop-blur max-w-1/2 justify-center bg-background/30'>
                    <GitHubFillIcon />
                    <label className='text-sm'>GitHub repo</label>
                  </a>
                )}
                {project.link != null && (
                  <a
                    title='Live project'
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='cursor-pointer opacity-90 hover:opacity-100 p-4 px-6 rounded-full border border-foreground/20 flex items-center gap-4 flex-1 backdrop-blur max-w-1/2 justify-center bg-background/30'>
                    <ExternalLinkIcon />
                    <label className='text-sm'>Live Project</label>
                  </a>
                )}
              </div>
            </div>
            <div className='min-h-fit flex-1 flex flex-col justify-between p-4 gap-4'>
              <h5 className='font-semibold uppercase text-center'>{project.name}</h5>
              <p className='text-foreground selection-foreground-important font-extralight px-4 text-sm'>
                {project.description}
              </p>
              <Button
                color='primary'
                variant='shadow'
                radius='full'
                name='close Project Modal'
                className='uppercase self-center hidden md:block text-xs'
                onPress={onClose}>
                Close
              </Button>
              <div className='justify-self-end flex flex-col gap-2 items-center'>
                <h6 className='font-thin text-xs text-center uppercase'>Made With</h6>
                <div className='flex gap-4'>
                  {project.technologies.map(tech => (
                    <i key={`main-project-${tech}`} className='text-xl text-primary/80' title={tech}>
                      <TechnologyIcon name={tech} />
                    </i>
                  ))}
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className='absolute top-3 right-3 size-6 grid md:hidden place-items-center text-xl bg-foreground/20 text-foreground hover:bg-foreground/40 rounded-full'>
              <XIcon />
            </button>
          </article>
        )}
      </ModalContent>
    </Modal>
  )
}

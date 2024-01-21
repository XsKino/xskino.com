import React from 'react'
import GitHubFillIcon from '@icons/jsx/GitHubFill'
import ExternalLinkIcon from '@icons/jsx/ExternalLink'
import XIcon from '@icons/jsx/X'

import TechnologyIcon from '@/src/components/work/TechnologyIcon'
import { Modal, ModalContent, Button } from '@nextui-org/react'

import type { Project } from '@/src/types/app'

interface Props {
  isOpen: boolean | undefined
  onOpenChange?: ((isOpen: boolean) => void) | undefined
  project: Project
  labels: {
    GITHUB: string
    LIVE_PROJECT: string
    CLOSE: string
    MADE_WITH: string
  }
}

export default function ProjectModal({ isOpen, onOpenChange, project, labels }: Props): JSX.Element {
  return (
    <Modal backdrop='opaque' className='bg-transparent' isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {onClose => (
          <div className='flex flex-col items-center overflow-hidden'>
            <div className='bg-background z-50 rounded-xl text-primary selection-primary w-full shadow-xl shadow-background/50'>
              <article
                className={`
                  flex-col min-h-fit w-full
                   
                   md:bg-gradient-to-t via-15% from-primary/20 via-transparent to-transparent
                  `}>
                <div className='relative'>
                  <img
                    src={`/img/projects/${project.image}`}
                    alt={`Image of project  ${project.name}`}
                    width={600}
                    height={400}
                  />
                  <div className='absolute bottom-0 w-full flex gap-4 p-2 text-xl text-semibold select-none text-foreground'>
                    {project.github != null && (
                      <Button
                        as='a'
                        href={project.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        startContent={
                          <i className='text-lg'>
                            <GitHubFillIcon />
                          </i>
                        }
                        className='cursor-pointer text-medium text-foreground opacity-90 hover:opacity-100 p-4 px-6 rounded-full border border-foreground/20 flex items-center gap-4 flex-1 backdrop-blur max-w-1/2 justify-center bg-background/30'>
                        {labels.GITHUB}
                      </Button>
                    )}
                    {project.link != null && (
                      <Button
                        as='a'
                        href={project.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        startContent={
                          <i className='text-lg'>
                            <ExternalLinkIcon />
                          </i>
                        }
                        className='cursor-pointer text-medium text-foreground opacity-90 hover:opacity-100 p-4 px-6 rounded-full border border-foreground/20 flex items-center gap-4 flex-1 backdrop-blur max-w-1/2 justify-center bg-background/30'>
                        {labels.LIVE_PROJECT}
                      </Button>
                    )}
                  </div>
                </div>
                <div className='min-h-fit flex-1 flex flex-col justify-between p-4'>
                  <h5 className='font-semibold text-lg  text-center'>{project.name}</h5>
                  {typeof project.brief !== 'undefined' && (
                    <h6 className='font-extralight text-xs  text-center'>{project.brief}</h6>
                  )}
                  <p className='text-foreground selection-foreground-important font-extralight p-4 text-sm'>
                    {project.description}
                  </p>

                  <div className='justify-self-end flex flex-col gap-2 items-center'>
                    <h6 className='font-thin text-xs text-center '>{labels.MADE_WITH}</h6>
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
            </div>
            <Button
              color='primary'
              variant='shadow'
              radius='lg'
              name='close Project Modal'
              className='self-center hidden md:block text-xs h-16 pt-6 -mt-6 w-[140%]'
              onPress={onClose}>
              {labels.CLOSE}
            </Button>
          </div>
        )}
      </ModalContent>
    </Modal>
  )
}

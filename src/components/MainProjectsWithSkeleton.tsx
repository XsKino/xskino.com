import React from 'react'
import MainProject from '@components/MainProject'
import { Skeleton } from '@nextui-org/react'

import type { Project } from '../types/app'

export default function MainProjectsWithSkeleton({ projects }: { projects: Project[] }): JSX.Element {
  return (
    <>
      {projects?.map((project, i) => (
        <MainProject
          key={`project-${i}-${project.name}`}
          project={project}
          class={`${i % 2 === 0 ? 'flex-1' : 'flex-[1.5]'}`}
        />
      )) ?? (
        <>
          <Skeleton className='aspect-[2:3] size-full flex-1' />
          <Skeleton className='aspect-[2:3] size-full flex-[1.5]' />
          <Skeleton className='aspect-[2:3] size-full flex-1' />
        </>
      )}
    </>
  )
}

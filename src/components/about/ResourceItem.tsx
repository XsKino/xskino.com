import React from 'react'
import { Button } from '@nextui-org/react'

import ExternalLinkIcon from '@icons/jsx/ExternalLink'

import type { Resource } from '@/src/types/app'

interface Props {
  className?: string
  resource: Resource
}

export default function ResourceItem({
  className,
  resource: { title, body, href, imageUrl }
}: Props): JSX.Element {
  return (
    <div
      className={`
        relative group overflow-hidden border border-transparent rounded-lg transition-all hover:border-secondary flex align-bottom p-6 text-xs
        ${className} shadow-xl shadow-black/20 hover:shadow-secondary/50 hover:shadow-lg
      `}>
      <div
        style={{ backgroundImage: `url(/img/resources/${imageUrl})` }}
        className='absolute inset-0 bg-cover bg-center -z-20 scale-110 group-hover:scale-100 transition-all'
      />
      <div className='absolute transition-all inset-0 bg-gradient-to-t from-black/90 via-[6rem] group-hover:via-50% via-black/60 to-black/30 group-hover:to-black/75 -z-10' />
      <div className='overflow-hidden z-10 w-full'>
        <div
          style={{ transform: 'translateY(var(--translate-y))' }}
          className='[--translate-y:calc(100%-2em)] group-hover:[--translate-y:0] h-full transition-transform flex flex-col justify-between gap-4'>
          <div className='flex flex-col gap-4'>
            <h3 className='text-medium'>{title}</h3>
            <p className='max-w-[30ch]'>{body}</p>
          </div>
          <Button
            className='self-end border'
            color='secondary'
            variant='ghost'
            size='sm'
            as='a'
            title={`See more about ${title}`}
            aria-label={`See more about ${title}`}
            href={href}
            endContent={<ExternalLinkIcon />}
            target='_blank'
            isIconOnly
            rel='noopener noreferrer'></Button>
        </div>
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import ResourceItem from '@/src/components/about/ResourceItem'
import { Button } from '@nextui-org/react'
import ChevronDownIcon from '@/src/icons/jsx/ChevronDown'
import type { Resource } from '@/src/types/app'

interface Props {
  resources: Resource[]
  labels: {
    SHOW_MORE: string
    SHOW_LESS: string
  }
}
export default function Resources({ resources, labels }: Props): JSX.Element {
  const [open, setOpen] = useState<boolean>(false)

  const [instagram, animanga, games, spotify, neal, namelix, brandmark, coolors, shots, refactoring, tabler] =
    resources

  return (
    <div>
      <section
        className={`${open || 'overflow-fade max-h-[40vh]'} 
          w-full max-w-screen-lg grid gap-4 auto-rows-auto grid-cols-[repeat(2,minmax(0,2fr))] md:grid-cols-[repeat(3,minmax(0,2fr))]
          `}>
        <ResourceItem resource={instagram} className='border col-span-2' />
        <ResourceItem resource={tabler} className='border ' />
        <ResourceItem resource={namelix} className='border ' />
        <ResourceItem resource={shots} className='border col-span-2' />
        <ResourceItem resource={animanga} className='border col-span-2' />
        <ResourceItem resource={brandmark} className='border ' />
        <ResourceItem resource={neal} className='border' />
        <ResourceItem resource={games} className='border col-span-2' />
        <ResourceItem resource={spotify} className='border md:col-span-3' />
        <ResourceItem resource={coolors} className='border ' />
        <ResourceItem resource={refactoring} className='border col-span-2' />
      </section>
      <div className='w-full flex justify-center mt-8'>
        <Button
          radius='lg'
          variant='light'
          name='toggle content'
          color='secondary'
          onPress={() => {
            setOpen(!open)
          }}
          endContent={
            <i
              style={{ transform: `rotate(${open ? '180deg' : '0deg'})` }}
              className={`transition-all grid place-items-center`}>
              <ChevronDownIcon />
            </i>
          }>
          {open ? labels.SHOW_LESS : labels.SHOW_MORE}
        </Button>
      </div>
    </div>
  )
}

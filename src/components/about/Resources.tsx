import React from 'react'
import ResourceItem from '@/src/components/about/ResourceItem'
import type { Resource } from '@/src/types/app'

interface Props {
  resources: Resource[]
}
export default function Resources({ resources }: Props): JSX.Element {
  const [fcc] = resources

  return (
    <section className='w-full max-w-screen-lg grid gap-4 auto-rows-auto grid-cols-[repeat(2,minmax(0,2fr))] md:grid-cols-[repeat(3,minmax(0,2fr))]'>
      <ResourceItem resource={fcc} className='border col-span-3' />
    </section>
  )
}

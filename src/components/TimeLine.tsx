import React, { useState } from 'react'
import ChevronDownIcon from '@icons/jsx/ChevronDown'
import ArrowFromTopIcon from '@icons/jsx/ArrowFromTop'

import { Button } from '@nextui-org/react'

import type { TimelineItem } from '../types/app'

interface Props {
  timeline: TimelineItem[]
  color?: 'primary' | 'secondary' | 'tertiary'
  bgColor?: 'primary' | 'secondary' | 'tertiary'
  alwaysFull?: boolean
  ascend?: boolean
}

export default function TimeLine({
  timeline: timelineProp,
  color,
  bgColor,
  alwaysFull,
  ascend: propAscend
}: Props): JSX.Element {
  const [open, setOpen] = useState<boolean>(false)
  const [ascend, setAscend] = useState<boolean>(propAscend ?? false)
  const timeline = ascend ? timelineProp.toReversed() : timelineProp

  return (
    <div className='flex flex-col relative'>
      <button
        name='toggle ascendant order'
        className={`absolute left-0 top-0 z-10 ${timeline.length < 3 && 'hidden'}`}
        onClick={() => {
          setAscend(!ascend)
        }}>
        <i
          style={{ transform: `rotate(${ascend ? '180deg' : '0deg'})` }}
          className={`transition-all text-2xl h-[2.5rem] w-[1.3rem] grid place-items-center`}>
          <ArrowFromTopIcon />
        </i>
      </button>
      <section
        style={{ color: `var(--col-${color ?? 'background'})` }}
        className={`flex flex-col pl-4 ${
          open || (alwaysFull ?? false) || 'overflow-fade max-h-[40vh]'
        } selection-${color ?? 'foreground'}`}>
        {timeline.map((item, i) => (
          <article key={`timeline-item-${i}-${item.date}`} className='flex flex-col gap-4 p-4 pr-0 relative'>
            <div
              style={{ backgroundColor: `var(--col-${color ?? 'background'})` }}
              className={`
            absolute -left-[0.35rem] -bottom-0 w-[2px]
            ${i !== timeline.length - 1 && 'top-[1.1rem] translate-y-[2.35rem]'}
            `}
            />
            <div className='relative flex flex-col justify-center font-bold'>
              <div
                style={{ borderColor: `var(--col-${color ?? 'background'})` }}
                className={`
              absolute size-5 rounded-full border-[2px]
              -translate-x-1/2 -left-[1.3rem]
              `}
              />
              <h3>{item.date}</h3>
              <h4>{item.title}</h4>
            </div>
            <p>{item.body}</p>
          </article>
        ))}
      </section>
      {alwaysFull ?? false ? null : (
        <Button
          radius='none'
          name='toggle timeline full height'
          style={{
            color: `var(--col-${bgColor ?? color ?? 'foreground'})`,
            backgroundColor: `var(--col-${color ?? 'background'}`
          }}
          className='uppercase p-8 self-center font-semibold flex gap-4 min-w-[20ch] justify-center items-center'
          onPress={() => {
            setOpen(!open)
          }}>
          {open ? 'Show less' : 'Show more'}
          <i
            style={{ transform: `rotate(${open ? '180deg' : '0deg'})` }}
            className={`transition-all grid place-items-center`}>
            <ChevronDownIcon />
          </i>
        </Button>
      )}
    </div>
  )
}

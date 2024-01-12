import React from 'react'
import HobbyItem from '@components/HobbyItem'

export default function Hobbies(): JSX.Element {
  return (
    <section className='w-full max-w-screen-lg grid gap-4 auto-rows-auto grid-cols-[repeat(2,minmax(0,2fr))] md:grid-cols-[repeat(3,minmax(0,2fr))]'>
      <HobbyItem image='placeholder.jpg' href='#xd' title='xd' className='border col-span-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, possimus aliquam accusamus non
        excepturi, minima, quod dolorem cupiditate aperiam magnam blanditiis! Eius maiores ipsa sed, numquam
        perferendis recusandae ab sapiente.
      </HobbyItem>
      <HobbyItem image='placeholder.jpg' href='#lol' title='lol' className='border'>
        owo
      </HobbyItem>
      <HobbyItem image='placeholder.jpg' href='#lmao' title='lmao' className='border'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam rem voluptas.
      </HobbyItem>
      <HobbyItem image='placeholder.jpg' href='#kkkk' title='kkkk' className='border'>
        uwu
      </HobbyItem>
    </section>
  )
}

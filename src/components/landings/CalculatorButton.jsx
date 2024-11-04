/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'

export default function CalculatorButton() {
  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById('calculator')
    calculatorSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <button id='hero-button' className='w-full flex justify-center group' onClick={scrollToCalculator}>
      <div className='text-xl px-6 py-2 flex items-center gap-2 transition-all bg-background group-hover:translate-x-4 -skew-x-12'>
        <span>¿Cuánto cuesta?</span>{' '}
        <i className='ph-bold ph-caret-right group-hover:translate-x-2 transition-all'></i>
      </div>
    </button>
  )
}

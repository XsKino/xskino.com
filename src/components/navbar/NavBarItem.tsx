import React, { useEffect, useState } from 'react'
interface Props {
  id: string
  title: string
  children: React.ReactNode
}

export default function NavBarItem({ id, children, title }: Props): JSX.Element {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = document.getElementById(id)
    if (typeof el !== 'undefined' && el !== null) {
      const observer = new IntersectionObserver(
        ([e]) => {
          setActive(e.intersectionRatio > 0)
        },
        { rootMargin: '-48%' }
      )
      if (typeof el !== 'undefined' && el !== null) observer.observe(el)
      return () => {
        observer.unobserve(el)
      }
    }
  }, [id])

  return (
    <button
      title={title}
      onClick={() => {
        const el = document.getElementById(id)
        if (typeof el !== 'undefined' && el !== null) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }}
      className={`${
        active && 'active-navbar-item'
      } py-6 md:py-0 md:px-6 flex-1 group cursor-pointer grid place-content-center`}>
      <i className='opacity-50 group-hover:scale-110 group-hover:opacity-80 transition-all'>{children}</i>
    </button>
  )
}

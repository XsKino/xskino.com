import React from 'react'
import PdfIcon from '@icons/jsx/Pdf'
import { Button } from '@nextui-org/react'

export default function ResumeButton({ label, href }: { label: string; href: string }): JSX.Element {
  return (
    <Button
      as='a'
      target='_blank'
      rel='noopener noreferrer'
      href={href}
      color='primary'
      variant='light'
      startContent={<PdfIcon />}>
      {label}
    </Button>
  )
}

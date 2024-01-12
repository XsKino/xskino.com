import React from 'react'
import PdfIcon from '@icons/jsx/Pdf'
import { Button } from '@nextui-org/react'

export default function ResumeButton(): JSX.Element {
  return (
    <Button
      as='a'
      target='_blank'
      rel='noopener noreferrer'
      href='/pdf/resume.pdf'
      color='primary'
      variant='light'
      startContent={<PdfIcon />}>
      Resume
    </Button>
  )
}

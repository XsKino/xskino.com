import React from 'react'
import 'flag-icons/css/flag-icons.min.css'
import {
  Popover as PopoverFix,
  PopoverTrigger,
  PopoverContent,
  Button,
  Listbox as ListboxFix,
  ListboxItem
} from '@nextui-org/react'
import { languages } from '@i18n/data'

// weird af typescript bug
const Popover = PopoverFix as any
const Listbox = ListboxFix as any

export default function LanguageSwitch({ locale = 'en' }: { locale?: string | undefined }): JSX.Element {
  const getFlagCode = (locale: string | undefined): string => {
    let flagCode = locale
    if (typeof flagCode === 'undefined') flagCode = 'gb'
    if (locale === 'en') flagCode = 'gb'
    if (locale === 'es') flagCode = 'mx'

    return flagCode
  }

  return (
    <Popover shadow='md' placement='top'>
      <PopoverTrigger>
        <Button isIconOnly radius='full' className='bg-transparent'>
          <span className={`text-3xl rounded-full fi fis fi-${getFlagCode(locale)}`} />
        </Button>
      </PopoverTrigger>

      <PopoverContent className='bg-background'>
        <Listbox
          selectionMode='single'
          color='primary'
          variant='flat'
          aria-label='Languages'
          selectedKeys={[locale]}>
          {languages.map(language => {
            const href: string = language.code !== 'en' ? `/${language.code}/` : '/'
            return (
              <ListboxItem
                title={language.name}
                startContent={<span className={`rounded-md fi fis fi-${getFlagCode(language.code)}`} />}
                key={language.code}
                href={href}>
                {language.native}
              </ListboxItem>
            )
          })}
        </Listbox>
      </PopoverContent>
    </Popover>
  )
}

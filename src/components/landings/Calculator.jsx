/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState, Fragment, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import {
  Tooltip,
  Button,
  Divider,
  Checkbox,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter
} from '@nextui-org/react'
import { Info, LockSimple, Check } from '@phosphor-icons/react'

const modules = [
  {
    name: 'base',
    title: 'Landing Page premium',
    price: 150,
    locked: true,
    description:
      'Landing page profesional, con diseño 100% personalizado, hecho a la medida para tu negocio. Optimizado para que aparezca en los primeros lugares de los motores de búsqueda.',
    features: [
      'Diseño 100% personalizado',
      'Diseño responsivo',
      'Optimización para SEO',
      'Entrega rápida',
      '3 Meses de soporte',
      'Hosting + Dominio personalizado por 1 año'
    ]
  },
  {
    name: 'contact-form',
    title: 'Integración con formularios de contacto',
    price: 40,
    description:
      'Los visitantes pueden contactarte directamente desde tu landing page a través de un formulario de contacto.',
    features: [
      'Formulario de contacto',
      // "Integración con Google Forms",
      'Integración con correo electrónico'
    ]
  },
  // {
  //   name: 'crm',
  //   title: 'Integración con CRM',
  //   price: 50,
  //   description: 'Envío automático de los datos del formulario a sistemas como HubSpot o Salesforce.',
  //   features: ['Integración con HubSpot', 'Integración con Salesforce']
  // },
  {
    name: 'i18n',
    title: 'Internacionalización',
    price: 60,
    description:
      'Si tu negocio está enfocado a un mercado internacional, esta es tu opción. Te ayudamos a que tu landing page sea multi-idioma y multi-moneda.',
    features: ['Hasta 5 idiomas', 'Hasta 5 monedas']
  },
  {
    name: 'cms',
    title: 'Gestor de contenido',
    price: 130,
    description:
      'Gestor de contenido para que puedas administrar tu landing page (subir y editar contenido por tu cuenta).'
  },
  // {
  //   name: 'live-chat',
  //   title: 'Chat en vivo',
  //   price: 80,
  //   description: 'Integración con chat en vivo para que puedas atender a tus clientes en tiempo real.'
  // },
  // {
  //   name: 'chatbot',
  //   title: 'Chatbot',
  //   price: 60,
  //   description: 'Integración con un chatbot para que pueda atender a tus clientes por tí.'
  // },
  {
    name: 'analytics',
    title: 'Google Analytics',
    price: 20,
    description: 'Integración con Google Analytics para que puedas medir el rendimiento de tu landing page.'
  }
]

export default function Calculator() {
  const [selectedModules, setSelectedModules] = useState(modules.filter(module => module.locked))
  const [message, setMessage] = useState('')
  const form = useForm()

  useEffect(() => {
    if (selectedModules.length <= 1) {
      setMessage('¡Hola Kino! Me gustaría tener una landing page')
    } else {
      const message = `¡Hola Kino! Quiero una landing page con las siguientes características:\n${selectedModules
        .filter(module => module.name !== 'base')
        .map(module => `- ${module.title}`)
        .join(`\n`)}`
      setMessage(message)
      console.log(message)
    }
  }, [selectedModules])

  return (
    <section id='calculator' className='bg-foreground text-background border border-foreground'>
      <div className='container mx-auto px-4 py-24'>
        <div className='space-y-6 mb-24'>
          <h2 className='text-4xl font-bold text-center'>Ok, quiero una landing. ¿Cuánto cuesta?</h2>
          <p className='text-xl text-center text-gray-500 text-balance'>
            Como todo en la vida, una landing page tiene un costo, y este depende de tus necesidades y la
            complejidad de la página.
          </p>
        </div>
        <div className='flex max-lg:flex-col gap-8'>
          <div className='max-h-[80vh] flex-1'>
            {modules.map((item, index) => (
              <Fragment key={item.id}>
                {index > 0 && <Divider />}
                <Module
                  {...item}
                  allModules={modules}
                  form={form}
                  isChecked={selectedModules.map(module => module.name).includes(item.name)}
                  setSelectedModules={setSelectedModules}
                />
              </Fragment>
            ))}
          </div>
          <section
            id='receipt'
            className='mx-auto md:w-1/3 bg-gray-50 shadow-lg rounded-xl shadow-black/[0.05] flex flex-col gap-4 p-4'>
            <h3 className='text-xl font-bold'>Resumen</h3>
            <div className='text-xs flex flex-col gap-2 flex-1'>
              {selectedModules.map(item => (
                <div key={item.name} className='flex flex-col'>
                  <div className='flex gap-2 mb-1'>
                    <strong className='flex-1'>{item.title}</strong>
                    <strong className='text-end'>${item.price}</strong>
                  </div>
                  <div className='flex flex-col ml-4'>
                    {item?.features?.map(feature => (
                      <p key={feature} className='text-[0.65rem] text-gray-500 flex items-center gap-1 mb-0'>
                        <Check className='text-green-500 text-xs min-w-[1rem] self-start' />
                        {feature}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className='flex justify-between border-t border-gray-200 pt-2'>
              <p className='mb-0'>Total</p>
              <p className='text-xl font-bold mb-0'>
                ${selectedModules.reduce((acc, curr) => acc + curr.price, 0)}
                <span className='text-xs'>USD</span>
              </p>
            </div>
            <p className='text-[0.01rem] text-gray-500 font-extralight mb-0'>
              * Este precio puede cambiar en caso de requerir funcionalidades diferentes a las descritas.
            </p>
          </section>
        </div>
      </div>

      {/* Contact section */}
      <div className='container mx-auto px-4 py-24'>
        <ContactSection message={message} />
      </div>
    </section>
  )
}

const Module = ({
  id,
  title,
  price,
  description,
  locked,
  name,
  form,
  isChecked,
  setSelectedModules,
  allModules
}) => {
  const handleChange = value => {
    form.setValue(name, value)
  }

  useEffect(() => {
    const subscription = form.watch(values => {
      setSelectedModules(allModules.filter(module => values[module.name] || module.locked))
    })

    return () => subscription.unsubscribe()
  }, [form])

  return (
    <div className={`flex`}>
      <label
        className={`flex p-4 items-center gap-4 flex-1 transition-all pr-8 ${!locked && 'cursor-pointer md:hover:scale-[1.025] md:hover:-translate-x-2'}`}>
        <Checkbox
          isDisabled={locked}
          defaultSelected={locked}
          color='secondary'
          onValueChange={handleChange}
        />
        <p className='flex-1 font-bold flex gap-2 mb-0 leading-normal'>
          {locked && <LockSimple className='fill-orange-400 text-xl' weight='fill' />}
          {title}
        </p>
        <p
          className='text-xl font-bold text-end mb-0 transition-all'
          style={{ opacity: isChecked ? 1 : 0.5 }}>
          ${price}
          <span className='text-xs'>USD</span>
        </p>
      </label>
      <div className='max-md:hidden self-center'>
        <Tooltip className='text-foreground bg-background max-w-[40ch]' showArrow content={description}>
          <span className='aspect-square rounded-full self-start grid place-content-center text-secondary/50 p-1 hover:bg-secondary/20 hover:text-secondary transition-all '>
            <Info weight='fill' />
          </span>
        </Tooltip>
      </div>
      <div className='md:hidden self-center'>
        <Popover placement='bottom' showArrow={true}>
          <PopoverTrigger>
            <span
              className='aspect-square rounded-full self-start grid place-content-center text-secondary/50 p-1 hover:bg-secondary/20 hover:text-secondary transition-all relative z-50'
              onClick={e => e.stopPropagation()}>
              <Info weight='fill' />
            </span>
          </PopoverTrigger>
          <PopoverContent className='text-foreground bg-background max-w-[40ch]'>
            <p className='px-2 py-1 mb-1'>{description}</p>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}

const ContactSection = ({ className, message }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [messageValue, setMessageValue] = useState('')
  const messageRef = useRef(null)

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.value = message
    }
  }, [message])

  return (
    <div className={`flex flex-col gap-12 ${className}`}>
      <div className='space-y-4 flex flex-col items-center'>
        <h3 className='text-center'>¡Pongámonos manos a la obra!</h3>
        <p className='text-center text-balance max-w-[70ch]'>
          Mándame un mensaje para que podamos empezar a trabajar en tu landing page. Siénte libre de agregar
          cualquier detalle que consideres relevante sobre tu negocio, o preguntar cualquier cosa que
          necesites.
        </p>
      </div>
      <div className='flex max-md:flex-col gap-4 md:gap-8 relative'>
        {/* contact card */}
        <a href='/es' target='_blank' rel='noreferrer' className='flex flex-col gap-4 p-4 cursor-pointer'>
          <div className='aspect-square rounded-full self-center size-32 overflow-hidden shadow-lg'>
            <img src='https://unavatar.io/github/xskino' alt='Imagen de Kino' />
          </div>
          <p className='mb-0 text-center'>
            <h4 className='font-bold inline'>Kino</h4> | Desarrollador
          </p>
        </a>
        <label className='flex-1 flex justify-between items-end p-4 rounded-lg bg-gray-50 border border-gray-100 font-extralight hover:border-gray-300 transition-all cursor-text'>
          <textarea
            className='w-full h-full resize-none p-2 rounded bg-transparent border-none outline-none'
            ref={messageRef}
            onChange={e => setMessageValue(e.target.value)}></textarea>
          <div className='flex justify-end'>
            <button
              onClick={() => setIsOpen(true)}
              className='aspect-square size-12 grid place-content-center rounded-full hover:bg-black/[0.05] transition-all'>
              <i className='ph ph-paper-plane-right'></i>
            </button>
            <ContactModal message={messageValue} isOpen={isOpen} onClose={setIsOpen} />
          </div>
        </label>
      </div>
    </div>
  )
}

const ContactModal = ({ isOpen, onClose, message }) => {
  const waURL = new URL('https://wa.me/526142750411')
  const emailURL = new URL('mailto:andresprza@gmail.com')
  const telegramURL = new URL('https://t.me/andresprza')

  waURL.searchParams.set('text', message)
  emailURL.searchParams.set('body', message)
  emailURL.searchParams.set('subject', 'Quiero unaLanding Page')
  telegramURL.searchParams.set('text', message)

  const channels = [
    {
      name: 'WhatsApp',
      icon: <i className='ph ph-whatsapp-logo text-3xl'></i>,
      href: waURL.toString(),
      data: '+52 614 275 0411',
      message,
      className: 'text-[#40d366] hover:text-[#40d366] hover:bg-[#40d366]/20 group'
    },
    {
      name: 'E-mail',
      icon: <i className='ph ph-envelope text-3xl'></i>,
      href: emailURL.toString(),
      data: 'andresprza@gmail.com',
      className: 'text-[#ea4335] hover:text-[#ea4335] hover:bg-[#ea4335]/20 group'
    },
    {
      name: 'Telegram',
      icon: <i className='ph ph-telegram-logo text-3xl'></i>,
      href: telegramURL.toString(),
      data: '@andresprza',
      className: 'text-[#29a8ea] hover:text-[#29a8ea] hover:bg-[#29a8ea]/20 group'
    }
  ]

  return (
    <Modal
      classNames={{
        closeButton: 'hidden'
      }}
      backdrop='blur'
      isOpen={isOpen}
      onClose={onClose}>
      <ModalContent className='bg-foreground text-background md:bg-background md:text-foreground'>
        {onClose => (
          <>
            <ModalBody className='flex flex-row max-md:flex-row-reverse gap-6 px-6 py-8'>
              {channels.map(channel => (
                <a
                  key={channel.name}
                  href={channel.href}
                  target='_blank'
                  rel='noreferrer'
                  className={`flex-1 flex flex-col gap-2 justify-center items-center p-3 px-4 rounded-lg max-md:border border-[currentColor] md:bg-black/10 transition-all ${channel.className}`}>
                  {channel.icon}
                  {channel.name}
                </a>
              ))}
            </ModalBody>
            <ModalFooter>
              <Button className='md:text-foreground' variant='light' onPress={onClose}>
                Cancelar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

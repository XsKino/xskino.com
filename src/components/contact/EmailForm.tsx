/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import React, { useRef, useState, type FormEvent, type FormEventHandler } from 'react'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'
import { Button } from '@nextui-org/react'
import CopyIcon from '@icons/jsx/Copy'
import SendIcon from '@icons/jsx/Send'

interface Props {
  labels: {
    MY_EMAIL_LABEL: string
    INPUTS: {
      NAME: {
        LABEL: string
        PLACEHOLDER: string
      }
      EMAIL: {
        LABEL: string
        PLACEHOLDER: string
      }
      MESSAGE: {
        PLACEHOLDER: string
      }
    }
    MESSAGE_TOAST: {
      SUCCESS: string
      ERROR: string
    }
    COPY_TOAST: {
      SUCCESS: string
      ERROR: string
    }
    COPY_EMAIL: string
    SEND: string
  }
}

export default function EmailForm({ labels }: Props): JSX.Element {
  const [loading, setLoading] = useState(false)

  const form = useRef<HTMLFormElement>(null)
  const myEmail = 'andresprza@gmail.com'

  const sendEmail: FormEventHandler<HTMLFormElement> = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()
    setLoading(true)

    try {
      await emailjs.sendForm(
        'kino_portfolio_email',
        'kino_portfolio_template',
        form.current ?? '',
        import.meta.env.PUBLIC_EMAILJS_API_KEY
      )
      form.current?.reset()
      toast.success(labels.MESSAGE_TOAST.SUCCESS)
    } catch (err) {
      toast.error(labels.MESSAGE_TOAST.ERROR)
      console.log(err)
    }

    setLoading(false)
  }

  const copyEmail = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(myEmail)
      toast.success(labels.COPY_TOAST.SUCCESS)
    } catch (err) {
      toast.error(labels.COPY_TOAST.ERROR)
    }
  }

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className='bg-background shadow-xl shadow-black/40 flex flex-col md:flex-row-reverse gap-6 p-6 rounded-xl slection-tertiary text-tertiary'>
      <div className='flex flex-col justify-between h-64 gap-6 flex-1 text-xs'>
        <div className='group'>
          <p className='text-foreground/50'>{labels.MY_EMAIL_LABEL}</p>
          <div className='flex gap-4 items-center'>
            <p className='selection-tertiary'>{myEmail}</p>
            <Button
              className='group-hover:opacity-100 md:opacity-0 transition-opacity'
              color='warning'
              variant='light'
              isIconOnly
              aria-label='Copy email'
              onPress={() => {
                copyEmail()
              }}>
              <CopyIcon />
            </Button>
          </div>
          <div className='pt-4 flex flex-col gap-4'>
            <div>
              <label htmlFor='name' className='text-foreground/50'>
                {labels.INPUTS.NAME.LABEL}
              </label>
              <input
                className='bg-transparent placeholder:text-foreground/20 selection-tertiary w-full md:flex-1 focus-visible:outline-none rounded-lg p-1 hover:bg-foreground/[0.03]'
                type='text'
                name='user_name'
                id='name'
                required
                placeholder={labels.INPUTS.NAME.PLACEHOLDER}
              />
            </div>
            <div>
              <label htmlFor='email' className='text-foreground/50'>
                {labels.INPUTS.EMAIL.LABEL}
              </label>
              <input
                className='bg-transparent placeholder:text-foreground/20 selection-tertiary w-full md:flex-1 focus-visible:outline-none rounded-lg p-1 hover:bg-foreground/[0.03]'
                type='email'
                name='user-email'
                id='email'
                required
                placeholder={labels.INPUTS.EMAIL.PLACEHOLDER}
              />
            </div>
          </div>
        </div>
        <SubmitButton loading={loading} className='hidden md:flex'>
          {labels.SEND}
        </SubmitButton>
      </div>
      <hr className='md:hidden rounded-full border-none h-[1px] w-full bg-tertiary/30' />
      <textarea
        required
        className='scrollbar h-64 bg-transparent placeholder:text-foreground/20 selection-tertiary w-full md:flex-1 resize-none rounded-xl p-4 focus-visible:outline-none hover:bg-foreground/[0.03]'
        name='message'
        placeholder={labels.INPUTS.MESSAGE.PLACEHOLDER}
        id='message'></textarea>
      <SubmitButton loading={loading} className='md:hidden'>
        {labels.SEND}
      </SubmitButton>
      <Toaster
        containerClassName='fixed inset-0 select-none'
        position='bottom-center'
        toastOptions={{
          success: {
            style: {
              background: 'var(--col-background)',
              color: 'var(--col-tertiary)',
              boxShadow: '0 0.5em 1em #0008'
            },
            iconTheme: {
              primary: 'var(--col-tertiary)',
              secondary: 'var(--col-background)'
            }
          },
          error: {
            style: {
              background: 'var(--col-primary)',
              color: 'var(--col-background)',
              boxShadow: '0 0.5em 1em #0008'
            },
            iconTheme: {
              primary: 'var(--col-background)',
              secondary: 'var(--col-primary)'
            }
          }
        }}
      />
    </form>
  )
}

const SubmitButton = ({
  loading,
  className,
  children
}: {
  loading: boolean
  className: string
  children: string
}): JSX.Element => {
  return (
    <Button
      isLoading={loading}
      type='submit'
      className={`self-end ${className}`}
      color='warning'
      startContent={loading ? null : <SendIcon />}
      variant='shadow'>
      {children}
    </Button>
  )
}

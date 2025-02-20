import type { FormEvent } from 'react'

import { X, AtSign, Plus} from 'lucide-react'

import { Button } from '../../elements/Button'

interface InviteGuestsModalProps {
  ToggleModalEmailsToInvite: () => void
  emailsToInvites: string[]
  HandleAddNewEmailToInvite: (e: FormEvent<HTMLFormElement>) => void
  HandleRemoveEmailFromInvites: (email: string) => void
}

export function InviteGuestsModal({
  ToggleModalEmailsToInvite, 
  emailsToInvites,
  HandleAddNewEmailToInvite, 
  HandleRemoveEmailFromInvites } 
  : InviteGuestsModalProps) {
  
  return(
    <div className='fixed inset-0 flex items-center justify-center bg-black/60'>

      <div className=' w-[640px] px-5 py-6 space-y-6 bg-zinc-900 rounded-xl'>
        <div>
          <div className='flex justify-between text-zinc-50'>
            <h3 className='text-lg'>Selecionar convidados</h3>
            <button
              type='button'
              onClick={ToggleModalEmailsToInvite}
              className='cursor-pointer'
            >
              <X/>
            </button>
          </div>

          <p className='text-zinc-400 text-sm'>Os convidados irão receber e-mails para confirmar a participação na viagem.</p>
        </div>

        <ul className='flex flex-wrap gap-2'>
          { emailsToInvites.map(email => {
            return (
              <li
                key={email} 
                className='flex gap-2.5 bg-zinc-800 text-zinc-300 rounded-md py-1 px-1.5'
              >
                {email}
                <button
                  type='button'
                  onClick={() => HandleRemoveEmailFromInvites(email)}
                  className='cursor-pointer'
                >
                  <X/>
                </button>
              </li>
            )
          })}
        </ul>

        <div className='w-full h-1 bg-zinc-800'/>

          <form 
            onSubmit={HandleAddNewEmailToInvite} 
            className='flex items-center gap-5 py-2.5 px-4 bg-zinc-950 rounded-xl'
          >
            <div className='flex-1 flex items-center gap-2'>
              <AtSign className='size-5 text-zinc-400'/>
              <input 
                type='email'
                name='email'
                placeholder='Digite o e-mail do convidado'
                className=' text-zinc-300 flex-1 placeholder:text-zinc-400 outline-none' 
              />
            </div>

            <Button
              type='submit'
              variant='primary'
            >
              Convidar
              <Plus className='size-5'/>
            </Button>
          </form>

        </div>

    </div>
  )
}
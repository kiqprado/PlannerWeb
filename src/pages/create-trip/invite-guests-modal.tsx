import type { FormEvent } from 'react'

import { X, AtSign, Plus} from 'lucide-react'

import { Modal } from '../../elements/modal'
import { Button } from '../../elements/button'
import { ButtonIcon } from '../../elements/button-icon'
import { Input } from '../../elements/input'

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
    <Modal>
      <div>
        <div className='flex justify-between text-zinc-50'>
          <h3 className='text-lg'>Selecionar convidados</h3>
          <ButtonIcon
            onClick={ToggleModalEmailsToInvite}
          >
            <X/>
          </ButtonIcon>
        </div>

        <p className='text-zinc-400 text-sm'>Os convidados irão receber e-mails para confirmar a participação na viagem.</p>
      </div>

      <ul className='flex flex-wrap gap-2'>
        { emailsToInvites.map(email => {
          return (
            <li
              key={email} 
              className='flex items-center gap-2.5 bg-zinc-800 text-zinc-300 rounded-md py-1 px-2'
            >
              {email}
              <ButtonIcon
                type='button'
                onClick={() => HandleRemoveEmailFromInvites(email)}
                size='small'
              >
                <X/>
              </ButtonIcon>
            </li>
          )
        })}
      </ul>

      <div className='w-full h-1 bg-zinc-800'/>

      <form 
        onSubmit={HandleAddNewEmailToInvite} 
        className='flex items-center gap-5 py-2.5 pr-4 bg-zinc-950 rounded-xl'
      >
        <Input
          type='email'
          name='email'
          icon={<AtSign/>}
          placeholder='Digite o e-mail do convidado'
          variant='secondary'
        />

        <Button
          type='submit'
          variant='primary'
        >
          Convidar
          <Plus className='size-5'/>
        </Button>
      </form>
    </Modal>      
  )
}
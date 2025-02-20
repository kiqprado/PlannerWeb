import type { FormEvent } from 'react'

import { X, User, Mail } from 'lucide-react'

import { Modal } from '../../elements/modal'
import { Button } from '../../elements/button'
import { ButtonIcon } from '../../elements/button-icon'
import { Input } from '../../elements/input'

interface ConfirmGuestModalProps {
  ToggleModalConfirmGuest: () => void
  HandleAddNewGuest: (e: FormEvent<HTMLFormElement>) => void
}

export function ConfirmGuestModal({ 
  ToggleModalConfirmGuest,
  HandleAddNewGuest
} : ConfirmGuestModalProps) {
  return (
    <Modal>
      <div className='flex justify-between text-zinc-50'>
        <h3 className='text-lg'>Confirmar participação</h3>
        <ButtonIcon
          onClick={ToggleModalConfirmGuest}
        >
          <X/>
        </ButtonIcon>
      </div>

      <p className='text-zinc-400 mb-4'>Você foi convidado(a) para participar de uma viagem para <strong className='text-zinc-100'>Florianópolis, Brasil</strong> nas datas de <strong className='text-zinc-100'>16 a 27 de Agosto de 2024</strong>.</p>

      <p className='text-zinc-400 mb-4'>Para confirmar sua presença na viagem, preencha os dados abaixo:</p>
            
      <form action="" onSubmit={HandleAddNewGuest} className='space-y-2'>
        <Input
          type="text"
          name='name'
          icon={<User/>}
          placeholder='Seu nome completo'
          variant='secondary'
        />

        <Input
          type="email"
          name='email'
          icon={<Mail/>}
          placeholder='Seu e-mail'
          variant='secondary'
        />

        <Button
          type='submit'
          variant='primary'
          size='full'
        >
          Confirmar minha presença
        </Button>
      </form>
    </Modal>
  )
}
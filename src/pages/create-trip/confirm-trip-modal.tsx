import type { FormEvent } from 'react'

import { X, User, Mail } from 'lucide-react'

import { Modal } from '../../elements/modal'
import { Button } from '../../elements/button'
import { ButtonIcon } from '../../elements/button-icon'
import { Input } from '../../elements/input'

interface ConfirmTripModalProps {
  ToggleModalConfirmTrip: () => void
  setOwnerTripName: (name: string) => void
  setOwnerTripEmail: (email: string) => void
  CreateTrip: (e: FormEvent<HTMLFormElement>) => void
}

export function ConfirmTripModal({
  ToggleModalConfirmTrip,
  setOwnerTripName,
  setOwnerTripEmail,
  CreateTrip
}: ConfirmTripModalProps) {
  
  return (
    <Modal
      size='large'
    >
      <div className='flex justify-between text-zinc-50'>
        <h3 className='text-lg'>Confirmar criação da viagem</h3>
        <ButtonIcon
          onClick={ToggleModalConfirmTrip}
        >
          <X/>
        </ButtonIcon>
      </div>

      <p className='text-zinc-400 mb-5'>Para concluir a criação da viagem para <strong className='text-zinc-100'>Florianópolis, Brasil</strong> nas datas de <strong className='text-zinc-100'>16 a 27 de Agosto de 2024</strong> preencha seus dados abaixo:</p>

      <form onSubmit={CreateTrip} className='space-y-2'>
        <Input
          type='text'
          name='name'
          icon={<User/>}
          placeholder='Seu nome completo'
          onChange={e => setOwnerTripName(e.target.value)}
          variant='supporting'
          scale='full'
        />

        <Input
          type='text'
          name='email'
          icon={<Mail/>}
          placeholder='Seu e-mail pessoal'
          onChange={e => setOwnerTripEmail(e.target.value)}
          variant='supporting'
          scale='full'
        />

        <Button
          type='submit'
          variant='primary'
          size='full'
        >
          Confirmar criação da viagem
        </Button>
      </form>
    </Modal>
  )
}
import type { FormEvent } from 'react'

import { X, Tag, Calendar, Clock } from 'lucide-react'

import { Modal } from '../../elements/modal'
import { Button } from '../../elements/button'
import { ButtonIcon } from '../../elements/button-icon'
import { Input } from '../../elements/input'

interface RegisterActivityModalProps {
  ToggleRegisterActivityModal: () => void
  HandleAddNewActivity: (e: FormEvent<HTMLFormElement>) => void
}

export function RegisterActivityModal({ 
  ToggleRegisterActivityModal,
  HandleAddNewActivity
 }: RegisterActivityModalProps) {

  return (
    <Modal>
      <div className='flex justify-between text-zinc-50'>
        <h3 className='text-lg'>Cadastrar atividade</h3>
        <ButtonIcon
          onClick={ToggleRegisterActivityModal}
        >
          <X/>
        </ButtonIcon>
      </div>

      <p className='text-zinc-400 text-sm mb-5'>Todos convidados podem visualizar as atividades.</p>

      <form action="" onSubmit={HandleAddNewActivity} className="space-y-2">
        <Input
          type="text" 
          name="activity"
          icon={<Tag/>}
          placeholder="Qual a atividade?"
          variant='secondary'
        />

        <div className='flex gap-2'>
          <Input
            type="date" 
            name="date"
            icon={<Calendar/>}
            variant='secondary'
          />

          <Input
            type="time"
            name="time"
            icon={<Clock/>}
            variant='secondary'
          />
        </div>
          
        <Button
          type="submit"
          variant='primary'
          size='full'
        >
          Salvar atividade
        </Button>
      </form>
    </Modal>
  )
}
import { Plus } from 'lucide-react'

import { Button } from '../../elements/Button'

interface CreateActivityProps {
  ToggleRegisterActivityModal: () => void
}

export function CreateActivity({ToggleRegisterActivityModal} : CreateActivityProps) {
  return (
    <div className='flex items-center justify-between '>

      <h2 className='text-4xl text-zinc-100'>
        Atividades
      </h2>

      <Button
        type="button"
        onClick={ToggleRegisterActivityModal}
        variant='primary'
      >
        <Plus/>
        Cadastrar atividade
      </Button>
    </div>
  )
}
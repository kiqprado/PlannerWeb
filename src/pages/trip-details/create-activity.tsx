import { Plus } from 'lucide-react'

interface CreateActivityProps {
  ToggleRegisterActivityModal: () => void
}

export function CreateActivity({ToggleRegisterActivityModal} : CreateActivityProps) {
  return (
    <div className='flex items-center justify-between '>

      <h2 className='text-4xl text-zinc-100'>
        Atividades
      </h2>

      <button
        type="button"
        onClick={ToggleRegisterActivityModal}
        className=' flex items-center gap-2 px-5 py-2 font-medium text-lime-950 bg-lime-300 hover:bg-lime-400 rounded-lg'
      >
        <Plus/>
        Cadastrar atividade
      </button>
    </div>
  )
}
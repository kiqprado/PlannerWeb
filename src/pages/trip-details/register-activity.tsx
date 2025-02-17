import type { FormEvent } from 'react'

import { X, Tag, Calendar, Clock } from 'lucide-react'

interface RegisterActivityModalProps {
  ToggleRegisterActivityModal: () => void
  HandleAddNewActivity: (e: FormEvent<HTMLFormElement>) => void

}

export function RegisterActivityModal({ 
  ToggleRegisterActivityModal,
  HandleAddNewActivity
 }: RegisterActivityModalProps) {

  return (
    <div className='fixed h-screen inset-0 flex items-center justify-center bg-black/60'>
      <div className='w-[492px] bg-zinc-900 rounded-xl px-5 py-6'>

        <div className='flex justify-between text-zinc-50'>
          <h3 className='text-lg'>Cadastrar atividade</h3>
          <button
            type='button'
            onClick={ToggleRegisterActivityModal}
          >
            <X/>
          </button>
        </div>

        <p className='text-zinc-400 text-sm mb-5'>Todos convidados podem visualizar as atividades.</p>

        <form action="" onSubmit={HandleAddNewActivity} className="space-y-2">

          <div className='flex gap-2 items-center bg-zinc-950 px-4 py-2 rounded-lg'>
            <Tag className='size-5 text-zinc-400'/>
            <input 
              type="text" 
              name="activity"
              placeholder="Qual a atividade?"
              className='text-zinc-300 outline-none w-full placeholder:text-zinc-400' 
            />
          </div>

          <div className="flex gap-2">
            <div className='flex gap-2 items-center bg-zinc-950 px-4 py-2 rounded-lg flex-1'>
              <Calendar className='size-5 text-zinc-400'/>
              <input 
                type="date"
                name="date"
                className='text-zinc-300 outline-none w-full placeholder:text-zinc-400 [appearance:textfield] [&::-webkit-calendar-picker-indicator]:hidden'
              />
            </div>

            <div className='flex gap-2 items-center bg-zinc-950 px-4 py-2 rounded-lg'>
              <Clock className='size-5 text-zinc-400'/>
              <input 
                type="time"
                name="time"
                className='text-zinc-300 outline-none w-full placeholder:text-zinc-400  [appearance:textfield] [&::-webkit-calendar-picker-indicator]:hidden'
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 font-medium rounded-lg bg-lime-300 hover:bg-lime-400 text-lime-950"
          >
            Salvar atividade
          </button>
        </form>
      </div>
    </div>
  )
}
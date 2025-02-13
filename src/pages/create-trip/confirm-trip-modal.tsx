import {X, User, Mail} from 'lucide-react'

interface ConfirmTripModalProps {
  ToggleModalConfirmTrip: () => void
  CreateTrip: () => void
}

export function ConfirmTripModal({
  ToggleModalConfirmTrip,
  CreateTrip
}: ConfirmTripModalProps) {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black/60'>

      <div className=' w-[640px] px-5 py-6 space-y-2 bg-zinc-900 rounded-xl'>
        <div className='flex justify-between text-zinc-50'>
          <h3 className='text-lg'>Confirmar criação da viagem</h3>
          <button
            type='button'
            onClick={ToggleModalConfirmTrip}
            className='cursor-pointer'
          >
            <X/>
          </button>
        </div>

        <p className='text-zinc-400 mb-5'>Para concluir a criação da viagem para <strong className='text-zinc-100'>Florianópolis, Brasil</strong> nas datas de <strong className='text-zinc-100'>16 a 27 de Agosto de 2024</strong> preencha seus dados abaixo:</p>

        <div className='space-y-2'>
          <input 
            type="text"
            icon={<User/>}
            placeholder='Seu nome completo'
            className=' w-full bg-zinc-950 text-zinc-300 placeholder:text-zinc-400 rounded-xl py-2.5 px-4 outline-none'
          />
          <input 
            type="text"
            icon={<Mail/>}
            placeholder='Seu e-mail pessoal'
            className=' w-full  bg-zinc-950 text-zinc-300 placeholder:text-zinc-400 rounded-xl py-2.5 px-4 outline-none' 
          />
          <button
            type='button'
            onClick={CreateTrip}
            className=' w-full bg-lime-300 hover:bg-lime-400 text-center font-medium rounded-xl py-2.5'
          >
            Confirmar criação da viagem
          </button>
        </div>
      </div>
    </div>
  )
}
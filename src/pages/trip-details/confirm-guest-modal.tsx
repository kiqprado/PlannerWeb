import { X, User, Mail } from 'lucide-react'
import type { FormEvent } from 'react'

interface ConfirmGuestModalProps {
  ToggleModalConfirmGuest: () => void
  HandleAddNewGuest: (e: FormEvent<HTMLFormElement>) => void
}

export function ConfirmGuestModal({ 
  ToggleModalConfirmGuest,
  HandleAddNewGuest
} : ConfirmGuestModalProps) {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black/60'>

          <div className=' w-[640px] px-5 py-6 space-y-2 bg-zinc-900 rounded-xl'>
            <div className='flex justify-between text-zinc-50'>
              <h3 className='text-lg'>Confirmar participação</h3>
              <button
                type='button'
                onClick={ToggleModalConfirmGuest}
              >
                <X/>
              </button>
            </div>

            <p className='text-zinc-400 mb-4'>Você foi convidado(a) para participar de uma viagem para <strong className='text-zinc-100'>Florianópolis, Brasil</strong> nas datas de <strong className='text-zinc-100'>16 a 27 de Agosto de 2024</strong>.</p>

            <p className='text-zinc-400 mb-4'>Para confirmar sua presença na viagem, preencha os dados abaixo:</p>
            
            <form action="" onSubmit={HandleAddNewGuest} className='space-y-2'>
              <input 
                type="text"
                placeholder='Seu nome completo'
                className=' w-full bg-zinc-950 text-zinc-300 placeholder:text-zinc-400 rounded-xl py-2.5 px-4 outline-none'
              />
              <input 
                type="text"
                placeholder='Seu e-mail'
                className=' w-full  bg-zinc-950 text-zinc-300 placeholder:text-zinc-400 rounded-xl py-2.5 px-4 outline-none' 
              />
              <button
                type='submit'
                className=' w-full bg-lime-300 hover:bg-lime-400 text-center font-medium rounded-xl py-2.5'
              >
                Confirmar minha presença
              </button>
            </form>
          </div>
        </div>
  )
}
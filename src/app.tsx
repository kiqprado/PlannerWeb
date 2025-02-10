import { useState } from 'react'

import './index.css'

import { MapPin, Calendar, ArrowRight, UserRoundPlus, X, Settings2, AtSign, Plus } from 'lucide-react'

import Logo from '/Logo.svg'
export function App() {
  const [ guestInput, setGuestInput ] = useState(false)

  const [ emailsToInvite, setEmailsToInvite ] = useState(false)

  function toggleGuestsInput() {
    setGuestInput((prev) => !prev)
  }

  function modalEmailsToInvite() {
    setEmailsToInvite((prev) => !prev)
  }

  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='max-w-3xl w-full px-6 space-y-10'>

        <div className='flex flex-col items-center gap-2'>
          <img src={Logo} alt="" />
          <p className='text-zinc-300 text-lg'>Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

        <div className='space-y-4'>
        <div  className='flex items-center gap-5 py-4 px-4 bg-zinc-900 rounded-xl'>

          <div className='flex-1 flex items-center gap-2'>
            <MapPin className='size-5 text-zinc-400'/>
            <input 
              type="text" 
              placeholder='Para onde você vai?'
              className=' text-zinc-300 flex-1 placeholder:text-zinc-400' 
              disabled={guestInput}
            />
          </div>

          <div className='flex items-center gap-2'>
            <Calendar className='size-5 text-zinc-400'/>
            <input 
              type="text" 
              placeholder='Quando?'
              className='text-zinc-300 w-30 placeholder:text-zinc-400'
              disabled={guestInput}
            />
          </div>

          <div className='w-0.5 h-10 bg-zinc-800'/>

          { guestInput ? (
            <button
              type='button'
              onClick={toggleGuestsInput}
              className='flex items-center gap-2 rounded-xl bg-zinc-800 text-zinc-200 px-5 py-2 hover:bg-zinc-700'
            >
              Alterar local/data
              <Settings2/>
            </button>
          ) : (
            <button 
              type='button'
              onClick={toggleGuestsInput}
              className='flex items-center gap-2 rounded-xl bg-lime-300 px-5 py-2 hover:bg-lime-400'
            >
              Continuar 
              <ArrowRight/>
            </button>
          )}

        </div>

        { guestInput && (
          <div  className='flex items-center gap-5 py-4 px-4 bg-zinc-900 rounded-xl'>

            <button 
              type='button'
              onClick={modalEmailsToInvite}
              className='flex items-center gap-2 flex-1  text-zinc-400'
            >
              <UserRoundPlus className='size-5 text-zinc-400'/>
              Quem estará na viagem?
            </button>

            <button 
              type='button'
              onClick={toggleGuestsInput}
              className='flex items-center gap-2 rounded-xl bg-lime-300 px-5 py-2 hover:bg-lime-400'
            >
              Confirmar viagem <ArrowRight/>
            </button>

          </div>
        )}
        </div>

        { emailsToInvite && (
          <div className='fixed inset-0 flex items-center justify-center bg-black/60'>

            <div className=' w-[640px] px-5 py-6 space-y-6 bg-zinc-900 rounded-xl'>

              <div>
                <div className='flex justify-between text-zinc-50'>
                  <h2 className='text-lg'>Selecionar convidados</h2>
                  <button
                    type='button'
                    onClick={modalEmailsToInvite}
                  >
                    <X/>
                  </button>
                </div>

                <p className='text-zinc-400 text-sm'>Os convidados irão receber e-mails para confirmar a participação na viagem.</p>
              </div>

              <ul className='flex flex-wrap gap-2'>
                <li className='flex gap-2.5 bg-zinc-800 text-zinc-300 rounded-md py-1 px-1.5'>
                  kiq@outlook.com <X/>
                </li>
                <li className='flex gap-2.5 bg-zinc-800 text-zinc-300 rounded-md py-1 px-1.5'>
                  kiq@outlook.com <X/>
                </li>
                <li className='flex gap-2.5 bg-zinc-800 text-zinc-300 rounded-md py-1 px-1.5'>
                  kiq@outlook.com <X/>
                </li>
                <li className='flex gap-2.5 bg-zinc-800 text-zinc-300 rounded-md py-1 px-1.5'>
                  kiq@outlook.com <X/>
                </li>
                <li className='flex gap-2.5 bg-zinc-800 text-zinc-300 rounded-md py-1 px-1.5'>
                  kiq@outlook.com <X/>
                </li>
              </ul>

              <div className='w-full h-1 bg-zinc-800'/>

              <div  className='flex items-center gap-5 py-2.5 px-4 bg-zinc-950 rounded-xl'>

                <div className='flex-1 flex items-center gap-2'>
                  <AtSign className='size-5 text-zinc-400'/>
                  <input 
                    type="mail" 
                    placeholder='Digite o e-mail do convidado'
                    className=' text-zinc-300 flex-1 placeholder:text-zinc-400' 
                  />
                </div>

                <button
                  type='button'
                  className='flex items-center gap-2 rounded-xl bg-lime-300 text-lime-950 px-5 py-2 hover:bg-lime-400'
                >
                  Convidar
                  <Plus/>
                </button>

              </div>
            </div>

          </div>
        )}

        <p className='text-zinc-500 text-center text-sm'>Ao planejar sua viagem pela plann.er você automaticamente concorda <br/>
        com <a href='#' className='text-zinc-300'>nossos termos</a> de uso e <a href="#" className='text-zinc-300'>políticas de privacidade</a>.</p>
      </div>
    </div>
  )
}



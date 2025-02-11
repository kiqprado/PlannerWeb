import { useState } from 'react'

import './index.css'

import { MapPin, Calendar, ArrowRight, UserRoundPlus, User, Mail, X, Settings2, AtSign, Plus } from 'lucide-react'

import Logo from '/Logo.svg'
export function App() {
  const [ guestInput, setGuestInput ] = useState(false)

  const [ emailsToInviteModal, setEmailsToInviteModal ] = useState(false)

  const [ guestEmail, setGuestEmail ] = useState('')
  const [ guestsListEmails, setGuestsListEmails ] = useState<string[]>([])

  const [ confirmTripModal, setConfirmTripModal ] = useState(false)

  const [ confirmGuestModal, setConfirmGuestModal ] = useState(false)

  function toggleGuestsInput() {
    setGuestInput((prev) => !prev)
  }

  function modalEmailsToInvite() {
    setEmailsToInviteModal((prev) => !prev)
  }

  function HandleGuestsEmailsList() {
    if(guestEmail.trim() && !guestsListEmails.includes(guestEmail)) {
      setGuestsListEmails([...guestsListEmails, guestEmail])
      setGuestEmail('')
    }
  }

  function handleRemoveGuestEmail(emailToRemove: string) {
    setGuestsListEmails(guestsListEmails.filter(email => email !== emailToRemove))
  }

  function modalConfirmTrip() {
    setConfirmTripModal((prev) => !prev)
  }

  function modalConfirmGuest() {
    setConfirmGuestModal((prev) => !prev)
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
              className=' text-zinc-300 flex-1 placeholder:text-zinc-400 outline-none' 
              disabled={guestInput}
            />
          </div>

          <div className='flex items-center gap-2'>
            <Calendar className='size-5 text-zinc-400'/>
            <input 
              type="text" 
              placeholder='Quando?'
              className='text-zinc-300 w-30 placeholder:text-zinc-400 outline-none'
              disabled={guestInput}
            />
          </div>

          <div className='w-0.5 h-10 bg-zinc-800'/>

          { guestInput ? (
            <button
              type='button'
              onClick={toggleGuestsInput}
              className='flex items-center gap-2 rounded-xl bg-zinc-800 text-zinc-200 font-medium px-5 py-2 hover:bg-zinc-700'
            >
              Alterar local/data
              <Settings2/>
            </button>
          ) : (
            <button 
              type='button'
              onClick={toggleGuestsInput}
              className='flex items-center gap-2 rounded-xl bg-lime-300 font-medium px-5 py-2 hover:bg-lime-400'
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
              className='flex items-center gap-2 flex-1  text-zinc-400 '
            >
              <UserRoundPlus className='size-5 text-zinc-400'/>
              Quem estará na viagem?
            </button>

            <button 
              type='button'
              onClick={modalConfirmTrip}
              className='flex items-center gap-2 rounded-xl bg-lime-300 font-medium px-5 py-2 hover:bg-lime-400'
            >
              Confirmar viagem <ArrowRight/>
            </button>

          </div>
        )}
        </div>

        { emailsToInviteModal && (
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
                { guestsListEmails.map((email, index) => (
                  <li
                    key={index} 
                    className='flex gap-2.5 bg-zinc-800 text-zinc-300 rounded-md py-1 px-1.5'>
                  {email}
                  <button
                    type='button'
                    onClick={() => handleRemoveGuestEmail(email)}
                  >
                    <X/>
                  </button>
                </li>
                ))}
              </ul>

              <div className='w-full h-1 bg-zinc-800'/>

              <div  className='flex items-center gap-5 py-2.5 px-4 bg-zinc-950 rounded-xl'>

                <div className='flex-1 flex items-center gap-2'>
                  <AtSign className='size-5 text-zinc-400'/>
                  <input 
                    type="mail"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    placeholder='Digite o e-mail do convidado'
                    className=' text-zinc-300 flex-1 placeholder:text-zinc-400 outline-none' 
                  />
                </div>

                <button
                  type='button'
                  onClick={HandleGuestsEmailsList}
                  className='flex items-center gap-2 rounded-xl bg-lime-300 text-lime-950 font-medium px-5 py-2 hover:bg-lime-400'
                >
                  Convidar
                  <Plus/>
                </button>

              </div>
            </div>

          </div>
        )}

        { confirmTripModal && (
          <div className='fixed inset-0 flex items-center justify-center bg-black/60'>

            <div className=' w-[640px] px-5 py-6 space-y-2 bg-zinc-900 rounded-xl'>
              <div className='flex justify-between text-zinc-50'>
                <h2 className='text-lg'>Confirmar criação da viagem</h2>
                <button
                  type='button'
                  onClick={modalConfirmTrip}
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
                  onClick={modalConfirmGuest}
                  className=' w-full bg-lime-300 hover:bg-lime-400 text-center font-medium rounded-xl py-2.5'
                >
                  Confirmar criação da viagem
                </button>
              </div>
            </div>
          </div>
        )}

        { confirmGuestModal && (
          <div className='fixed inset-0 flex items-center justify-center bg-black/60'>

          <div className=' w-[640px] px-5 py-6 space-y-2 bg-zinc-900 rounded-xl'>
            <div className='flex justify-between text-zinc-50'>
              <h2 className='text-lg'>Confirmar participação</h2>
              <button
                type='button'
                onClick={modalConfirmGuest}
              >
                <X/>
              </button>
            </div>

            <p className='text-zinc-400 mb-4'>Você foi convidado(a) para participar de uma viagem para <strong className='text-zinc-100'>Florianópolis, Brasil</strong> nas datas de <strong className='text-zinc-100'>16 a 27 de Agosto de 2024</strong>.</p>

            <p className='text-zinc-400 mb-4'>Para confirmar sua presença na viagem, preencha os dados abaixo:</p>

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
                placeholder='Seu e-mail'
                className=' w-full  bg-zinc-950 text-zinc-300 placeholder:text-zinc-400 rounded-xl py-2.5 px-4 outline-none' 
              />
              <button
                type='button'
                className=' w-full bg-lime-300 hover:bg-lime-400 text-center font-medium rounded-xl py-2.5'
              >
                Confirmar minha presença
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



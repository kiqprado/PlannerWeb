import { useState } from 'react'
import type { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { InviteGuestsModal } from './invite-guests-modal'

import '../../index.css'

import { MapPin, Calendar, ArrowRight, UserRoundPlus, User, Mail, X, Settings2 } from 'lucide-react'

import Logo from '/Logo.svg'
export function CreateTripPage() {
  const navigate = useNavigate()

  const [ guestInput, setGuestInput ] = useState(false)

  const [ emailsToInviteModal, setEmailsToInviteModal ] = useState(false)

  const [ emailsToInvites, setEmailsToInvites ] = useState<string[]>([])

  const [ confirmTripModal, setConfirmTripModal ] = useState(false)

  const [ confirmGuestModal, setConfirmGuestModal ] = useState(false)

  function toggleGuestsInput() {
    setGuestInput((prev) => !prev)
  }

  function ToggleModalEmailsToInvite() {
    setEmailsToInviteModal((prev) => !prev)
  }

  function HandleAddNewEmailToInvite(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const data = new FormData(e.currentTarget)
    const email = data.get('email')

    if (typeof email !== 'string') {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    if(emailsToInvites.includes(email)) {
      return alert('Este E-mail já está convidado!')
    }

    setEmailsToInvites([
      ...emailsToInvites,
      email
    ])

    e.currentTarget.reset()
  }

  function HandleRemoveEmailFromInvites(emailToRemove: string) {
    setEmailsToInvites(emailsToInvites.filter(email => email !== emailToRemove))
  }

  function modalConfirmTrip() {
    setConfirmTripModal((prev) => !prev)
  }

  function modalConfirmGuest() {
    setConfirmGuestModal((prev) => !prev)
  }

  function CreateTrip() {
    navigate('/trips/4334')
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
              onClick={ToggleModalEmailsToInvite}
              className='flex items-center gap-2 flex-1'
            >
              <UserRoundPlus className='size-5 text-zinc-400'/>
              { emailsToInvites.length > 0 ? (
                emailsToInvites.length === 1 ? (
                  <span className='text-zinc-100'> 1 pessoa convidada.</span>
                ) : (
                  <span className='text-zinc-100'>{emailsToInvites.length} pessoas convidadas.</span>
                )
              ) : (
                <span className='text-zinc-400'> Quem estará na viagem? </span>
              )}
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
          <InviteGuestsModal
            HandleAddNewEmailToInvite={HandleAddNewEmailToInvite}
            HandleRemoveEmailFromInvites={HandleRemoveEmailFromInvites}
            ToggleModalEmailsToInvite={ToggleModalEmailsToInvite}
            emailsToInvites={emailsToInvites}
          />
        )}

        { confirmTripModal && (
          <div className='fixed inset-0 flex items-center justify-center bg-black/60'>

            <div className=' w-[640px] px-5 py-6 space-y-2 bg-zinc-900 rounded-xl'>
              <div className='flex justify-between text-zinc-50'>
                <h3 className='text-lg'>Confirmar criação da viagem</h3>
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
                  onClick={CreateTrip}
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
              <h3 className='text-lg'>Confirmar participação</h3>
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



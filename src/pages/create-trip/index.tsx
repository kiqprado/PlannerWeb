import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import type { DateRange } from 'react-day-picker'

import { InviteGuestsModal } from './invite-guests-modal'
import { ConfirmTripModal, type InvitedEmail } from './confirm-trip-modal'

import { Header } from './components/header'
import { JourneyDetails } from './components/journey-details'
import { GuestsInvitesDetails } from './components/guests-invites-details'
import { Footer } from './components/footer'

import '../../index.css'

export function CreateTripPage() {
  const navigate = useNavigate()

  const [ destinationName, setDestinationName ] = useState('')

  const [ datePickerModal, setDatePickerModal  ] = useState(false)
  const [ startsAndFinishesDate, setStarAndFinishesDate ] = useState<DateRange | undefined>()

  const [ guestInput, setGuestInput ] = useState(false)

  const [ emailsToInviteModal, setEmailsToInviteModal ] = useState(false)
  const [ emailsToInvites, setEmailsToInvites ] = useState<string[]>([])

  const [ confirmTripModal, setConfirmTripModal ] = useState(false)
  const [ createdTripWithInvitedEmails, setCreatedTripWithInvitedEmails ] = useState<InvitedEmail[]>([])
  const [ ownerTripName, setOwnerTripName ] = useState('')
  const [ ownerTripEmail, setOwnerTripEmail ] = useState('')


  function toggleGuestsInput() {
    setGuestInput((prev) => !prev)
  }

  function ToggleDatePickerModal() {
    setDatePickerModal((prev) => !prev)
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
      alert('Este E-mail já está convidado!')
      e.currentTarget.reset()
      return
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

  function ToggleModalConfirmTrip() {
    setConfirmTripModal((prev) => !prev)
  }

  function CreateTrip(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    console.log(destinationName)
    console.log(startsAndFinishesDate)
    console.log(emailsToInvites)
    console.log(ownerTripName)
    console.log(ownerTripEmail)

    navigate('/trips/4334')
  }

  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='max-w-3xl w-full px-6 space-y-10 bg-[url(/bg.png)] bg-center bg-no-repeat'>
        <Header/>

        <div className='space-y-4'>
        <JourneyDetails
          guestInput={guestInput}
          datePickerModal={datePickerModal}
          setDestinationName={setDestinationName}
          startsAndFinishesDate={startsAndFinishesDate}
          setStarAndFinishesDate={setStarAndFinishesDate}
          ToggleDatePickerModal={ToggleDatePickerModal}
          toggleGuestsInput={toggleGuestsInput}
        />

        { guestInput && (
          <GuestsInvitesDetails
            ToggleModalEmailsToInvite={ToggleModalEmailsToInvite}
            emailsToInvites={emailsToInvites}
            ToggleModalConfirmTrip={ToggleModalConfirmTrip}
          />
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
          <ConfirmTripModal
            ToggleModalConfirmTrip={ToggleModalConfirmTrip}
            setOwnerTripName={setOwnerTripName}
            setOwnerTripEmail={setOwnerTripEmail}
            CreateTrip={CreateTrip}
          />
        )}

        <Footer/>
      </div>
    </div>
  )
}



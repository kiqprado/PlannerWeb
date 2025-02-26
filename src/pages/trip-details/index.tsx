import { type FormEvent, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'

import { api } from '../../lib/axios'

import { HeaderDetailsInTrip } from './components/header-details'

import { CreateActivity } from './create-activity'
import { RegisterActivityModal } from './register-activity-modal'
import { ActivityDetails } from './activity-details'

import { LinksImportant } from './links-important'
import { AddNewLinkModal } from './add-link-modal'

import { GuestsLists } from './guest-list'
import { ConfirmGuestModal } from './confirm-guest-modal'

export function TripDetailsPage() {
  const { tripId } = useParams()

  const navigate = useNavigate()

  const [ registerActivityModal, setRegisterActivityModal ] = useState(false)

  const [ addNewLinkModal, setAddNewLinkModal ] = useState(false)

  const [ confirmGuestModal, setConfirmGuestModal ] = useState(false)

  function ChangeTripDetails() {
    navigate("/")
  }

  function ToggleRegisterActivityModal() {
    setRegisterActivityModal((prev) => !prev)
  }

  async function HandleAddNewActivity(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const data = new FormData(e.currentTarget)

    const activity = data.get('activity')
    const occursAt = data.get('occurs_at')

    const response = await api.post(`/trips/${tripId}/activities`, {
      title: activity,
      occurs_at: occursAt
    })
    
    const { activityId } = response.data
    
    ToggleRegisterActivityModal()
    return activityId
  }

  function ToggleAddNewLinkModal() {
    setAddNewLinkModal((prev) => !prev)
  }

  function HandleAddNewLink( e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const data = new FormData(e.currentTarget)
    const title = data.get('title')
    const url = data.get('url')

    api.post(`/trips/${tripId}/links`, {
      title,
      url
    })

    ToggleAddNewLinkModal()
  }

  function ToggleModalConfirmGuest() {
    setConfirmGuestModal((prev) => !prev)
  }

  function HandleAddNewGuest( e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return(
    <div className=' w-min[1060px] h-screen px-24'>
      <div className='w-full flex flex-col gap-8 py-6'>
        <HeaderDetailsInTrip
          ChangeTripDetails={ChangeTripDetails}  
        />

        <div className='flex justify-between gap-16 px-6'>
          <div className='flex flex-1 flex-col gap-8'>
              <CreateActivity
                ToggleRegisterActivityModal={ToggleRegisterActivityModal}
              />

              {  registerActivityModal && (
              <RegisterActivityModal
                ToggleRegisterActivityModal={ToggleRegisterActivityModal}
                HandleAddNewActivity={HandleAddNewActivity}
              />
              )}

              <ActivityDetails/>
              
          </div>

          <div className='max-w-88 w-full space-y-6'>

            { addNewLinkModal && (
              <AddNewLinkModal
                ToggleAddNewLinkModal={ToggleAddNewLinkModal}
                HandleAddNewLink={HandleAddNewLink}
              />
            )}

            <LinksImportant
               ToggleAddNewLinkModal={ToggleAddNewLinkModal}
            />

            <div className='w-full h-0.5 bg-zinc-800'/>

            { confirmGuestModal && (
              <ConfirmGuestModal
                ToggleModalConfirmGuest={ToggleModalConfirmGuest}
                HandleAddNewGuest={HandleAddNewGuest}
              />
            )}

            <GuestsLists
              ToggleModalConfirmGuest={ToggleModalConfirmGuest}
            />
          </div>
          
        </div>
      </div>
    </div>
  )
}
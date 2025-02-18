import { type FormEvent, useState } from "react"
import { useNavigate } from 'react-router-dom'

import { HeaderDetailsInTrip } from './components/header-details'

import { CreateActivity } from './create-activity'
import { RegisterActivityModal } from './register-activity'
import { ActivityDetails, type Activity } from './activity-details'

import { LinksImportant, type Link } from './links-important'
import { AddNewLinkModal } from './add-new-link'

import { GuestsLists, type Guest } from './guest-list'
import { ConfirmGuestModal } from './confirm-guest-modal'

export function TripDetailsPage() {
  const navigate = useNavigate()

  const [ registerActivityModal, setRegisterActivityModal ] = useState(false)
  const [ activities, setActivities ] = useState<Activity[]>([])

  const [ addNewLinkModal, setAddNewLinkModal ] = useState(false)
  const [ links, setNewLinks ] = useState<Link[]>([])

  const [ confirmGuestModal, setConfirmGuestModal ] = useState(false)
  const [ guests, setGuests ] = useState<Guest[]>([])

  function ChangeTripDetails() {
    navigate("/")
  }

  function ToggleRegisterActivityModal() {
    setRegisterActivityModal((prev) => !prev)
  }

  function HandleAddNewActivity(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const data = new FormData(e.currentTarget)

    const activity = data.get('activity')
    const date = data.get('date')
    const time = data.get('time')

    const newActivity = {
      name: activity as string,
      date: date as string,
      time: time as string
    }

    setActivities([
      ...activities,
      newActivity
    ])
  }

  function ToggleAddNewLinkModal() {
    setAddNewLinkModal((prev) => !prev)
  }

  function HandleAddNewLink( e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const data = new FormData(e.currentTarget)
    const title = data.get('title')
    const url = data.get('url')

    const newLink = {
      title: title as string,
      url: url as string
    }

    setNewLinks([
      ...links,
      newLink
    ])
  }

  function ToggleModalConfirmGuest() {
    setConfirmGuestModal((prev) => !prev)
  }

  function HandleAddNewGuest( e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const data = new FormData(e.currentTarget)
    const title = data.get('name')
    const url = data.get('email')

    const newGuest = {
      name: title as string,
      email: url as string
    }

    setGuests([
      ...guests,
      newGuest
    ])
  }

  return(
    <div className=' w-min[1060px] h-screen px-24'>
      <div className='w-full flex flex-col gap-8 py-6'>
        <HeaderDetailsInTrip
          ChangeTripDetails={ChangeTripDetails}  
        />

        <div className='flex justify-between px-6'>
          <div className='max-w-2xl w-full flex flex-col gap-8'>
              <CreateActivity
                ToggleRegisterActivityModal={ToggleRegisterActivityModal}
              />

              {  registerActivityModal && (
              <RegisterActivityModal
                ToggleRegisterActivityModal={ToggleRegisterActivityModal}
                HandleAddNewActivity={HandleAddNewActivity}
              />
              )}

              <ActivityDetails
                activities={activities}
              />
          </div>

          <div className='max-w-92 w-full space-y-6'>

            { addNewLinkModal && (
              <AddNewLinkModal
                ToggleAddNewLinkModal={ToggleAddNewLinkModal}
                HandleAddNewLink={HandleAddNewLink}
              />
            )}

            <LinksImportant
               ToggleAddNewLinkModal={ToggleAddNewLinkModal}
               links={links}
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
              guests={guests}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
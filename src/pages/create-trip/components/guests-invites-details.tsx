import { UserRoundPlus, ArrowRight } from 'lucide-react'

interface GuestsInvitesDetailsProps {
  ToggleModalEmailsToInvite: () => void
  emailsToInvites: string[]
  ToggleModalConfirmTrip: () => void
}

export function GuestsInvitesDetails({
  ToggleModalEmailsToInvite,
  emailsToInvites,
  ToggleModalConfirmTrip
}: GuestsInvitesDetailsProps) {
  return (
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
        onClick={ToggleModalConfirmTrip}
        className='flex items-center gap-2 rounded-xl bg-lime-300 font-medium px-5 py-2 hover:bg-lime-400'
      >
        Confirmar viagem <ArrowRight/>
      </button>
    
    </div>
  )
}
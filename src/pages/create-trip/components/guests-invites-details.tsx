import { UserRoundPlus, ArrowRight } from 'lucide-react'

import { Button } from '../../../elements/Button'

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
      <Button
        type='button'
        onClick={ToggleModalEmailsToInvite}
        variant='tertiary'
        size='full'
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
      </Button>
    
      <Button
        type='button'
        onClick={ToggleModalConfirmTrip}
        variant='primary'
      >
        Confirmar viagem <ArrowRight/>
      </Button>
    
    </div>
  )
}
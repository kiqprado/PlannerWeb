import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { api } from '../../lib/axios'

import { CircleDashed, CircleCheck, UserCog } from 'lucide-react'

import { Button } from '../../elements/button'
import { ButtonIcon } from '../../elements/button-icon'

export interface Participant {
  id: string
  name: string | null
  email: string
  is_confirmed: boolean
}

export interface GuestsListProps {
  ToggleModalConfirmGuest: () => void
  guests: Participant[]
}
export function GuestsLists({
  ToggleModalConfirmGuest,
}: GuestsListProps) {
  const { tripId } = useParams()

  const [ participants, setParticipants ] = useState<Participant[] | undefined>()

 useEffect(() => {
  api.get(`/trips/${tripId}/participants`).then(response => setParticipants(response.data.participants))
 }, [tripId])

 if (!participants) {
  return <div>Carregando...</div>; // Ou qualquer outro indicador de carregamento
}

  return (

    <div className='flex flex-col gap-6'>
      <h3 className='text-zinc-50 text-xl'>Convidados</h3>
      { participants.length > 0 ? (
        participants.map( participant => {
          return (
            <div 
              key={participant.id}
              className='flex items-center justify-between'>
              <div className='flex flex-col gap-1.5'>
                <h4 className='text-zinc-100'>{participant.name}</h4>
                <span className='text-zinc-400 text-xs'>
                  {participant.email}
                </span>
              </div>

              <ButtonIcon>
                { participant.is_confirmed ?
                  <CircleCheck className='shrink-0 text-lime-300'/> : 
                  <CircleDashed className='shrink-0'/>
                }
              </ButtonIcon>
            </div>
          )
        })
      ) : (
        <div className='flex items-center justify-between'>
            <span className='text-zinc-400 text-sm'>Você ainda não possui convidados.</span>
        </div>
      )}

    <Button
      type='button'
      onClick={ToggleModalConfirmGuest}
      variant='secondary'
      size='full'
    >
      <UserCog/>
      Gerenciar convidados
    </Button>
  </div>
  )
}
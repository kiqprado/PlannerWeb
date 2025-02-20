import { CircleDashed, UserCog } from 'lucide-react'

import { Button } from '../../elements/Button'

export interface Guest {
  name: string,
  email: string
}

export interface GuestsListProps {
  ToggleModalConfirmGuest: () => void
  guests: Guest[]
}
export function GuestsLists({
  ToggleModalConfirmGuest,
  guests
}: GuestsListProps) {

  return (
    <div className='flex flex-col gap-6'>
      <h3 className='text-zinc-50 text-xl'>Convidados</h3>
      { guests.length > 0 ? (
        guests.map( guest => {
          return (
            <div 
              key={guest.name}
              className='flex items-center justify-between'>
              <div className='flex flex-col gap-1.5'>
                <h4 className='text-zinc-100'>{guest.name}</h4>
                <span className='text-zinc-400 text-xs'>
                  {guest.email}
                </span>
              </div>

              <button
                type="button"
                className="size-5 text-zinc-400"
              >
                <CircleDashed className='shrink-0'/>
              </button>
      
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
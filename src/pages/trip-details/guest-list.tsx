import { CircleDashed, CircleCheck, UserCog } from 'lucide-react'

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
      ): (
        <div className='flex items-center justify-between'>
            <span className=' text-zinc-400'>Você ainda não possui convidados.</span>
        </div>
      )}

    <button
      type='button'
      onClick={ToggleModalConfirmGuest}
      className='flex justify-center items-center gap-2 text-zinc-200 bg-zinc-900 hover:bg-zinc-800 rounded-lg px-5 py-2'
    >
      <UserCog/>
      Gerenciar convidados
    </button>
  </div>
  )
}
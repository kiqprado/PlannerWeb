import { MapPin, Calendar, Settings2, ArrowRight } from 'lucide-react'

interface JourneyDetailsProps {
  guestInput: boolean
  toggleGuestsInput: () => void
}

export function JourneyDetails({
  guestInput,
  toggleGuestsInput
} : JourneyDetailsProps ) {
  return (
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
  )
}
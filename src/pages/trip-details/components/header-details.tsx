import { MapPin, Calendar, Settings2 } from 'lucide-react'

import { Button } from '../../../elements/button'

interface HeaderDetailsInTripProps {
  ChangeTripDetails: () => void
}

export function HeaderDetailsInTrip({ChangeTripDetails}: HeaderDetailsInTripProps) {
  return (
    <div  className='flex items-center gap-5 py-3 px-4 bg-zinc-900 rounded-xl'>
      
      <div className='flex-1 flex items-center gap-2'>
        <MapPin className='size-5 text-zinc-400'/>
        <input 
          type="text" 
          placeholder='Para onde você vai?'
          className=' text-zinc-300 flex-1 placeholder:text-zinc-400 outline-none' 
        />
      </div>
    
      <div className='flex items-center gap-2'>
        <Calendar className='size-5 text-zinc-400'/>
        <input 
          type="text" 
          placeholder='Quando?'
          className='text-zinc-300 w-30 placeholder:text-zinc-400 outline-none'
        />
      </div>
    
      <div className='w-0.5 h-10 bg-zinc-800'/>

      <Button
        type='button'
        onClick={ChangeTripDetails}
        variant='secondary'
      >
        Alterar local/data
        <Settings2/>
      </Button>
    </div>  
  )
}
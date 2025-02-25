import { api } from '../../../lib/axios'

import { useParams } from 'react-router-dom'
import {  useState ,useEffect } from 'react'

import { format } from 'date-fns'

import { MapPin, Calendar, Settings2 } from 'lucide-react'

import { Button } from '../../../elements/button'

interface TripDetails {
  id: string
  destination: string
  starts_at: string
  ends_at: string
  is_confirmed: boolean
}
interface HeaderDetailsInTripProps {
  ChangeTripDetails: () => void
}

export function HeaderDetailsInTrip({ChangeTripDetails}: HeaderDetailsInTripProps) {
  const { tripId } = useParams()

  const [ trip, setTrip ] = useState<TripDetails | undefined>()

  useEffect(() => {
    api.get(`/trips/${tripId}`).then(response => setTrip(response.data.trip))
  }, [tripId])

  const FormattedDate = trip ?
  format(trip.starts_at, "d' de 'LLL")
  .concat(' até ')
  .concat(format(trip.ends_at, "d' de 'LLL"))
  : null 

  return (
    <div  className='flex items-center justify-between gap-5 py-3 px-4 bg-zinc-900 rounded-xl'>
      
      <div className='flex flex-1 item-center gap-2'>
        <MapPin className='size-5 text-zinc-400'/>
        <span
          className=' text-zinc-300 flex-1 placeholder:text-zinc-400'
        >
          {trip?.destination}
        </span>
      </div>
    
      <div className='flex items-center gap-2'>
        <Calendar className='size-5 text-zinc-400'/>
        <span
          className='w-[240px] text-zinc-300 placeholder:text-zinc-400 outline-none'
        >
          {FormattedDate}
        </span>
      </div>
    
      <div className='flex items-center gap-5'>
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
    </div>  
  )
}
import { MapPin, Calendar, Settings2, ArrowRight } from 'lucide-react'

import { Button } from '../../../elements/button'
import { Input } from '../../../elements/input'

interface JourneyDetailsProps {
  guestInput: boolean
  toggleGuestsInput: () => void
}

export function JourneyDetails({
  guestInput,
  toggleGuestsInput
} : JourneyDetailsProps ) {
  return (
    <div  className='flex items-center py-4 pr-4 rounded-xl bg-zinc-900'>
      <Input
        type="text"
        icon={<MapPin/>}
        placeholder='Para onde você vai?'
        disabled={guestInput}
        variant='auxiliary'
        size='full'
      />
      <Input
        type="text"
        icon={<Calendar/>}
        placeholder='Quando?'
        disabled={guestInput}
        variant='additional'
        size='full'
      />

      <div className='w-0.5 h-10 bg-zinc-800 ml-5 mr-5'/>

      { guestInput ? (
        <Button
          type='button'
          onClick={toggleGuestsInput}
          variant='secondary'
        >
          Alterar local/data
          <Settings2/>
        </Button>
      ) : (
        <Button
          type='button'
          onClick={toggleGuestsInput}
          variant='primary'
        >
          Continuar 
          <ArrowRight/>
        </Button>
      )}

    </div>
  )
}
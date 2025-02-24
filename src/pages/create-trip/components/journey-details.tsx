import { type DateRange, DayPicker } from 'react-day-picker'
import { format } from 'date-fns'
import "react-day-picker/dist/style.css"

import { MapPin, Calendar, Settings2, ArrowRight, X } from 'lucide-react'

import { Button } from '../../../elements/button'
import { Input } from '../../../elements/input'
import { Modal } from '../../../elements/modal'
import { ButtonIcon } from '../../../elements/button-icon'

interface JourneyDetailsProps {
  guestInput: boolean
  datePickerModal: boolean
  setDestinationName: (destination: string) => void
  startsAndFinishesDate:  DateRange | undefined
  setStarAndFinishesDate: (dates: DateRange | undefined) => void
  ToggleDatePickerModal: () => void
  toggleGuestsInput: () => void
}

export function JourneyDetails({
  guestInput,
  datePickerModal,
  startsAndFinishesDate,
  setDestinationName,
  setStarAndFinishesDate,
  ToggleDatePickerModal,
  toggleGuestsInput
} : JourneyDetailsProps ) {

  const displayedDateTrip = 
    startsAndFinishesDate?.from &&
    startsAndFinishesDate?.to ? 
    format(startsAndFinishesDate.from, "d' de 'LLL").
    concat(' até ').
    concat(format(startsAndFinishesDate.to, "d' de 'LLL")) : null

  return (
    <div  className='flex items-center py-4 pr-4 rounded-xl bg-zinc-900'>
      <Input
        type="text"
        icon={<MapPin/>}
        placeholder='Para onde você vai?'
        onChange={e => setDestinationName(e.target.value)}
        disabled={guestInput}
        variant='auxiliary'
        scale='full'
      />

      <Button
        onClick={ToggleDatePickerModal}
        disabled={guestInput}
        variant='quatenary'
      >
        <Calendar className='text-zinc-300'/>
        <span className='text-zinc-400'>{ displayedDateTrip || 'Quando?' }</span>
      </Button>

      { datePickerModal && (
        <Modal
          size='xSmall'
        >
          <div className='flex justify-between items-center'>
            <h3 className='text-zinc-300'>Selecione a data</h3>
            <ButtonIcon
              onClick={ToggleDatePickerModal}
            >
              <X/>
            </ButtonIcon>
          </div>

          <DayPicker
            mode='range'
            selected={startsAndFinishesDate}
            onSelect={setStarAndFinishesDate}
          />
        </Modal>
      )}

      <div className='w-0.5 h-10 bg-zinc-800 mr-5'/>

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
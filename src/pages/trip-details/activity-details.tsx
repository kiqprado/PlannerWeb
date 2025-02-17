import { CircleCheck } from 'lucide-react'

interface Activity {
  activity: string
  date: string
  time: string
}

interface ActivityDetailsProps {
  activity: Activity
}

export function ActivityDetails({ activity } : ActivityDetailsProps){
  return (
    <div key={activity.activity}>
      <div className='flex gap-2 items-center'>
        <h4 className='text-xl text-zinc-300'>Dia {activity.date}</h4>
        <span className='text-xs text-zinc-500'>Domingo</span>
      </div>
      { activity.activity ? (
        <div className='flex w-full items-center gap-3 px-4 py-2 bg-zinc-900 rounded-xl'>
          <span className='text-lime-300'><CircleCheck/></span>
          <span className='text-zinc-100 text-lg flex-1'>{activity.activity}</span>
          <span className='text-zinc-400 text-sm'>{activity.time}</span>
        </div>
      ) : (
        <div>
            <span className='text-zinc-500 text-sm font-medium'>Nenhuma atividade cadastrada nessa data.</span>
        </div>
      )}
      
    </div>
  )
}
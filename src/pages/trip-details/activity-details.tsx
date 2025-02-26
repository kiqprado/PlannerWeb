import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale' 

import { api } from '../../lib/axios'

import { CircleCheck } from 'lucide-react'

interface Activity {
  date: string
  activities: {
    id: string
    title: string
    occurs_at: string
  }[]
}


export function ActivityDetails() {
  const { tripId } = useParams()
  const [ activities, setActivities ] = useState<Activity[] | undefined>()

  useEffect(()=> {
    api.get(`/trips/${tripId}/activities`).then(response => setActivities(response.data.activities))
  }, [tripId])

  return (
    <div>
      {!activities ? (
        <div>
          <span> Você ainda não registrou nenhuma atividade em sua viagem!</span>
        </div>
      ) : (
        activities.map(activity => {
          return (
            <div key={activity.date}>
              <div className="flex gap-2 items-baseline">
                <h4 className="text-xl text-zinc-300">
                  Dia {format(activity.date, 'd')}
                </h4>
                <span className="text-xs text-zinc-500">
                  {format(activity.date, 'EEEE', {locale: ptBR})}
                </span>
              </div>

              {activity.activities.length === 0 ? (
                <span className='text-zinc-400 hover:text-zinc-300 text-sm'>Sem atividades cadastradas nesta data.</span>
              ) : (
                <div>
                  {activity.activities.map(name => {
                    return (
                      <div
                        key={name.id}
                        className="flex w-full items-center gap-3 px-4 py-2 bg-zinc-900 hover:bg-zinc-700 rounded-xl"
                      >
                        <span className="text-lime-300"><CircleCheck /></span>
                        <span className="text-zinc-100 text-lg flex-1">{name.title}</span>
                        <span className="text-zinc-400 text-sm">{format(name.occurs_at, "HH:mm")}h</span>
                      </div>
                    )
                  })}
                </div>
              )}  
            </div>  
          )
        })
      )}
    </div>
  )
}

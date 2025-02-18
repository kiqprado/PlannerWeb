import { CircleCheck } from 'lucide-react'

export interface Activity {
  name: string
  date: string
  time: string
}

interface ActivityDetailsProps {
  activities: Activity[]
}

export function ActivityDetails({activities }: ActivityDetailsProps) {
  return (
    <div>
      {activities.length > 0 ? (
        activities.map(activity => {
          return (
            <div key={activity.name}>
            <div className="flex gap-2 items-baseline">
              <h4 className="text-xl text-zinc-300">Dia {activity.date}</h4>
              <span className="text-xs text-zinc-500">Domingo</span>
            </div>

            {activity.name ? (
              <div className="flex w-full items-center gap-3 px-4 py-2 bg-zinc-900 rounded-xl">
                <span className="text-lime-300"><CircleCheck /></span>
                <span className="text-zinc-100 text-lg flex-1">{activity.name}</span>
                <span className="text-zinc-400 text-sm">{activity.time}</span>
              </div>
            ) : (
              <span className="text-zinc-500 text-sm font-medium">
                Nenhuma atividade cadastrada nessa data.
              </span>
            )}
          </div>
          )
        })
      ) : (
        <div className="text-zinc-400 text-sm">
          Você ainda não cadastrou atividades em sua viagem.
        </div>
      )}
    </div>
  );
  
}
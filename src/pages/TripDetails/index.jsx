import { MapPin, Calendar, Settings2, Plus, CircleCheck, Link2, CircleDashed, UserCog } from "lucide-react"

export function TripDetailsPage() {
  return(
    <div className=' w-min[1060px] h-screen px-24'>
      <div className='w-full flex flex-col gap-8'>
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

          <button
            type='button'
            className='flex items-center gap-2 rounded-xl bg-zinc-800 text-zinc-200 font-medium px-5 py-2 hover:bg-zinc-700'
          >
            Alterar local/data
            <Settings2/>
          </button>
        </div>

        <div className='flex gap-14'>
          <div className='max-w-2xl w-full pl-6'>
        <div className='mb-6'>
          <div className='flex items-center justify-between '>
            <h2 className='text-4xl text-zinc-100'>
              Atividades
            </h2>
            <button
              type="button"
              className=' flex items-center gap-2 px-5 py-2 font-medium text-lime-950 bg-lime-300 hover:bg-lime-400 rounded-lg'
            >
              <Plus/>
              Cadastrar atividade
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <div className='flex gap-2 items-center'>
              <h4 className='text-xl text-zinc-300'>Dia 17</h4>
              <span className='text-xs text-zinc-500'>Sábado</span>
            </div>

            <div>
              <span className='text-zinc-500 text-sm font-medium'>Nenhuma atividade cadastrada nessa data.</span>
            </div>
          </div>

          <div>
            <div className='flex gap-2 items-center'>
              <h4 className='text-xl text-zinc-300'>Dia 18</h4>
              <span className='text-xs text-zinc-500'>Domingo</span>
            </div>

            <div className='flex w-full items-center gap-3 px-4 py-2 bg-zinc-900 rounded-xl'>
              <span className='text-lime-300'><CircleCheck/></span>
              <span className='text-zinc-100 text-lg flex-1'>Corrida de Kart</span>
              <span className='text-zinc-400 text-sm'>14:00h</span>
            </div>
          </div>

          <div>
            <div className='flex gap-2 items-center'>
              <h4 className='text-xl text-zinc-300'>Dia 18</h4>
              <span className='text-xs text-zinc-500'>Domingo</span>
            </div>

            <div className='flex w-full items-center gap-3 px-4 py-2 bg-zinc-900 rounded-xl'>
              <span className='text-lime-300'><CircleCheck/></span>
              <span className='text-zinc-100 text-lg flex-1'>Corrida de Kart</span>
              <span className='text-zinc-400 text-sm'>14:00h</span>
            </div>
          </div>

          <div>
            <div className='flex gap-2 items-center'>
              <h4 className='text-xl text-zinc-300'>Dia 18</h4>
              <span className='text-xs text-zinc-500'>Domingo</span>
            </div>

            <div className='flex w-full items-center gap-3 px-4 py-2 bg-zinc-900 rounded-xl'>
              <span className='text-lime-300'><CircleCheck/></span>
              <span className='text-zinc-100 text-lg flex-1'>Corrida de Kart</span>
              <span className='text-zinc-400 text-sm'>14:00h</span>
            </div>
          </div>

          <div>
            <div className='flex gap-2 items-center'>
              <h4 className='text-xl text-zinc-300'>Dia 18</h4>
              <span className='text-xs text-zinc-500'>Domingo</span>
            </div>

            <div className='flex w-full items-center gap-3 px-4 py-2 bg-zinc-900 rounded-xl'>
              <span className='text-lime-300'><CircleCheck/></span>
              <span className='text-zinc-100 text-lg flex-1'>Corrida de Kart</span>
              <span className='text-zinc-400 text-sm'>14:00h</span>
            </div>
          </div>
        </div>
          </div>

          <div className='max-w-92 w-full space-y-6'>
            <div className='flex flex-col gap-6'>
              <h3 className='text-zinc-50 text-xl'>Links importantes</h3>

              <div className='flex items-center justify-between'>
                <div className='flex flex-col gap-1.5'>
                  <h4 className='text-zinc-100'>Reserva do AirBnB</h4>
                  <a 
                    href="#"
                    className='text-zinc-400 text-xs'
                  >
                    https://www.airbnb.com.br/rooms/104700011
                  </a>
                </div>

                <button
                  type="button"
                  className="size-5 text-zinc-400"
                >
                  <Link2/>
                </button>
              </div>

              <div className='flex items-center justify-between'>
                <div className='flex flex-col gap-1.5'>
                  <h4 className='text-zinc-100'>Regras da Casa</h4>
                  <a 
                    href="#"
                    className='text-zinc-400 text-xs overflow-hidden'
                  >
                    https://www.notion.com/pages/1047000112354648336?adults=13&children=0&infants=0&pets=0&wishlist
                  </a>
                </div>

                <button
                  type="button"
                  className="size-5 text-zinc-400"
                >
                  <Link2/>
                </button>
              </div>

              <button
                type='button'
                className='flex justify-center items-center gap-2 text-zinc-200 bg-zinc-900 hover:bg-zinc-800 rounded-lg px-5 py-2'
              >
                <Plus/>
                Cadastrar novo link
              </button>
            </div>

            <div className='w-full h-0.5 bg-zinc-800'/>

            <div className='flex flex-col gap-6'>
              <h3 className='text-zinc-50 text-xl'>Convidados</h3>

              <div className='flex items-center justify-between'>
                <div className='flex flex-col gap-1.5'>
                  <h4 className='text-zinc-100'>Kaique Prado</h4>
                  <a 
                    href="#"
                    className='text-zinc-400 text-xs'
                  >
                    kiqprado@email.com
                  </a>
                </div>

                <button
                  type="button"
                  className="size-5 text-zinc-400"
                >
                  <CircleDashed/>
                </button>
              </div>

              <div className='flex items-center justify-between'>
                <div className='flex flex-col gap-1.5'>
                  <h4 className='text-zinc-100'>Nicolle Macan</h4>
                  <a 
                    href="#"
                    className='text-zinc-400 text-xs overflow-hidden'
                  >
                    ni.macan@email.com
                  </a>
                </div>

                <button
                  type="button"
                  className="size-5 text-zinc-400"
                >
                  <CircleCheck className='text-lime-300'/>
                </button>
              </div>

              <button
                type='button'
                className='flex justify-center items-center gap-2 text-zinc-200 bg-zinc-900 hover:bg-zinc-800 rounded-lg px-5 py-2'
              >
                <UserCog/>
                Gerenciar convidados
              </button>
            </div>
          </div>
        </div>
        

      </div>
    </div>
  )
}
import './index.css'

import { MapPin, Calendar, ArrowRight } from 'lucide-react'

import Logo from '/Logo.svg'
export function App() {
  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='max-w-3xl px-6 space-y-10'>

        <div className='flex flex-col items-center gap-2'>
          <img src={Logo} alt="" />
          <p className='text-zinc-300 text-lg'>Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

        <div  className='flex items-center gap-5 py-5 px-4 bg-zinc-900 rounded-xl'>

          <div className='flex items-center gap-2 flex-1'>
            <MapPin className='size-5 text-zinc-400'/>
            <input 
              type="text" 
              placeholder='Para onde você vai?'
              className=' flex-1 text-zinc-300 placeholder:text-zinc-400' 
            />
          </div>

          <div className='flex items-center gap-2'>
            <Calendar className='size-5 text-zinc-400'/>
            <input 
              type="text" 
              placeholder='Quando?'
              className='text-zinc-300 placeholder:text-zinc-400'
            />
          </div>

          <div className='w-0.5 h-10 bg-zinc-800'/>

          <button 
            type='button'
            className='flex items-center gap-2 rounded-xl bg-lime-300 px-5 py-2'
          >
              Continuar <ArrowRight/>
          </button>

        </div>

        <p className='text-zinc-500 text-center text-sm'>Ao planejar sua viagem pela plann.er você automaticamente concorda <br/>
        com <a href='#' className='text-zinc-300'>nossos termos</a> de uso e <a href="#" className='text-zinc-300'>políticas de privacidade</a>.</p>
      </div>
    </div>
  )
}



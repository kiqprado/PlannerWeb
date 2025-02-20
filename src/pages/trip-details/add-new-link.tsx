import type { FormEvent } from 'react'

import { X, Tag, Link2 } from 'lucide-react'

import { Button } from '../../elements/Button'

interface AddNewLinkModalProps {
  ToggleAddNewLinkModal: () => void
  HandleAddNewLink: (e: FormEvent<HTMLFormElement>) => void
}

export function AddNewLinkModal({ 
  ToggleAddNewLinkModal,
  HandleAddNewLink
 } : AddNewLinkModalProps) {

  return (
    <div className="fixed h-screen inset-0 flex items-center justify-center bg-black/60">
      <div className='w-[492px] bg-zinc-900 rounded-xl px-5 py-6'>
        <div className='flex justify-between text-zinc-50'>
          <h3 className='text-lg'>Cadastrar link</h3>
          <button
            type='button'
            onClick={ToggleAddNewLinkModal}
          >
            <X/>
          </button>
        </div>

        <p className='text-zinc-400 text-sm mb-5'>Todos convidados podem visualizar os links importantes.</p>

        <form action="" onSubmit={HandleAddNewLink} className="space-y-2">

          <div className="flex gap-2 items-center bg-zinc-950 px-4 py-2 rounded-lg">
            <Tag className="size-5 text-zinc-300"/>
            <input 
              type="text"
              name='title'
              placeholder="Título do link"
              className="text-zinc-300 placeholder:text-zinc-400 w-full outline-none"
            />
          </div>
          
          <div className="flex gap-2 items-center bg-zinc-950 px-4 py-2 rounded-lg">
            <Link2 className="size-5 text-zinc-300"/>
            <input 
              type="url"
              name='url'
              placeholder="URL"
              className="text-zinc-300 placeholder:text-zinc-400 w-full outline-none"
            />
          </div>

          <Button
            type="submit"
            variant='primary'
            size='full'
          >
            Salvar link
          </Button>
          
        </form>
      </div>
    </div>
  )
  
}
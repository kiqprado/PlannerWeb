import {Link2, Plus } from 'lucide-react'

import { Button } from '../../elements/Button'

export interface Link {
  title: string
  url: string
}

export interface LinksImportantProps {
  ToggleAddNewLinkModal: () => void
  links: Link[]
}

export function LinksImportant({
  ToggleAddNewLinkModal,
  links
} : LinksImportantProps ) {

  return (
    <div className='flex flex-col gap-6'>
      <h3 className='text-zinc-50 text-xl'>Links importantes</h3>
      { links.length > 0 ? (
        links.map( link => {
          return (
            <div
              key={link.title}
              className='flex items-center justify-between gap-6'
            >
              <div className='flex flex-col gap-1.5'>
                <h4 className='text-zinc-100'>{link.title}</h4>
                <a 
                  href={link.url}
                  className='text-zinc-400 text-xs truncate'
                >
                  {link.url}
                </a>
              </div>

              <a href={link.url} className="size-5 text-zinc-400 cursor-pointer">
                <Link2 className='shrink-0'/>
              </a> 
            </div>
          )
        })
      ) : (
            <div className='flex items-center justify-between'>
              <span className='text-zinc-400 text-sm'>Você ainda não cadastrou  nenhum link.</span>
            </div>     
      )}

      <Button
        type='button'
        onClick={ToggleAddNewLinkModal}
        variant='secondary'
        size='full'
      >
        <Plus/>
        Cadastrar novo link
      </Button>
    </div>
  )
}
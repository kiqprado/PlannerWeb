import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import {Link2, Plus } from 'lucide-react'

import { Button } from '../../elements/button'
import { api } from '../../lib/axios'

interface Link {
  title?: string
  url?: string
}

export interface LinksImportantProps {
  ToggleAddNewLinkModal: () => void
}

export function LinksImportant({
  ToggleAddNewLinkModal,
} : LinksImportantProps ) {

  const { tripId } = useParams()

  const [ links, setLinks ] = useState<Link[] | undefined>()

  useEffect(()=> {
    api.get(`/trips/${tripId}/links`).then(response => setLinks(response.data.links))
  }, [tripId])

  return (
    <div className='flex flex-col gap-6'>
      <h3 className='text-zinc-50 text-xl'>Links importantes</h3>
        { !links ? (
          <div className='flex items-center justify-between'>
            <span className='text-zinc-400 text-sm'>Você ainda não cadastrou nenhum link.</span>
          </div>
        ) : ( links && (
          links.map(link => {
            return (
              <div
                key={link.title}
                className='flex items-center justify-between gap-6'
              >
                <div className='flex flex-col gap-1.5'>
                  <h4 className='text-zinc-100'>{link.title}</h4>
                  <a
                    href={link.url}
                    className='w-[282px] text-zinc-400 hover:text-zinc-300 text-xs truncate'
                  >
                  {link.url}
                  </a>
                </div>

                <a href={link.url} className="size-5 text-zinc-400 cursor-pointer">
                  <Link2 className='shrink-0  hover:text-zinc-300' />
                </a>
              </div>
            )
          }))
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
import type { FormEvent } from 'react'

import { X, Tag, Link2 } from 'lucide-react'

import { Modal } from '../../elements/modal'
import { Button } from '../../elements/button'
import { ButtonIcon } from '../../elements/button-icon'
import { Input } from '../../elements/input'

interface AddNewLinkModalProps {
  ToggleAddNewLinkModal: () => void
  HandleAddNewLink: (e: FormEvent<HTMLFormElement>) => void
}

export function AddNewLinkModal({ 
  ToggleAddNewLinkModal,
  HandleAddNewLink
 } : AddNewLinkModalProps) {

  return (
    <Modal>
      <div className='flex justify-between text-zinc-50'>
        <h3 className='text-lg'>Cadastrar link</h3>
        <ButtonIcon
          onClick={ToggleAddNewLinkModal}
        >
          <X/>
        </ButtonIcon>
      </div>

      <p className='text-zinc-400 text-sm mb-5'>Todos convidados podem visualizar os links importantes.</p>

      <form action="" onSubmit={HandleAddNewLink} className="space-y-2">
        <Input
          type="text"
          name='title'
          icon={<Tag/>}
          placeholder="Título do link"
          variant='secondary'
        />

        <Input
          type="url"
          name='url'
          icon={<Link2/>}
          placeholder="URL"
          variant='secondary'
        />

        <Button
          type="submit"
          variant='primary'
          size='full'
        >
          Salvar link
          </Button>      
      </form>
    </Modal>
  )  
}
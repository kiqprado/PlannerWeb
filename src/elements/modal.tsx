import  type { ReactNode, ComponentProps } from "react"

interface ModalProps extends ComponentProps<'div'> {
  children: ReactNode
}

export function Modal({children} : ModalProps) {
  return (
    <div className="fixed h-screen inset-0 flex items-center justify-center bg-black/60">
      <div className='w-[492px] bg-zinc-900 rounded-xl px-5 py-6'>
        {children}
      </div>
    </div>
  )
}
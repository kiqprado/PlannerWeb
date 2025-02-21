import  type { ReactNode, ComponentProps } from "react"
import { tv, type VariantProps } from 'tailwind-variants'

const ModalVariants =  tv({
  base: 'bg-zinc-900 rounded-xl px-5 py-6',
  variants: {
    size: {
      small: 'w-[492px]',
      medium: 'w-[562px]',
      large: 'w-[626px]'
    }
  },
  defaultVariants: {
    size: 'medium'
  }
})

interface ModalProps extends ComponentProps<'div'>,
VariantProps<typeof ModalVariants> {
  children: ReactNode
}

export function Modal({children, size} : ModalProps) {
  return (
    <div className="fixed h-screen inset-0 flex items-center justify-center bg-black/60">
      <div className={ModalVariants({ size })}>
        {children}
      </div>
    </div>
  )
}
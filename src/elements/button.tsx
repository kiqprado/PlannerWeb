import type { ComponentProps, ReactNode } from "react"

import { tv, type VariantProps } from 'tailwind-variants'

const ButtonVariants = tv({
  base: 'flex items-center justify-center gap-2 px-4 py-2 font-medium rounded-xl',
  variants: {
    variant: {
      primary: 'bg-lime-300 hover:bg-lime-400 text-lime-950',
      secondary: 'bg-zinc-800 hover:bg-zinc-700 text-zinc-200',
      tertiary: 'flex-1 bg-transparent'
    },
    size: {
      default: 'w-fit',
      full: 'w-full'
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'default'
  }

})

interface ButtonProps extends ComponentProps<'button'>,
VariantProps<typeof ButtonVariants> {
 children: ReactNode,
}

export function Button({ children, variant, size, ...props} : ButtonProps) {
  return (
    <button
      {...props}
      type='submit'
      className={ButtonVariants({ variant, size })}
    > 
      {children}
    </button>
  )
}
import type { ComponentProps, ReactNode } from "react"

import { tv, type VariantProps } from 'tailwind-variants'

const ButtonIconVariants =  tv({
  base: 'flex items-center justify-center text-zinc-400 hover:text-zinc-300 cursor-pointer',
  variants: {
    size: {
      normal: 'size-5',
      small: 'size-4'
    }
  },
  defaultVariants: {
    size: 'normal'
  }
})

interface ButtonIconProps extends ComponentProps<'button'>,
VariantProps<typeof ButtonIconVariants> {
  children: ReactNode
}

export function ButtonIcon({ children, size, ...props} : ButtonIconProps) {
  return (
    <button
      type='button'
      {...props}
      className={ButtonIconVariants({ size })}
    >
      {children}
    </button>
  )
}
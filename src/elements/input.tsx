import type { ComponentProps, ReactNode } from "react"
import { tv, type VariantProps } from 'tailwind-variants'

const DivInputVariants = tv({
  base: 'w-full flex items-center gap-2 text-zinc-300 rounded-xl',
  variants: {
    variant: {
      primary: 'bg-zinc-900',
      secondary: 'py-2.5 px-4 bg-zinc-950',
      specialCase: 'w-40 bg-zinc-900'
    },
  },
  defaultVariants: {
    variant: 'primary'
  }
})

const InputVariants = tv({
  base: 'w-full outline-none text-zinc-300 placeholder:text-zinc-400',
  variants: {
    size: {
      full: 'flex-1',
      specialCase: 'w-[96px]'
    }
  },
  defaultVariants: {
    size: 'full'
  }
})

interface InputProps extends ComponentProps<'input'>,
VariantProps<typeof DivInputVariants>,
VariantProps<typeof InputVariants> {
  icon?: ReactNode
}

export function Input({icon, variant, size, ...props} : InputProps) {
  return(
    <div
      className={DivInputVariants({ variant })}
    >
      { icon && (
        <span> {icon} </span>
      )}
      <input 
        {...props}
        className={InputVariants({ size })}
      />
    </div>
  )
}
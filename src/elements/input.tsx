import type { ComponentProps, ReactNode } from "react"
import { tv, type VariantProps } from 'tailwind-variants'

const DivInputVariants = tv({
  base: 'flex items-center gap-2 pl-4 text-zinc-300 rounded-xl',
  variants: {
    variant: {
      prime: 'bg-zinc-900',
      auxiliary: 'flex-1 bg-zinc-900',
      supporting: 'py-2 pr-4 bg-zinc-950',
      additional: 'w-40 bg-zinc-900'
    },
  },
  defaultVariants: {
    variant: 'prime'
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
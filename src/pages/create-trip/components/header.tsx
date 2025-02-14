import Logo from '/Logo.svg'

export function Header() {
  return (
    <div className='flex flex-col items-center gap-2'>
      <img src={Logo} alt="" />
      <p className='text-zinc-300 text-lg'>Convide seus amigos e planeje sua próxima viagem!</p>
    </div>
  )
}
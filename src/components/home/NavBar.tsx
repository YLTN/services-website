'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname().split('/')[1];
  return (
      <nav className="relative z-10 flex items-center justify-between px-8 py-2">
        <Logo />
        <NavBtns selection={pathname} />
      </nav>
  )
}

function NavBtn({ href, text, selection }: { href: string, text: string, selection: string }) {
  let temp:string = '';
  let decoTemp:string = '';
  if (selection == '' && text == 'Home') {
    temp = '';
    decoTemp = 'black';
  } else if (selection.toLowerCase() !== href.toLowerCase()) {
    temp = 'text-gray-400';
  }
  return (
      <Link
        className={`flex items-center justify-center px-4 py-2 ${temp} hover:opacity-80 hover:rounded-md
                    underline decoration-transparent hover:decoration-inherit
                    hover:decoration-2 underline-offset-0 hover:underline-offset-4
                    transition-all transition-200 font-semibold text-lg`}
        href={href}
        style={{ textDecorationSkipInk: 'none' }}
      >
          {text}
      </Link>
  )
}

function NavBtns ({ selection }: { selection: string }) {
  return (
    <div className='flex items-center justify-center'>
      <NavBtn href='/' text='Home' selection={selection} />
      <NavBtn href='/' text='Services' selection={selection} />
      <NavBtn href='/' text='Careers' selection={selection} />
      <NavBtn href='/' text='Contact' selection={selection} />
    </div>
  )
}

function Logo () {
  return (
      <div className='flex items-center justify-center'>
        <Image className='object-contain object-center' height={50} width={50} src="/logo.png" alt="Logo" />
        <h1 className='ml-3 font-semibold text-2xl'>Rayane Benamre</h1>
      </div>
    )
}
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <div className="overflow-hidden h-[35rem] w-full relative">
            <div className='absolute top-0 left-0 h-full w-full opacity-0 lg:opacity-100'>
                <Image src='/me.png' alt='My Image' className='object-cover object-center float-right h-full w-2/3' height={'300'} width={'300'}></Image>
            </div>
            <Shape src='/slashfront.svg' alt='Slash Front'></Shape>
            <Shape src='/slashback.svg' alt='Slash Back'></Shape>
            <div className='absolute top-0 left-0 h-full w-full drop-shadow-2xl'>
                <Image src='/slashbtm.svg' alt='Slash Bottom' className='object-cover md:object-fill object-center h-full w-full' height={'300'} width={'300'}></Image>
            </div>
            <Text />
        </div>
    )
}

function Shape({ src, alt }: { src: string, alt: string }) {
    return (
        <div className='absolute top-0 left-0 h-full flex drop-shadow-2xl'>
            <Image src={src} alt={alt} className='object-cover object-center h-full w-full' height={'300'} width={'300'}></Image>
        </div>
    )
}

function Text() {
    return (
        <div className="absolute top-0 left-0 w-full md:w-[42rem] h-full px-0 md:px-10 flex justify-center items-center md:items-start flex-col text-center md:text-left">
            <h1 className="text-6xl font-bold leading-snug">Turn your ideas<br />&nbsp;&nbsp;into <code className="font-mono bg-gray-300 pt-1 rounded-md">&lt;code/&gt;</code></h1>
            <p className="ml-6 mt-5 text-2xl font-semibold">We will never give you up. We will never let you down.</p>
            <Link href='/' className='group flex items-center justify-between px-8 py-3 w-48 mt-6 ml-6 bg-black text-white font-bold rounded-full hover:ring-2 hover:ring-black hover:ring-offset-2 transition-all transition-200'><div>Get started!</div><div className='group-hover:translate-x-2 transition-transform transition-200'>→</div></Link>
        </div>
    )
}
import Image from "next/image";
import Wrapper from '../Wrapper';

export default function Info() {
    return (
        <Wrapper>
            <InfoCont>
                <Text title="Quality is our priority." desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo doloribus temporibus quo ducimus quidem porro vero numquam dolores sint delectus amet, id optio, facere a reprehenderit quis enim quas mollitia." />
                <Illustration src="/hacker.png" alt="Image" />
            </InfoCont>
        </Wrapper>
    )
}

function InfoCont({ children } : { children: React.ReactNode }) {
    return (
        <div className="flex flex-col md:flex-row items-center justify-evenly w-5/6 lg:w-9/12 my-8">
            {children}
        </div>
    )
}

function Text({ title, desc } : { title: string, desc: string }) {
    return (
        <div className="w-full md:w-1/2 h-1/2 md:h-full p-2">
            <h1 className="text-4xl font-black mb-4">{title}</h1>
            <p className="text-xl font-normal leading-8">
                &nbsp;<span className="font-black text-2xl">&gt;</span>&nbsp;{desc}
            </p>
        </div>
    )
}

function Illustration({ src, alt } : { src: string, alt: string }) {
    return (
        <Image className="w-full md:w-1/2 rounded-md object-contain" src={src} alt={alt} height={50} width={50}></Image>
    )
}
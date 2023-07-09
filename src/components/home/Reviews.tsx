import Wrapper from "../Wrapper";
import Image from "next/image";

export default function Reviews() {
    return (
        <Wrapper>
            <div className="max-w-[55rem]" >
                <h1 className="font-bold text-4xl italic text-center leading-snug">
                    &ldquo;
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis exercitationem sapiente eveniet adipisci eaque ullam assumenda, harum eos aspernatur praesentium ad nam voluptatibus quae quaerat, quasi accusamus doloribus nisi eligendi.
                    &rdquo;
                </h1>
                <div className="flex items-center justify-center m-4">
                    <Image src="/me.png" className="h-16 w-16 rounded-full object-cover object-center" alt="Profile" height={50} width={50}></Image>
                    <div>
                        <h1 className='ml-3 font-semibold text-2xl italic'>- Rayane Benamre</h1>
                        <h1 className='ml-3 font-semibold text-xl text-gray-500 italic'>
                            Full Stack Engineer
                        </h1>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
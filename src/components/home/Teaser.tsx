import Link from "next/link";

export default function Teaser() {
    return (
        <div className="w-full flex py-16 flex-col items-center justify-center gap-10">
            <h1 className="text-4xl font-bold">
                Convinced yet?
            </h1>
            <div className="flex-inline justify-center gap-4">
                <Button href="/" text="Services" type={1} />
                <Button href="/" text="Contact" type={2} />
            </div>
        </div>
    )
}

function Button({ href, text, type } : { href: string, text: string, type: number }) {
    let styleClasses = 'text-xl font-bold rounded-lg hover:ring-2 hover:ring-purple-500 transition-all p-4 my-7 mx-4 drop-shadow-lg ';
    if (type == 1) {
        styleClasses += 'bg-purple-400 text-white';
    } else if (type == 2) {
        styleClasses += 'bg-white text-black';
    }
    return (
        <Link href={href} className={styleClasses}>
            {text}
        </Link>
    )
}
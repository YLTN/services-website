import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter, faFacebook, faDiscord, type IconDefinition } from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
    return (

        <footer className="w-full">
            <Image src="/footerwaves.svg" className="w-full object-contain object-center" alt="Waves" height={300} width={300} />
            <div className="w-full bg-slate-800">
                <div className="w-full flex justify-evenly border-b-2 border-white text-white py-6">
                    <FooterSect>
                        <div className="flex flex-col items-center ">
                            <Image src="/logowhite.png" className="h-16 object-contain object-center" alt="Logo" height={50} width={70} />
                            <h1 className="ml-3 font-extrabold text-2xl text-center">Rayane<br />Benamre</h1>
                        </div>
                    </FooterSect>
                    <FooterSect>
                        <h1 className="text-2xl font-bold">Agency</h1>
                        <ul className="mt-4 list-none flex flex-col">
                            <FooterLink href="/" text="About us" />
                            <FooterLink href="/" text="Careers" />
                            <FooterLink href="/" text="Contact" />
                            <FooterLink href="/" text="Terms of Service" />
                        </ul>
                    </FooterSect>
                    <FooterSect>
                        <h1 className="text-2xl font-bold">Services</h1>
                        <ul className="mt-4 list-none flex flex-col">
                            <FooterLink href="/" text="Web Development" />
                            <FooterLink href="/" text="UI/UX Design" />
                            <FooterLink href="/" text="Discord Bot Development" />
                        </ul>
                    </FooterSect>
                    <FooterSect>
                        <h1 className="text-2xl font-bold">Products</h1>
                        <ul className="mt-4 list-none flex flex-col">
                            <FooterLink href="/" text={"Sup\""} />
                            <FooterLink href="/" text="Taskin'" />
                            <FooterLink href="/" text="Gobblin" />
                        </ul>
                    </FooterSect>
                </div>
                <div className="w-full flex items-center justify-between px-8">
                    <p className="text-white text-xl font-bold py-4">Copyright &copy; 2023 Rayane Benamre</p>
                    <div className="h-16 text-4xl inline-flex gap-6 items-center justify-center text-white">
                        <Icon href="/" icon={faInstagram} />
                        <Icon href="/" icon={faTwitter} />
                        <Icon href="/" icon={faFacebook} />
                        <Icon href="/" icon={faDiscord} />
                    </div>
                </div>
            </div>
        </footer>
    )
}

function Icon({ href, icon } : { href: string, icon: IconDefinition }) {
    return (
        <Link className="h-8 w-8 text-2xl flex items-center justify-center" href={href}>
            <FontAwesomeIcon className="hover:scale-125 transition-all" icon={icon} />
        </Link>
    )
}

function FooterLink({ href, text } : { href: string, text: string }) {
    return (
        <Link className="hover:underline" href={href}>
            {text}
        </Link>
    )
}

function FooterSect({ children } : { children: React.ReactNode }) {
    return (
        <div className="w-1/4">
            {children}
        </div>
    )
}
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faFacebookF, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <div className="bg-primary text-white p-4 md:py-2">
                <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
                    <div className="text-xs font-normal flex flex-row items-center gap-4 md:gap-6 md:text-sm">
                        {/* MOBILE */}
                        <Link href="https://api.whatsapp.com/send?phone=5554993397936" target="_blank" className="flex md:hidden items-center gap-1 hover:text-slate-400 transition-colors">
                            <FontAwesomeIcon icon={faWhatsapp} /> (54) 99339-7936
                        </Link>
                        <Link href="https://mailto:samuelbarbosa170319@gmail.com" className="flex md:hidden items-center gap-1 hover:text-slate-400 transition-colors">
                            <FontAwesomeIcon icon={faEnvelope} /> samuelbarbosa170319@gmail.com
                        </Link>
                        
                        {/* DESKTOP */}
                        <Link href="https://web.whatsapp.com/send?phone=5554993397936" target="_blank" className="hidden md:flex items-center gap-1 hover:text-slate-400 transition-colors">
                            <FontAwesomeIcon icon={faWhatsapp} /> (54) 99339-7936
                        </Link>
                        <Link href="https://mail.google.com/mail/u/0/?fs=1&to=samuelbarbosa170319@gmail.com&tf=cm" target="_blank" className="hidden md:flex items-center gap-1 hover:text-slate-400 transition-colors">
                            <FontAwesomeIcon icon={faEnvelope} /> samuelbarbosa170319@gmail.com
                        </Link>
                    </div>

                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <Link href="https://facebook.com" target="_blank" aria-label="Facebook" className="hover:text-slate-400 transition-colors">
                            <FontAwesomeIcon icon={faFacebookF} className="text-base" />
                        </Link>
                        <Link href="https://instagram.com" target="_blank" aria-label="Instagram" className="hover:text-slate-400 transition-colors">
                            <FontAwesomeIcon icon={faInstagram} className="text-base" />
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn" className="hover:text-slate-400 transition-colors">
                            <FontAwesomeIcon icon={faLinkedin} className="text-base" />
                        </Link>
                        <Link href="https://youtube.com" target="_blank" aria-label="Youtube" className="hover:text-slate-400 transition-colors">
                            <FontAwesomeIcon icon={faYoutube} className="text-base" />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="bg-secondary shadow">
                <div className="container mx-auto flex flex-col items-center py-4 md:flex-row md:justify-between">
                    <Link href="/" className="text-2xl font-extrabold text-white">LOGO</Link>

                    <nav className="hidden md:flex">
                        <ul className="flex flex-col items-center gap-4 md:flex-row md:space-x-6 text-white">
                            <li><Link href="#equipe" className="text-sm font-medium hover:text-slate-400 transition-colors">Equipe</Link></li>
                            <li><Link href="#confianca" className="text-sm font-medium hover:text-slate-400 transition-colors">Confiança</Link></li>
                            <li><Link href="#sobre" className="text-sm font-medium hover:text-slate-400 transition-colors">Sobre</Link></li>
                            <li><Link href="#areasdeatuacao" className="text-sm font-medium hover:text-slate-400 transition-colors">Áreas de atuação</Link></li>
                            <li><Link href="#contato" className="text-sm font-medium hover:text-slate-400 transition-colors">Contato</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

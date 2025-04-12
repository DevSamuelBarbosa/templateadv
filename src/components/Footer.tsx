"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faFacebookF, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faEnvelope, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import ScrollToTopButton from "./ScrollToTopButton";

export default function Footer() {
	return (
		<footer className="bg-quinary relative">
            <ScrollToTopButton/>
			<div className="container mx-auto flex flex-col justify-center items-center gap-10 py-12 px-8 sm:pt-14 sm:pb-6 sm:px-0">
				<div className="w-full xl:w-5/6 grid md:grid-cols-3 gap-10 lg:gap-16">
					<div className="flex flex-col gap-4 md:gap-2 text-center md:text-left">
                        <Link href="/" className="text-4xl font-extrabold text-white">
							LOGO
						</Link>
						<p className="text-slate-300 text-center md:text-left text-md leading-relaxed">
							Defendendo seus direitos com ética e compromisso.
						</p>
					</div>

					<div className="flex flex-col gap-4 md:gap-2 text-center md:text-left">
						<h3 className="text-xl md:text-lg font-semibold text-white">Contato</h3>
						<Link href="https://api.whatsapp.com/send?phone=5554993397936" target="_blank" className="flex md:hidden items-center gap-1 hover:text-slate-400 transition-colors">
							<FontAwesomeIcon icon={faWhatsapp} /> (54) 99339-7936
						</Link>
						<Link href="https://web.whatsapp.com/send?phone=5554993397936" target="_blank" className="hidden md:flex items-center gap-1 text-slate-300 text-left text-md leading-relaxed hover:text-slate-400 transition-colors">
							<FontAwesomeIcon icon={faWhatsapp} /> (54) 99339-7936
						</Link>
						<Link href="https://mailto:samuelbarbosa170319@gmail.com" className="flex md:hidden items-center gap-2 text-slate-300 text-left text-md leading-relaxed">
							<FontAwesomeIcon icon={faEnvelope} /> samuelbarbosa170319@gmail.com
						</Link>
						<Link href="https://mail.google.com/mail/u/0/?fs=1&to=samuelbarbosa170319@gmail.com&tf=cm" target="_blank" className="hidden md:flex items-center gap-2 text-slate-300 text-left text-md leading-relaxed hover:text-slate-400 transition-colors">
							<FontAwesomeIcon icon={faEnvelope} /> samuelbarbosa170319@gmail.com
						</Link>
						<p className="text-slate-300 text-left text-md leading-relaxed">
							<FontAwesomeIcon icon={faLocationDot} />  Rua Exemplo, 123, Marau - RS
						</p>
					</div>

					<div className="flex flex-col gap-4 md:gap-2 text-center md:text-left text-white pl-0 md:pl-12 lg:pl-0">
						<h3 className="text-xl md:text-lg font-semibold">Siga-nos</h3>
						<div className="flex flex-row justify-center md:justify-start gap-10 md:gap-6 mt-2">
							<Link href="https://facebook.com" target="_blank" aria-label="Facebook" className="hover:text-slate-400 transition-colors">
								<FontAwesomeIcon icon={faFacebookF} className="text-2xl" />
							</Link>
							<Link href="https://instagram.com" target="_blank" aria-label="Instagram" className="hover:text-slate-400 transition-colors">
								<FontAwesomeIcon icon={faInstagram} className="text-2xl" />
							</Link>
							<Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn" className="hover:text-slate-400 transition-colors">
								<FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
							</Link>
							<Link href="https://youtube.com" target="_blank" aria-label="Youtube" className="hover:text-slate-400 transition-colors">
								<FontAwesomeIcon icon={faYoutube} className="text-2xl" />
							</Link>
						</div>
					</div>
				</div>

				<p className="text-slate-300 text-xs text-center mt-6">
					Nome empresa · © {new Date().getFullYear()} · Todos os direitos reservados.
				</p>
			</div>
		</footer>
	);
}
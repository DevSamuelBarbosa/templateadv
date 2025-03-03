import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faFacebookF, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Header() {
	return (
		<header>
			<div className="bg-primary text-white p-4 sm:py-2">
				<div className="container mx-auto flex flex-col items-center sm:flex-row sm:justify-between">
					<div className="text-xs font-normal flex flex-row items-center gap-4 sm:gap-6 sm:text-sm">
						<a href="//wa.me/send?phone" className="flex items-center gap-1 hover:text-slate-400 transition-colors">
							<FontAwesomeIcon icon={faWhatsapp} /> (54) 99339-7936
						</a>
						<a href="//mail.google.com/mail/u/0/?fs=1&to=samuelbarbosa170319@gmail.com&tf=cm" className="flex items-center gap-1 hover:text-slate-400 transition-colors">
							<FontAwesomeIcon icon={faEnvelope} /> samuelbarbosa170319@gmail.com
						</a>
					</div>

					<div className="flex space-x-4 mt-4 sm:mt-0">
						<a href="//facebook.com/" target="_blank" aria-label="Facebook" className="hover:text-slate-400 transition-colors">
							<FontAwesomeIcon icon={faFacebookF} className="text-base" />
						</a>
						<a href="//instagram.com/" target="_blank" aria-label="Instagram" className="hover:text-slate-400 transition-colors">
							<FontAwesomeIcon icon={faInstagram} className="text-base" />
						</a>
						<a href="//linkedin.com" target="_blank" aria-label="LinkedIn" className="hover:text-slate-400 transition-colors">
							<FontAwesomeIcon icon={faLinkedin} className="text-base" />
						</a>
						<a href="//youtube.com" target="_blank" aria-label="Youtube" className="hover:text-slate-400 transition-colors">
							<FontAwesomeIcon icon={faYoutube} className="text-base" />
						</a>
					</div>
				</div>
			</div>

			<div className="bg-secondary shadow">
				<div className="container mx-auto flex flex-col items-center py-4 sm:flex-row sm:justify-between">
					<a href="/" className="text-2xl font-extrabold text-white">LOGO</a>

					<nav className="hidden sm:flex">
						<ul className="flex flex-col items-center gap-4 sm:flex-row sm:space-x-6 text-white">
							<li><a href="#confianca" className="text-sm font-medium hover:text-slate-400 transition-colors">Confiança</a></li>
							<li><a href="#sobre" className="text-sm font-medium hover:text-slate-400 transition-colors">Sobre</a></li>
							<li><a href="#areasdeatuacao" className="text-sm font-medium hover:text-slate-400 transition-colors">Áreas de atuação</a></li>
							<li><a href="#contato" className="text-sm font-medium hover:text-slate-400 transition-colors">Contato</a></li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
}

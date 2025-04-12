import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'

export default function SectionContato() {
	return (
		<section id="contato" className="container mx-auto flex justify-center items-center py-12 px-8 sm:py-20 sm:px-0">
			<div className="w-full xl:w-10/12 bg-quinary text-white p-4 md:p-6 rounded-md flex items-center justify-between gap-16">
				<div className="w-full flex flex-col gap-6">
                    <div className="w-full flex flex-col gap-6" data-aos="fade-up">
                        <h3 className="font-['Cinzel'] text-white left text-2xl lg:text-3xl xl:text-4xl font-semibold leading-relaxed">
                            Precisa de assistência jurídica?<br />Ou ajuda para defender seus direitos?
                        </h3>
                        <p className="text-slate-300 text-left text-base leading-relaxed">Entre em contato com nossa equipe de advogados experientes para uma consulta.</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 justify-start items-center" data-aos="fade-left">
                        <Link href="https://web.whatsapp.com/send?phone=5554993397936" target="_blank" className="hidden md:block w-fit px-6 py-3 bg-primary rounded-md text-white font-medium text-left text-base leading-relaxed hover:bg-primaryDark transition duration-300">
                            <FontAwesomeIcon icon={faWhatsapp} />&nbsp;&nbsp;(54) 99339-7936
                        </Link>

                        <Link href="https://api.whatsapp.com/send?phone=5554993397936" target="_blank" className="block md:hidden w-full px-6 py-3 bg-primary rounded-md text-white font-medium text-center text-sm md:text-base leading-relaxed hover:bg-primaryDark transition duration-300">
                            <FontAwesomeIcon icon={faWhatsapp} />&nbsp;&nbsp;(54) 99339-7936
                        </Link>

						<Link href="https://mail.google.com/mail/u/0/?fs=1&to=samuelbarbosa170319@gmail.com&tf=cm" target="_blank" className="hidden md:block w-fit px-6 py-3 bg-secondary rounded-md text-white font-medium text-left text-base leading-relaxed hover:bg-secondaryDark transition duration-300">
							<FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp;samuelbarbosa170319@gmail.com
						</Link>
                        
                        <Link href="https://mailto:samuelbarbosa170319@gmail.com" className="block md:hidden w-full px-4 md:px-6 py-3 bg-secondary rounded-md text-white font-medium text-center text-sm md:text-base leading-relaxed hover:bg-secondaryDark transition duration-300">
							<FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp;samuelbarbosa170319@gmail.com
						</Link>
                    </div>
				</div>
			</div>
		</section>
	);
}

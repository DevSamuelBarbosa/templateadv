import Image from "next/image";
import { getImagePath } from "@/utils/getImagePath";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link'

const integrantesEquipe = [
	{
		imagem: 'equipe.jpg',
		nome: 'Dra. Mariana Vasconcelos',
		cargo: "Sócia Fundadora / Advogada Cível",
		facebook: "https://facebook.com/",
		instagram: "https://instagram.com/",
		tiktok: "https://tiktok.com/",
	},
	{
		imagem: 'equipe.jpg',
		nome: 'Dra. Henrique Duarte',
		cargo: "Coordenador de Direito Empresarial",
		facebook: "https://facebook.com/",
		instagram: "https://instagram.com/",
		tiktok: "https://tiktok.com/",
	},
	{
		imagem: 'equipe.jpg',
		nome: 'Dra. Luana Figueiredo',
		cargo: "Especialista em Direito Tributário",
		facebook: "https://facebook.com/",
		instagram: "https://instagram.com/",
		tiktok: "https://tiktok.com/",
	},
	{
		imagem: 'equipe.jpg',
		nome: 'Dra. Rafael Montenegro',
		cargo: "Advogado Trabalhista",
		facebook: "https://facebook.com/",
		instagram: "https://instagram.com/",
		tiktok: "https://tiktok.com/",
	}
];


export default function SectionEquipe() {
	return (
		<section id="equipe" className="container mx-auto flex justify-center items-center py-12 px-8 sm:py-20 sm:px-0">
			<div className="w-full flex flex-col justify-evenly align-center gap-8 xl:gap-16">
				<div className="w-full flex flex-col gap-4 justify-center align-center">
					<div className="border-t-2 border-tertiary w-20 mb-4 mx-auto"></div>
					<h3 className="font-['Cinzel'] text-white text-center text-2xl lg:text-3xl xl:text-4xl font-semibold leading-relaxed">Conheça nossa equipe</h3>
					<p className="text-slate-300 text-center text-sm w-4/5 xl:w-3/5 mx-auto leading-relaxed">Lorem ipsum, dolor sit
						amet consectetur adipisicing elit. Nihil sit saepe repellat? Nihil praesentium quis voluptates?</p>
				</div>

				<div className="w-full xl:w-10/12 mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 xl:gap-10">
					{integrantesEquipe.map((integrante, index) => (
						<div key={index} className="text-center px-2 sm:px-4 lg:px-6 py-6 sm:py-4 flex flex-col gap-4 justify-center">
							<div className="relative w-28 h-28 md:w-36  md:h-36 xl:w-44 xl:h-44 mx-auto overflow-hidden rounded-full">
								<Image
									src={getImagePath(`/${integrante.imagem}`)}
									alt={integrante.nome}
									fill
									className="object-cover"
									priority
								/>
							</div>

							<div className="grid gap-2 md:gap-4 lg:gap-2">
								<p className="text-sm lg:text-base font-medium text-white">{integrante.nome}</p>
								<p className="text-xs lg:text-sm font-normal text-slate-300">{integrante.cargo}</p>

								<div className="flex flex-row gap-6 md:gap-4 justify-center mt-2 md:mt-4 lg:mt-2">
									<Link href={integrante.facebook} target="_blank" className="">
										<FontAwesomeIcon icon={faFacebookF} />
									</Link>

									<Link href={integrante.instagram} target="_blank" className="">
										<FontAwesomeIcon icon={faInstagram} />
									</Link>
									
									<Link href={integrante.tiktok} target="_blank" className="">
										<FontAwesomeIcon icon={faTiktok} />
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
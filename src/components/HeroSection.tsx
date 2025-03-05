export default function HeroSection() {
	return (
		<section className="w-full h-[60vh] md:h-[80vh] bg-[url('/bg_hero_section2.webp')] bg-cover bg-[center_left_35%] md:bg-center bg-no-repeat flex items-center justify-center">
			<div className="container h-full mx-auto flex justify-end items-center">
				<div className="w-full px-8 lg:w-1/2">
					<h1 className="font-['Cinzel'] text-white text-3xl font-semibold [text-shadow:1px_1px_1px_rgba(0,0,0,0.9)] mb-2 leading-snug md:font-medium md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
						Advocacia Especializada em Direito da Família em Marau
					</h1>
					<h2 className="font-['Cinzel'] text-white italic font-medium text-xl [text-shadow:1px_1px_1px_rgba(0,0,0,0.9)] md:font-normal md:text-2xl lg:text-xl xl:text-2xl">
						Compromisso e resultados.
					</h2>
				</div>
			</div>
		</section>
	);
}

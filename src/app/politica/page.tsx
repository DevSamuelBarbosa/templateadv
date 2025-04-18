import Link from "next/link";

export default function PoliticaPage() {
	return (
		<div className="max-w-4xl mx-auto px-4 py-12 flex flex-col gap-8">
			<Link href="/" className="bg-primary w-fit px-2 rounded-sm text-sm text-white hover:bg-primaryDark transition duration-300">
				←&nbsp;&nbsp;Voltar
			</Link>
			<section className="flex flex-col gap-2">
				<h1 className="text-3xl font-bold text-white">Política de Privacidade</h1>
				<p className="text-slate-300 text-sm xl:text-base font-normal">
					Esta Política de Privacidade descreve como suas informações pessoais são coletadas, usadas e compartilhadas quando você visita ou faz uma compra em nosso site.
				</p>
			</section>

			<section className="flex flex-col gap-2">
				<h2 className="text-xl font-semibold text-white">1. Informações que coletamos</h2>
				<p className="text-slate-300 text-sm xl:text-base font-normal">
					Coletamos automaticamente certas informações sobre seu dispositivo, incluindo informações sobre seu navegador, endereço IP, fuso horário e alguns dos cookies instalados em seu dispositivo.
				</p>
			</section>

			<section className="flex flex-col gap-2">
				<h2 className="text-xl font-semibold text-white">2. Como usamos suas informações</h2>
				<p className="text-slate-300 text-sm xl:text-base font-normal">
					Usamos as Informações para nos ajudar a melhorar e otimizar nosso site, além de avaliar o sucesso de nossas campanhas de marketing e publicidade.
				</p>
			</section>

			<section className="flex flex-col gap-2">
				<h2 className="text-xl font-semibold text-white">3. Compartilhamento de informações</h2>
				<p className="text-slate-300 text-sm xl:text-base font-normal">
					Podemos compartilhar suas informações pessoais para cumprir leis e regulamentos aplicáveis, responder a uma intimação, mandado de busca ou outro pedido legal.
				</p>
			</section>

			<section className="flex flex-col gap-2">
				<h2 className="text-xl font-semibold text-white">4. Seus direitos</h2>
				<p className="text-slate-300 text-sm xl:text-base font-normal">
					Se você for residente da Europa, tem o direito de acessar as informações pessoais que mantemos sobre você e solicitar que suas informações pessoais sejam corrigidas, atualizadas ou excluídas.
				</p>
			</section>

			<section className="flex flex-col gap-2">
				<h2 className="text-xl font-semibold text-white">5. Alterações</h2>
				<p className="text-slate-300 text-sm xl:text-base font-normal">
					Podemos atualizar esta política de privacidade periodicamente para refletir, por exemplo, mudanças em nossas práticas ou por outras razões operacionais, legais ou regulatórias.
				</p>
			</section>
		</div>
	);
}

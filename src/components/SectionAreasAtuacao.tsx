import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney, faSuitcase, faBookOpen, faUmbrella, faHouse, faCoins } from "@fortawesome/free-solid-svg-icons";

export default function SectionAreasAtuacao() {
    return (
        <section id="areasdeatuacao" className="container mx-auto flex justify-center items-center py-12 px-8 sm:py-20 sm:px-0">
            <div className="w-full flex flex-col justify-evenly align-center gap-16">
                <div className="w-full flex flex-col gap-4 justify-center align-center">
                    <div className="border-t-2 border-tertiary w-20 mb-4 mx-auto"></div>
                    <h3 className="font-['Cinzel'] text-white text-center text-2xl lg:text-3xl xl:text-4xl font-semibold leading-relaxed">Nossas áreas de atuação</h3>
                    <p className="text-slate-300 text-center text-sm w-4/5 xl:w-3/5 mx-auto leading-relaxed">Lorem ipsum, dolor sit
                        amet consectetur adipisicing elit. Nihil sit saepe repellat? Nihil praesentium quis voluptates?</p>
                </div>

                <div className="w-full xl:w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 xl:gap-10">
                    <div className="text-center border-t-4 border-primary rounded bg-quinary h-full sm:h-[30vh] px-4 sm:px-4 lg:px-6 py-6 sm:py-4 drop-shadow-md flex flex-col gap-4 justify-center">
                        <FontAwesomeIcon icon={faHouseChimney} className="text-slate-400 text-2xl sm:text-3xl xl:text-4xl"/>
                        <h4 className="font-['Cinzel'] text-lg lg:text-xl 2xl:text-2xl font-bold text-white">Direito da Família</h4>
                        <p className="text-slate-300 text-center text-sm leading-relaxed">Nosso objetivo é apoiar as
                            famílias na resolução de suas próprias disputas. Garantimos consultoria profissional e
                            resultado.</p>
                    </div>

                    <div className="text-center border-t-4 border-primary rounded bg-quinary h-full sm:h-[30vh] px-4 sm:px-4 lg:px-6 py-6 sm:py-4 drop-shadow-md flex flex-col gap-4 justify-center">
                        <FontAwesomeIcon icon={faSuitcase} className="text-slate-400 text-2xl sm:text-3xl xl:text-4xl"/>
                        <h4 className="font-['Cinzel'] text-lg lg:text-xl 2xl:text-2xl font-bold text-white">Direito Empresarial</h4>
                        <p className="text-slate-300 text-center text-sm leading-relaxed">Ajuda profissional com disputas
                            financeiras, comerciais, fiscais e outras questões comerciais complexas.</p>
                    </div>

                    <div className="text-center border-t-4 border-primary rounded bg-quinary h-full sm:h-[30vh] px-4 sm:px-4 lg:px-6 py-6 sm:py-4 drop-shadow-md flex flex-col gap-4 justify-center">
                        <FontAwesomeIcon icon={faBookOpen} className="text-slate-400 text-2xl sm:text-3xl xl:text-4xl"/>
                        <h4 className="font-['Cinzel'] text-lg lg:text-xl 2xl:text-2xl font-bold text-white">Litigância Civil</h4>
                        <p className="text-slate-300 text-center text-sm leading-relaxed">Os seus direitos civis serão
                            defendidos e representados ao mais alto nível com o melhor resultado.</p>
                    </div>

                    <div className="text-center border-t-4 border-primary rounded bg-quinary h-full sm:h-[30vh] px-4 sm:px-4 lg:px-6 py-6 sm:py-4 drop-shadow-md flex flex-col gap-4 justify-center">
                        <FontAwesomeIcon icon={faUmbrella} className="text-slate-400 text-2xl sm:text-3xl xl:text-4xl"/>
                        <h4 className="font-['Cinzel'] text-lg lg:text-xl 2xl:text-2xl font-bold text-white">Defesa de Seguros</h4>
                        <p className="text-slate-300 text-center text-sm leading-relaxed">Sabemos como lidar com as
                            complexas questões legais e contratuais que frequentemente surgem em sinistros.</p>
                    </div>

                    <div className="text-center border-t-4 border-primary rounded bg-quinary h-full sm:h-[30vh] px-4 sm:px-4 lg:px-6 py-6 sm:py-4 drop-shadow-md flex flex-col gap-4 justify-center">
                        <FontAwesomeIcon icon={faHouse} className="text-slate-400 text-2xl sm:text-3xl xl:text-4xl"/>
                        <h4 className="font-['Cinzel'] text-lg lg:text-xl 2xl:text-2xl font-bold text-white">Terras e Ativos</h4>
                        <p className="text-slate-300 text-center text-sm leading-relaxed">A AdvOne oferece serviços de
                            consultoria e gestão de ativos, trazendo uma nova visão para o mundo dos investimentos.</p>
                    </div>

                    <div className="text-center border-t-4 border-primary rounded bg-quinary h-full sm:h-[30vh] px-4 sm:px-4 lg:px-6 py-6 sm:py-4 drop-shadow-md flex flex-col gap-4 justify-center">
                        <FontAwesomeIcon icon={faCoins} className="text-slate-400 text-2xl sm:text-3xl xl:text-4xl"/>
                        <h4 className="font-['Cinzel'] text-lg lg:text-xl 2xl:text-2xl font-bold text-white">Direito Financeiro</h4>
                        <p className="text-slate-300 text-center text-sm leading-relaxed">Trabalhamos em diálogo aberto com
                            você para traçar a estratégia que melhor atenda aos seus interesses.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
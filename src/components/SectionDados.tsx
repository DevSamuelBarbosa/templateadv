import Image from "next/image";
import { getImagePath } from "@/utils/getImagePath";

export default function SectionDados() {
    return (
        <section id="sobre" className="relative w-full flex items-center justify-center md:pt-16 md:pb-10">
            <Image 
                src={getImagePath("/museum.webp")}
                alt="Section dados Background"
                fill
                className="absolute top-0 left-0 w-full h-full object-cover object-[15%_75%] md:object-[center] z-[-1]"
                priority
            />

            <div className="w-full md:h-[45vh] 2xl:h-[50vh]">
                <div className="container px-8 md:px-0 py-12 h-full mx-auto flex flex-col justify-center items-center gap-8 md:gap-24">
                    <div className="w-full flex flex-col gap-4 justify-center align-center" data-aos="fade-up">
                        <div className="border-t-2 border-tertiary w-20 mb-4 mx-auto"></div>
                        <h3 className="font-['Cinzel'] text-white text-center text-2xl lg:text-3xl xl:text-4xl font-semibold leading-relaxed">Mais de 20 anos de experiência em diversos casos</h3>
                        <p className="text-slate-300 text-center text-sm w-4/5 xl:w-3/5 mx-auto leading-relaxed">Lorem ipsum, dolor
                            sit
                            amet consectetur adipisicing elit. Nihil sit saepe repellat? Nihil praesentium quis
                            voluptates?
                            Distinctio voluptates pariatur, magni, nulla maxime excepturi dolor obcaecati incidunt
                            dolorum
                            omnis voluptate quas?</p>
                    </div>
                    
                    <div className="flex flex-wrap md:flex-row justify-center align-center gap-4 lg:gap-12"
                        data-aos="fade-up"
                    >
                        <div className="px-8 py-4 flex flex-col justify-center align-center h-36 gap-4">
                            <h4 className="text-white font-bold text-center text-3xl xl:text-4xl">1998</h4>
                            <span className="text-center text-slate-400 font-semibold uppercase text-sm leading-relaxed">Empresa<br/>estabelecida</span>
                        </div>

                        <div className="hidden md:block border-s border-slate-700 h-full w-2 mb-4"></div>

                        <div className="px-8 py-4 flex flex-col justify-center align-center h-36 gap-4">
                            <h4 className="text-white font-bold text-center text-3xl xl:text-4xl">500+</h4>
                            <span className="text-center text-slate-400 font-semibold uppercase text-sm leading-relaxed">Casos<br/>vencidos</span>
                        </div>

                        <div className="hidden md:block border-s border-slate-700 h-full w-2 mb-4"></div>

                        <div className="px-8 py-4 flex flex-col justify-center align-center h-36 gap-4">
                            <h4 className="text-white font-bold text-center text-3xl xl:text-4xl">45+</h4>
                            <span className="text-center text-slate-400 font-semibold uppercase text-sm leading-relaxed">Empresas<br/>parceiras</span>
                        </div>

                        <div className="hidden md:block border-s border-slate-700 h-full w-2 mb-4"></div>

                        <div className="px-8 py-4 flex flex-col justify-center align-center h-36 gap-4">
                            <h4 className="text-white font-bold text-center text-3xl xl:text-4xl">1500+</h4>
                            <span className="text-center text-slate-400 font-semibold uppercase text-sm leading-relaxed">Clientes<br/>satisfeitos</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
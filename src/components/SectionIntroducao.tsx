import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScaleBalanced } from "@fortawesome/free-solid-svg-icons";


export default function () {
	return (
		<section className="container px-8 md:px-0 py-8 md:py-0 mx-auto flex justify-center items-center md:-mt-12 pb-28">
			<div className="w-full xl:w-10/12 flex flex-col md:flex-row justify-center items-center gap-6 xl:gap-10">
				<div className="bg-quinary border-t-4 border-primary rounded px-4 lg:px-6 py-4 flex flex-col gap-3 justify-center align-center h-48 md:h-56 lg:h-60">
					<h3 className="m-0 text-white font-medium text-lg lg:text-xl xl:text-2xl text-center">
						<FontAwesomeIcon icon={faScaleBalanced} className="text-slate-400"/>&nbsp;&nbsp;Direito da Família
					</h3>
					<span className="m-0 text-slate-200 font-normal text-sm text-center xl:leading-6">Lorem ipsum dolor sit amet
						consectetur
						adipisicing elit. Dicta eos illo repudiandae, perspiciatis, autem nisi quas est facilis maxime
						inventore aperiam blanditiis!</span>
				</div>

				<div className="bg-quinary border-t-4 border-primary rounded px-4 lg:px-6 py-4 flex flex-col gap-3 justify-center align-center h-48 md:h-56 lg:h-60">
					<h3 className="m-0 text-white font-medium text-lg lg:text-xl xl:text-2xl text-center">
						<FontAwesomeIcon icon={faScaleBalanced} className="text-slate-400"/>&nbsp;&nbsp;Direito da Família
					</h3>
					<span className="m-0 text-slate-200 font-normal text-sm text-center xl:leading-6">Lorem ipsum dolor sit amet
						consectetur
						adipisicing elit. Dicta eos illo repudiandae, perspiciatis, autem nisi quas est facilis maxime
						inventore aperiam blanditiis!</span>
				</div>

				<div className="bg-quinary border-t-4 border-primary rounded px-4 lg:px-6 py-4 flex flex-col gap-3 justify-center align-center h-48 md:h-56 lg:h-60">
					<h3 className="m-0 text-white font-medium text-lg lg:text-xl xl:text-2xl text-center">
						<FontAwesomeIcon icon={faScaleBalanced} className="text-slate-400"/>&nbsp;&nbsp;Direito da Família
					</h3>
					<span className="m-0 text-slate-200 font-normal text-sm text-center xl:leading-6">Lorem ipsum dolor sit amet
						consectetur
						adipisicing elit. Dicta eos illo repudiandae, perspiciatis, autem nisi quas est facilis maxime
						inventore aperiam blanditiis!</span>
				</div>
			</div>
		</section>
	);
}
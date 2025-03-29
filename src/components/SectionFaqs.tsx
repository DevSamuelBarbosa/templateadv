"use client";

import { useState } from "react";

const faqs = [
	{
		question: "Como funciona a primeira consulta com um advogado?",
		answer:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita itaque facilis, possimus labore, eum nesciunt harum repellat tempora impedit id sint officia excepturi repudiandae perferendis consequatur totam neque magnam ipsam!",
	},
	{
		question: "Quanto tempo leva um processo judicial?",
		answer:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aspernatur pariatur nulla voluptatibus, dolore explicabo delectus unde quos voluptatum velit magnam harum repellat quod. Facere maiores deserunt eos vitae ipsum.",
	},
	{
		question: "Quais documentos são necessários para abrir um processo?",
		answer:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dolorem! Excepturi sit molestiae labore iste! Delectus culpa optio repellendus laboriosam totam id velit qui tenetur vitae et nam, voluptatem aliquam!",
	},
	{
		question: "Quais são os custos envolvidos em um processo?",
		answer:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dolorem! Excepturi sit molestiae labore iste! Delectus culpa optio repellendus laboriosam totam id velit qui tenetur vitae et nam, voluptatem aliquam!",
	},
];

export default function SectionFaqs() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleFAQ = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section className="container mx-auto flex justify-center items-center py-12 px-8 sm:py-20 sm:px-0">
			<div className="w-full flex flex-col justify-evenly align-center gap-16">
				<div>
                    <div className="border-t-2 border-tertiary w-20 mb-4 mx-auto"></div>
					<h3 className="font-['Cinzel'] text-white text-center text-2xl lg:text-3xl xl:text-4xl font-semibold leading-relaxed">
						Perguntas frequentes
					</h3>
				</div>

				<div className="w-full xl:w-10/12 mx-auto flex flex-col gap-10">
					{faqs.map((faq, index) => (
						<div key={index} className="border-b border-quinary py-4 rounded">
							<button onClick={() => toggleFAQ(index)} className="flex justify-between w-full text-left">
								<span className="text-lg font-medium text-slate-200">
									{faq.question}
								</span>
								<svg
									className={`w-6 h-6 transform transition-transform duration-300 text-tertiary ${openIndex === index ? "rotate-180" : ""}`}
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</button>

							<div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
								<p className="mt-2 text-slate-400">{faq.answer}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

import Image from "next/image";
import { getImagePath } from "@/utils/getImagePath";

export default function Home() {
	const ambiente = process.env.NEXT_PUBLIC_APP_ENVIRONMENT;
	return (
		<div className="flex flex-col items-center justify-center h-dvh gap-8">
			<Image
				className="dark:invert"
				src={getImagePath("/next.svg")}
				alt="Next.js logo"
				width={180}
				height={38}
				priority
			/>

			<h1 className="text-white text-6xl font-extrabold text-center">{ambiente}</h1>
		</div>
	);
}

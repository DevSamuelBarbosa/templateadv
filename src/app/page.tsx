import HeroSection from '@/components/HeroSection';
import SectionIntroducao from '@/components/SectionIntroducao';
import SectionConfianca from '@/components/SectionConfianca';
import SectionDados from '@/components/SectionDados';
import SectionAreasAtuacao from '@/components/SectionAreasAtuacao';
import SectionFaqs from '@/components/SectionFaqs';

export default function Home() {
	return (
		<main>
            <HeroSection/>
            <SectionIntroducao/>
            <SectionConfianca/>
            <SectionDados/>
            <SectionAreasAtuacao/>
            <SectionFaqs/>
            <div className="h-20"></div>
		</main>
	);
}

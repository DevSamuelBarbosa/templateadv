import HeroSection from '@/components/HeroSection';
import SectionIntroducao from '@/components/SectionIntroducao';
import SectionConfianca from '@/components/SectionConfianca';
import SectionDados from '@/components/SectionDados';
import SectionAreasAtuacao from '@/components/SectionAreasAtuacao';

export default function Home() {
	return (
		<main>
            <HeroSection/>
            <SectionIntroducao/>
            <SectionConfianca/>
            <SectionDados/>
            <SectionAreasAtuacao/>
            <div className="h-20"></div>
		</main>
	);
}

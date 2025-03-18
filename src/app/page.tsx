import HeroSection from '@/components/HeroSection';
import SectionIntroducao from '@/components/SectionIntroducao';
import SectionConfianca from '@/components/SectionConfianca';
import SectionDados from '@/components/SectionDados';

export default function Home() {
	return (
		<main>
            <HeroSection/>
            <SectionIntroducao/>
            <SectionConfianca/>
            <SectionDados/>
            <div className="h-20"></div>
		</main>
	);
}

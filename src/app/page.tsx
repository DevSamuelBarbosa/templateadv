import HeroSection from '@/components/HeroSection';
import SectionIntroducao from '@/components/SectionIntroducao';
import SectionConfianca from '@/components/SectionConfianca';

export default function Home() {
	return (
		<main>
            <HeroSection/>
            <SectionIntroducao/>
            <SectionConfianca/>
            <div className="h-20"></div>
		</main>
	);
}

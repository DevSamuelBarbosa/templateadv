import HeroSection from '@/components/HeroSection';
import SectionEquipe from '@/components/SectionEquipe';
import SectionConfianca from '@/components/SectionConfianca';
import SectionDados from '@/components/SectionDados';
import SectionAreasAtuacao from '@/components/SectionAreasAtuacao';
import SectionFaqs from '@/components/SectionFaqs';
import SectionContato from '@/components/SectionContato';

export default function Home() {
	return (
		<main>
            <HeroSection/>
            <SectionEquipe/>
            <SectionConfianca/>
            <SectionDados/>
            <SectionAreasAtuacao/>
            <SectionFaqs/>
            <SectionContato/>
            <div className="h-20"></div>
		</main>
	);
}

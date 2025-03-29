import HeroSection from '@/components/HeroSection';
import SectionIntroducao from '@/components/SectionIntroducao';
import SectionConfianca from '@/components/SectionConfianca';
import SectionDados from '@/components/SectionDados';
import SectionAreasAtuacao from '@/components/SectionAreasAtuacao';
import SectionFaqs from '@/components/SectionFaqs';
import SectionContato from '@/components/SectionContato';

export default function Home() {
	return (
		<main>
            <HeroSection/>
            <SectionIntroducao/>
            <SectionConfianca/>
            <SectionDados/>
            <SectionAreasAtuacao/>
            <SectionFaqs/>
            <SectionContato/>
            <div className="h-20"></div>
		</main>
	);
}

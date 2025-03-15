import HeroSection from '@/components/HeroSection';
import SectionIntroducao from '@/components/SectionIntroducao';
import SectionConfianca from '@/components/SectionConfianca';
import Head from 'next/head';

export default function Home() {
	return (
		<main>
            <Head>
                <title>Template Adv Title Test</title>
                <meta name="robots" content="noindex,nofollow" />
            </Head>
            <HeroSection/>
            <SectionIntroducao/>
            <SectionConfianca/>
            <div className="h-20"></div>
		</main>
	);
}

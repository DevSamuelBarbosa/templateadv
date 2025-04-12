'use client';

import HeroSection from '@/components/HeroSection';
import SectionEquipe from '@/components/SectionEquipe';
import SectionConfianca from '@/components/SectionConfianca';
import SectionDados from '@/components/SectionDados';
import SectionAreasAtuacao from '@/components/SectionAreasAtuacao';
import SectionFaqs from '@/components/SectionFaqs';
import SectionContato from '@/components/SectionContato';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
    useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true,
		});
	}, []);

	return (
		<main className='overflow-x-hidden'>
            <HeroSection/>
            <SectionEquipe/>
            <SectionConfianca/>
            <SectionDados/>
            <SectionAreasAtuacao/>
            <SectionFaqs/>
            <SectionContato/>
		</main>
	);
}

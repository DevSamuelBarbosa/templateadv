'use client';

import dynamic from 'next/dynamic';
import HeroSection from '@/components/HeroSection';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SectionEquipe = dynamic(() => import('@/components/SectionEquipe'));
const SectionConfianca = dynamic(() => import('@/components/SectionConfianca'));
const SectionDados = dynamic(() => import('@/components/SectionDados'));
const SectionAreasAtuacao = dynamic(() => import('@/components/SectionAreasAtuacao'));
const SectionFaqs = dynamic(() => import('@/components/SectionFaqs'));
const SectionContato = dynamic(() => import('@/components/SectionContato'));

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

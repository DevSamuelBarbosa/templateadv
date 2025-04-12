import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function ScrollToTopButton() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			setIsVisible(window.scrollY > 300);
		};

		window.addEventListener('scroll', toggleVisibility);
		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		isVisible && (
			<button
				onClick={scrollToTop}
				className="fixed bottom-4 right-4 z-50 bg-primary py-2 px-4 rounded-md hover:bg-primaryDark transition-colors duration-300"
			>
				<FontAwesomeIcon icon={faArrowUp} />
			</button>
		)
	);
}

export const getImagePath = (src: string) => {
	const pathImg = process.env.NEXT_PUBLIC_APP_ENVIRONMENT === 'development' ? '' : '/templateadv';
	return `${pathImg}${src}`;
};

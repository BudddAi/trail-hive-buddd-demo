import { gsap } from 'gsap';

export const fadeIn = (node, direction = 'up', attrs = {}) => {
	const fadeDirection = directionResolver(direction);
	gsap.set(node, {
		opacity: 0,
		y: fadeDirection.y,
		x: fadeDirection.x,
		// Add slight blur for smoother appearance
	});

	return gsap.to(node, {
		opacity: 1,
		y: 0,
		x: 0,
		duration: 1.2,
		ease: 'power2.out',
		...attrs,
	});
};

function directionResolver(direction) {
	switch (direction) {
		case 'right':
			return { x: -80 };
		case 'left':
			return { x: 80 };
		case 'down':
			return { y: -80 };
		default:
			return { y: 80 };
	}
}

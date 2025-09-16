import { gsap } from 'gsap';

export const initCardDescriptions = () => {
	const cards = document.querySelectorAll('[data-card-group]');

	cards.forEach((card) => {
		const description = card.querySelector('[data-description]');
		const content = card.querySelector('[data-description-content]');

		if (!description || !content) return;

		// Set initial state
		gsap.set(description, {
			height: 0,
			opacity: 0,
		});

		// Store the natural height
		gsap.set(description, { height: 'auto' });
		const naturalHeight = description.offsetHeight;
		gsap.set(description, { height: 0, opacity: 0 });

		// Hover in animation
		const expandTl = gsap.timeline({ paused: true });
		expandTl
			.to(description, {
				height: naturalHeight,
				duration: 0.4,
				ease: 'power2.out',
			})
			.to(
				description,
				{
					opacity: 1,
					duration: 0.2,
					ease: 'power2.out',
				},
				'-=0.2'
			);

		// Hover out animation
		const collapseTl = gsap.timeline({ paused: true });
		collapseTl
			.to(description, {
				opacity: 0,
				duration: 0.15,
				ease: 'power2.in',
			})
			.to(
				description,
				{
					height: 0,
					duration: 0.3,
					ease: 'power2.in',
				},
				'-=0.1'
			);

		// Event listeners
		card.addEventListener('mouseenter', () => {
			collapseTl.pause();
			expandTl.restart();
		});

		card.addEventListener('mouseleave', () => {
			expandTl.pause();
			collapseTl.restart();
		});
	});
};

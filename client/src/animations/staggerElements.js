import { gsap } from 'gsap';

export const staggerElements = (elements, attrs = {}) => {
	const defaultAttrs = {
		x: 0, // No horizontal movement
		y: 80, // Start from bottom
		duration: 0.8,
		delay: 0.1,
		stagger: 0.15, // Time between each element animation
		ease: 'power2.out',
		opacity: 0,
		...attrs,
	};

	// Convert to array if it's a NodeList or single element
	const elementsArray = Array.isArray(elements) ? elements : Array.from(elements);

	// Set initial state for all elements
	gsap.set(elementsArray, {
		opacity: defaultAttrs.opacity,
		x: defaultAttrs.x,
		y: defaultAttrs.y,
	});

	// Animate elements with stagger
	return gsap.to(elementsArray, {
		opacity: 1,
		x: 0,
		y: 0,
		duration: defaultAttrs.duration,
		stagger: defaultAttrs.stagger,
		ease: defaultAttrs.ease,
		delay: defaultAttrs.delay,
	});
};

// Alternative function for scroll-triggered stagger animation
export const staggerElementsOnScroll = (elements, trigger, attrs = {}) => {
	const defaultAttrs = {
		x: 0, // No horizontal movement
		y: 80, // Start from bottom
		duration: 0.8,
		delay: 0.1,
		stagger: 0.15,
		ease: 'power2.out',
		opacity: 0,
		once: true,
		...attrs,
	};

	const elementsArray = Array.isArray(elements) ? elements : Array.from(elements);

	// Set initial state
	gsap.set(elementsArray, {
		opacity: defaultAttrs.opacity,
		x: defaultAttrs.x,
		y: defaultAttrs.y,
	});

	// Create scroll trigger animation
	return gsap.to(elementsArray, {
		opacity: 1,
		x: 0,
		y: 0,
		duration: defaultAttrs.duration,
		stagger: defaultAttrs.stagger,
		ease: defaultAttrs.ease,
		delay: defaultAttrs.delay,
		scrollTrigger: {
			trigger: trigger,
			start: 'top 80%',
			once: defaultAttrs.once,
		},
	});
};

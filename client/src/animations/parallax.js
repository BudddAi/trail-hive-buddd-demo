/**
 * Creates a parallax scrolling effect on an element
 * @param {HTMLElement} targetNode - The element to apply parallax movement to
 * @param {HTMLElement} containerNode - The container element that triggers the parallax
 * @param {Object|string} options - Configuration options object or direction string
 * @param {string} [options.direction='up'] - Direction of parallax ('up' or 'down')
 * @param {number} [options.speed=0.5] - Speed of the parallax effect (0-1)
 * @param {Object} [options.scrollTrigger={}] - Additional ScrollTrigger options
 * @returns {gsap.core.Timeline} GSAP Timeline instance
 */
export const parallax = (targetNode, containerNode, options = {}) => {
	// Handle case where options is just a direction string
	const config =
		typeof options === 'string'
			? { direction: options, speed: 0.5, scrollTrigger: {} }
			: { direction: 'up', speed: 0.5, scrollTrigger: {}, ...options };

	// Ensure speed is between 0 and 1
	const clampedSpeed = Math.max(0, Math.min(1, config.speed));

	// Calculate the movement distance based on direction - reduced base distance for subtlety
	const baseDistance = 30; // Reduced from 100 for much more subtle movement
	const distance = config.direction === 'up' ? baseDistance : -baseDistance;
	const movement = distance * clampedSpeed;

	// Create the parallax effect - elements start at natural position (y: 0) and move to offset
	return gsap.to(targetNode, {
		y: movement,
		ease: 'none',
		scrollTrigger: {
			trigger: containerNode, // Use container as trigger
			start: 'top bottom-=100', // Start when element's top is 100px from viewport bottom
			end: 'bottom top+=100', // End when element's bottom is 100px past viewport top
			scrub: true, // Smooth scrubbing effect
			toggleActions: 'play none none reverse',
			...config.scrollTrigger, // Allow overriding default ScrollTrigger options
		},
	});
};

/**
 * Helper function to create a reveal animation with parallax
 * @param {HTMLElement} targetNode - The element to animate
 * @param {HTMLElement} containerNode - The container element that triggers the animation
 * @param {Object|string} options - Configuration options object or direction string
 * @returns {gsap.core.Timeline} GSAP Timeline instance
 */
export const parallaxReveal = (targetNode, containerNode, options = {}) => {
	// Handle case where options is just a direction string
	const config =
		typeof options === 'string'
			? { direction: options, speed: 0.5, scrollTrigger: {} }
			: { direction: 'up', speed: 0.5, scrollTrigger: {}, ...options };

	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: containerNode,
			start: 'top bottom-=100',
			toggleActions: 'play none none reverse',
			...config.scrollTrigger,
		},
	});

	// Initial state
	gsap.set(targetNode, {
		opacity: 0,
		y: config.direction === 'up' ? 50 : -50,
	});

	// Animate in
	tl.to(targetNode, {
		opacity: 1,
		y: 0,
		duration: 1,
		ease: 'power2.out',
	});

	// Add parallax effect
	parallax(targetNode, containerNode, config);

	return tl;
};

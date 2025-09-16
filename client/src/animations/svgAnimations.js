import gsap from 'gsap';

/**
 * Helper function to create SVG line animation using drawSVG
 * @param {Element} element - The SVG path element to animate
 * @param {string|Element} triggerElement - The element to trigger the animation (CSS selector or DOM element)
 * @param {Object} [options={}] - Configuration options for the animation
 * @param {string} [options.start='top bottom-=100'] - ScrollTrigger start position
 * @param {string} [options.end='bottom bottom-=100'] - ScrollTrigger end position
 * @param {number} [options.scrub=0.5] - ScrollTrigger scrub value
 * @param {boolean} [options.markers=false] - Show ScrollTrigger markers
 * @param {string} [options.ease='none'] - GSAP ease type
 */
export const animateSVGLine = (element, triggerElement, options = {}) => {
	const {
		start = 'top bottom-=100',
		end = 'bottom bottom-=100',
		scrub = 0.5,
		markers = false,
		ease = 'none',
	} = options;

	gsap.fromTo(
		element,
		{ drawSVG: '0%' },
		{
			drawSVG: '100%',
			ease: ease,
			scrollTrigger: {
				trigger: triggerElement,
				start: start,
				end: end,
				scrub: scrub,
				markers: markers,
			},
		}
	);
};

/**
 * Helper function to create div line animation (for non-SVG elements)
 * @param {Element} element - The div element to animate
 * @param {string|Element} triggerElement - The element to trigger the animation (CSS selector or DOM element)
 * @param {Object} options - Configuration options for the animation
 * @param {string} options.start - ScrollTrigger start position (default: 'center bottom')
 * @param {string} options.end - ScrollTrigger end position (default: 'center top')
 * @param {number} options.scrub - ScrollTrigger scrub value (default: 1)
 * @param {boolean} options.markers - Show ScrollTrigger markers (default: false)
 * @param {string} options.ease - GSAP ease type (default: 'none')
 * @param {number} options.finalOpacity - Final opacity value (default: 0.5)
 */
export const animateDivLine = (element, triggerElement, options = {}) => {
	const {
		start = 'center bottom',
		end = 'center top',
		scrub = 1,
		markers = false,
		ease = 'none',
		finalOpacity = 0.5,
	} = options;

	gsap.fromTo(
		element,
		{ opacity: 0, scaleY: 0 },
		{
			opacity: finalOpacity,
			scaleY: 1,
			ease: ease,
			scrollTrigger: {
				trigger: triggerElement,
				start: start,
				end: end,
				scrub: scrub,
				markers: markers,
			},
		}
	);
};

/**
 * Batch animate multiple SVG lines with the same trigger and options
 * @param {Element[]} elements - Array of SVG path elements to animate
 * @param {string|Element} triggerElement - The element to trigger the animation
 * @param {Object} options - Configuration options (same as animateSVGLine)
 */
export const animateMultipleSVGLines = (elements, triggerElement, options = {}) => {
	elements.forEach((element) => {
		if (element) {
			animateSVGLine(element, triggerElement, options);
		}
	});
};

/**
 * Initialize SVG line animations with initial state
 * Sets all provided SVG elements to drawSVG: '0%' before animation
 * @param {(Element|null)[]} elements - Array of SVG path elements to initialize
 */
export const initializeSVGLines = (elements) => {
	const validElements = elements.filter((el) => el !== null);
	if (validElements.length > 0) {
		gsap.set(validElements, { drawSVG: '0%' });
	}
};

/**
 * Show SVG lines in final state without animation (for reduced motion)
 * @param {(Element|null)[]} elements - Array of SVG path elements to show
 */
export const showSVGLinesFinal = (elements) => {
	const validElements = elements.filter((el) => el !== null);
	if (validElements.length > 0) {
		gsap.set(validElements, { drawSVG: '100%' });
	}
};

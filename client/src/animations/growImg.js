export const growImg = (
	node,
	attrs = {}
) => {
	gsap.set(node, { 
		clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)"
	});

	return gsap.to(
		node,
		{
			clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
			duration: 1,
			ease: 'power2.out',
			...attrs,
		},
		'>'
	);
};

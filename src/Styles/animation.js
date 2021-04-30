const inputAnimation = {
	input: {
		initial: { width: '48%' },
		animate: {
			originX: 'left',
			width: '100%',
			transition: {
				duration: 0.3,
				ease: [0.6, 0.05, -0.01, 0.9],
			},
		},
	},
};
const inputAnimation2 = {
	input2: {
		initial2: {
			opacity: 0,
			position: 'absolute',
			right: '1vh',
		},
		animate2: {
			position: 'absolute',
			right: '1vh',
			opacity: 1,
			transition: {
				duration: 0.7,
				ease: [0.6, 0.05, -0.01, 0.9],
			},
		},
	},
};

export { inputAnimation, inputAnimation2 };

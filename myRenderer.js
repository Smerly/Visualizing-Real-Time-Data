function render(frequencyArray, ctx, centerX, centerY, radius) {
	// Clear Canvas
	ctx.beginPath();
	ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
	ctx.fillRect(0, 0, 300, 300);
	ctx.fill();

	ctx.beginPath();
	ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);

	const bars = frequencyArray.length;
	const step = (Math.PI * 2) / bars;

	// Fuzzy Circle Animation

	// Circle
	// ctx.beginPath();
	// ctx.fillStyle = 'rgb(255, 255, 255)';
	// ctx.arc(centerX, centerY, radius / 2, 0, 2 * Math.PI);
	// ctx.fill();

	// const amountOfFuzz = 300;

	// for (let i = 0; i < amountOfFuzz; i++) {
	// 	frequencyArray.forEach((f, index) => {
	// 		const maxBarLength = (f / 2550) * bars;
	// 		ctx.beginPath();
	// 		ctx.strokeStyle = 'white';
	// 		ctx.lineWidth = '1';
	// 		// ctx.rect(
	// 		// 	Math.cos(step * index + Math.floor(Math.random() * (10 - 0 + 10) + 0)) *
	// 		// 		radius +
	// 		// 		centerX,
	// 		// 	Math.sin(step * index + Math.floor(Math.random() * (10 - 0 + 10) + 0)) *
	// 		// 		radius +
	// 		// 		centerY,
	// 		// 	1,
	// 		// 	1
	// 		// );
	// 		ctx.arc(centerX, centerY, radius, 0, 2 * Math.pi);
	// 		ctx.stroke();
	// 		const x1 = Math.cos(step * i) * radius + centerX;
	// 		const y1 = Math.sin(step * i) * radius + centerY;
	// 		ctx.moveTo(x1, y1);
	// 	});

	// 	ctx.stroke();
	// }

	frequencyArray.forEach((f, i) => {
		// calculate the max length of the line
		const maxBarLength = (f / 2550) * bars;
		// calc beginning of each line
		const x1 = Math.cos(step * i) * radius + centerX;
		const y1 = Math.sin(step * i) * radius + centerY;
		// calc end of each line
		const x2 = Math.cos(step * i) * (radius + maxBarLength) + centerX;
		const y2 = Math.sin(step * i) * (radius + maxBarLength) + centerY;

		ctx.beginPath();
		// ctx.strokeStyle = `hsl(${(360 / 1024) * i}, 100%, 50%)`;
		ctx.strokeStyle = `rgb(255, 255, 255)`;

		// move to start of line
		ctx.moveTo(
			x1 + Math.floor(Math.random() * (maxBarLength - 0 + 1) + 0),
			y1 + Math.floor(Math.random() * (maxBarLength - 0 + 1) + 0)
		);
		// draw a line to the end x and y

		ctx.lineTo(
			x2 + Math.floor(Math.random() * (maxBarLength - 0 + 1) + 0),
			y2 + Math.floor(Math.random() * (maxBarLength - 0 + 1) + 0)
		);

		ctx.stroke();
	});
}

export default render;

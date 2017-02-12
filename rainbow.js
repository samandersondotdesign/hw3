function setup() {
	createCanvas(400, 400);
	colorMode(HSB);
}

function draw() {
	background(220);

	for (var x = 0; x < 400; x = x + 2) {
					line(x, 0, x, 400);
		//for (var c = 0; c < 400; c = c + 50) {
			stroke(x, 255, 255);
		//}
	}
}

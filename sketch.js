//Made by Leon Rogge
//10/7/2019
//Adapted code from https://stackoverflow.com/questions/35259814/why-is-this-ball-inside-a-circle-not-bouncing-properly
let x = 400, y = 160, dx = -1.5, dy = 2, r = 20, line_color, circle_color;
let container_radius = 400
let slope = 1.5
let t_slope = 0
let x_old = 0
let y_old = 0
let angle = 0

function setup() {
	createCanvas(container_radius * 2, container_radius * 2);
	noFill();
	frameRate(500);
	line_color = color(0);	
	circle_color = color(0);
}

function draw() {
	noFill();
	strokeWeight(5);
	stroke(circle_color);
	circle(400, 400, 800);
	line_color.setAlpha(10);
	noStroke();
	fill(line_color);
	circle(x, y, r);
	x_old = x;
	y_old = y;
	x += dx ;
	y += dy ;
	let new_dx = x - container_radius;
	let new_dy = y - container_radius;
	let dist_from_center = sqrt(new_dx * new_dx + new_dy * new_dy);

	if(dist_from_center >= container_radius - r/2) {
		let normalMagnitude = dist_from_center;
      	let normalX = new_dx / normalMagnitude;
      	let normalY = new_dy / normalMagnitude;
      	let tangentX = -normalY;
      	let tangentY = normalX;
      	let normalSpeed = -(normalX * dx + normalY * dy);
      	let tangentSpeed = tangentX * dx + tangentY * dy;
      	dx = normalSpeed * normalX + tangentSpeed * tangentX;
      	dy = normalSpeed * normalY + tangentSpeed * tangentY;
      	circle_color = color(random(0, 255), random(0, 255), random(0, 255));
	}
}

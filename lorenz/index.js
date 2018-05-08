const lorenzSystem = ({x, y, z}, sigma, rho, beta) => {
  return {
    x: sigma * (y - x),
    y: x * (rho - z) - y,
    z: x * y - (beta * z)
  };
};

let points = [];
let point = {x: 0.001, y: 0.001, z: 0.001};

const sigma = 10;
const rho = 28;
const beta = 8 / 3;

for (let i = 0; i < 100; i++) {
  points.push(point = lorenzSystem(point, sigma, rho, beta));
}

console.log(points);

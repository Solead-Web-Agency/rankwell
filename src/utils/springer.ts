/**
 * Springer - Spring easing library for GSAP animations
 */

function simulateSpringStep(
  position: number,
  target: number,
  velocity: number,
  stiffness: number,
  damping: number,
  dt: number,
  resultArray: [number, number],
): [number, number] {
  const springForce = -stiffness * (position - target);
  const dampingForce = -damping * velocity;
  const totalForce = springForce + dampingForce;
  const newVelocity = velocity + totalForce * dt;
  const newPosition = position + newVelocity * dt;

  return Math.abs(newVelocity) < 1 && Math.abs(newPosition - target) < 1
    ? ((resultArray[0] = target), (resultArray[1] = 0), resultArray)
    : ((resultArray[0] = newPosition), (resultArray[1] = newVelocity), resultArray);
}

function createSpring(tension: number = 0.5, friction: number = 0.5): (t: number) => number {
  const stiffness = Math.min(Math.max(350 * tension, 20), 350);
  const damping = Math.min(Math.max(40 - 40 * friction, 1), 40);
  const target = 10000;
  const dt = 16 / target;
  const resultArray: [number, number] = [0, 0];

  const points: number[] = [];
  let position = 0;
  let velocity = 0;

  while (position !== target || velocity !== 0) {
    const result = simulateSpringStep(position, target, velocity, stiffness, damping, dt, resultArray);
    position = result[0];
    velocity = result[1];
    points.push(position / target);
  }

  return function (t: number): number {
    return points[Math.ceil(t * (points.length - 1))];
  };
}

const Springer = {
  default: function (tension: number = 0.5, friction: number = 0.5): (t: number) => number {
    return createSpring(tension, friction);
  },
};

export default Springer;
export { createSpring };

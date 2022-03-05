import { Composite, Body, Common } from "matter-js";

/**
 * Explode all non-static bodies in the given world
 * @param engine Matter engine
 */
export function explodeBodies(engine: any) {
    const bodies = Composite.allBodies(engine.world);

    for (let i = 0; i < bodies.length; i++) {
      const body = bodies[i];

      if (!body.isStatic) {
        const forceMagnitude = 0.05 * body.mass;

        Body.applyForce(body, body.position, {
          x: (forceMagnitude + Common.random() * forceMagnitude) * Common.choose([1, -1]),
          y: -forceMagnitude + Common.random() * -forceMagnitude
        });
      }
    }
}
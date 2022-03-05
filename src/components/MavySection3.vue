<template>
  <section class="flex flex-col justify-center items-center" id="technologies">
    <div id="section-3">
      <div data-depth="0.8" class="mt-36">
        <h2 class="text-2xl md:text-4xl font-extrabold text-slate-800 mb-3 dark:text-slate-200 text-center" id="section-3-title">Technologies</h2>
      </div>
      <div data-depth="0.5" class="text-center max-w-3xl">
        <p class="text-slate-600 text-md md:text-lg dark:text-slate-400" id="section-3-description">
          I mostly focus on web and mobile development, but I also excited to learn new technologies and explore new ways to solve problems.
        </p>
      </div>
    </div>
    <div ref="canvas" id="tech-canvas" class="w-full h-full flex items-center justify-center"></div>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "@vue/runtime-core";
import { Engine, Render, Bodies, Composite, Runner, Mouse, MouseConstraint, Events } from "matter-js";
import useEmitter from "../composables/useEmitter";

import cLogo from "../assets/svg/c-logo.svg";
import cppLogo from "../assets/svg/cpp-logo.svg";
import csLogo from "../assets/svg/cs-logo.svg";
import cssLogo from "../assets/svg/css-3.svg";
import dartLogo from "../assets/svg/dart-logo.svg";
import htmlLogo from "../assets/svg/html-logo.svg";
import javaLogo from "../assets/svg/java-logo.svg";
import jsLogo from "../assets/svg/js-logo.svg";
import nodeLogo from "../assets/svg/nodejs-icon.svg";
import phpLogo from "../assets/svg/php-logo.svg";
import pythonLogo from "../assets/svg/python-logo.svg";
import reactLogo from "../assets/svg/react-logo.svg";
import tsLogo from "../assets/svg/ts-logo.svg";
import viteLogo from "../assets/svg/vite-logo.svg";
import vueLogo from "../assets/svg/vue-logo.svg";
import flutterLogo from "../assets/svg/flutter-logo.svg";
import ionicLogo from "../assets/svg/ionic-logo.svg";
import sassLogo from "../assets/svg/sass-logo.svg";
import bashLogo from "../assets/svg/bash-logo.svg";

import dartLogoLight from "../assets/svg/dart-logo-light.svg";
import nodeLogoLight from "../assets/svg/nodejs-icon-light.svg";
import bashLogoLight from "../assets/svg/bash-logo-light.svg";

import { isTheme, explodeBodies, startAnimS3 } from "../utils";

const lightColor = "#f1f5f9";
const darkColor = "#0f172a";
const canvas: any = ref(null);

onMounted(() => {
  startAnimS3();

  const size = canvas.value.getBoundingClientRect();
  const isSmall = size.width < 800;
  const width = isSmall ? size.width : 800;
  const height = size.height * 0.75;
  const currentTheme = isTheme("dark") ? darkColor : lightColor;

  const engine = Engine.create();
  const render = Render.create({
    element: canvas.value,
    engine: engine,
    options: {
      wireframes: false,
      background: currentTheme,
      width, height
    }
  });

  // List of bodies
  const boxes: any = [];
  let timeScaleTarget = 1, counter = 0;

  Events.on(engine, 'afterUpdate', function(event: any) {
    // Tween the timescale for bullet time slow-mo
    engine.timing.timeScale += (timeScaleTarget - engine.timing.timeScale) * 0.05;
    counter += 1;

    // Explode every 5 seconds
    if (counter >= 60 * 5) {
      // Flip the timescale
      if (timeScaleTarget < 1) {
        timeScaleTarget = 1;
      } else {
        timeScaleTarget = 0.05;
      }

      // Make an explosion to non-static bodies
      explodeBodies(engine);

      // Reset counter
      counter = 0;
    }
  });

  // Light logo bodies
  let dartLogoBody: any = null;
  let nodeLogoBody: any = null;
  let bashLogoBody: any = null;

  // Add sprite to the list of boxes
  function addBodyIcon(icon: any, boxwidth: number, boxheight: number, scale: number, cid = -1) {
    // Compute scale factor based on the size of the canvas
    const scaleFactor = scale * (isSmall ? 0.5 : 1);

    // Scale the icon
    if (scale !== 1) {
      boxwidth *= scaleFactor;
      boxheight *= scaleFactor;
    }

    // Set light dark logo if dark modee
    if (cid === 1) {
      icon = isTheme("dark") ? dartLogoLight : dartLogo;
    } else if (cid === 2) {
      icon = isTheme("dark") ? nodeLogoLight : nodeLogo;
    } else if (cid === 3) {
      icon = isTheme("dark") ? bashLogoLight : bashLogo;
    }

    // Create the body
    const body = Bodies.rectangle(width / 2, height / 2, boxwidth, boxheight, {
      restitution: 0.9, render: {
        sprite: { texture: icon, xScale: scaleFactor, yScale: scaleFactor }
      }
    });

    // Checek if cid is not -1
    if (cid !== -1) {
      // Use the 1 as CID for dart logo
      if (cid === 1) {
        dartLogoBody = body;
      }

      // Use the 2 as CID for node logo
      if (cid === 2) {
        nodeLogoBody = body;
      }

      // Use the 3 as CID for bash logo
      if (cid === 3) {
        bashLogoBody = body;
      }
    }

    // Add the body to the list of boxes
    boxes.push(body);
  }

  // Add the logos
  addBodyIcon(cLogo, 109, 123, 0.6);
  addBodyIcon(cppLogo, 2222, 2500, 0.03);
  addBodyIcon(csLogo, 2500, 2500, 0.03);
  addBodyIcon(cssLogo, 2183, 2500, 0.03);
  addBodyIcon(dartLogo, 120, 60, 1.2, 1);
  addBodyIcon(htmlLogo, 2183, 2500, 0.03);
  addBodyIcon(javaLogo, 55, 94, 1.3);
  addBodyIcon(jsLogo, 256, 256, 0.32);
  addBodyIcon(nodeLogo, 590, 361, 0.25, 2);
  addBodyIcon(phpLogo, 711, 384, 0.15);
  addBodyIcon(pythonLogo, 2500, 2490, 0.04);
  addBodyIcon(reactLogo, 2194, 2500, 0.04);
  addBodyIcon(tsLogo, 2500, 2500, 0.03);
  addBodyIcon(viteLogo, 2490, 2490, 0.04);
  addBodyIcon(vueLogo, 2194, 2158, 0.04);
  addBodyIcon(flutterLogo, 240, 240, 0.6);
  addBodyIcon(ionicLogo, 436, 147, 0.5);
  addBodyIcon(sassLogo, 2500, 1875, 0.04);
  addBodyIcon(bashLogo, 376, 159, 0.5, 3);

  // Create a static bodies for the corner of the canvas
  const leftBound = Bodies.rectangle(-246, height / 2, 500, height, { isStatic: true, render: { fillStyle: "transparent" }});
  const bottomBound = Bodies.rectangle(width / 2, height + 246, width, 500, { isStatic: true, render: { fillStyle: "transparent" } });
  const rightBound = Bodies.rectangle(width + 246, height / 2, 500, height, { isStatic: true, render: { fillStyle: "transparent" } });
  const topBound = Bodies.rectangle(width / 2, -246, width, 500, { isStatic: true, render: { fillStyle: "transparent" }});

  // Add the static bodies to the world
  boxes.push(leftBound);
  boxes.push(bottomBound);
  boxes.push(rightBound);
  boxes.push(topBound);

  // Create renderer
  const runner = Runner.create();

  // Add the logos and boxes to the world
  Composite.add(engine.world, boxes);

  // Start the engine (We're going for a ride!)
  Render.run(render);
  Runner.run(runner, engine);

  // Add mouse control
  const mouse = Mouse.create(render.canvas);
  mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
  mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

  const mouseConstraint = MouseConstraint.create(engine, {
    mouse, constraint: {
      stiffness: 0.2,
      render: {
        visible: false
      }
    }
  });

  // Add mouse control to the world
  Composite.add(engine.world, mouseConstraint);
  render.mouse = mouse;

  // Listen on theme change
  useEmitter().on("theme-change", (isDark: boolean) => {
    // Color to use
    const color = isDark ? darkColor : lightColor;

    // Change renderer background color
    render.options.background = color;

    // Change the color of the dart logo
    if (dartLogoBody) {
      dartLogoBody.render.sprite.texture = isDark ? dartLogoLight : dartLogo;
    }

    // Change color of the node logo
    if (nodeLogoBody) {
      nodeLogoBody.render.sprite.texture = isDark ? nodeLogoLight : nodeLogo;
    }

    // Change color of the bash logo
    if (bashLogoBody) {
      bashLogoBody.render.sprite.texture = isDark ? bashLogoLight : bashLogo;
    }
  });
});
</script>
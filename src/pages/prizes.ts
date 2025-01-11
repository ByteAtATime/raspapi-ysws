import type { APIRoute } from "astro";

// Define your color codes for Bash (ANSI escape codes)
const red = "\x1b[0;31m";
const green = "\x1b[0;32m";
const blue = "\x1b[0;34m";
const yellow = "\x1b[0;33m";
const cyan = "\x1b[0;36m";
const reset = "\x1b[0m";
// Define the JSON content with color codes embedded
const res = `${green}{${reset}
    ${red}"we_ship"${reset}: ${cyan}"Raspberry Pi Zero 2 W"${reset},
    ${red}"about"${reset}: ${cyan}"The Raspberry Pi Zero 2 W is a compact and powerful single-board computer that you can use to host your API!"${reset},
    ${red}"top_3"${reset}: {
        ${red}"prize"${reset}: ${cyan}"Raspberry Pi Sensor HAT"${reset},
        ${red}"about"${reset}: ${cyan}"The Sensor HAT is a great addition to your Raspberry Pi, allowing you to measure temperature, humidity, and pressure. Each top team receives one to enhance their project's capabilities!"${reset}
    },
    ${red}"hint"${reset}: ${cyan}"Check out /submit to learn how to submit your API—and uncover the final clue!"${reset}
${green}}\n`;

export const GET: APIRoute = () => {
  return new Response(res, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

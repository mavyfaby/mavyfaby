export * from "./theme";
export * from "./anim-s1";
export * from "./anim-s3";
export * from "./matter";
export * from "./base64";
export * from "./contact";

/**
 * Check if the current device is a touchscreen
 * @returns {boolean} true if using touchscreen devices
 */
export function isTouchscreen() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}
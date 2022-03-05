/**
 * Encode a string into base64 without padding
 */
export function base64encode(str: string) {
    // Check if param is not empty
    if (str.length > 0) {
        // Encode the string param as base64 and remove padding
        return btoa(str).replaceAll("=", "");
    }

    // Otherwise, return empty string
    return "";
}

/**
 * Decode a string into base64
 */
export function base64decode(base64: string) {
    // Check if param is not empty
    if (base64.length > 0) {
        // Decode the base64
        return atob(base64);
    }

    // Otherwise, return empty string
    return "";
}
/**
 * Change theme
 * @param {boolean} isDark
 */
 export function changeTheme(isDark: string) {
    if (window.hasOwnProperty("localStorage")) {
        localStorage.setItem("dark", isDark);
    
        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        document.documentElement.setAttribute("data-color-scheme", isDark ? "dark" : "light");
        document.querySelector('meta[name="theme-color"]')?.setAttribute('content', isDark ? "#0f172a" : "#f1f5f9");
    }
}

/**
 * Initialize theme
 */
 export function initTheme() {
    if (window.hasOwnProperty("localStorage")) {
        const dark = localStorage.getItem("dark");
        
        if (dark === null) {
            localStorage.setItem("dark", "false");
        } else if (dark === "true") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("dark", "true");
        }

        document.documentElement.setAttribute("data-color-scheme", dark === "true" ? "dark" : "light");
        document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark === "true" ? "#0f172a" : "#f1f5f9");
    }
}

/**
 * Check whether the param is the current theme
 * @param {string} theme 
 */
export function isTheme(theme: string) {
    return window.hasOwnProperty("localStorage") ? localStorage.getItem("dark") === (theme === "dark" ? "true" : "false") : false;
}
/**
 * Parse contact response according to the type of the response.
 * @param response Server response
 */
export function parseContactResponse(response: string) {
    switch (response) {
        case "1":
            return [1, "Message sent successfully!"];
        case "-1":
            return [0, "Invalid request data. Please try again"];
        case "-2":
            return [0, "First name must not be empty."];
        case "-3":
            return [0, "Last name must not be empty."];
        case "-4":
            return [0, "Email must not be empty."];
        case "-5":
            return [0, "Subject must not be empty."];
        case "-6":
            return [0, "Message must not be empty."];
        case "-7":
            return [0, "First name must not exceed to 128 characters."];
        case "-8":
            return [0, "Last name must not exceed to 128 characters."];
        case "-9":
            return [0, "Email must not exceed to 255 characters."];
        case "-10":
            return [0, "Subject must not exceed to 64 characters."];
        case "-11":
            return [0, "Message must not exceed to 1,000 characters."];
        case "-12":
            return [0, "Please input a valid email address."];
        case "-13":
            return [0, "Oops... You're using my email there. Please use another one."];
        case "-14":
            console.error("Invalid reCAPTCHA response.");
            return [0, "Something went wrong. Please try again."];
        case "-15":
            console.error("Unsuccessful reCAPTCHA verification.");
            return [0, "Something went wrong. Please try again."];
        case "-16":
            console.error("Error saving message.");
            return [0, "Something went wrong. Please try again."];
        default:
            return [0, "Unidentified error. Please try again."];
    }
}
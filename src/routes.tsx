// File should be named lowercase because module.exports is an object - done
// Also since this constant is 99% the only think that gets exported from here I would use default export - should be clarified
export const ROUTER_URLS = {
    HOME: "/",
    SIGN_IN: "/sign-in",
    SIGN_UP: "/sign-up",
    CATEGORIES: "/Categories",
    BOOKS: "/Books",
    USERS: "/Users",
    PROFILE: "/Profile",
    NOT_FOUND: "*"
}

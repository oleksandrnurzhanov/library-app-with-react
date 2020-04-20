// File should be named lowercase because module.exports is an object
// Also since this constant is 99% the only think that gets exported from here I would use default export
export const ROUTER_URLS = {
    HOME: "/",
    SIGN_IN: "/sign-in",
    SIGN_UP: "/sign-up",
    CATEGORIES: "/categories",
    BOOKS: "/books",
    USERS: "/users",
    PROFILE: "/profile",
    NOT_FOUND: "*"
}

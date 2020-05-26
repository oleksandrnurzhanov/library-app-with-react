import { ROUTER_URLS } from "./RoutesEnums";

export const ROUTER_URLS_MAP = {
    [ROUTER_URLS.Home]: "/",
    [ROUTER_URLS.SignIn]: "/sign-in",
    [ROUTER_URLS.SignUp]: "/sign-up",
    [ROUTER_URLS.Categories]: "/categories",
    [ROUTER_URLS.Books]: "/books",
    [ROUTER_URLS.Users]: "/users",
    [ROUTER_URLS.Profile]: "/profile",
    [ROUTER_URLS.NotFound]: "*",
};

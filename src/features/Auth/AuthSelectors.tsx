// Don't forget to add state.auth here
// I wasn't able to find a good solution for issues with adding `auth` everywhere in the docs
// The best solution is to create a utility function that will auto-bind the needed state slice to every selector
// But it's really needed in case of a big application
// Here I think it will just draw the time for no big benefit
// So you can continue using `state.auth.user`
export const selectUser = (state: any) => state.user;

import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./features/auth/authSlice";
import counterReducer from "./features/counter/counterSlice";

/**
 * Usually we export the function which creates store here,
 * not the store instance itself.
 * So the file is named `createStore` and then used as `const store = createStore(params)`
 * Right here in your case it's not needed but it's often the case, jfyi
 */
export default configureStore({
    reducer: {
        auth: authReducer,
        counter: counterReducer,
    },
});

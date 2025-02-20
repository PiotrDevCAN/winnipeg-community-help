import { configureStore } from "@reduxjs/toolkit";

import reducers from "@/redux/reducers";

const storeConfig = {
  reducer: reducers,
  preloadedState: {},
  // middleware: [loggerMiddleware],
  // devTools: process.env.NODE_ENV !== 'production',
};

// reducer: The root reducer function that combines multiple reducers into a single reducer.
// preloadedState: The initial state of the store.
// middleware: An array of middleware functions to be applied to the store.
// enhancers: An array of enhancers to be applied to the store.
// devTools: A boolean indicating whether to enable or disable the Redux DevTools extension.
const store = configureStore(storeConfig);

export default store;

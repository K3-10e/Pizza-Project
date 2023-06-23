import { configureStore } from '@reduxjs/toolkit';
import pizzaSlice from './pizza/slice';

const store = configureStore({
    reducer: {
        pizza: pizzaSlice,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store;
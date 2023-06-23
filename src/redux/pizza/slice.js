import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    error:  false,
    errorMessage: "",
    toppingsRanked: [],
}

const slice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        startLoading(state) {
            state.isLoading = true;
        },
        hasError(state, action) {
            state.error = true;
            state.errorMessage = action.payload;
            state.isLoading = false;
        },
        fetchToppings(state, action) {
            state.toppingsRanked = action.payload;
            state.isLoading = false;
        },
    },
});

export const {
    startLoading,
    hasError,
    fetchToppings,
} = slice.actions;

export default slice.reducer;
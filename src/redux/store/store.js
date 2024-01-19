import { configureStore } from "@reduxjs/toolkit";
import stateSliceReducer from "../reducers/stateSliceReducer";

/* VECCHIO STORE SENZA PERSIST DEL LOCAL STORAGE  */
export const store = configureStore({
    reducer: {
        FetchAlMount: stateSliceReducer,
    },
});

export default store;

import { createSlice } from "@reduxjs/toolkit";

const MainSlice = createSlice({
    name: "mainState",
    initialState: {
        dataFetchUno: null,
    },

    /* QUESTE SONO LE ACTION  ACTIONS = I MIEI SETTER DI GONI SINGOLO STATO  */
    reducers: {
        setDataPrimaFetch: (state, action) => {
            state.dataPrimaFetch = action.payload;
        },
    },
});

export const { setDataPrimaFetch } = MainSlice.actions;
export default MainSlice.reducer;

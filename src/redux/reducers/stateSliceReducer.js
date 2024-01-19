import { createSlice } from "@reduxjs/toolkit";

const MainSlice = createSlice({
    name: "mainState",
    initialState: {
        dataFetchUno: null,
        dataFetchDue: null,
        dataFetchTre: null,
        dataFetchInput: null,
    },

    /* QUESTE SONO LE ACTION  ACTIONS = I MIEI SETTER DI GONI SINGOLO STATO  */
    reducers: {
        setDataFetchUno: (state, action) => {
            state.dataFetchUno = action.payload;
        },
        setDataFetchDue: (state, action) => {
            state.dataFetchDue = action.payload;
        },
        setDataFetchTre: (state, action) => {
            state.dataFetchTre = action.payload;
        },

        setDataFetchInput: (state, action) => {
            state.dataFetchInput = action.payload;
        },
    },
});

export const { setDataFetchUno, setDataFetchDue, setDataFetchTre, setDataFetchInput } = MainSlice.actions;
export default MainSlice.reducer;

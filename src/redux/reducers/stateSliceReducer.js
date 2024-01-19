import { createSlice } from "@reduxjs/toolkit";

const MainSlice = createSlice({
    name: "mainState",
    initialState: {
        dataFetchUno: null,
        dataFetchDue: null,
        dataFetchTre: null,
        dataFetchInput: null,
        dataToShowOnMusicPlayer: null,
        songPreferite: [] /* only ID's */,
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
        setStringsToShowOnPlayer: (state, action) => {
            state.dataToShowOnMusicPlayer = action.payload;
        },
        setAddSongPreferite: (state, action) => {
            state.songPreferite.push(action.payload);
        },
        setRemoveSongPreferite: (state, actions) => {
            state.songPreferite = state.songPreferite.filter((id) => id !== actions.payload);
        },
    },
});

export const {
    setDataFetchUno,
    setDataFetchDue,
    setDataFetchTre,
    setDataFetchInput,
    setStringsToShowOnPlayer,
    setAddSongPreferite,
    setRemoveSongPreferite,
} = MainSlice.actions;
export default MainSlice.reducer;

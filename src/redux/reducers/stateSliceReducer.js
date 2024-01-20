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
        allSongPreferiteObj: [] /* all the object */,
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
        setRemoveSongPreferite: (state, action) => {
            state.songPreferite = state.songPreferite.filter((id) => id !== action.payload);
        },

        setAllSongPreferiteObj: (state, action) => {
            state.allSongPreferiteObj.push(action.payload);
        },

        setRemoveSongPreferiteObject: (state, action) => {
            state.allSongPreferiteObj = state.allSongPreferiteObj.filter((object) => object.id !== action.payload);
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
    setAllSongPreferiteObj,
    setRemoveSongPreferiteObject,
} = MainSlice.actions;
export default MainSlice.reducer;

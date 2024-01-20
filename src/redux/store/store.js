import { combineReducers, configureStore } from "@reduxjs/toolkit";
import stateSliceReducer from "../reducers/stateSliceReducer";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";

/* VECCHIO STORE SENZA PERSIST DEL LOCAL STORAGE  */
/* export const store = configureStore({
    reducer: {
        FetchAlMount: stateSliceReducer,
    },
}); */
/* export default store; */

/* 1. configurazione dei salvataggi dello stato globale sul local storage  */
const persistConfig = {
    key: "root",
    storage: storage,
    transforms: [
        encryptTransform({
            secretKey: process.env.REACT_APP_PERSIST_KEY, // crea il tuo file .env.local in cui creare la chiave REACT_APP_PERSIST_KEY col valore di una stringa complessa che
            // verrà usata come chiave di cripatzione dello store salvato nel localStorage del browser
            /* usa process.env.VARIABILE per richiamare in questo file la chiave, il file .env.local è presente nel git ignore e non viene caricat su gitHUB  */
        }),
    ],
    //  QUAL'ORA NON VOLESSI SALVARE UN REDUCER NEL LOCAL STORAGE DEL BROWSER USA LA BLACKLIST
    /* blacklist: ["secondFetch"], */
};

/* 2. nuovo store dove combino tutti i reducer presenti nel progetto */
const newReducer = combineReducers({
    FetchAlMount: stateSliceReducer,
    /* eventuale altro reducer se presente  */
    /* eventuale altro reducer se presente  */
});

const PersistentReducer = persistReducer(persistConfig, newReducer);

export const store = configureStore({
    reducer: PersistentReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

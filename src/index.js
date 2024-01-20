import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

/* elementi per creazione store  */
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        {/*  <PersistGate persistor={persistor}> */}
        <App />
        {/*   </PersistGate> */}
    </Provider>
);

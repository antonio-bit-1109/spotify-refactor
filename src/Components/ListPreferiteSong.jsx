import React from "react";
import { UseSelector, useDispatch, useSelector } from "react-redux";

const ListPreferiteSong = () => {
    const listaCanzoniPreferite = useSelector((state) => state.FetchAlMount.allSongPreferiteObj);
    console.log("listaCanzoniPreferite", listaCanzoniPreferite);

    return <div>ListPreferiteSong</div>;
};

export default ListPreferiteSong;

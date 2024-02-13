import './App.css';
import React from "react";
import { Favorites } from "./Components/Favorites.jsx";
import KurzyKontejner from "./Components/Likes.jsx";

function App() {
    return (
        <>
            <Favorites></Favorites>
            <KurzyKontejner></KurzyKontejner>
        </>
    );
}

export default App;

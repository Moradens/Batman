import React, { useState } from "react";
import "../index.css";
import { Favorites } from "./Favorites.jsx";

const dataKurzy = [
    {
        nazev: "Idk",
        popis: "Idk Idk Idk",
        addtofav: false,
    },
    {
        nazev: "Idk 2",
        popis: "Idk Idk Idk",
        addtofav: false,
    },
];

const SeznamKurzu = () => {
    const [favoritesCount, setFavoritesCount] = useState(0);

    const handleAddToFavorites = (index) => {
        const updatedDataKurzy = [...dataKurzy];
        const kurz = updatedDataKurzy[index];

        if (!kurz.addtofav) {
            setFavoritesCount(favoritesCount + 1);
        } else {
            setFavoritesCount(favoritesCount - 1);
        }

        kurz.addtofav = !kurz.addtofav;
        updatedDataKurzy[index] = kurz;

        // Update the state with the new array
        setDataKurzy(updatedDataKurzy);
    };

    const Kurz = ({ kurz, index }) => {
        const [likeNumber, setLikeNumber] = useState(0);
        const [dislikeNumber, setDislikeNumber] = useState(0);

        const handleLikeClick = () => {
            setLikeNumber(likeNumber + 1);
        };

        const handleDislikeClick = () => {
            setDislikeNumber(dislikeNumber + 1);
        };

        return (
            <div className="kurzy-karta">
                <div className="nove">
                    <h2>{kurz.nazev}</h2>
                    <p>{kurz.popis}</p>
                </div>
                <button onClick={handleLikeClick}>Likes</button>
                <h3>{likeNumber} Likes</h3>
                <button onClick={handleDislikeClick}>Dislike</button>
                <h3>{dislikeNumber} Dislikes</h3>
                <button onClick={() => handleAddToFavorites(index)}>
                    Favorite
                </button>
            </div>
        );
    };

    return (
        <div>
            <Favorites favoritesCount={favoritesCount} />
            <div className="kurzykontejner">
                {dataKurzy.map((kurz, index) => (
                    <Kurz key={index} kurz={kurz} index={index} />
                ))}
            </div>
        </div>
    );
};

export default SeznamKurzu;

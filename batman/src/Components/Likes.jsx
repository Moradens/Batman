import '../index.css';
import React, { useState } from "react";

const dataKurzy = [
    {
        "nazev": "Idk",
        "popis": "Idk Idk Idk",
        "addtofav": false
    },
    {
        "nazev": "Idk 2",
        "popis": "Idk Idk Idk",
        "addtofav": false
    }
];

const SeznamKurzu = () => {
    const [favoritesCount, setFavoritesCount] = useState(0);

    const Kurz = ({ kurz }) => {
        const [likeNumber, setLikeNumber] = useState(0);
        const [dislikeNumber, setDislikeNumber] = useState(0);

        const handleLikeClick = () => {
            setLikeNumber(likeNumber + 1);
        };

        const handleDislikeClick = () => {
            setDislikeNumber(dislikeNumber + 1);
        };

        const handleAddToFavorites = () => {
            if (!kurz.addtofav) {
                setFavoritesCount(favoritesCount + 1);
                kurz.addtofav = true;
            } else {
                setFavoritesCount(favoritesCount - 1);
                kurz.addtofav = false;
            }
        };

        const { nazev, popis } = kurz;

        return (
            <div className="kurzy-karta">
                <div className="nove">
                    <h2>{nazev}</h2>
                    <p>{popis}</p>
                </div>
                <button onClick={handleLikeClick}>Likes</button>
                <h3>{likeNumber} Likes</h3>
                <button onClick={handleDislikeClick}>Dislike</button>
                <h3>{dislikeNumber} Dislikes</h3>
                <button onClick={handleAddToFavorites}>Favorite</button>
            </div>
        );
    };

    return (
        <div className="kurzykontejner">
            {dataKurzy.map((kurz, index) => (
                <Kurz key={index} kurz={kurz} />
            ))}
        </div>
    );
};

export default SeznamKurzu;

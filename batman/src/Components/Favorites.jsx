import React from "react";

export function Favorites({ favoritesCount }) {
    return (
        <div>
            <div className={"all"}>
                <div className={"left"}>Favorites</div>
                <div className={"right"}>
                    <span>♥️</span>
                    <span>{favoritesCount}</span>
                </div>
            </div>
        </div>
    );
}

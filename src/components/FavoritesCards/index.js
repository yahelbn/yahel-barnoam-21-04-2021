import React from "react";
import { Row } from "./FavoritesCardsElements";
import { fToC } from "../../utils";

import FavoriteCard from "../FavoriteCard/index";

function FavoritesCards({ favorites, celToFahr }) {
  const renderForcastDays =
    favorites &&
    favorites.map((fav, idx) => {
      let currentTemp = celToFahr ? fToC(fav.temp) : fav.temp;
      return (
        <FavoriteCard
          key={idx}
          favId={fav.id}
          favLoc={fav.name}
          currentTemp={currentTemp}
          temptext={fav.temptext}
          celToFahr={celToFahr}
        />
      );
    });

  return <Row>{renderForcastDays}</Row>;
}

export default FavoritesCards;

import React from "react";
import { CardContainer, Label } from "./FavoriteCardElements";
import { RiCelsiusLine, RiFahrenheitLine } from "react-icons/ri";
import { useHistory } from "react-router-dom";

function FavoriteCard({ favLoc, currentTemp, celToFahr, temptext, favId }) {
  const history = useHistory();
  return (
    <CardContainer
      onClick={() => {
        history.push({
          pathname: "/",
          state: { favId, favLoc },
        });
      }}
    >
      <Label>{favLoc}</Label>

      <Label>
        {currentTemp}
        {celToFahr ? <RiCelsiusLine /> : <RiFahrenheitLine />}
      </Label>

      <Label>{temptext}</Label>
    </CardContainer>
  );
}

export default FavoriteCard;

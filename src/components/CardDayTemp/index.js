import React from "react";
import { CardContainer, Label } from "./CardDayTempElements";
import { RiCelsiusLine, RiFahrenheitLine } from "react-icons/ri";

function CardDayTemp({ currentTemp, dayName, celToFahr }) {
  return (
    <CardContainer>
      <Label>{dayName}</Label>

      <Label>
        {currentTemp}
        {celToFahr ? <RiCelsiusLine /> : <RiFahrenheitLine />}
      </Label>
    </CardContainer>
  );
}

export default CardDayTemp;

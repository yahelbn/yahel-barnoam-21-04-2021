import React from "react";
import { Row } from "./CardsDaysTempElements";
import { getDayFromDate, fToC } from "../../utils";

import CardDayTemp from "../CardDayTemp/index";

function CardsDaysTemp({ weektemp, celToFahr }) {
  const renderForcastDays =
    weektemp &&
    weektemp.DailyForecasts.map((daytemp, idx) => {
      let dayName = getDayFromDate(daytemp.Date);
      let currentTemp = celToFahr
        ? fToC(daytemp.Temperature.Maximum.Value)
        : daytemp.Temperature.Maximum.Value;
      return (
        <CardDayTemp
          key={idx}
          dayName={dayName}
          currentTemp={currentTemp}
          celToFahr={celToFahr}
        />
      );
    });

  return <Row>{renderForcastDays}</Row>;
}

export default CardsDaysTemp;

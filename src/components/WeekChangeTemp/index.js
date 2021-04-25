import React, { useState, useEffect } from "react";
import {
  ConatinerWeekChangeTemp,
  TopRow,
  LeftSide,
  RightSide,
  Label,
  Column,
  Img,
  ImgWrap,
  ButtonStyled,
  BottomRow,
  HeaderH1,
} from "./WeekChangeTempElements";

import { AiTwotoneHeart } from "react-icons/ai";
import { RiCelsiusLine, RiFahrenheitLine } from "react-icons/ri";
import Switch from "react-switch";
import { connect } from "react-redux";

import { contains } from "../../utils";

/* Image*/
import tempimage from "../../images/tempimage.svg";

/*Components*/
import CardsDaysTemp from "./../CardsDaysTemp/index";

/*Import example data*/

function WeekChangeTemp(props) {
  const { weektemp, currenttempbyid, location, locationId } = props;
  const [celToFahr, setCelToFahr] = useState(false);
  const [heartColor, setHeartColor] = useState(false);

  useEffect(() => {
    /* Check if id changed and if exist on favorites*/
    if (contains(props.favorites, "id", locationId)) {
      setHeartColor(true);
    }
  }, [locationId]);

  const handleChange = () => {
    setCelToFahr(!celToFahr);
  };

  const addHandle = () => {
    props.dispatch({
      type: "ADD_FAV",
      favorite: {
        id: locationId,
        name: location,
        temp:
          currenttempbyid !== undefined
            ? currenttempbyid.Temperature.Imperial.Value
            : null,
        temptext:
          currenttempbyid !== undefined ? currenttempbyid.WeatherText : null,
      },
    });
    setHeartColor(true);
  };

  const removeHandle = () => {
    props.dispatch({
      type: "DELETE_FAV",
      id: locationId,
    });
    setHeartColor(false);
  };

  return (
    <ConatinerWeekChangeTemp>
      <TopRow>
        <LeftSide>
          <ImgWrap>
            <Img src={tempimage} />
          </ImgWrap>{" "}
          <Column>
            <Label>{location}</Label>
            <Label>
              {currenttempbyid !== undefined
                ? celToFahr
                  ? currenttempbyid.Temperature.Metric.Value
                  : currenttempbyid.Temperature.Imperial.Value
                : null}

              {celToFahr ? <RiCelsiusLine /> : <RiFahrenheitLine />}
            </Label>
          </Column>
        </LeftSide>
        <RightSide>
          <AiTwotoneHeart
            size={25}
            style={{
              color: heartColor ? "red" : props.isDarkMode ? "white" : "gray",
            }}
          />
          {heartColor ? (
            <ButtonStyled onClick={removeHandle} isDarkMode={props.isDarkMode}>
              Remove from ‏favorites
            </ButtonStyled>
          ) : (
            <ButtonStyled onClick={addHandle}>Add to ‏favorites</ButtonStyled>
          )}
        </RightSide>
      </TopRow>
      <BottomRow>
        <Column>
          <HeaderH1>{currenttempbyid && currenttempbyid.WeatherText}</HeaderH1>
          <Switch
            onChange={handleChange}
            checked={celToFahr}
            uncheckedIcon={<RiCelsiusLine style={{ margin: "4px 3px" }} />}
            checkedIcon={<RiFahrenheitLine style={{ margin: "6px 6px" }} />}
          />

          <CardsDaysTemp weektemp={weektemp} celToFahr={celToFahr} />
        </Column>
      </BottomRow>
    </ConatinerWeekChangeTemp>
  );
}

const mapStateToProps = (state) => {
  return {
    favorites: state.ToolbarLocationReducer,
  };
};

export default connect(mapStateToProps)(WeekChangeTemp);

import React, { useState } from "react";
import { connect } from "react-redux";
import FavoritesCards from "../../components/FavoritesCards/index";
import Switch from "react-switch";
import { RiCelsiusLine, RiFahrenheitLine } from "react-icons/ri";
import { Column, ConatinerFav, HeaderH1 } from "./FavoritesElements";

function Favorites(props) {
  const [celToFahr, setCelToFahr] = useState(false);

  const handleChange = () => {
    setCelToFahr(!celToFahr);
  };
  return (
    <ConatinerFav isDarkMode={props.isDarkMode}>
      <HeaderH1>Favorties</HeaderH1>

      <Column>
        <Switch
          onChange={handleChange}
          checked={celToFahr}
          uncheckedIcon={<RiCelsiusLine style={{ margin: "4px 3px" }} />}
          checkedIcon={<RiFahrenheitLine style={{ margin: "6px 6px" }} />}
        />
        <FavoritesCards
          celToFahr={celToFahr}
          favorites={props.favorites}
        ></FavoritesCards>
      </Column>
    </ConatinerFav>
  );
}

const mapStateToProps = (state) => {
  return {
    favorites: state.ToolbarLocationReducer,
  };
};

export default connect(mapStateToProps)(Favorites);

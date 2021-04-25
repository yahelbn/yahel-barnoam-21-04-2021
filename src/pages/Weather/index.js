import React, { useState, useEffect } from "react";
import {
  ConatinerWeather,
  SearchInput,
  ButtonStyled,
  Row,
  MessageText,
} from "./WeatherElements";
import axios from "axios";
import WeekChangeTemp from "./../../components/WeekChangeTemp/index";
import { connect } from "react-redux";
import { BsSearch } from "react-icons/bs";
import { useHistory } from "react-router-dom";

function Weather(props) {
  const keyToken = "2J43gox1E2CWA3srtKj5j8hc0posrNie";
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [locationId, setLocationId] = useState("");
  const history = useHistory();

  const [arrayGeoLoc, setArrayGeoLoc] = useState([]);
  const [tempOfThecurrentDay, setTempOfThecurrentDay] = useState(undefined);
  const [tempOfThecurrentWeek, setTempOfThecurrentWeek] = useState(undefined);

  const [message, setMessage] = useState(undefined);
  //const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLocation(searchTerm);
    let location = arrayGeoLoc.find((location) => {
      return location.LocalizedName === searchTerm;
    });
    try {
      setLocationId(location.Key);
      await getDataFunction(location.Key);
      setMessage(undefined);
    } catch (e) {
      console.log(e);
      setMessage("We could not find your search, please try again");
    }
  };

  const getDataFunction = async (locationKey) => {
    /* 1)get by axios the temp of today in the chosen city -with the key*/
    const tempOfToday = await axios.get(
      `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}`,
      {
        params: { apikey: keyToken },
      }
    );
    setTempOfThecurrentDay(tempOfToday.data[0]);

    /* 2)get by axios the temp of all week -with the key*/

    const fiveDaysTemp = await axios.get(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}`,
      {
        params: { apikey: keyToken },
      }
    );
    setTempOfThecurrentWeek(fiveDaysTemp.data);
  };
  const searchByWordTheLocation = async () => {
    /* get by axios the data geo locations by key words*/
    const geolocations = await axios.get(
      `http://dataservice.accuweather.com/locations/v1/cities/autocomplete`,
      {
        params: { apikey: keyToken, q: searchTerm },
      }
    );
    setArrayGeoLoc(geolocations.data);
  };

  useEffect(() => {
    console.log(props.location);
    if (props.location.state) {
      getDataFunction(props.location.state.favId);
      setLocation(props.location.state.favLoc);
      setLocationId(props.location.state.favId);
      history.push({
        pathname: "/",
        state: undefined,
      });
    } else {
      //  Provide start with search
      if (searchTerm === "") {
        setLocation("Tel-Aviv");
        setLocationId("215854");
        getDataFunction("215854");
        setMessage(undefined);
      } else {
        //Timer for every search
        const timeoutId = setTimeout(() => {
          if (searchTerm) {
            searchByWordTheLocation();
          }
        }, 200);

        return () => {
          clearTimeout(timeoutId);
        };
      }
    }
  }, [searchTerm]);

  const renderOptions = arrayGeoLoc.map((location, idx) => {
    let options = [];

    options.push(
      <option key={idx} value={location.key}>
        {location.LocalizedName}
      </option>
    );

    return options;
  });

  return (
    <ConatinerWeather isDarkMode={props.isDarkMode}>
      <form onSubmit={handleSubmit}>
        <Row>
          <SearchInput
            onChange={(e) => setSearchTerm(e.target.value)}
            list="locations"
            placeholder="Enter a city name ..."
          />
          <ButtonStyled onClick={handleSubmit} isDarkMode={props.isDarkMode}>
            Search
            <BsSearch style={{ marginLeft: "5px" }} />
          </ButtonStyled>
        </Row>
        <datalist id="locations">{renderOptions}</datalist>
      </form>

      {message && <MessageText error={true}>{message}</MessageText>}

      {message === undefined ? (
        <WeekChangeTemp
          isDarkMode={props.isDarkMode}
          weektemp={tempOfThecurrentWeek}
          currenttempbyid={tempOfThecurrentDay}
          location={location}
          locationId={locationId}
        />
      ) : null}
    </ConatinerWeather>
  );
}

const mapStateToProps = (state) => {
  return {
    favorites: state.ToolbarLocationReducer,
  };
};

export default connect(mapStateToProps)(Weather);

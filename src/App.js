import "./App.css";
import { Route, Switch } from "react-router-dom";
import React, { useState } from "react";

/* Components */
import Navbar from "./components/NavBar/index";
import Sidebar from "./components/Sidebar/index";

/* Pages */
import Weather from "./pages/Weather/index";
import Favorites from "./pages/Favorites/index";

function App(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  return (
    <>
      <Sidebar
        isOpen={isOpen}
        toggle={toggle}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
      <Navbar
        toggle={toggle}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
      <Switch>
        <Route
          path={"/"}
          exact
          render={(propRouter) => (
            <Weather {...propRouter} {...props} isDarkMode={isDarkMode} />
          )}
        />

        <Route
          path={"/favorites/"}
          render={(propRouter) => (
            <Favorites {...propRouter} {...props} isDarkMode={isDarkMode} />
          )}
        />
      </Switch>
    </>
  );
}

export default App;

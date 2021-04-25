import React from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

import {
  NavBtnLink,
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
} from "./NavBarElements";

import DarkModeToggle from "react-dark-mode-toggle";

const Navbar = ({ toggle, setIsDarkMode, isDarkMode }) => {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav isDarkMode={isDarkMode}>
          <NavbarContainer>
            <NavLogo to="/weather">Herolo Weather Task</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem style={{ marginTop: "50px" }}>
                <DarkModeToggle
                  onChange={setIsDarkMode}
                  checked={isDarkMode}
                  size={50}
                />
              </NavItem>
              <NavItem>
                <NavBtnLink
                  to={"/"}
                  smooth={"true"}
                  duration={500}
                  exact="true"
                  offset={-80}
                >
                  Home{" "}
                </NavBtnLink>
              </NavItem>

              <NavItem>
                <NavBtnLink
                  to={"/favorites"}
                  smooth={"true"}
                  duration={500}
                  exact="true"
                  offset={-80}
                >
                  Favorites{" "}
                </NavBtnLink>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;

import React from "react";
import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarMenu,
  SidebarWrapper,
  SidebarRoute,
  RowBttns,
} from "./SidebarElements";
import DarkModeToggle from "react-dark-mode-toggle";

const Sidebar = ({ isOpen, toggle, isDarkMode, setIsDarkMode }) => {
  return (
    <SidebarContainer isDarkMode={isDarkMode} isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarRoute to={"/"} onClick={toggle}>
            Home
          </SidebarRoute>

          <SidebarRoute to={"/favorites"} onClick={toggle}>
            Favorites
          </SidebarRoute>
          <RowBttns>
            <DarkModeToggle
              onChange={setIsDarkMode}
              checked={isDarkMode}
              size={50}
            />
          </RowBttns>
        </SidebarMenu>
        <RowBttns></RowBttns>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

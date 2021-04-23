import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle} to="about" smooth={true} duration={500} offset={-80}>
            About
          </SidebarLink>
          <SidebarLink onClick={toggle} to="experience" smooth={true} duration={500} offset={-80}>
            Experience
          </SidebarLink>
          <SidebarLink onClick={toggle} to="projects" smooth={true} duration={500} offset={-80}>
            Projects
          </SidebarLink>
          <SidebarLink onClick={toggle} to="skills" smooth={true} duration={500} offset={-80}>
            Skills
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

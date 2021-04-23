import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  NavBtn,
  NavBtnLink,
} from "./SidebarElements";
import { infoData } from "../../data";
import Resume from "../../Manav_Rajvanshi_Resume.pdf";
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {infoData.map((content, id) => {
            return <SideLink key={id + "-sidenav"} content={content} toggle={toggle} />;
          })}
        </SidebarMenu>
        <NavBtn>
          <NavBtnLink href={Resume} download>
            Resume
          </NavBtnLink>
        </NavBtn>
      </SidebarWrapper>
    </SidebarContainer>
  );
};
const SideLink = ({ toggle, content }) => {
  return (
    <SidebarLink onClick={toggle} to={content.id} smooth={true} duration={500} offset={-80}>
      {content.topLine}
    </SidebarLink>
  );
};
export default Sidebar;

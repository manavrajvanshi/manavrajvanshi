import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { infoData } from "../../data";
import Resume from "../../Manav_Rajvanshi_Resume.pdf";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Jarvis</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            {infoData.map((content, id) => {
              return <NavLink key={id + "-nav"} {...content} />;
            })}
          </NavMenu>
          <NavBtn>
            <NavBtnLink href={Resume} download>
              Resume
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

const NavLink = (content) => {
  return (
    <NavItem>
      <NavLinks to={content.id} smooth={true} duration={500}>
        {content.topLine}
      </NavLinks>
    </NavItem>
  );
};
export default Navbar;

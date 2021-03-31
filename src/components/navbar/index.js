import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    SearchIcon
  } from './navbarElements';
  import { BiSearch } from "react-icons/bi";

import Logo from '../../media/supercellLogo.jpg'
import SCID from '../../media/supercellidLogo.PNG'   
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img
            src={Logo}
            alt="Super Cell Logo" width="60" height="60"
          ></img>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/ourStory" activeStyle>
          Our Story
          </NavLink>
          <NavLink to="/games" activeStyle>
          Games
          </NavLink>
          <NavLink to="/careers" activeStyle>
          Careers
          </NavLink>
          <NavLink to="/support">
          Support
          </NavLink>
          <NavLink to="/safePlay" activeStyle> 
          Safe & Fair Play
          </NavLink>
          <NavBtn>
          <img
            src={SCID}
            alt="Super Cell ID Logo"  height="25"
          ></img>
          <SearchIcon activeStyle/>
          </NavBtn>
        
          
        </NavMenu>
      </Nav>
    </>
  );
};
export default Navbar;

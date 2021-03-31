import { FaBars,FaSistrix } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
 
//   padding: 0.5rem calc((100vw - 1000px) / 2);
//   z-index: 10;
  
   justify-content: flex-start; 
`;

export const NavLink = styled(Link)`
  color: #696969;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: bold;
  &.active {
    color: #fff;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  margin-right: 40px;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
export const SearchIcon = styled(FaSistrix)`
  color: #696969;
  margin-right: 40px;
  font-size: 1.8rem;
  margin-left: 10px;
  border-style: solid;
  border-top-style: none;
  border-bottom-style: none;
  border-right-style: none;
  
  padding-top: 30px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  &.active {
    color: #fff;
  }
  
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

   width: 100vw;
  white-space: nowrap;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 100px;
    
   justify-content: flex-end;
  width: 100vw; 
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
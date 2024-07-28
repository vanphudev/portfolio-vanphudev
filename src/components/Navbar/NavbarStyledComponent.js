import {Link as LinkR} from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.div`
   background-color: red;
   height: 80px;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 1rem;
   position: sticky;
   top: 0;
   z-index: 10;
   @media (max-width: 960px) {
      trastion: 0.8s all ease;
   }
`;
export const NavbarContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 60px;
   z-index: 1;
   width: 100%;
   padding: 0 0px;
   max-width: 1200px;
   position: relative;
   background: transparent;
`;

export const NavLogo = styled(LinkR)`
   width: 500px;
   padding: 0 2px;
   display: flex;
   justify-content: center;
   align-items: center;
   text-decoration: none;
   @media (max-width: 974px) {
      width: 400px;
      padding: 0 0px;
      justify-content: start;
   }
   @media (max-width: 768px) {
      width: 300px;
      padding: 0 0px;
      justify-content: start;
   }
   @media (max-width: 480px) {
      width: 250px;
      padding: 0 0px;
      justify-content: start;
   }
   @media (max-width: 320px) {
      width: 200px;
      padding: 0 0px;
      justify-content: start;
   }
`;
export const Span = styled.div`
   padding: 0 4px;
   font-weight: bold;
   font-size: 18px;
`;
export const NavItems = styled.ul`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 32px;
   padding: 0 6px;
   list-style: none;
   @media screen and (max-width: 974px) {
      display: none;
   }
`;

export const NavLink = styled.a`
   color: ${({theme}) => theme.text_primary};
   font-weight: 500;
   cursor: pointer;
   transition: all 0.02s ease-in-out;
   text-decoration: none;
   padding: 6px 0px;
   position: relative;
   z-index: 1;
   &:hover {
      color: ${({theme}) => theme.primary};
   }
   &:active {
      border-bottom: 2px solid ${({theme}) => theme.primary};
   }
`;

export const GitHubButton = styled.a`
   border: 1px solid ${({theme}) => theme.primary};
   justify-content: center;
   display: flex;
   width: "max-content";
   white-space: nowrap;
   align-items: center;
   height: 70%;
   border-radius: 20px;
   color: ${({theme}) => theme.primary};
   cursor: pointer;
   padding: 0 20px;
   font-weight: 500;
   text-decoration: none;
   font-size: 16px;
   transition: all 0.6s ease-in-out;
   &:hover {
      background-color: ${({theme}) => theme.primary};
      color: ${({theme}) => theme.white};
   }
`;

export const ButtonContainer = styled.div`
   width: "max-content";
   height: 100%;
   display: flex;
   justify-content: end;
   align-items: center;
   padding: 0 6px;
   @media screen and (max-width: 974px) {
      display: none;
   }
`;

export const MobileIcon = styled.div`
   display: none;
   @media screen and (max-width: 974px) {
      display: block;
      position: absolute;
      top: transform: translateY(-50%);
      right: 2px;
      font-size: 2rem;
      cursor: pointer;
      color: ${({theme}) => theme.text_primary};
   }
   @media screen and (max-width: 480px) {
      display: block;
      position: absolute;
      top: transform: translateY(-50%);
      right: 24px;
      font-size: 1.5rem;
      cursor: pointer;
      color: ${({theme}) => theme.text_primary};
   }
`;

export const MobileMenu = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   gap: 16px;
   position: absolute;
   top: 80px;
   right: 0;
   width: 100%;
   height: 200px;
   overflow-y: scroll;
   padding: 12px;
   background: ${({theme}) => theme.card_light + 99};
   backdrop-filter: blur(2px);
   transition: width 0.3s ease, padding 0.3s ease, justify-content 0.3s ease;
   transform: ${({isOpen}) => (isOpen ? "translateY(0)" : "translateY(-100%)")};
   border-radius: 0 0 20px 20px;
   box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
   opacity: ${({isOpen}) => (isOpen ? "100%" : "0")};
   z-index: ${({isOpen}) => (isOpen ? "1000" : "-1000")};
`;

export const MobileMenuItems = styled.ul`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 32px;
   list-style: none;
   width: 100%;
   height: 100%;
`;

export const MobileLink = styled.a`
   color: ${({theme}) => theme.text_primary};
   font-weight: 500;
   cursor: pointer;
   transition: all 0.2s ease-in-out;
   text-decoration: none;
   text-align: center;
   padding: 6px 0px;
   &:hover {
      color: ${({theme}) => theme.primary};
   }
   &:active {
      border-bottom: 2px solid ${({theme}) => theme.primary};
   }
`;

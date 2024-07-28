import React from "react";
import {
   Nav,
   NavLink,
   NavbarContainer,
   Span,
   NavLogo,
   NavItems,
   GitHubButton,
   ButtonContainer,
   MobileIcon,
   MobileMenu,
   MobileLink,
} from "./NavbarStyledComponent";
import {FaBars} from "react-icons/fa";
import {Biography} from "../../data/constants";
import {useTheme} from "styled-components";
import LogoHome from "../../assets/icon/logohome.svg";

const Navbar = () => {
   const [isOpen, setIsOpen] = React.useState(false);
   const theme = useTheme();
   return (
      <Nav>
         <NavbarContainer>
            <NavLogo to='/'>
               <div
                  href='/'
                  style={{
                     display: "flex",
                     alignItems: "center",
                     color: "white",
                     marginBottom: "20",
                     cursor: "pointer",
                  }}>
                  <Span>
                     <img src={LogoHome} alt='logo' style={{width: "100%"}} />
                  </Span>
               </div>
            </NavLogo>
            <MobileIcon>
               <FaBars
                  onClick={() => {
                     setIsOpen(!isOpen);
                  }}
               />
            </MobileIcon>
            <NavItems>
               <NavLink href='#about'>About</NavLink>
               <NavLink href='#skills'>Skills</NavLink>
               <NavLink href='#projects'>Projects</NavLink>
               <NavLink href='#education'>Education</NavLink>
            </NavItems>
            <ButtonContainer>
               <GitHubButton href={Biography.github} target='_blank'>
                  Github Profile
               </GitHubButton>
            </ButtonContainer>
            {isOpen && (
               <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen}>
                  <MobileLink
                     href='#about'
                     onClick={() => {
                        setIsOpen(!isOpen);
                     }}>
                     About
                  </MobileLink>
                  <MobileLink
                     href='#skills'
                     onClick={() => {
                        setIsOpen(!isOpen);
                     }}>
                     Skills
                  </MobileLink>
                  <MobileLink
                     href='#projects'
                     onClick={() => {
                        setIsOpen(!isOpen);
                     }}>
                     Projects
                  </MobileLink>
                  <MobileLink
                     href='#education'
                     onClick={() => {
                        setIsOpen(!isOpen);
                     }}>
                     Education
                  </MobileLink>
                  <GitHubButton
                     style={{
                        margin: "0 auto",
                        padding: "10px 16px",
                        background: `${theme.primary}`,
                        color: "white",
                        width: "max-content",
                        height: "max-content",
                     }}
                     href={Biography.github}
                     target='_blank'>
                     Github Profile
                  </GitHubButton>
               </MobileMenu>
            )}
         </NavbarContainer>
      </Nav>
   );
};

export default Navbar;

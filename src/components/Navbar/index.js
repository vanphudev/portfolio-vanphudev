import React, {useEffect, useState} from "react";
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
import {StyleSheetManager} from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import Logo from "../../assets/icon/logohome.svg";
import "../../styles/navLinkButton.scss";

const Navbar = (setDarkMode, darkMode) => {
   const [isOpen, setIsOpen] = useState(false);
   const [third, setThird] = useState(false);
   const theme = useTheme();
   useEffect(() => {
      const handleScroll = () => {
         const currentScrollY = window.scrollY;
         const windowWidth = window.innerWidth;
         if (currentScrollY > 30 && windowWidth > 1350) {
            setThird(true);
         } else {
            setThird(false);
         }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   useEffect(() => {
      const handleResize = () => {
         if (window.innerWidth > 976) {
            setIsOpen(false);
         }
      };
      window.addEventListener("resize", handleResize);
      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);

   return (
      <StyleSheetManager shouldForwardProp={isPropValid}>
         <Nav third={third === true ? "true" : "false"}>
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
                        <img src={Logo} alt='logo' style={{width: "100%"}} />
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
                  <NavLink href='#about' className='navLinkButton'>
                     About
                  </NavLink>
                  <NavLink href='#skills' className='navLinkButton'>
                     Skills
                  </NavLink>
                  <NavLink href='#projects' className='navLinkButton'>
                     Projects
                  </NavLink>
                  <NavLink href='#education' className='navLinkButton'>
                     Education
                  </NavLink>
               </NavItems>
               <ButtonContainer>
                  <GitHubButton href={Biography.github} target='_blank' darkMode={darkMode}>
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
      </StyleSheetManager>
   );
};

export default Navbar;

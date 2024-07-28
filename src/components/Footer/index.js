import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import {Biography} from "../../data/constants";
import {getYears} from "../../utils/dateFooter";

const FooterContainer = styled.div`
   width: 100%;
   padding: 2rem 0;
   display: flex;
   justify-content: center;
   background: linear-gradient(100.26deg, rgba(0, 102, 255, 0.05) 42.33%, rgba(150, 0, 225, 0.05) 127.07%);
`;

const FooterWrapper = styled.footer`
   width: 100%;
   max-width: 1200px;
   display: flex;
   flex-direction: column;
   gap: 14px;
   align-items: center;
   padding: 1rem;
   color: ${({theme}) => theme.text_primary};
`;

const Logo = styled.h1`
   background: linear-gradient(200deg, #1b8b00 0%, #a2d240 74%);
   background-clip: text;
   color: transparent;
   font-weight: 900;
   font-size: 40px;
   font-family: "Montserrat Alternates", sans-serif;
   font-style: italic;
   @media (max-width: 1010px) {
      font-size: 28px;
   }
`;

const Nav = styled.nav`
   width: 100%;
   max-width: 800px;
   margin-top: 0.5rem;
   display: flex;
   flex-direction: row;
   gap: 2rem;
   justify-content: center;
   @media (max-width: 768px) {
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
      text-align: center;
      font-size: 12px;
   }
`;

const NavLink = styled.a`
   color: ${({theme}) => theme.text_primary};
   text-decoration: none;
   font-size: 1.2rem;
   transition: color 0.2s ease-in-out;
   &:hover {
      color: ${({theme}) => theme.primary};
   }
   @media (max-width: 974px) {
      font-size: 1rem;
   }
`;

const SocialMediaIcons = styled.div`
   display: flex;
   margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
   display: inline-block;
   margin: 0 1rem;
   font-size: 1.5rem;
   color: ${({theme}) => theme.text_primary};
   cursor: pointer;
   transition: color 0.2s ease-in-out;
   &:hover {
      color: ${({theme}) => theme.primary};
   }
`;

const Copyright = styled.p`
   margin-top: 1.5rem;
   font-size: 0.9rem;
   color: ${({theme}) => theme.soft2};
   text-align: center;
`;

function Footer() {
   return (
      <FooterContainer>
         <FooterWrapper>
            <Logo>vanphudev</Logo>
            <Nav>
               <NavLink href='#about'>About</NavLink>
               <NavLink href='#skills'>Skills</NavLink>
               <NavLink href='#experience'>Experience</NavLink>
               <NavLink href='#projects'>Projects</NavLink>
               <NavLink href='#education'>Education</NavLink>
            </Nav>
            <SocialMediaIcons>
               <SocialMediaIcon href={Biography.facebook} target='display'>
                  <FacebookIcon />
               </SocialMediaIcon>
               <SocialMediaIcon href={Biography.zalo} target='display'>
                  <ContactPhoneIcon />
               </SocialMediaIcon>
               <SocialMediaIcon href={Biography.linkedin} target='display'>
                  <LinkedInIcon />
               </SocialMediaIcon>
               <SocialMediaIcon href={Biography.instagram} target='display'>
                  <InstagramIcon />
               </SocialMediaIcon>
            </SocialMediaIcons>
            <Copyright>&copy; {getYears()} vanphudev. All rights reserved - Powered by vanphudev</Copyright>
         </FooterWrapper>
      </FooterContainer>
   );
}

export default Footer;

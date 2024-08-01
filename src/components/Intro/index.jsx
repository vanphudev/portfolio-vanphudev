import React from "react";
import {
   HeroContainer,
   HeroBg,
   HeroInnerContainer,
   HeroLeftContainer,
   HeroRightContainer,
   Title,
   TextLoop,
   Span,
   SubTitle,
   ResumeButton,
   ButtonAbout,
   Img,
   ContainerFollow,
   SocialMediaIcon,
} from "./IntroStyleSection.js";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import IntroBgAnimation from "../IntroBgAnimation/index";
import {Typewriter} from "react-simple-typewriter";
import {Biography} from "../../data/constants.js";

const IntroSections = () => {
   return (
      <>
         <div id='about' style={{position: "relative", zIndex: "2"}}>
            <HeroContainer>
               <HeroBg>
                  <IntroBgAnimation />
               </HeroBg>
               <HeroInnerContainer>
                  <HeroLeftContainer id='Left' translate='no'>
                     <Title translate='no'>
                        Hi there!, I am <br /> {Biography.name}
                     </Title>
                     <TextLoop>
                        A
                        <Span translate='no'>
                           <Typewriter
                              cursor
                              cursorBlinking
                              delaySpeed={1000}
                              deleteSpeed={25}
                              loop={0}
                              typeSpeed={75}
                              words={Biography.roles}
                           />
                        </Span>
                     </TextLoop>
                     <SubTitle>{Biography.description}</SubTitle>
                     <ResumeButton href={Biography.cv_download} target='_parent'>
                        Download My CV
                     </ResumeButton>
                     <ButtonAbout to='/cv-online'>View CV Online</ButtonAbout>
                  </HeroLeftContainer>
                  <HeroRightContainer id='Right'>
                     <Img src={Biography.image} alt='hero-image' />
                  </HeroRightContainer>
               </HeroInnerContainer>
            </HeroContainer>
            <ContainerFollow>
               <SocialMediaIcon href={Biography.facebook} target='display'>
                  <FacebookIcon fontSize='' style={{fontSize: "70px"}} />
               </SocialMediaIcon>
               <SocialMediaIcon href={Biography.github} target='display'>
                  <GitHubIcon style={{fontSize: "70px"}} />
               </SocialMediaIcon>
               <SocialMediaIcon href={Biography.linkedin} target='display'>
                  <LinkedInIcon style={{fontSize: "70px"}} />
               </SocialMediaIcon>
               <SocialMediaIcon href={Biography.instagram} target='display'>
                  <InstagramIcon style={{fontSize: "70px"}} />
               </SocialMediaIcon>
            </ContainerFollow>
         </div>
      </>
   );
};

export default IntroSections;

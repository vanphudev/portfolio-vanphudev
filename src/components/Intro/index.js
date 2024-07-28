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
} from "./IntroStyleSection.js";
import IntroBgAnimation from "../IntroBgAnimation/index";
import HeroImg from "../../assets/images/Image_Personal.jpg";
import Typewriter from "typewriter-effect";
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
                  <HeroLeftContainer id='Left'>
                     <Title>
                        Hi there!, I am <br /> {Biography.name}
                     </Title>
                     <TextLoop>
                        I am a
                        <Span>
                           <Typewriter
                              options={{
                                 strings: Biography.roles,
                                 autoStart: true,
                                 loop: true,
                              }}
                           />
                        </Span>
                     </TextLoop>
                     <SubTitle>{Biography.description}</SubTitle>
                     <ResumeButton href={Biography.cv_download} target='_parent'>
                        Download My CV
                     </ResumeButton>
                     
                     <ButtonAbout to='/about'>About Me</ButtonAbout>
                  </HeroLeftContainer>
                  <HeroRightContainer id='Right'>
                     <Img src={HeroImg} alt='hero-image' />
                  </HeroRightContainer>
               </HeroInnerContainer>
            </HeroContainer>
         </div>
      </>
   );
};

export default IntroSections;

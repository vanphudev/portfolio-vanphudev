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
   ContactForMeTagH2,
} from "./IntroStyleSection.js";
import IntroBgAnimation from "../IntroBgAnimation/index";
import {Typewriter} from "react-simple-typewriter";
import {Biography} from "../../data/constants.js";
import Logo from "../../assets/images/Image_Personal.jpg";
import {useTheme} from "styled-components";
import {TooltipInstagram, TooltipLinkedin, Tooltipfacebook, TooltipGithub, TooltipZalo, TooltipGmail} from "./tooltip.jsx";

const IntroSections = () => {
   const theme = useTheme();
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
                     <Img src={Logo} alt='hero-image' />
                  </HeroRightContainer>
               </HeroInnerContainer>
            </HeroContainer>
            <ContactForMeTagH2>Feel free to reach out for any inquiries or collaborations.</ContactForMeTagH2>
            <ContainerFollow>
               {Biography.listInfo &&
                  Biography.listInfo.map((item, index) => {
                     const renderTooltip = (item) => {
                        switch (item.id) {
                           case "LinkedIn":
                              return (
                                 <TooltipLinkedin
                                    key={index}
                                    nameUser={item.id}
                                    username={item.username}
                                    link={item.link}
                                    text={item.text}
                                    ui={item.ui}
                                 />
                              );
                           case "Instagram":
                              return (
                                 <TooltipInstagram
                                    key={index}
                                    nameUser={item.id}
                                    username={item.username}
                                    link={item.link}
                                    text={item.text}
                                    ui={item.ui}
                                 />
                              );
                           case "Facebook":
                              return (
                                 <Tooltipfacebook
                                    key={index}
                                    nameUser={item.id}
                                    username={item.username}
                                    link={item.link}
                                    text={item.text}
                                    ui={item.ui}
                                 />
                              );
                           case "Github":
                              return (
                                 <TooltipGithub
                                    key={index}
                                    nameUser={item.id}
                                    username={item.username}
                                    link={item.link}
                                    text={item.text}
                                    ui={item.ui}
                                    theme={theme.isDark}
                                 />
                              );
                           case "Zalo":
                              return (
                                 <TooltipZalo
                                    key={index}
                                    nameUser={item.id}
                                    username={item.username}
                                    link={item.link}
                                    text={item.text}
                                    ui={item.ui}
                                 />
                              );
                           case "Gmail":
                              return (
                                 <TooltipGmail
                                    key={index}
                                    nameUser={item.id}
                                    username={item.username}
                                    link={item.link}
                                    text={item.text}
                                    ui={item.ui}
                                 />
                              );
                           default:
                              return null;
                        }
                     };
                     return renderTooltip(item);
                  })}
            </ContainerFollow>
         </div>
      </>
   );
};

export default IntroSections;

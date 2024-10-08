import styled, {keyframes} from "styled-components";
import {Link as LinkR} from "react-router-dom";
import Contact from "./../Contact/index";
export const HeroContainer = styled.div`
   background: ${({theme}) => theme.card_light};
   display: flex;
   justify-content: center;
   position: relative;
   padding: 40px 30px;
   @media (max-width: 960px) {
      padding: 66px 16px;
   }
   @media (max-width: 640) {
      padding: 32px 16px;
   }
   z-index: 1;
   clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

export const HeroBg = styled.div`
   position: absolute;
   display: flex;
   justify-content: end;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   width: 100%;
   height: 100%;
   max-width: 1360px;
   overflow: hidden;
   padding: 0 30px;
   top: 50%;
   left: 50%;
   -webkit-transform: translateX(-50%) translateY(-50%);
   transform: translateX(-50%) translateY(-50%);
   @media (max-width: 960px) {
      justify-content: center;
      padding: 0 0px;
   }
`;

export const HeroInnerContainer = styled.div`
   position: relative;
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   max-width: 1100px;
   @media (max-width: 960px) {
      flex-direction: column;
   }
`;
export const HeroLeftContainer = styled.div`
   width: 100%;
   order: 1;
   @media (max-width: 960px) {
      order: 2;
      margin-bottom: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
   }

   @media (max-width: 640px) {
      order: 2;
      margin-bottom: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
   }
`;

export const HeroRightContainer = styled.div`
   width: 100%;
   display: flex;
   order: 2;
   justify-content: end;
   gap: 12px;
   @media (max-width: 960px) {
      order: 1;
      justify-content: center;
      align-items: center;
      margin-bottom: 80px;
   }

   @media (max-width: 640px) {
      margin-bottom: 30px;
   }
`;

export const Img = styled.img`
   position: relative;
   width: 100%;
   height: 100%;
   max-width: 400px;
   max-height: 400px;
   border-radius: 50%;
   border: 2px solid ${({theme}) => theme.primary};

   @media (max-width: 768px) {
      max-width: 400px;
      max-height: 400px;
   }

   @media (max-width: 640px) {
      max-width: 280px;
      max-height: 280px;
   }
`;

export const Title = styled.div`
   font-weight: 700;
   font-size: 50px;
   color: ${({theme}) => theme.text_primary};
   line-height: 68px;
   font-family: "Kanit", sans-serif;
   font-style: normal;

   @media (max-width: 974px) {
      text-align: center;
   }
   @media (max-width: 768px) {
      font-size: 40px;
      line-height: 48px;
      margin-bottom: 8px;
   }
   @media (max-width: 480px) {
      font-size: 30px;
      line-height: 40px;
      margin-bottom: 8px;
   }
   @media (max-width: 320px) {
      font-size: 24px;
      line-height: 32px;
      margin-bottom: 8px;
   }
`;

export const TextLoop = styled.div`
   font-weight: 600;
   font-size: 30px;
   display: flex;
   gap: 12px;
   color: ${({theme}) => theme.text_primary};
   line-height: 68px;
   @media (max-width: 974px) {
      text-align: center;
   }
   @media (max-width: 768px) {
      font-size: 25px;
      line-height: 48px;
      margin-bottom: 16px;
   }
   @media (max-width: 480px) {
      font-size: 16px;
      line-height: 40px;
      margin-bottom: 8px;
   }
   @media (max-width: 320px) {
      font-size: 12px;
      line-height: 32px;
      margin-bottom: 8px;
   }
`;

export const Span = styled.span`
   color: ${({theme}) => theme.primary};
   cursor: pointer;
`;

export const SubTitle = styled.div`
   font-size: 20px;
   line-height: 32px;
   margin-bottom: 42px;
   color: ${({theme}) => theme.text_primary + 95};

   @media (max-width: 974px) {
      text-align: center;
   }
   @media (max-width: 768px) {
      font-size: 16px;
      line-height: 32px;
   }
   @media (max-width: 480px) {
      font-size: 13px;
      line-height: 28px;
      margin-bottom: 8px;
   }
   @media (max-width: 320px) {
      font-size: 10px;
      line-height: 20px;
      margin-bottom: 8px;
   }
`;

const gradient = keyframes`
   0% {
      background-position: 125% 50%;
   }
   100% {
      background-position: 0 50%;
   }
`;

export const ResumeButton = styled.a`
   appearance: button;
   text-decoration: none;
   width: 95%;
   box-sizing: border-box;
   max-width: 300px;
   text-align: center;
   padding: 16px 0;
   color:${({theme}) => theme.white};
   border-radius: 20px;
   cursor: pointer;
   font-size: 20px;
   font-weight: 600;
   background-size: 500% 100%;
   box-shadow:#98c230 0px 5px 15px;
   background-image: radial-gradient(circle, #98c230 0, #59a646 49%, #22994f 75%, #007e42 100%);
   animation: 3s ${gradient} ease infinite;
   margin-bottom: 30px;
   &:hover {
      transform: scale(1.05);
      transition: all 0.4s ease-in-out;
      box-shadow:  20px 20px 60px #1F2634,
      filter: brightness(1);
   }    

   @media (max-width: 640px) {
      padding: 12px 0;
      font-size: 18px;
   } 
`;

export const ButtonAbout = styled(LinkR)`
   appearance: button;
   text-decoration: none;
   width: 95%;
   max-width: 300px;
   text-align: center;
   box-sizing: border-box;
   padding: 16px 0;
   color:${({theme}) => theme.text_primary};
   border-radius: 20px;
   cursor: pointer;
   font-size: 20px;
   font-weight: 600;
   outline: 3px solid #59a646; 
   padding: 10px 20px;
   transition: all 0.3s ease;
   box-shadow:#98c230 0px 5px 15px;
   z-index: 100;
   &:hover {
      transform: scale(1.05);
      transition: all 0.4s ease-in-out;
      box-shadow:  20px 20px 60px #1F2634,
      filter: brightness(1);
      outline-color: #59a646;
   }    
   @media (max-width: 640px) {
      padding: 12px 0;
      font-size: 18px;
   } 
`;

export const ContainerFollow = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
   gap: 100px;
   margin-top: 20px;
   margin-bottom: 50px;
   z-index: 9999;
   @media (max-width: 768px) {
      display: none;
   }
`;
export const SocialMediaIcon = styled.a`
   display: inline-block;
   margin: 0 1rem;
   color: ${({theme}) => theme.text_primary};
   cursor: pointer;
   transition: color 0.2s ease-in-out;
   &:hover {
      color: ${({theme}) => theme.primary};
   }
`;

export const ContactForMeTagH2 = styled.h2`
   text-align: center;
   margin-bottom: 50px;
   margin-top: 20px;
   color: ${({theme}) => theme.text_primary};
   @media (max-width: 768px) {
      display: none;
   }
`;

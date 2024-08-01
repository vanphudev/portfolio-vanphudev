import React from "react";
import styled from "styled-components";

const Document = styled.img`
   display: none;
   height: 70px;
   width: fit-content;
   background-color: #000;
   border-radius: 10px;
   &:hover {
      cursor: pointer;
      opacity: 0.8;
   }
`;

const Description = styled.div`
   width: 100%;
   font-size: 15px;
   font-weight: 400;
   color: ${({theme}) => theme.text_primary + 99};
   margin-bottom: 10px;
   @media (max-width: 768px) {
      font-size: 10px;
      font-weight: 200;
   }
`;

const Span = styled.span`
   overflow: hidden;
   display: -webkit-box;
   max-width: 100%;
   -webkit-line-clamp: 4;
   -webkit-box-orient: vertical;
   text-overflow: ellipsis;
`;

const Card = styled.div`
   max-width: 100%;
   border-radius: 10px;
   padding: 12px 16px;
   justify-content: space-between;
   position: relative;
   overflow: hidden;
   display: flex;
   cursor: pointer;
   flex-direction: column;
   gap: 12px;
   transition: all 0.3s ease-in-out;
   &:hover {
      box-shadow: ${({theme}) => theme.boxShadow};
      transform: translateY(-5px);
   }
   &:hover ${Document} {
      display: flex;
   }

   &:hover ${Span} {
      overflow: visible;
      -webkit-line-clamp: unset;
   }
   border: 0.1px solid #854ce6;
`;

const Top = styled.div`
   width: 100%;
   display: flex;
   gap: 12px;
`;

const Image = styled.img`
   height: 50px;
   background-color: #000;
   border-radius: 10px;
   @media only screen and (max-width: 768px) {
      height: 40px;
   }
`;

const Body = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
`;

const Name = styled.div`
   font-size: 18px;
   font-weight: 600;
   color: ${({theme}) => theme.text_primary + 99};
   @media only screen and (max-width: 768px) {
      font-size: 14px;
   }
`;

const Degree = styled.div`
   font-size: 14px;
   font-weight: 500;
   margin-top: 4px;
   margin-bottom: 4px;
   color: ${({theme}) => theme.primary};
   @media only screen and (max-width: 768px) {
      font-size: 12px;
      font-weight: 400;
   }
`;

const Date = styled.div`
   font-size: 12px;
   font-weight: 400;
   color: ${({theme}) => theme.primary};
   @media only screen and (max-width: 768px) {
      font-size: 10px;
      font-weight: 300;
   }
`;

const Grade = styled.div`
   font-size: 14px;
   font-weight: 500;
   color: ${({theme}) => theme.text_secondary + 99};
   @media only screen and (max-width: 768px) {
      font-size: 12px;
   }
`;

const EducationCard = ({education, alignImage}) => {
   return (
      <>
         {alignImage === "left" ? (
            <Card>
               <Top>
                  <Body>
                     <Name>{education.school}</Name>
                     <Degree>{education.degree}</Degree>
                     <Date>{education.date}</Date>
                  </Body>
                  <Image src={education.img} />
               </Top>
               <Grade>
                  <b>Grade: </b>
                  {education.grade}
               </Grade>
               <Description>
                  <Span>{education.desc}</Span>
               </Description>
            </Card>
         ) : (
            <Card>
               <Top>
                  <Image src={education.img} />
                  <Body>
                     <Name>{education.school}</Name>
                     <Degree>{education.degree}</Degree>
                     <Date>{education.date}</Date>
                  </Body>
               </Top>
               <Grade>
                  <b>Grade: </b>
                  {education.grade}
               </Grade>
               <Description>
                  <Span>{education.desc}</Span>
               </Description>
            </Card>
         )}
      </>
   );
};

export default EducationCard;

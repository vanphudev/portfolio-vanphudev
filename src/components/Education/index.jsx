import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import SchoolIcon from "@mui/icons-material/School";
import {useTheme} from "styled-components";
import {education} from "../../data/constants";
import EducationCard from "../Cards/EducationCard";
import {GetRandomColor} from "../../utils/randomColor";

const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   position: relative;
   z-index: 1;
   align-items: center;
   padding: 0px 0px 60px 0px;
   @media (max-width: 960px) {
      padding: 0px;
   }
`;

const Wrapper = styled.div`
   position: relative;
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-direction: column;
   width: 100%;
   max-width: 1350px;
   padding: 40px 0px 0px 0px;
   gap: 12px;
   @media (max-width: 960px) {
      flex-direction: column;
   }
`;

const Title = styled.div`
   font-size: 42px;
   text-align: center;
   font-weight: 600;
   margin-top: 20px;
   color: ${({theme}) => theme.text_primary};
   @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
   }
`;

const Desc = styled.div`
   font-size: 18px;
   text-align: center;
   max-width: 600px;
   color: ${({theme}) => theme.text_secondary};
   @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 16px;
   }
`;

const ContainerFlex = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding: 10px;
`;

const Index = (darkMode) => {
   const [width, setWidth] = useState(window.innerWidth);
   const theme = useTheme();
   useEffect(() => {
      const handleResize = () => {
         setWidth(window.innerWidth);
      };
      window.addEventListener("resize", handleResize);
      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, [width, theme]);
   return (
      <Container id='education'>
         <Wrapper>
            <Title>Education</Title>
            <Desc>
               My education has been a journey of self-discovery and growth. My educational details are as follows.
            </Desc>
            <Timeline position='alternate'>
               {width <= 500
                  ? education.map((education, index) => (
                       <ContainerFlex key={index}>
                          <EducationCard education={education}></EducationCard>
                       </ContainerFlex>
                    ))
                  : education.map((education, index) => (
                       <TimelineItem key={index}>
                          <TimelineOppositeContent
                             sx={{m: "auto 0"}}
                             variant='body2'
                             style={{
                                fontSize: "30px",
                                color: theme.text_primary,
                             }}>
                             {education.date}
                          </TimelineOppositeContent>
                          <TimelineSeparator>
                             <TimelineConnector />
                             <TimelineDot style={{color: GetRandomColor(), padding: "7px", backgroundColor: "white"}}>
                                <SchoolIcon />
                             </TimelineDot>
                             <TimelineConnector />
                          </TimelineSeparator>
                          <TimelineContent sx={{py: "12px", px: 2}} >
                             <EducationCard
                                alignImage={index % 2 !== 0 ? "left" : "right"}
                                education={education}></EducationCard>
                          </TimelineContent>
                       </TimelineItem>
                    ))}
            </Timeline>
         </Wrapper>
      </Container>
   );
};

export default Index;

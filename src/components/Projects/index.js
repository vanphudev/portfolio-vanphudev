import React from "react";
import {StyleSheetManager} from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import {useState} from "react";
import {
   Container,
   Wrapper,
   Title,
   Desc,
   CardContainer,
   ToggleButtonGroup,
   ToggleButton,
   Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import {projects} from "../../data/constants";

const Projects = ({openModal, setOpenModal}) => {
   const [toggle, setToggle] = useState("all");
   return (
      <StyleSheetManager shouldForwardProp={isPropValid}>
         <Container id='projects'>
            <Wrapper>
               <Title>Projects</Title>
               <Desc>
                  Below are the projects I have completed, including personal and group projects utilizing various web
                  technologies.
               </Desc>
               <ToggleButtonGroup>
                  {toggle === "all" ? (
                     <ToggleButton active='true' value='all' onClick={() => setToggle("all")}>
                        All
                     </ToggleButton>
                  ) : (
                     <ToggleButton value='all' onClick={() => setToggle("all")}>
                        All
                     </ToggleButton>
                  )}
                  <Divider />
                  {toggle === "web app" ? (
                     <ToggleButton active='true' value='web app' onClick={() => setToggle("web app")}>
                        WEBSITE APP'S
                     </ToggleButton>
                  ) : (
                     <ToggleButton value='web app' onClick={() => setToggle("web app")}>
                        WEBSITE APP'S
                     </ToggleButton>
                  )}
                  <Divider />
                  {toggle === "window app" ? (
                     <ToggleButton active='true' value='window app' onClick={() => setToggle("window app")}>
                        WINDOWS APP'S
                     </ToggleButton>
                  ) : (
                     <ToggleButton value='window app' onClick={() => setToggle("window app")}>
                        WINDOWS APP'S
                     </ToggleButton>
                  )}
               </ToggleButtonGroup>
               <CardContainer>
                  {toggle === "all" ? (
                     projects.length > 0 ? (
                        projects.map((project, index) => (
                           <ProjectCard
                              key={index}
                              project={project}
                              openModal={openModal}
                              setOpenModal={setOpenModal}
                           />
                        ))
                     ) : (
                        <Desc>I have not updated this project yet. Please check back later!</Desc>
                     )
                  ) : projects.filter((item) => item.category === toggle).length > 0 ? (
                     projects
                        .filter((item) => item.category === toggle)
                        .map((project, index) => (
                           <ProjectCard
                              key={index}
                              project={project}
                              openModal={openModal}
                              setOpenModal={setOpenModal}
                           />
                        ))
                  ) : (
                     <Desc>I have not updated this project yet. Please check back later!</Desc>
                  )}
               </CardContainer>
            </Wrapper>
         </Container>
      </StyleSheetManager>
   );
};

export default Projects;

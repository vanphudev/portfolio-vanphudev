import React, {useState} from "react";
import styled from "styled-components";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ProjectDetails from "../components/ProjectDetails";
import IntroSections from "../components/Intro/index";
import "../styles/App.scss";

const Wrapper = styled.div`
   background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%),
      linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
   width: 100%;
   clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

const Home = () => {
   const [openModal, setOpenModal] = useState({state: false, project: null});
   return (
      <>
         <IntroSections />
         <Wrapper>
            <Skills />
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
         </Wrapper>
         {openModal.state && <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />}
      </>
   );
};

export default Home;

import React, {useState} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import styled, {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "./utils/themes.js";
import Navbar from "./components/Navbar";
import IntroSections from "./components/Intro/index";
import Footer from "./components/Footer";
import "./styles/App.scss";

const Body = styled.div`
   background-color: ${({theme}) => theme.bg};
   width: 100%;
   overflow-x: hidden;
`;

const Wrapper = styled.div`
   background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%),
      linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
   width: 100%;
   clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
   const [darkMode, setDarkMode] = useState(true);
   const [openModal, setOpenModal] = useState({state: false, project: null});
   console.log(openModal);
   return (
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
         <Router>
            <Navbar />
            <Body>
               <IntroSections />
               <Footer />
            </Body>
         </Router>
      </ThemeProvider>
   );
}

export default App;

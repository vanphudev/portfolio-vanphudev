import React, {useState, useEffect} from "react";
import {BrowserRouter} from "react-router-dom";
import RouterPublic from "./routes/Route-public/route";
import styled, {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "./utils/themes.js";
import Navbar from "./components/Navbar";
import ToggleLightDark from "./components/Toggleswitches/toggleLightDark";
import Home from "./pages/home";
import About from "./pages/about";
import Footer from "./components/Footer";
import MyComponent from "./utils/helmet";

const Body = styled.div`
   background-color: ${({theme}) => theme.bg};
   width: 100%;
`;

function App() {
   try {
      JSON.parse(localStorage.getItem("darkMode")) === null
         ? localStorage.setItem("darkMode", JSON.stringify(true))
         : JSON.parse(localStorage.getItem("darkMode"));
   } catch (error) {
      localStorage.setItem("darkMode", JSON.stringify(true));
   }
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
   const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")));
   useEffect(() => {
      const handleResize = () => {
         setWindowWidth(window.innerWidth);
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, [windowWidth]);

   return (
      <BrowserRouter>
         <MyComponent />
         <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            {windowWidth < 200 ? (
               <div className='mobile'>
                  <h1 style={{textAlign: "center"}}>Sorry, this website is not available on mobile devices</h1>
               </div>
            ) : (
               <Body>
                  <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
                  <RouterPublic Home={Home} About={About} />
                  <Footer />
                  <ToggleLightDark setDarkMode={setDarkMode} darkMode={darkMode} />
               </Body>
            )}
         </ThemeProvider>
      </BrowserRouter>
   );
}

export default App;

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
import Spinner from "./components/Spinner/spinner";
import SpeedDialTooltipOpen from "./components/SpeedDial/speedDial";

const Body = styled.div`
   background-color: ${({theme}) => theme.bg};
   width: 100%;
`;

const getInitialDarkMode = () => {
   const savedDarkMode = localStorage.getItem("darkMode");
   if (savedDarkMode === null || savedDarkMode === undefined || savedDarkMode === "") {
      return true;
   }

   try {
      return JSON.parse(savedDarkMode);
   } catch (e) {
      console.error("Đọc dữ liệu Darkmode lỗi !", e);
      return true;
   }
};
function App() {
   const [isLoading, setIsLoading] = useState(true);
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
   const [darkMode, setDarkMode] = useState(getInitialDarkMode);
   useEffect(() => {
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
   }, [darkMode]);

   useEffect(() => {
      const loadData = () => {
         return new Promise((resolve) => {
            setTimeout(() => {
               resolve();
            }, 2000);
         });
      };
      loadData().then(() => {
         setIsLoading(false);
      });
   }, []);

   useEffect(() => {
      const handleResize = () => {
         setWindowWidth(window.innerWidth);
      };
      window.addEventListener("resize", handleResize);
      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);

   if (isLoading) {
      return <Spinner />;
   }

   return (
      <BrowserRouter>
         <MyComponent />
         <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            {windowWidth < 200 ? (
               <div className='mobile'>
                  <h1 style={{textAlign: "center"}}>Sorry, this website is not available on mobile devices</h1>
               </div>
            ) : (
               <>
                  {" "}
                  <Body translate='no'>
                     <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
                     <RouterPublic Home={Home} About={About} />
                     <Footer />
                     <ToggleLightDark setDarkMode={setDarkMode} darkMode={darkMode} />
                  </Body>
                  <SpeedDialTooltipOpen />
               </>
            )}
         </ThemeProvider>
      </BrowserRouter>
   );
}

export default App;

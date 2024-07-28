import React, {useState} from "react";
import {BrowserRouter} from "react-router-dom";
import RouterPublic from "./routes/Route-public/route";
import styled, {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "./utils/themes.js";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Footer from "./components/Footer";
import "./styles/App.scss";

const Body = styled.div`
   background-color: ${({theme}) => theme.bg};
   width: 100%;
`;

function App() {
   const [darkMode, setDarkMode] = useState(true);
   return (
      <BrowserRouter>
         <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Body>
               <Navbar />
               <RouterPublic Home={Home} About={About} />
               <Footer />
            </Body>
         </ThemeProvider>
      </BrowserRouter>
   );
}

export default App;

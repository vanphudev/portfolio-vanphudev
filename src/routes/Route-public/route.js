import * as React from "react";
import {Routes, Route} from "react-router-dom";
const RouterPublic = ({Home, About}) => {
   return (
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/about' element={<About />} />
         <Route path='/admin' element={<Home />} />
      </Routes>
   );
};

export default RouterPublic;

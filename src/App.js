import React from "react";
import Home from "./Pages/Home/Home"
import {Routes, Route} from "react-router-dom";
import NotFound from "./Pages/NotFound/NotFound";
import FullPost from "./Pages/Post/FullPost";

function App() {
  return (
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/post/:id'} element={<FullPost/>}/>
        <Route path={'*'} element={<NotFound/>}/>
      </Routes>
  )
}

export default App;

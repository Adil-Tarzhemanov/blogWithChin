import React from "react";
import HomePage from "./Pages/HomePage/HomePage"
import {Routes,Route} from "react-router-dom";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import PostPage from "./Pages/PostPage/PostPage";

function App() {
  return (
      <Routes>
        <Route path={'/'} element={<HomePage/>}/>
        <Route path={'/4'} element={<PostPage/>}/>
        <Route path={'*'} element={<NotFoundPage/>}/>

      </Routes>

  )
}

export default App;

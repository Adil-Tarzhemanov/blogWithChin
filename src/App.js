import React from "react";
import Home from "./pages/Home/Home"
import {Routes, Route} from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import FullPost from "./pages/FullPost/FullPost";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import MainLayout from "./layouts/MainLayout";
import styles from './App.module.scss'

function App() {
  return (
      <div className={styles.container}>
        <Routes>
          <Route path={'/'} element={<MainLayout/>}>

            <Route path={''} element={<Home/>}/>
            <Route path={'post/:id'} element={<FullPost/>}/>
            <Route path={'*'} element={<NotFound/>}/>

          </Route>
        </Routes>
      </div>

  )
}

export default App;

import {Outlet} from "react-router-dom";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu";
import BurgerButtonOpen from "../components/BurgerMenu/BurgerButtonOpen/BurgerButtonOpen";
import {useState} from "react";



const MainLayout = () => {
  const [isOpened, setIsOpened] = useState(true)
  return (
        <>
          <BurgerButtonOpen
              isOpened={isOpened}
              setIsOpened={setIsOpened}
          />
          <BurgerMenu
              isOpened={isOpened}
          />
          <Outlet/>
        </>
    )
}
export default MainLayout;
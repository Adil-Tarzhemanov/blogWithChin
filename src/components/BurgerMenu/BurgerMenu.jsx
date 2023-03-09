import styles from './BurgerMenu.module.scss'
import BurgerButtonOpen from "./BurgerButtonOpen/BurgerButtonOpen";
import {useState} from "react";

const BurgerMenu = ({isOpened}) => {

  return (
      <div className={`${styles.container} ${isOpened ? styles.visibility : ''}`}>

      </div>
  )
}
export default BurgerMenu;
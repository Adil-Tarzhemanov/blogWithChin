import styles from './BurgerButtonOpen.module.scss'

const BurgerButtonOpen = ({isOpened,setIsOpened}) => {
  return (
      <div onClick={() => setIsOpened(prevState => !prevState)} className={styles.container}>
        <div className={styles.open}>
          <div className={styles.stick}></div>
          <div className={styles.stick}></div>
          <div className={styles.stick}></div>
        </div>
      </div>
  )
}
export default BurgerButtonOpen;
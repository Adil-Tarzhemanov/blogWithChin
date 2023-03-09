import styles from './NotFound.module.scss'

const NotFound = () => {
  return (
      <div className={styles.container}>
        <p className={styles.title}>Данная страница не найдена</p>
        <div className={styles.message}>Извините, по данному адресу страница не найдена</div>
      </div>
  )
}
export default NotFound;
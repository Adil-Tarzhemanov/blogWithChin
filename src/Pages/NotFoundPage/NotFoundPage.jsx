import styles from './NotFoundPage.module.scss'

const NotFoundPage = () => {
  return (
      <div className={styles.container}>
        <p className={styles.title}>Данная страница не найдена</p>
        <div className={styles.message}>Извините, по данному адресу страница не найдена</div>
      </div>
  )
}
export default NotFoundPage;
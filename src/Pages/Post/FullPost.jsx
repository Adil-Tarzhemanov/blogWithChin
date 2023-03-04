import styles from './FullPost.module.scss'
import {useParams} from "react-router-dom";
import {useEffect} from "react";

const FullPost = () => {
  const {id}=useParams()

  return (
      <div className={styles.container}>
        <h4>Имя</h4>
        <p>Текст</p>
      </div>
  )
}
export default FullPost;


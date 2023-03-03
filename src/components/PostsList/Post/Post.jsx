import styles from './Post.module.scss';
import {Link} from "react-router-dom";

export const Post = ({post, index}) => {
  return (
      <Link to={'/1'} style={{textDecoration: 'none'}}>
        <div className={styles.post}>
          <h3 className={styles.index}>{index + 1}</h3>
          <div className={styles.content}>
            <h2 className={styles.title}>
              {post.title}
            </h2>
            <p>
              {post.text}
            </p>
          </div>
        </div>
      </Link>

  )
}
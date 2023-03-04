import styles from './Post.module.scss';
import {Link} from "react-router-dom";

export const Post = ({post, index}) => {
  return (
      <Link className={styles.link} to={'/1'}>
        <div className={styles.postWrapper}>
          <div className={styles.post}>
            <h3 className={styles.index}>{index + 1}</h3>
            <div className={styles.content}>
              <h2 className={styles.title}>
                {post.title}
              </h2>
              <p className={styles.text}>
                {post.text}
              </p>
            </div>
          </div>
          <div className={styles.editElements}>
            <div className={styles.deletePost}>
              <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 10V16M14 10V16M18 6V18C18 19.1046 17.1046 20 16 20H8C6.89543 20 6 19.1046 6 18V6M4 6H20M15 6V5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V6" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={styles.changePost}>
              <svg fill="#000000" width="40px" height="40px" viewBox="-5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>pencil</title>
                <path d="M18.344 4.781l-3.406 3.063s1.125 0.688 2.156 1.656c1 0.969 1.719 2.063 1.719 2.063l2.906-3.469s-0.031-0.625-1.406-1.969c-1.406-1.344-1.969-1.344-1.969-1.344zM7.25 21.938l-0.156 1.5 10.813-11.25s-0.719-1-1.594-1.844c-0.906-0.875-1.938-1.563-1.938-1.563l-10.813 11.25 1.688-0.094 0.188 1.813zM0 26.719l2.688-5.5 1.5-0.125 0.125 1.719 1.813 0.25-0.188 1.375-5.438 2.75z"></path>
              </svg>
            </div>
          </div>
        </div>
      </Link>

  )
}
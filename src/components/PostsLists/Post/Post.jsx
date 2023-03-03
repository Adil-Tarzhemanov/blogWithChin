import styles from './Post.module.scss';

export const Post = ({ post, index }) => {
    return(
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
    )
}
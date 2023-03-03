import { Post } from './Post/Post';
import styles from './PostsList.module.scss';

export const PostsList = ({ postItems }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.titleList}>
                Список постов
            </h1>
            <div className={styles.postsList}>
                {postItems.map((post, index) =>
                    <Post
                        key={post.id}
                        post={post}
                        index={index} />
                )} 
            </div>
        </div>
    )
}
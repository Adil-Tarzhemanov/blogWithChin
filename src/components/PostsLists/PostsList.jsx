import { useState } from 'react';
import { Post } from './Post/Post';
import styles from './PostsList.module.scss';

export const PostsList = () => {
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: 'Чингиз Кельдибеков',
            text: 'Чингиз всегда был весёлым парнем, пока не полюбил прогу, она беспощадна и холодна, одна её частичка GIT, чего только стоит...'
        },
        {
            id: 2,
            title: 'Роберт Хуясаки',
            text: 'Роберт всегда был весёлым парнем, пока не полюбил члены, они беспощадны и холодны, одни их частички кончи, чего только стоят...'
        }
    ]);

    return (
        <div className={styles.container}>
            <h1 className={styles.titleList}>
                Список постов
            </h1>
            <div className={styles.postsList}>
                {posts.map((post, index) => 
                    <Post post={post} index={index} />
                )} 
            </div>
        </div>
    )
}
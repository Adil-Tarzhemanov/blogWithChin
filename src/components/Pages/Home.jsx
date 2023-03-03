import React from "react";
import styles from "../../App.module.scss";
import CreatePost from "../CreatePost/CreatePost";
import {PostsList} from "../PostsLists/PostsList";

const Home = () => {
  const [createPostIsOpen, setCreatePostIsOpen] = React.useState(false);
  const [postItems, setPostItems] = React.useState([
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

  const onClickCreatePost = () => {
    setCreatePostIsOpen(prevState => !prevState)
  }

  return (
      <div className={styles.App}>
        {
            createPostIsOpen && <CreatePost
                setCreatePostIsOpen={setCreatePostIsOpen}
                setPostItems={setPostItems}
                postItems={postItems}
            />
        }

        <button onClick={onClickCreatePost}>ПОСТ</button>
        <PostsList postItems={postItems}/>
      </div>
  );
}
export default Home;
import s from './App.module.scss'
import CreatePost from "./components/CreatePost/CreatePost";
import React from "react";
import { PostsList } from './components/PostsLists/PostsList';

function App() {
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
      <div className={s.App}>
        {
            createPostIsOpen && <CreatePost
                setCreatePostIsOpen={setCreatePostIsOpen}
                setPostItems={setPostItems}
                postItems={postItems}
            />
        }

        <button onClick={onClickCreatePost}>ПОСТ</button>
        <PostsList postItems={postItems} />
      </div>
  );
}

export default App;

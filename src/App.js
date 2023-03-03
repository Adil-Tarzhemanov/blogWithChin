import s from './App.module.scss'
import CreatePost from "./components/CreatePost/CreatePost";
import React from "react";
import './App.css';
import { PostsList } from './components/PostsLists/PostsList';

function App() {
  const [createPostIsOpen, setCreatePostIsOpen] = React.useState(false);
  const [postItems, setPostItems] = React.useState([]);

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
        <PostsList />
      </div>
  );
}

export default App;

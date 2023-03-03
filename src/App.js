import s from './App.scss'
import CreatePost from "./components/CreatePost/CreatePost";
import React from "react";

function App() {
  const [createPostIsOpen, setCreatePostIsOpen] = React.useState(false)
  const [postItems, setPostItems] = React.useState([])

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
      </div>
  );
}

export default App;

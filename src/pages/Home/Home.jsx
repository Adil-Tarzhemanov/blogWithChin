import React, {useState} from "react";
import styles from "./Home.module.scss";
import CreatePost from "../../components/CreatePost/CreatePost";
import {PostsList} from "../../components/PostsList/PostsList";
import {useSelector} from "react-redux";

const Home = () => {
  //переименовать CreatePost в CreatePostModalWindow
  const {postItems} = useSelector((state) => state.postSlice)
  const [createPostIsOpen, setCreatePostIsOpen] = React.useState(false);

  return (
      <div className={styles.container}>
        {
          //переименовать CreatePost в CreatePostModalWindow
            createPostIsOpen && <CreatePost
                setCreatePostIsOpen={setCreatePostIsOpen}
                postItems={postItems}
            />
        }

        <PostsList
            setCreatePostIsOpen={setCreatePostIsOpen}
            postItems={postItems}/>
      </div>
  );
}

export default Home;
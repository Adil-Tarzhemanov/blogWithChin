import React from "react";
import styles from "./Home.module.scss";
import CreatePost from "../../components/CreatePost/CreatePost";
import {PostsList} from "../../components/PostsList/PostsList";
import {useDispatch, useSelector} from "react-redux";

const Home = () => {
  const dispatch=useDispatch()
  const {postItems}=useSelector((state) => state.postSlice)
  const [createPostIsOpen, setCreatePostIsOpen] = React.useState(false);
  const onClickCreatePost = () => {
    setCreatePostIsOpen(prevState => !prevState);
  }
  return (
      <div className={styles.container}>
        {
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
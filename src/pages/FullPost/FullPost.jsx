import styles from './FullPost.module.scss'
import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import React from "react";

const FullPost = () => {
  const [animation, setAnimation] = React.useState(false)
  const {id} = useParams()
  const {postItems} = useSelector((state) => state.postSlice)
  const findPost = postItems.find((post) => {
    return post.id.toString() === id
  })
  useEffect(() => {
    setAnimation(true)
  }, [])


  return (
      <div className={styles.container}>
        <Link to={'/'}>
          <svg
              className={styles.backButton} width="30px" height="30px" viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true" role="img"
              preserveAspectRatio="xMidYMid meet">
            <path d="M3 18L19 2v10h42v12H19v10z" fill="#000000"></path>
            <path
                d="M14 46.346C14 42.848 11.308 40 8 40H2v22h6c3.308 0 6-2.848 6-6.348c0-1.84-.748-3.492-1.936-4.652A6.487 6.487 0 0 0 14 46.346M8 58.617H5.125v-5.926H8c1.654 0 3 1.328 3 2.961s-1.346 2.965-3 2.965m0-9.308H5.125v-5.926H8c1.654 0 3 1.33 3 2.963s-1.346 2.963-3 2.963"
                fill="#000000"></path>
            <path
                d="M40 58.617c-1.654 0-3-1.332-3-2.965v-9.307c0-1.633 1.346-2.963 3-2.963s3 1.33 3 2.963h3C46 42.848 43.308 40 40 40s-6 2.848-6 6.346v9.307c0 3.5 2.692 6.348 6 6.348s6-2.848 6-6.348h-3c0 1.632-1.346 2.964-3 2.964"
                fill="#000000"></path>
            <path d="M62 40h-3.152l-3.886 9.5H53V40h-3v22h3v-9.5h1.962l3.886 9.5H62l-4.424-11z" fill="#000000"></path>
            <path d="M27 62h3l-4-22h-5l-3 22h3l.826-6.059h4.072L27 62zm-4.713-9.441l1.284-9.416l1.712 9.416h-2.996z"
                  fill="#000000"></path>
          </svg>
        </Link>

        <div className={styles.postWrapper}>
          <div className={styles.post}>
            <h2 className={styles.title}>
              {findPost.title}
            </h2>
            <p className={styles.text + ' ' + (animation ? styles.maxHeightAnim:'')}>
              {findPost.text}
            </p>
          </div>
          <div className={styles.editElements}>
            <svg className={styles.deletePost} width="40px" height="40px" viewBox="0 0 24 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M10 10V16M14 10V16M18 6V18C18 19.1046 17.1046 20 16 20H8C6.89543 20 6 19.1046 6 18V6M4 6H20M15 6V5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V6"
                  stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <svg className={styles.changePost} fill="#000000" width="40px" height="40px" viewBox="-5 0 32 32"
                 version="1.1" xmlns="http://www.w3.org/2000/svg">
              <title>pencil</title>
              <path
                  d="M18.344 4.781l-3.406 3.063s1.125 0.688 2.156 1.656c1 0.969 1.719 2.063 1.719 2.063l2.906-3.469s-0.031-0.625-1.406-1.969c-1.406-1.344-1.969-1.344-1.969-1.344zM7.25 21.938l-0.156 1.5 10.813-11.25s-0.719-1-1.594-1.844c-0.906-0.875-1.938-1.563-1.938-1.563l-10.813 11.25 1.688-0.094 0.188 1.813zM0 26.719l2.688-5.5 1.5-0.125 0.125 1.719 1.813 0.25-0.188 1.375-5.438 2.75z"></path>
            </svg>
          </div>
        </div>
      </div>
  )
}
export default FullPost;


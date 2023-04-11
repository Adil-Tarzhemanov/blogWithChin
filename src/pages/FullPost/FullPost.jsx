import styles from './FullPost.module.scss'
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";
import React from "react";
import {changePostItem, deletePostItemById} from "../../redux/slices/postSlice";

const FullPost = () => {
  const {id} = useParams()
  const textAreaRef = useRef(null)
  const dispatch = useDispatch()
  const {postItems} = useSelector((state) => state.postSlice)

  const findPost = postItems.find((post) => {
    return post.id.toString() === id
  })
  const [messageArea, setMessageArea] = useState(findPost.text || '')
  const [changeMode, setChangeMode] = useState(false)
  const [animation, setAnimation] = useState(false)

  useEffect(() => {
    setAnimation(true)
  }, [])

  useEffect(() => {
    console.log(textAreaRef.current)
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;

    }
  }, [])


  const onChangeText = (event) => {
    setMessageArea(event.target.value)
    event.target.style.height = "auto"
    event.target.style.height = `${event.target.scrollHeight}px`
  }

  const onClickChangeBtn = () => {
    //если выключаем changeMode, то сохраняем изменения
    if (changeMode === true) {
      dispatch(changePostItem({
        id: findPost.id,
        text: messageArea,
      }))
    }
    if (changeMode === false) {
      // textAreaRef.
    }
    setChangeMode(prevState => !prevState)
  }


  return (
      <div className={styles.container}>
        <div className={styles.content}>
          {/*Кнопка back*/}
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
          {/*Кнопка back*/}

          <div className={styles.postWrapper}>
            <div className={styles.post}>
              <h2 className={styles.title}>
                {findPost.title}
              </h2>

              {/*Текст*/}
              <textarea
                  ref={textAreaRef}
                  className={styles.textarea + ' ' + (!changeMode ? styles.hidden : '')}
                  value={messageArea}
                  onChange={onChangeText}
              />

              <div
                  className={styles.text + ' ' + (changeMode ? styles.hidden : '') + ' ' + (animation ? styles.maxHeightAnim : '')}>
                {findPost.text}
              </div>
              {/*Текст*/}

            </div>
            {/*Кнопки редактирования */}
            <div className={styles.editElements}>
              <Link to={'/'}>
                <svg
                    onClick={() => dispatch(deletePostItemById(findPost.id))}
                    className={styles.deletePost} width="40px" height="40px" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M10 10V16M14 10V16M18 6V18C18 19.1046 17.1046 20 16 20H8C6.89543 20 6 19.1046 6 18V6M4 6H20M15 6V5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V6"
                      stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>

              {
                changeMode ?
                    <svg
                        onClick={onClickChangeBtn}
                        className={styles.changePost}
                        width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M17 20.75H7C6.27065 20.75 5.57118 20.4603 5.05546 19.9445C4.53973 19.4288 4.25 18.7293 4.25 18V6C4.25 5.27065 4.53973 4.57118 5.05546 4.05546C5.57118 3.53973 6.27065 3.25 7 3.25H14.5C14.6988 3.25018 14.8895 3.32931 15.03 3.47L19.53 8C19.6707 8.14052 19.7498 8.33115 19.75 8.53V18C19.75 18.7293 19.4603 19.4288 18.9445 19.9445C18.4288 20.4603 17.7293 20.75 17 20.75ZM7 4.75C6.66848 4.75 6.35054 4.8817 6.11612 5.11612C5.8817 5.35054 5.75 5.66848 5.75 6V18C5.75 18.3315 5.8817 18.6495 6.11612 18.8839C6.35054 19.1183 6.66848 19.25 7 19.25H17C17.3315 19.25 17.6495 19.1183 17.8839 18.8839C18.1183 18.6495 18.25 18.3315 18.25 18V8.81L14.19 4.75H7Z"
                          fill="#000000"/>
                      <path
                          d="M16.75 20H15.25V13.75H8.75V20H7.25V13.5C7.25 13.1685 7.3817 12.8505 7.61612 12.6161C7.85054 12.3817 8.16848 12.25 8.5 12.25H15.5C15.8315 12.25 16.1495 12.3817 16.3839 12.6161C16.6183 12.8505 16.75 13.1685 16.75 13.5V20Z"
                          fill="#000000"/>
                      <path
                          d="M12.47 8.75H8.53001C8.3606 8.74869 8.19311 8.71403 8.0371 8.64799C7.88109 8.58195 7.73962 8.48582 7.62076 8.36511C7.5019 8.24439 7.40798 8.10144 7.34437 7.94443C7.28075 7.78741 7.24869 7.61941 7.25001 7.45V4H8.75001V7.25H12.25V4H13.75V7.45C13.7513 7.61941 13.7193 7.78741 13.6557 7.94443C13.592 8.10144 13.4981 8.24439 13.3793 8.36511C13.2604 8.48582 13.1189 8.58195 12.9629 8.64799C12.8069 8.71403 12.6394 8.74869 12.47 8.75Z"
                          fill="#000000"/>
                    </svg>
                    : <svg
                        onClick={onClickChangeBtn}
                        className={styles.changePost}
                        fill="#000000"
                        width="40px" height="40px" viewBox="-5 0 32 32"
                        version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <title>pencil</title>
                      <path
                          d="M18.344 4.781l-3.406 3.063s1.125 0.688 2.156 1.656c1 0.969 1.719 2.063 1.719 2.063l2.906-3.469s-0.031-0.625-1.406-1.969c-1.406-1.344-1.969-1.344-1.969-1.344zM7.25 21.938l-0.156 1.5 10.813-11.25s-0.719-1-1.594-1.844c-0.906-0.875-1.938-1.563-1.938-1.563l-10.813 11.25 1.688-0.094 0.188 1.813zM0 26.719l2.688-5.5 1.5-0.125 0.125 1.719 1.813 0.25-0.188 1.375-5.438 2.75z"></path>
                    </svg>
              }

            </div>
            {/*Кнопки редактирования */}

          </div>
        </div>
      </div>
  )
}
export default FullPost;


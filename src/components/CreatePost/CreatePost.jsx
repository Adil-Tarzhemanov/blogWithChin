import styles from './CreatePost.module.scss'
import React from "react";

const CreatePost = ({setCreatePostIsOpen, setPostItems, postItems}) => {

  const [titleInput, setTitleInput] = React.useState('')
  const [messageInput, setMessageInput] = React.useState('')
  const [errorText, setErrorText] = React.useState('')


  const onClickCreatePost = () => {


    if (titleInput.length > 0 && messageInput.length > 0) {
      const newPost = {
        id: postItems.length === 0
            ? 0
            : postItems[postItems.length - 1].id + 1,
        title: titleInput,
        text: messageInput,
      }
      setCreatePostIsOpen(prevState => !prevState)
      setPostItems(prevState => [...prevState, newPost])
      setTitleInput('')
      setMessageInput('')
      setErrorText('')
    } else {
      if (messageInput.length === 0 && titleInput.length === 0) setErrorText('Необходимо ввести заголовок и сообщение')
      else if (titleInput.length === 0) setErrorText('Необходимо ввести заголовок')
      else if (messageInput.length === 0) setErrorText('Необходимо ввести сообщение')

    }

  }

  return (
      <div className={styles.root}>
        <div className={styles.modal}></div>

        <div className={styles.content}>
          <svg onClick={() => setCreatePostIsOpen(false)} className={styles.closeSvg} width="20px" height="20px"
               viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z"
                  fill="#000000"/>
          </svg>

          <input value={titleInput} onChange={(event) => setTitleInput(event.target.value)}
                 placeholder={'Заголовок'}/>
          <textarea placeholder={'Сообщение'} className={styles.messageInput} value={messageInput} onChange={(event) => setMessageInput(event.target.value)}
                 />
          <div className={styles.errorText}>{errorText}</div>

          <button onClick={onClickCreatePost}>Опубликовать</button>

        </div>
      </div>
  )
}
export default CreatePost;
import s from './CreatePost.module.scss'
import React from "react";

const CreatePost = ({ setPostItems, postItems}) => {

  const [titleInput, setTitleInput] = React.useState('')
  const [messageInput, setMessageInput] = React.useState('')


  const onClickCreatePost = () => {

    if (titleInput.length > 0 && messageInput.length > 0) {
      const newPost = {
        id: postItems.length === 0 ? 0 : postItems[postItems.length - 1].id + 1,
        title: titleInput,
        text: messageInput,
      }
      // setCreatePostIsOpen(prevState => !prevState)
      setPostItems(prevState => [...prevState, newPost])
      setTitleInput('')
      setMessageInput('')
    }

    console.log(postItems)

  }

  return (
      <div className={s.root}>
        <div className={s.modal}></div>

        <div className={s.content}>

          <input value={titleInput} onChange={(event) => setTitleInput(event.target.value)}
                 placeholder={'Заголовок'}/>
          <input value={messageInput} onChange={(event) => setMessageInput(event.target.value)}
                 placeholder={'Сообщение'}/>

          <button onClick={onClickCreatePost}>Опубликовать</button>

        </div>
      </div>
  )
}
export default CreatePost;
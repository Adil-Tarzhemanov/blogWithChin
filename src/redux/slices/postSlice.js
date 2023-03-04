import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  postItems: [
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
  ],
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPostItem(state, action) {
      state.postItems = [...state.postItems, action.payload]
    },
    setPostItems(state, action) {
      state.postItems = action.payload
    }
  }
})

export const {setPostItems, addPostItem} = postSlice.actions
export default postSlice.reducer
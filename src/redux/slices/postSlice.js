import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  postItems: [
    {
      id: 1,
      title: 'Чингиз Кельдибеков',
      text: 'Чингиз всегда был весёлым парнем, пока не полюбил прогу, она беспощадна и холодна, одна её частичка , она беспощадна и холодна, одна её частичка , она беспощадна и холодна, одна её частичка '
    },
    {
      id: 2,
      title: 'Маленький текст',
      text: 'Маленький текст'
    },
    {
      id: 3,
      title: 'Средний текст',
      text: 'Роберт всегда был весёлым парнем, пока не полюбил члены, они беспощадны и холодны, одни их частички кончи, чего только стоят...'
    },
    {
      id: 4,
      title: 'Большой текст',
      text: 'Воробей — маленькая, неунывающая, бойкая птичка. Про него часто говорят: «серый воробышек». А ведь на самом деле воробей совсем не серый. Спинка у него коричневая с широкими продольными полосами. Хвост темно-бурый, крылышки тоже темно- бурые, украшенные рыжеватой каймой, подбородок и горло черные, а вот головка серая. ' +
          'Весной, едва пригреет солнышко, воробьи оживляются, собираются в шумные стайки, рассаживаются на изгородях, ветках кустарников и задорно чирикают: «Чик-чирик-чирик-чирик! Как хорошо, что к нам пришла весна!» Если найдет озорной воробьишка небольшую лужицу с талой водой, то норовит «принять ванну», смыть поскорее зимнюю грязь'
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
    deletePostItemById(state, action) {
      state.postItems = state.postItems.filter((post) => post.id !== action.payload)
    },
    changePostItem(state, action) {
      const findPost = state.postItems.find((post) => post.id === action.payload.id)
      findPost.text = action.payload.text
    },

  }
})

export const {addPostItem, deletePostItemById, changePostItem} = postSlice.actions
export default postSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

export const newImgSlice = createSlice({
  name: "imgSrc",
  initialState: {
    value: {
      imageUrl: "",
      imgSize: {
        horizonal: 35,
        veritical: 50,
      },
    },
  },
  reducers: {
    addImg: (state, action) => {
      const { imageUrl, imgSize } = action.payload;
      state.value.imageUrl = imageUrl;
      state.value.imgSize = imgSize;
    },
    deleteImg: (state, actions) => {
      state.value = "";
    },
  },
});

export const { addImg, deleteImg } = newImgSlice.actions;

export default newImgSlice.reducer;

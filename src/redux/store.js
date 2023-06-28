import { configureStore } from "@reduxjs/toolkit";

import dataReducer from "./imgData/dataSlice";
import imgReducer from "./imgData/newImgSlice";

export const store = configureStore({
  reducer: {
    src: dataReducer,
    imgSrc: imgReducer,
  },
});

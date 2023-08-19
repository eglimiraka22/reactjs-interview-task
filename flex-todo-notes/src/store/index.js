import { configureStore } from "@reduxjs/toolkit";
import NotesSlice from './slices/notesSlice'
import uiSlice from "./slices/uiSlice";



const store = configureStore({
    reducer:{
        todo:NotesSlice,
        ui:uiSlice
    }
})

export default store ;
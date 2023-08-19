import { createSlice } from '@reduxjs/toolkit';


const loadState = ()=>{
	try {
		const serializedState = localStorage.getItem('notesState')
		if (serializedState===null) {
			return undefined
		}
		return JSON.parse(serializedState)
	} catch (err) {
		return undefined
		
	}
}


const saveState = state =>{
	try {
		const serializedState=JSON.stringify(state)
		localStorage.setItem('notesState' , serializedState)
	} catch (err) {
		//errors to handle
	}
}


const initialState = loadState() || {
	categories: []
}
const NotesSlice = createSlice({
	name: 'notes',
	initialState,
	reducers: {
		addCategory : (state,action) =>{
			const categoryName = action.payload;
			const existingCategory = state.categories.find(cat => cat.title === categoryName);

			if (!existingCategory) {
				state.categories.push({
					id:Date.now(),
				title:action.payload,
				notes:[],
				})
				saveState(state)
			}  //Update Local Storage
			
		},

		addNote:(state,action)=>{
			const {categoryId,noteId,title,content}= action.payload;   // <NoteForm categoryId={category.id} />
			const category = state.categories.find(cate=> cate.id === categoryId)

			if (category) {
				category.notes.push({
					
					noteId,
					title,
					content,
					

				})
				saveState(state)  //Update Local Storage

				
			}
		},
		deleteNote:(state,action)=>{
			const {categoryId ,noteId} = action.payload
			const category = state.categories.find(cate=> cate.id === categoryId)
			
			if (category) {
				category.notes = category.notes.filter(note=> note.id !== noteId)
				saveState(state)  //Update Local Storage

				
			}
		},
		deleteCategory :(state, action) =>{
			const categoryId = action.payload

			state.categories = state.categories.filter(categ=> categ.id !==categoryId)
		}
	},
});


export const {
	addCategory,
	addNote,
	deleteNote,
	deleteCategory,
  } = NotesSlice.actions;
  
  export default NotesSlice.reducer;
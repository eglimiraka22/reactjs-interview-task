import { createSlice } from '@reduxjs/toolkit';

// Get Data From LocalStorage
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

// Save Data to  LocalStorage

const saveState = state =>{
	try {
		const serializedState=JSON.stringify(state)
		localStorage.setItem('notesState' , serializedState)
	} catch (err) {
		//errors to handle
	}
}

//Initial State
const initialState = loadState() || {
	categories: [
		
	],
	noteForm:false,
	noteDetails:false
}
const NotesSlice = createSlice({
	name: 'notes',
	initialState,
	reducers: {         //REDUCERS  
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
		noteform: (state,action)=>{
			const {notes,categoryId}=action.payload


			const category = state.categories.find(cate=> cate.id === categoryId)

			if (category) {
				state.noteform=notes
				
			}
			saveState(state)


		},

		
		addNote:(state,action)=>{
			console.log(action.payload)
			const {id,title,content ,noteId}= action.payload;   // <NoteForm categoryId={category.id} />
			const category = state.categories.find(cate=> cate.id === id)

			if (category) {
				const existingNoteIndex = category.notes.findIndex(note => note.id === noteId);

				if (existingNoteIndex !== -1) {
					// Update existing note's content
					category.notes[existingNoteIndex].content = content;
				  } 
				  else {
					category.notes.push({
					
						id:Date.now(),
						title,
						content,
						
	
					})
				  }
				
				saveState(state)  //Update Local 
				


				
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
		}  //Not Impemented in Code
	},
});


export const {
	addCategory,
	addNote,
	noteform,
	deleteNote,
	deleteCategory,
  } = NotesSlice.actions;   //Exporting Reducer Actions
  
  export default NotesSlice.reducer;
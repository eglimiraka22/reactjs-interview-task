import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
	name: 'ui',
	initialState: {
		form: false,
		notification: null,     //If sending http req 
	},

	reducers: {
		toggle: (state) => {
			state.form = !state.form;
		},
		
		showNotification(state, action) {
			state.notification = {
				status: action.payload.status,
				title: action.payload.title,
				message: action.payload.message,
			};
			console.log(state.notification)
		},
	},
});
export const uiActions = uiSlice.actions;

export default uiSlice.reducer;

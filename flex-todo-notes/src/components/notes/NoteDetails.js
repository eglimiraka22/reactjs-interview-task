import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNote, deleteNote } from '../../store/slices/notesSlice';
import DiscardButton from '../UI/DiscardButton';
import NoteButton from '../UI/NoteButton';
const NoteDetails = ({ categoryId, note, onDeletionComplete }) => {
	const dispatch = useDispatch();
	const [contentNote, setContent] = useState(note.content);

	useEffect(() => {
		setContent(note.content);
	}, [note]);
  
	const handleDeleteNote = () => {
		dispatch(deleteNote({ categoryId, noteId: note.id }));
		onDeletionComplete();
	};

	const handleUpdateNote = () => {
		dispatch(
			addNote({
				id: categoryId,
				content: contentNote,
				title: note.title,
				noteId: note.id,
			})
		);
		onDeletionComplete();
	};

	if (!note) {
		return null; // Note is null, don't render the component
	}

	return (
		<div className='note-details flex flex-col w-full h-full py-4'>
			<div className='flex flex-col h-full w-full'>
				<h2>{note.title}</h2>
				<textarea
					type='text'
					placeholder='Write your note here...'
					value={contentNote}
					onChange={(e) => setContent(e.target.value)}
					className='h-full  placeholder:mt-[41px] focus-visible:outline-none'
				>
					{' '}
				</textarea>
			</div>
			<div className='w-full flex justify-between'>
				{' '}
				<DiscardButton onClick={handleDeleteNote} text='Delete Note' />{' '}
				<NoteButton onClick={handleUpdateNote} text='Save Changes' />
			</div>
			{/* Add options to modify the note */}
		</div>
	);
};

export default NoteDetails;

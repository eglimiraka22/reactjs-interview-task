import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../../store/slices/notesSlice';
import SecondaryButton from '../UI/SecondaryButton';
import ButtonAdd from '../UI/ButtonAdd';
import DiscardButton from '../UI/DiscardButton'
import NoteButton from '../UI/NoteButton';
const NoteForm = (props) => {
  const dispatch = useDispatch();
  const [titleNote, setNoteText] = useState('');
  const [contentNote, setContent] = useState('');


  const handleAddNote = () => {
    dispatch(
      addNote({
		id:props.categoryId,
        title: titleNote,
        content:contentNote
      })
    );
    setNoteText('');
	setContent('')
  };

  return (
    <div className='flex flex-col w-[100%] relative   justify-center items-start h-full  lg:h-[85vh] py-2 bg-white '>
     <div className='flex flex-row justify-between w-[70%] px-2 bg-white'>
     <div className='hidden lg:flex justify-between items-start w-[40%]'>
      <SecondaryButton width='7.5rem'  color='1264A3'/>
      <SecondaryButton width='7.5rem' color='1264A3'/>
      <SecondaryButton width='7.5rem' color='71CF48'/>
     </div>

     

     </div>
      <div className='flex flex-col h-full w-[100%] px-2 mx-auto relative '>
      <input
        type="text"
        placeholder="Note Text"
        value={titleNote}
        onChange={e => setNoteText(e.target.value)}
        className='py-2 border-b-2 focus-visible:outline-none'
      />

<textarea 
        type="text"
        placeholder="Write your note here..."
        value={contentNote}
        onChange={e => setContent(e.target.value)}
        className='h-full  placeholder:mt-[41px] focus-visible:outline-none'
      > </textarea>
      </div>
      <div className='w-[100%]  flex flex-row justify-end  p-2'><div className='w-full max-w-[9.375rem]'>
        
        <NoteButton text={'Save Note'} onClick={handleAddNote} /></div>
        
        </div>

    </div>

  );
};

export default NoteForm;

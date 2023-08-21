import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNote, noteform } from '../../store/slices/notesSlice';
import SecondaryButton from '../UI/SecondaryButton';
import ButtonAdd from '../UI/ButtonAdd';
import DiscardButton from '../UI/DiscardButton';
import NoteButton from '../UI/NoteButton';

const NoteForm = (props) => {
  const dispatch = useDispatch();
  const [titleNote, setNoteText] = useState('');
  const [contentNote, setContent] = useState('');
  const [titleInvalid, setTitleInvalid] = useState(false);
  const [contentInvalid, setContentInvalid] = useState(false);

  //NOTE VALIDATION 
  useEffect(() => {
    if (titleInvalid || contentInvalid) {
      const timeout = setTimeout(() => {
        setTitleInvalid(false);
        setContentInvalid(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [titleInvalid, contentInvalid]);

  const handleAddNote = () => {
    const isTitleValid = titleNote.length >= 2;
    const isContentValid = contentNote.length >= 2;

    if (isTitleValid && isContentValid) { // IF NOTE IS VALID PERFORM NOTE ACTIONS
      dispatch(
        addNote({
          id: props.categoryId,
          title: titleNote,
          content: contentNote,
        })
      );
      dispatch(
        noteform({
          notes: false,
          categoryId: props.categoryId,
        })
      );
      setNoteText('');
      setContent('');
    } else {
      setTitleInvalid(!isTitleValid);
      setContentInvalid(!isContentValid);
    }
  };

  return (
    <div className='flex flex-col w-[100%] relative justify-center items-start h-full  lg:h-[85vh] py-2 bg-white '>
      <div className='flex flex-row  w-fit lg:w-[100%] justify-between gap-5'>
									<div className=' hidden xl:flex w-full justify-start gap-5'><SecondaryButton className='bg-[#1264A3] max-w-[7.5rem]' />
								<SecondaryButton className='bg-[#1264A3] max-w-[7.5rem]'  />
								<SecondaryButton className='bg-[#71CF48] max-w-[7.5rem]'  /></div>

								</div>
      <div className='flex flex-col h-full w-[100%] px-2 mx-auto relative '>
        <input
          type='text'
          placeholder='Note Text'
          value={titleNote}
          onChange={(e) => {
            setNoteText(e.target.value);
            setTitleInvalid(false);
          }}
          className={`py-2 border-b-2 focus-visible:outline-none ${
            titleInvalid ? 'border-red-500' : ''
          }`}
        />
         {titleInvalid && (
            <p className='text-red-500 font-serif text-sm'>Title must be at least 2 characters long</p>
          )}
        <textarea
          type='text'
          placeholder='Write your note here...'
          value={contentNote}
          onChange={(e) => {
            setContent(e.target.value);
            setContentInvalid(false);
          }}
          className={`h-full placeholder:mt-[41px] focus-visible:outline-none ${
            contentInvalid ? 'border-red-500 border-b-2' : ''
          }`}
        ></textarea>
         {contentInvalid && (
            <p className='text-red-500 font-serif text-sm'>Content must be at least 2 characters long</p>
          )}
      </div>
      <div className='w-[100%]  flex flex-row justify-end  p-2'>
				<div className='w-full max-w-[9.375rem]'>
					<NoteButton text={'Save Note'} onClick={handleAddNote} />
				</div>
			</div>
    </div>
  );
};

export default NoteForm;

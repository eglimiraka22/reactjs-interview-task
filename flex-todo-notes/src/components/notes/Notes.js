import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import NoteItem from './NoteItem';

const Notes = ({ categoryId, onNoteClick, filterValue }) => {
  const selectedCategory = useSelector((state) =>
    state.todo.categories.find((cat) => cat.id === categoryId)  //Get the Category Id of note using props and Use Selector
  );

  const [filteredNotes, setFilteredNotes] = useState([]);

  useEffect(() => {
    if (selectedCategory) {   //Filtering notes based on selected category
      const notes = selectedCategory.notes.filter((note) =>
        note.title.toLowerCase().includes(filterValue.toLowerCase())
      );
      setFilteredNotes(notes);
    }
  }, [selectedCategory, filterValue]);

  if (!selectedCategory) {
    return <li className='relative  justify-center items-center text-left  font-mono text-xl '>Select Category</li>; // Return null or an appropriate message if category is not found
  }

  if (selectedCategory.notes.length === 0) {
    return <li>No notes</li>;
  }

  const notesData = filteredNotes.map((note) => (
    <NoteItem
      key={note.id}
      categoryId={categoryId}
      id={note.id}
      title={note.title}
      content={note.content}
      onClick={() => onNoteClick(note)}
    />
  ));

  // If filterValue is empty, show all notes without filtering
  const allNotesData = selectedCategory.notes.map((note) => (
    <NoteItem
      key={note.id}
      categoryId={categoryId}
      id={note.id}
      title={note.title}
      content={note.content}
      onClick={() => onNoteClick(note)}
    />
  ));

  return <div className=' overflow-y-scroll h-[100%] max-h-[80vh]'>{filterValue ? notesData : allNotesData}</div>;
};
export default Notes;

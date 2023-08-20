import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import NoteItem from './NoteItem';

const Notes = ({ categoryId, onNoteClick, filterValue }) => {
  const selectedCategory = useSelector((state) =>
    state.todo.categories.find((cat) => cat.id === categoryId)
  );

  const [filteredNotes, setFilteredNotes] = useState([]);

  useEffect(() => {
    if (selectedCategory) {
      const notes = selectedCategory.notes.filter((note) =>
        note.title.toLowerCase().includes(filterValue.toLowerCase())
      );
      setFilteredNotes(notes);
    }
  }, [selectedCategory, filterValue]);

  if (!selectedCategory) {
    return <li>no data</li>; // Return null or an appropriate message if category is not found
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

  return <div>{filterValue ? notesData : allNotesData}</div>;
};
export default Notes;

import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import CategoryItem from './components/categories/CategoryItem';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import NoteDetails from './components/notes/NoteDetails';
import { addNote, deleteNote } from './store/slices/notesSlice';




const mockStore = configureMockStore();

test('should call handleNoteSubmit when clicked', () => {
  const store = mockStore({});
  const handleNoteSubmit = jest.fn();
  const props = {
    id: '123',
    title: 'Category Title',
    isSelected: false,
    handleNoteSubmit,
  };

  render(
    <Provider store={store}>
      <CategoryItem {...props} />
    </Provider>
  );

  const categoryItem = screen.getByText('Category Title');
  fireEvent.click(categoryItem);

  expect(handleNoteSubmit).toHaveBeenCalledWith('123');
});


test('renders note details', () => {
  const categoryId = '123';
  const note = { id: '1', title: 'Note Title', content: 'Note Content' };
  
  const store = mockStore({}); // Pass your initial state if needed
  
  render(
    <Provider store={store}>
      <NoteDetails categoryId={categoryId} note={note} />
    </Provider>
  );
  
  // Check if the note details are rendered
  const noteTitle = screen.getByText('Note Title');
  const noteContent = screen.getByText('Note Content');
  expect(noteTitle).toBeInTheDocument();
  expect(noteContent).toBeInTheDocument();
});

test('calls deleteNote and onDeletionComplete when delete button is clicked', () => {
  const categoryId = '123';
  const note = { id: '1', title: 'Note Title', content: 'Note Content' };
  const deleteNoteAction = deleteNote({ categoryId, noteId: note.id });
  const handleDeletionComplete = jest.fn();
  
  const store = mockStore({}); // Pass Initial State.. if needed
  store.dispatch = jest.fn();
  
  render(
    <Provider store={store}>
      <NoteDetails categoryId={categoryId} note={note} onDeletionComplete={handleDeletionComplete} />
    </Provider>
  );
  
  // Find and click the delete button
  const deleteButton = screen.getByText('Delete Note');
  fireEvent.click(deleteButton);
  
  // Check if deleteNote action and onDeletionComplete function have been called
  expect(store.dispatch).toHaveBeenCalledWith(deleteNoteAction);
  expect(handleDeletionComplete).toHaveBeenCalled();
});

test('calls addNote and onDeletionComplete when save button is clicked', () => {
  const categoryId = '123';
  const note = { id: '1', title: 'Note Title', content: 'Note Content' };
  const addNoteAction = addNote({
    id: categoryId,
    content: 'Updated Note Content',
    title: 'Note Title',
    noteId: note.id,
  });
  const handleDeletionComplete = jest.fn();
  
  const store = mockStore({}); // Pass your initial state if needed
  store.dispatch = jest.fn();
  
  render(
    <Provider store={store}>
      <NoteDetails categoryId={categoryId} note={note} onDeletionComplete={handleDeletionComplete} />
    </Provider>
  );
  
  // Change the content and find the save button
  const contentTextArea = screen.getByPlaceholderText('Write your note here...');
  fireEvent.change(contentTextArea, { target: { value: 'Updated Note Content' } });
  const saveButton = screen.getByText('Save Changes');
  fireEvent.click(saveButton);
  
  // Check if addNote action and onDeletionComplete function have been called
  expect(store.dispatch).toHaveBeenCalledWith(addNoteAction);
  expect(handleDeletionComplete).toHaveBeenCalled();
});




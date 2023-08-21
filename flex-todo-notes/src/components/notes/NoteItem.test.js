import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NoteItem from './NoteItem';

test('calls onClick when note item is clicked', () => {
  const onClickMock = jest.fn();
  const title = 'Note Title';
  const content = 'Note Content';

  render(<NoteItem title={title} content={content} onClick={onClickMock} />);

  const noteItem = screen.getByText(title); // Target a specific element within the component
  fireEvent.click(noteItem);

  expect(onClickMock).toHaveBeenCalledTimes(1);
});

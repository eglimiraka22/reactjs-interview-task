import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CategoryItem from './CategoryItem';

const mockStore = configureStore([]);

describe('CategoryItem', () => {
  it('renders category item with selection', () => {
    const store = mockStore({
      todo: {
        categories: [
          { id: '1', title: 'Category 1', notes: [] },
        ],
      },
    });

    render(
      <Provider store={store}>
        <CategoryItem id="1" title="Category 1" isSelected={true} />
        
      </Provider>
    );

    const categoryElement = screen.getByText('Category 1');

    expect(categoryElement).toBeInTheDocument();
  });

  it('triggers handleNote on click', () => {
    const handleNoteSubmit = jest.fn();
    const store = mockStore({
      todo: {
        categories: [
          { id: '1', title: 'Category 1', notes: [] },
        ],
      },
    });

    render(
      <Provider store={store}>
        <CategoryItem id="1" title="Category 1" isSelected={false} handleNoteSubmit={handleNoteSubmit} />
      </Provider>
    );

    const categoryElement = screen.getByText('Category 1');
    fireEvent.click(categoryElement);

    expect(handleNoteSubmit).toHaveBeenCalledWith('1');
  });
});

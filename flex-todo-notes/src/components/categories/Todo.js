import React, { useState } from 'react';
import CategoryList from './CategoryList';
import CategoryForm from './CategoryForm';
import Header from '../layout/Header';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../UI/Card';
import NoteForm from '../notes/NoteForm';
import Notes from '../notes/Notes';
import ButtonAdd from '../UI/ButtonAdd';
import { noteform } from '../../store/slices/notesSlice';
import NoteDetails from '../notes/NoteDetails';
import SecondaryButton from '../UI/SecondaryButton';
import { AiOutlineSearch } from 'react-icons/ai'; // Import the search icon

const Todo = () => {
	const [categoryId, setCategoryId] = useState('');
	const [selectedNote, setSelectedNote] = useState(null); // Add selectedNote state
	const [filterValue, setFilterValue] = useState(''); // Add filter state

	const showNoteForm = true;
	const form = useSelector((state) => state.ui.form);

	const dispatch = useDispatch();
	const handleNoteSubmit = (id) => {
		setCategoryId(id);
	};
	const showNote = useSelector((state) => state.todo.noteform);

	const createNoteForm = () => {
		dispatch(
			noteform({
				notes: showNoteForm,
				categoryId: categoryId,
			})
		);
	};

	const handleNoteClick = (note) => {
		setSelectedNote(note);
	};

	const handleDeletionComplete = () => {
		setSelectedNote(null); // Set selectedNote to null when deletion is completed
	};

	const handleFilterChange = (e) => {
		setFilterValue(e.target.value);
	  };
	

	return (
		<React.Fragment>
			<div className='h-[100vh] w-full min-w-[23.125rem]  '>
				<Header />
				<Card>
					<div className=' flex flex-col gap-4   p-2  items-center md:flex-row  md:justify-between md:items-stretch  bg-gray-200   w-full  h-[90vh] '>
						<div className=' flex flex-col items-center py-2    justify-center w-full max-w-[23.125rem]  bg-white     border-2 rounded-md '>
							<CategoryList handleNoteSubmit={handleNoteSubmit} />
							{form && <CategoryForm />}
						</div>
						<div className=' flex flex-col   items-center w-[100%]   bg-white  border-2 '>
							<div className='flex flex-col justify-start  w-[100%] px-2 bg-white'>
								<div className='flex flex-row items-center justify-normal relative mx-0 my-0  gap-4 pt-2'>
									{!showNote && (
										<div className=' p-1 flex gap-2 w-full '>
											<div className=' w-fit lg:w-[13.625rem]'>
											<ButtonAdd
												text={'Create Note'}
												onClick={createNoteForm}
											/>
											</div>
											<div className='search-box flex items-center  w-fit max-w-[ 15.75rem] border-[1px] border-[#EAEAEA] rounded-[0.3125rem]'>
                    <AiOutlineSearch className='search-icon text-gray-300'  />
                    <input
                      type='text'
					  
                      placeholder='Search notes...'
                      className='search-input focus-visible:outline-none  border-gray-300'
                      value={filterValue}
                      onChange={handleFilterChange}
                    />
                  </div>
										</div>
									)}
								</div>

								{showNote && <NoteForm categoryId={categoryId} />}
								{!showNote && (
									<Notes
										categoryId={categoryId}
										onNoteClick={handleNoteClick}
										filterValue={filterValue}
									/>
								)}
							</div>
						</div>
						{selectedNote && (
							<div className='flex flex-col items-start py-2 px-5    w-[100%] lg:min-w-[63.125rem]    bg-white     border-2 rounded-md '>
								<div className='flex flex-row  w-fit lg:w-[100%] justify-between gap-5'>
									<div className='flex w-full justify-start gap-5'><SecondaryButton width="7.5rem"  color='1264A3' />
								<SecondaryButton width="7.5rem"  color='1264A3' />
								<SecondaryButton width="7.5rem" color='1264A3' /></div>
								
								</div>
									
								<NoteDetails
									note={selectedNote}
									categoryId={categoryId}
									onDeletionComplete={handleDeletionComplete}
								/>{' '}
							</div>
						)}
					</div>
				</Card>
			</div>
		</React.Fragment>
	);
};

export default Todo;

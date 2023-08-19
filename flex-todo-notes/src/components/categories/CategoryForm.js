// src/components/CategoryForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCategory } from '../../store/slices/notesSlice';
import { uiActions } from '../../store/slices/uiSlice';
import Modal from '../UI/Modal';

const CategoryForm = (props) => {
	const [categoryName, setCategoryName] = useState('');
	const dispatch = useDispatch();

	//   const filteredCategories = categories.map(category => ({
	//     ...category,
	//     notes: category.notes.filter(note =>
	//       note.content.toLowerCase().includes(searchTerm.toLowerCase())
	//     ),
	//   }));

	const handleSubmit = (e) => {
		e.preventDefault();
		if (categoryName.trim() === '') {
			alert('Category Title empty'); //TODO error message
			return;
		}
		dispatch(addCategory(categoryName));

		setCategoryName('');
		dispatch(uiActions.toggle());
	};

	const handleCancelFormSubmit = () => {
		dispatch(uiActions.toggle());
	};

	//   border-radius: 0.3125rem;
	//   background: #F5F5F7;
	return (
		<div>
			<Modal onHide={props.onHideCart}>
				<form
					onSubmit={handleSubmit}
					className='flex justify-center items-center px-1 gap-3 w-[100%] h-[3.25rem] '
				>
					<input
						type='text'
						value={categoryName}
						onChange={(e) => setCategoryName(e.target.value)}
						placeholder='Add a title..'
						className='border-2 px-3 border-gray-400 rounded-[0.3125rem] h-[2rem] w-[17.25rem]'
					/>
					<button
						type='submit'
						className='bg-[#71CF48] text-white  rounded-md text-center w-[2.2rem] h-[2rem]'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 18 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M4.5 12.75l6 6 9-13.5'
							/>
						</svg>
					</button>
					<button
						onClick={handleCancelFormSubmit}
						className='bg-[#FE4C4A] text-white text-center rounded-md  h-[2rem] w-[2.2rem]'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 18 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M6 18L18 6M6 6l12 12'
							/>
						</svg>
					</button>
				</form>
			</Modal>
		</div>
	);
};

export default CategoryForm;

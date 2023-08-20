import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonAdd from '../UI/ButtonAdd';
import { uiActions } from '../../store/slices/uiSlice';
import CategoryItem from './CategoryItem';
const CategoryList = (props) => {
	const categories = useSelector((state) => state.todo.categories);
	const dispatch = useDispatch();

	const categoryList = categories.map((category) => {
		return (
			<CategoryItem
				handleNoteSubmit={props.handleNoteSubmit}
				key={category.id}
				id={category.id}
				title={category.title}
				note={category.notes}
			/>
		);
	});
	//TODO Category LI Component to pass Id for Filtering Notes
	const onAddCategoryHandler = () => {
		dispatch(uiActions.toggle());
	};

	return (
		<React.Fragment>
			<ButtonAdd text={'Create Category'} onClick={onAddCategoryHandler} />
			<ul className='w-[100%] mt-1 text-center md:text-left overflow-y-auto flex flex-col items-center  overflow-x-hidden overscroll-auto'>
				{categoryList}
			</ul>
		</React.Fragment>
	);
};

export default CategoryList;

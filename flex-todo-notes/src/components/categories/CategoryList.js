import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonAdd from '../UI/ButtonAdd';
import { uiActions } from '../../store/slices/uiSlice';
const CategoryList = (props) => {
	const categories = useSelector((state) => state.todo.categories);
	const dispatch = useDispatch();

	const categoryList = categories.map((category) => {
		return (
			<li
				className='w-[100%] max-w-[21.875rem] h-[2.625rem] bg-[#1264A3] py-1 my-2 flex flex-row flex-shrink rounded-[0.3125rem] text-white'
				key={category.id}
			>
				
				{category.title}  
			</li>
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

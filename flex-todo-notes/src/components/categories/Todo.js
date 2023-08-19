import React from 'react';
import CategoryList from './CategoryList';
import CategoryForm from './CategoryForm';
import Header from '../layout/Header';
import { useSelector } from 'react-redux';

const Todo = () => {
	const form = useSelector((state) => state.ui.form);

	return (
		<React.Fragment>
			<div className='h-[100vh] w-full min-w-[23.125rem]  '>
				<Header />
				<div className=' flex flex-col  items-center md:flex-row  md:justify-between md:items-stretch   w-full  h-[90vh] '>
					<div className=' flex flex-col items-center  justify-center w-full max-w-[23.125rem]     border-2 '>
						<CategoryList />
						{form && <CategoryForm />}
					</div>
					<div className=' flex flex-col items-center  justify-center w-[100%]     border-2 '>
					</div>
					<div className=' flex flex-col items-center  justify-center w-[23.125rem]     border-2 '></div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Todo;

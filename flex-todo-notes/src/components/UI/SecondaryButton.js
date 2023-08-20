import React from 'react';

const SecondaryButton = (props) => {
	return (
		<div className={`flex  relative items-center justify-end  w-[100%] max-w-[7.5rem]  h-[2rem] p-1   flex-shrink-0 rounded-[0.3125rem] bg-[#${props.color}]`}>
			<button
				onClick={props.onClick}
				className='text-white    text-[0.875rem] w-full   justify-center  border-r '
			>
				{props.text}{' '}
			</button>
		
		</div>
	);
};

export default SecondaryButton;

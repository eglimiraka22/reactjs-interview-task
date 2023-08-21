import React from 'react';

const SecondaryButton = ({ className = '', onClick, text }) => {
	return (
		<div
			className={
				`flex  relative items-center justify-end  w-[100%]   h-[2rem] p-1   flex-shrink-0 rounded-[0.3125rem] ` +
				className
			}
		>
			<button
				onClick={onClick}
				className='text-white    text-[0.875rem] w-full   justify-center  border-r '
			>
				{text}{' '}
			</button>
		</div>
	);
};

export default SecondaryButton;

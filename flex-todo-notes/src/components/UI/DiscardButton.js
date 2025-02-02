import React from 'react';

const ButtonAdd = (props) => {
	return (
		<div className='flex  relative items-center justify-end  w-[100%] max-w-[9.375rem] h-[2rem] p-1   flex-shrink-0 rounded-[0.3125rem] bg-[#EB4345]'>
			<button
				onClick={props.onClick}
				className='text-white    text-[0.875rem] w-full   justify-center  border-r border-[#EB4345]'
			>
				{props.text}{' '}
			</button>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='14'
				height='18'
				viewBox='0 0 14 18'
				fill='none'
			>
				<g clipPath='url(#clip0_4_24)'>
					<path
						d='M1 16C1.00158 16.5299 1.2128 17.0377 1.58753 17.4125C1.96227 17.7872 2.47005 17.9984 3 18H11C11.5299 17.9984 12.0377 17.7872 12.4125 17.4125C12.7872 17.0377 12.9984 16.5299 13 16V6C12.9984 5.47005 12.7872 4.96227 12.4125 4.58753C12.0377 4.2128 11.5299 4.00158 11 4H3C2.47005 4.00158 1.96227 4.2128 1.58753 4.58753C1.2128 4.96227 1.00158 5.47005 1 6V16ZM13 1H10.5L9.79 0.29C9.6032 0.106068 9.35215 0.00206033 9.09 0H4.91C4.64785 0.00206033 4.3968 0.106068 4.21 0.29L3.5 1H1C0.734784 1 0.48043 1.10536 0.292893 1.29289C0.105357 1.48043 0 1.73478 0 2C0 2.26522 0.105357 2.51957 0.292893 2.70711C0.48043 2.89464 0.734784 3 1 3H13C13.2652 3 13.5196 2.89464 13.7071 2.70711C13.8946 2.51957 14 2.26522 14 2C14 1.73478 13.8946 1.48043 13.7071 1.29289C13.5196 1.10536 13.2652 1 13 1Z'
						fill='white'
					/>
				</g>
				<defs>
					<clipPath id='clip0_4_24'>
						<rect width='14' height='18' fill='white' />
					</clipPath>
				</defs>
			</svg>
		</div>
	);
};

export default ButtonAdd;

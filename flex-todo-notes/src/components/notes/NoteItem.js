import React from 'react';
const NoteItem = ({ title, content, onClick }) => {
	return (
		<React.Fragment>
			<div onClick={onClick}>
      <ul className='border-b-2 pt-3 px-1 overflow-y-hidden overflow-x-hidden overscroll-auto cursor-pointer '>
				<li className='font-bold text-[1rem] font-sans  text-[#323338]'>{title}</li>
				<li className='text-[#323338] font-sans text-[1rem] h-fit max-h-[30px] '>{content}</li>
			</ul>
      </div>
		</React.Fragment>
	);
};

export default NoteItem;

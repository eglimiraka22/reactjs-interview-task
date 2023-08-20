import React from 'react'
import {  useDispatch} from 'react-redux';
import { noteform } from '../../store/slices/notesSlice';

const CategoryItem = (props) => {

	const dispatch = useDispatch()
const showNotes = false

    const handleNote = (e)=>{
        e.preventDefault();
        props.handleNoteSubmit(props.id)
        dispatch(noteform({
          notes:showNotes,
          categoryId :props.id
        }))

    }
  return (


   
    <React.Fragment>
        <li onClick={handleNote}
				className='w-[100%] max-w-[21.875rem] h-[2.625rem] bg-[#1264A3] py-1 my-2 flex flex-row flex-shrink rounded-[0.3125rem] text-white'
				key={props.id}
			>
				
				{props.title}  
			</li>


    </React.Fragment>
  )
}

export default CategoryItem
import React from 'react'
import { useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
// import { updatePastes , addToPastes} from '../redux/pasteSlice';

const Viewpaste = () => {
  
  const {id} = useParams();

  const allPastes = useSelector((state) => state.paste.pastes);

  const paste = allPastes.filter((p) => p._id === id)[0]
  console.log("final paste:",paste);

  return (
<div className='mt-4'>
        <div className='flex flex-row gap-12 justify-center '>
      <input
      className='w-[60%] h-10 p-2 mt-2 rounded-lg bg-black'
      type='text'
      placeholder='type here'
      value={paste.title}
      disabled
      onChange={(e)=> setTitle(e.target.value)}/>

      {/* <button
      onClick={createPaste}
      disabled
       className= 'min-w-20 h-10 p-2 mt-2 rounded-lg'>
        { 
        pasteId ? "update paste":"create paste"
        }
      </button> */}
    </div>
    <div className='flex justify-center'>
        <textarea 
        className='w-[880px] h-[450px] mt-4  flex rounded-md bg-black'
        value={paste.content}
        placeholder='type here'
        disabled
        onChange={(e)=> setText(e.target.value) }></textarea>
    </div>
   </div>
  )
}

export default Viewpaste

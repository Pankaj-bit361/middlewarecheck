import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getdata, handlepost} from '../redux/todo/action'

const TodoInput = () => {
const [text,settext]=useState("")
const dispatch=useDispatch()

const handleclick=()=>{
  dispatch(handlepost(text)).then(()=>dispatch(getdata))
}
  return (
    <div>
      <input type="text" value={text} placeholder="ADD TODO" onChange={(e)=>settext(e.target.value)}  />
      <button onClick={handleclick}>ADD TODO</button>
    </div>
  )
}

export default TodoInput

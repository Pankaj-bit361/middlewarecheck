

import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getsuccessaction, todofailureaction, todorequestaction } from '../redux/todo/action'
import TodoInput from './TodoInput'
import Todolist from './Todolist'
import { getdata } from '../redux/todo/action'
const Todo = () => {

  const dispatch=useDispatch()

const state=useSelector((state)=>state)

console.log(state)



useEffect(()=>{
  dispatch(getdata)
},[])

  return (
    <div>
      <TodoInput/>
      <Todolist/>
    </div>
  )
}

export default Todo

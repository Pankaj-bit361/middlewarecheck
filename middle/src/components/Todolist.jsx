import React from 'react'
import { useSelector } from 'react-redux'

const Todolist = () => {

const {todos}=useSelector((state)=>state.todos)
console.log(todos)
  return (
    <div>
      {todos?.map((item)=>(
        <div key={item.id}>
        <h1>{item.id} - {item.title} - {item.status?"Completed":"Pending"}</h1>
        </div>
      ))}
    </div>
  )
}

export default Todolist

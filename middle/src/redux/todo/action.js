import { GET_TODOS_SUCCESS, POST_TODOS_SUCCESS, TODOS_FAILURE, TODOS_REQUEST } from "./actiontypes"
import axios from "axios"

export const todorequestaction=()=>{ 
    return {type:TODOS_REQUEST}
}

export const todofailureaction=()=>{
    return {type:TODOS_FAILURE}
}

export const getsuccessaction=(payload)=>{
    return {type:GET_TODOS_SUCCESS,payload}
}

export const postsuccessaction=()=>{
    return {type:POST_TODOS_SUCCESS}
}

export const getdata=(dispatch)=>{
    dispatch(todorequestaction())
    axios.get(`http://localhost:8080/todos`)
    .then((res)=>{
  dispatch(getsuccessaction(res.data))
    })
    .catch(()=>{
      dispatch(todofailureaction())
    })
  }

  export const handlepost=(text)=>(dispatch)=>{
    let ob={
      title:text,
      status:false
    }
    dispatch(todorequestaction())
     return  axios.post(`http://localhost:8080/todos`,ob)
      .then(()=>{
        dispatch(postsuccessaction())
      })
      .catch(()=>{
        dispatch(todofailureaction())
      })
    }
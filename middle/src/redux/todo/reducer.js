import { GET_TODOS_SUCCESS, POST_TODOS_SUCCESS, TODOS_FAILURE, TODOS_REQUEST } from "./actiontypes";

const initstate={
    isLoading:false,
    isError:false,
    todos:[]
}

export const reducer=(state=initstate,{type,payload})=>{

switch(type){
    case TODOS_REQUEST:{
return {
    ...state,isLoading:true
}
    }
    case GET_TODOS_SUCCESS:{
        return {
            ...state,isLoading:false,todos:payload
        }
    }
    case TODOS_FAILURE:{
        return {
            ...state,isLoading:false,isError:false
        }
    }
    case POST_TODOS_SUCCESS:{
        return {
            ...state,isLoading:false
        }
    }
    default:{
        return state
    }
}

}
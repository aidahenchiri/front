import { ADD_PUB, DELETE_PUB, FAIL_PUB, GET_BY_ID_PUB, GET_PUB, LOAD_PUB } from "../ActionType/ActionType";

//initialisation
const initialState ={  
    publication:null,
    load:false,    
    error:null
}
//pure function
const PubReducer =(state=initialState,{type,payload})=>{
    switch (type) {
        case LOAD_PUB:
            return{...state,load:true}
        case ADD_PUB:
            return{...state,publication:payload.pubs,load:false}
        case GET_PUB:
        return{...state,publication:payload.pubs,load:false}  
        case GET_BY_ID_PUB:
            return{...state,publication:payload.pubs,load:false}
        case DELETE_PUB:
            return{...state,load:false}   
        case FAIL_PUB:
            return{...state,error:payload}     
        default:
            return state
    }
}
export default PubReducer

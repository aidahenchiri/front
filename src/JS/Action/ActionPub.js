import axios from 'axios'
import { ADD_PUB, DELETE_PUB, FAIL_PUB, GET_BY_ID_PUB, GET_PUB, LOAD_PUB } from "../ActionType/ActionType"
import { toast } from 'react-toastify';

//add the publication

export const add_pub=(newPub)=> async(dispatch)=>   
{   dispatch({type:LOAD_PUB}) // appel load
    try {
        let  result =await axios.post("http://localhost:4000/api/pub/add_pub",newPub) 
        dispatch({type:ADD_PUB,payload:result.data});


    } catch (error) {
            dispatch({type:FAIL_PUB,payload:error});
            toast.error('🦄 Wow so easy!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
    }
}
//get the publications

export const get_pub=()=>async(dispatch)=>{
    dispatch({type:LOAD_PUB})
    try {
        let result=await axios.get("http://localhost:4000/api/pub/get_pub")
        dispatch({type:GET_PUB,payload:result.data})
    } catch (error) {
        dispatch({type:FAIL_PUB,payload:error})
    }
}

export const get_byId=(id)=>async(dispatch)=>{
    dispatch({type:LOAD_PUB})
    try { 
        let result=await axios.get(`/api/pub/get_byId/${id}`)
        dispatch({type:GET_BY_ID_PUB,payload:result.data})

    } catch (error) {
        dispatch({type:FAIL_PUB,payload:error})

    }
}

export const deletepub=(id)=>async(dispatch)=>{
    dispatch({type:LOAD_PUB})
    try {
        await axios.delete(`/api/pub/deletepub/${id}`)
        dispatch({type:DELETE_PUB})

    } catch (error) {
        dispatch({type:FAIL_PUB,payload:error})

    }
}


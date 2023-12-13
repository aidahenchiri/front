import axios from "axios"
import { DELETE_USER, EDIT_USER, FAIL_USER, FAVORITE, LOAD_USER, LOGIN_USER, LOG_OUT, REGISTER_USER } from "../ActionType/ActionType"
import { toast } from "react-toastify"

// REGISTER new user
export const register=(newUser)=> async(dispatch)=>   
{   dispatch({type:LOAD_USER}) // appel load

    try {
        let  result =await axios.post("http://localhost:4000/api/user/register",newUser)  // axios appel api  result.data <= token ,data ,newuser,msg 
        dispatch({type:REGISTER_USER,payload:result.data})
    } catch (error) {
                dispatch({type:FAIL_USER,payload:error})
    }
   
}
// login
export const login = (user) => async(dispatch)=>
{
    dispatch({type:LOAD_USER})
    try {
        let result=await axios.post("http://localhost:4000/api/user/login",user)   //result = user
        dispatch({type:LOGIN_USER,payload:result.data})

    } catch (error) {
        dispatch({type:FAIL_USER,payload:error.response})

    }
}
export const logOut=() =>async(dispatch)=>
{
    dispatch({type:LOG_OUT})
    
}

export const favorite  = (userId,movie) => async(dispatch)=>
{
    dispatch({type:LOAD_USER})
    try {
        let result=await axios.post(`http://localhost:4000/api/user/favoris/${userId}`,movie)   //result = user
        dispatch({type:FAVORITE,payload:result.data})
    } catch (error) {
        dispatch({type:FAIL_USER,payload:error.response})

    }
}

export const deleteUser=(id)=>async(dispatch)=>{
    dispatch({type:LOAD_USER})
    try {
        await axios.delete(`http://localhost:4000/api/user/deleteUser/${id}`)
        dispatch({type:DELETE_USER})
        toast.success('votre mot de passe est supprimé ', {
          
        });

    } catch (error) {
        dispatch({type:FAIL_USER,payload:error})

    }
}

export const edit_user=(newUser,id)=> async(dispatch)=>   
{   dispatch({type:LOAD_USER}) // appel load

    try {
        let  result =await axios.put(`http://localhost:4000/api/user/edit/${id}`,newUser)  // axios appel api  result.data <= token ,data ,newuser,msg 
        dispatch({type:EDIT_USER,payload:result.data})
        toast.success('votre mot de passe à été changé avec succès ', {
          
            });
    } catch (error) {
                dispatch({type:FAIL_USER,payload:error})
    }
   
}



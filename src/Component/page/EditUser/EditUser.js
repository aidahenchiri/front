import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { edit_user } from '../../../JS/Action/Action';
import { toast } from 'react-toastify';
export const EditUser = () => {

 const [newUser,setNewUser]=useState({})
 const user=useSelector((state)=>state.userReducer.user  )

 const dispatch=useDispatch()
 const navigate =useNavigate()
 const {_id} =useParams() 
    

const handlchange =(e)=>{
    setNewUser({...newUser,[e.target.name]:e.target.value})
}

const handelEdit =async()=>
{
    await dispatch(edit_user(newUser,_id))
   
    navigate("/Profile")
}


  return (
    <div>
    <div class="wrappers fadeInDown">
  <div id="formContent">
    {/* <!-- Tabs Titles --> */}
    <h2 class="active">Modifier user </h2>
    <Link to="/Profile"><h2 class="inactive underlineHover" >Sign Up  </h2></Link>
    <form>
      <input type="text"   onChange={(e)=>handlchange(e)} 
      id="login" class="fadeIn second"  name="username"  placeholder={user.username}/> &nbsp; 
      <input type="password" onChange={(e)=>handlchange(e)} name="password" id="password" class="fadeIn third"  placeholder={user.password}/>
      <input type="text"  name='email' onChange={(e)=>handlchange(e)} id="password"
       class="fadeIn third"  placeholder={user.email}/>
      <input type="text"  onChange={(e)=>handlchange(e)}  name='phone'
          id="password" class="fadeIn third"  placeholder={user.phone}/>
      <Link to="/Profile"><button  onClick={handelEdit} class="fadeIn fourth">Modifier</button></Link>   

    </form>
    

  </div>
</div>

    </div>
  )
}

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../../../JS/Action/Action'
import { Link } from 'react-router-dom'

const Register = () => {
  const [newUser, setNewUser]=useState({})
  const dispatch=useDispatch()
  const handleUser=(e)=>
  { 
    setNewUser({...newUser,[e.target.name]:e.target.value})  
  }

  return (
<div> 
  
<div class="wrappers fadeInDown">
  <div id="formContent">
    {/* <!-- Tabs Titles --> */}
    <h2 class="active"> Create user </h2>
    <Link to="/"><h2 class="inactive underlineHover" >Retour  </h2></Link>
   
    <form>
       <input type="text" name="username" class="fadeIn second" onChange={(e)=>handleUser(e)} placeholder="Nom"></input> &nbsp; 
       <input type="text" name="email" class="fadeIn second" onChange={(e)=>handleUser(e)} placeholder="Email"></input> &nbsp; 
       <input type="password" name="password" class="fadeIn second" onChange={(e)=>handleUser(e)} placeholder="Mot de passe"></input> &nbsp; 
       <input type="text" name="phone" class="fadeIn second" onChange={(e)=>handleUser(e)} placeholder="N°:TEL"></input> &nbsp; 
      <Link to="/Profile"><button onClick={()=>dispatch(register(newUser))} class="fadeIn fourth">Connect </button> </Link>   
    </form>
    
  </div>
  </div>





    </div>
  )
}

export default Register
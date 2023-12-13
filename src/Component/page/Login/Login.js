import { useState } from 'react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../../JS/Action/Action'
import './Login.css'

const Login = () => {
  const [user,setUser]=useState({})
  const dispatch=useDispatch()
  const navigate =useNavigate()

const handleUser=(e)=>
{ 
 setUser({...user,[e.target.name]:e.target.value})

}

  return (
    <div className='bodyLogin'>


<div class="wrappers fadeInDown">
  <div id="formContent">
    {/* <!-- Tabs Titles --> */}
    <h2 class="active"> Sign In </h2>
    <Link to="/"><h2 class="inactive underlineHover" >Sign Up  </h2></Link>

  
   

    <form>
      <input type="text" id="login" class="fadeIn second"  name="username" onChange={(e)=>handleUser(e)} placeholder="login"/> &nbsp; 
      <input type="password"  name="password" onChange={(e)=>handleUser(e)} id="password" class="fadeIn third"  placeholder="password"/>
      <Link to="/Profile"><button onClick={()=>dispatch(login(user))} class="fadeIn fourth">Connecter</button></Link>   

    </form>
    <p class="message">Vous n’êtes pas inscrit ?
    <Link to="/Register"> <a>Créer un compte</a> </Link></p>

  </div></div>





    </div>
  )
}

export default Login
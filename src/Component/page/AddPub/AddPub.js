import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { add_pub } from '../../../JS/Action/ActionPub';
export const AddPub = () => {

 const [newPub,setNewPub]=useState({})
 const dispatch=useDispatch()
 const navigate =useNavigate()
    

const handlchange =(e)=>{
  setNewPub({...newPub,[e.target.name]:e.target.value})
}

const handelAdd =async()=>
{  console.log(newPub)
    await dispatch(add_pub(newPub))
    navigate("/Profile")
}



  return (
    <div>
    <div class="wrappers fadeInDown">
    <div id="formContent">
    {/* <!-- Tabs Titles --> */}
    <h2 class="active">ADD PUBLICATION </h2>
    <Link to="/Profile"><h2 class="inactive underlineHover" >Sign Up  </h2></Link>
    <form>
      <input type="text"   onChange={(e)=>handlchange(e)} 
      id="login" class="fadeIn second"  name="title"  placeholder="title"/> &nbsp; 
      <input type="text" onChange={(e)=>handlchange(e)} name="description" id="description" class="fadeIn third"  placeholder="description"/>
      <input type="text"  name='photo' onChange={(e)=>handlchange(e)} id="photo"
       class="fadeIn third"  placeholder="URL photo"/>
          <Link to="/Profile"><button  onClick={handelAdd} class="fadeIn fourth">Ajouter</button></Link>   

    </form>
    

  </div>
</div>

    </div>
  )
}
export default AddPub
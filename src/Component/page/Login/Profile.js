import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { deleteUser, logOut } from '../../../JS/Action/Action'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaSignOutAlt } from "react-icons/fa";

import './Profile.css'
import Nava from '../NavB/Nava';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"  />

const Profile = () => {
     const user=useSelector((state)=>state.userReducer.user  )
     const errors= useSelector((state)=>state.userReducer.error)
     const dispatch=useDispatch()
     const navigate =useNavigate()
     const [show, setShow] = useState(false);
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
     
     const handldelete =async()=>{
      dispatch(deleteUser(user._id))
      handleClose()
      navigate("/")
    }

  return (
    <div className='bodyprofile'>

     <Nava />
                     




<div className=''>
<div className='swiper-wrapper content'>
<div className='swiper-slide cardprofile'>
<div className='card-content'>

<div className='image'>
<img className='imgs' src="https://photos.healthprofs.com/59e5fcb5-46cd-11ea-a6ad-06142c356176/3/320x400.jpeg"/>
</div>

<div className='nameCarte'>
<span className="name">Nom: &nbsp;{user.username} </span>
<span className="age"> Email: &nbsp;	{user.email} </span>
<button  className='button' onClick={()=>navigate(`/edit/${user._id}`)}>Edit  user</button> 
<button className='button'  onClick={handleShow}>Delete user</button>
<button className='button'  onClick={()=>navigate(`/addPub`)}>Ajouter publication</button>
<Link to="/"><button className='button'  onClick={()=>navigate(`/logOut`)}>déconnecter</button></Link>

        <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                    <Modal.Title> Supprimer !!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Vous êtes sur de supprimer votre user !!
                    </Modal.Body>
                  <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                 Fermer 
                </Button>
                <Button variant="primary" onClick={handldelete}>
                  supprimer
                </Button>
              </Modal.Footer>
            </Modal>
</div>
</div>
</div>
</div></div>


</div>
  )
}

export default Profile
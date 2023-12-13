import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../image/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import './Nava.css'
import { useDispatch, useSelector } from 'react-redux';
import { get_pub } from '../../../JS/Action/ActionPub';



const Nava = () => {

  const user=useSelector((state)=>state.userReducer.user  )
  const dispatch=useDispatch()
const navigate=useNavigate()

const handelPub = async()=>
{
await dispatch(get_pub())
navigate("/Publiste")
}
  return (
    <div>

        <Navbar fixed="top"   className="bg-body-tertiary" style={{maxWidth:'100%'}} variant='light'> 
          <Container fluid>
            <Navbar.Brand href="#"><img className='img_nav' src={logo} style={{marginLeft:'50%'}}/></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Offcanvas
             
             
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
               <Nav.Link href="/">Home</Nav.Link>
               <Nav.Link href="coaching">coaching privé</Nav.Link>
              <Nav.Link href="">Activité</Nav.Link>

                </Nav>
                <Form className="d-flex">                  
                  {user?null:<Link to="/Login"><button className='btns' > Login</button></Link> }
                  <Link to="/Publiste"><button onClick={()=>handelPub()}  className='btns'>publication</button></Link>

                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

      
          </div>
  )
}

export default Nava
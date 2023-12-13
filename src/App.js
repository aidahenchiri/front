import './App.css';
import { Route, Routes } from 'react-router-dom';
import  Login  from './Component/page/Login/Login';
import  Register  from './Component/page/Register/Register';
import  Home  from './Component/page/Home/Home';
import  Profile  from './Component/page/Login/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from './Component/Loading';
import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import { get_pub } from './JS/Action/ActionPub';
import Publiste from './Component/page/Publiste/Publiste';
import { EditUser } from './Component/page/EditUser/EditUser';
import CreateUser from './Component/page/CreateUer/CreateUser';
import {AddPub} from './Component/page/AddPub/AddPub';
import Coaching from './Component/page/Coaching/Coaching';

function App() {
  const load=useSelector((state)=>state.userReducer.load  )
const dispatch=useDispatch()

useEffect(()=> {
  dispatch(get_pub)
},[])

  return (
    <div className="App">

<Routes>
<Route path="/" element={<Home />}/> 
<Route path="/Publiste" element={<Publiste />}/>
<Route path="/edit/:_id" element={<EditUser />}/>
<Route path="/addPub" element={<AddPub />}/>

<Route path="/Profile"  element={load?<Loading />:<Profile /> }/> 
<Route path="/Login" element={<Login />}/> 
 <Route path="/Register" element={<Register />}/>
 <Route path="/CreateUser" element={<CreateUser />}/>
 <Route path="/coaching" element={<Coaching />}/>

</Routes>
    </div>
  );
}

export default App;

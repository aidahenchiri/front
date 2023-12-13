import React from 'react'
import { Link,  useNavigate } from 'react-router-dom'
import './Home.css'

import Header from '../Header/Header'
import { Section1 } from '../Sestion1/Section1'
import Nava from '../NavB/Nava'
import Objectif from '../Objectif/Objectif'
import IMC from '../IMC/IMC'
import Footer from '../Footer/Footer'
import { get_pub } from '../../../JS/Action/ActionPub'
import { useDispatch } from 'react-redux'
import Tarif from '../ComponentHome/Tarif'

// import dayjs from 'dayjs'
// import dateFormat from "dateformat"

const Home = () => {

  const dispatch=useDispatch()
const navigate=useNavigate()

const handelPub = async()=>
{
await dispatch(get_pub())
navigate("/Publiste")
}
  return (
    <div>
   <Nava />
   <Header />
   <Section1 />
   <Objectif />
   <IMC />
   <Tarif />
   <button onClick={()=>handelPub()}>publication</button>

  
 <Footer />
     </div>
  )
}

export default Home
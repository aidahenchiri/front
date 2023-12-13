import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import PubCarte from '../PubCarte/PubCarte'
import { get_pub } from '../../../JS/Action/ActionPub'
const Publiste = () => {
    const pubs=useSelector(state=>(state.PubReducer.publication))
    const [pubN,setPubN]=useState({})
    console.log(pubs)

    const dispatch=useDispatch()


  return (
    <div>
        
       {pubs?.map(pub =><PubCarte pub={pub} key={pub._id} />)}

    </div>
  )
}

export default Publiste
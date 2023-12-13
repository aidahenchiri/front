import React from 'react'
import './PubCarte.css';

const PubCarte = ({pub}) => {
  return (
    <div className='header'>

<div className="rowcol">
  
  <div className="col-3 col-m-4 col-s-6">
    <div className="card-pub" style={{ backgroundImage: `url(${pub.photo})`}}>
      <div className="description-container">
        <p>{pub.title}</p>
        <p>{pub.description}</p>
       
          
      </div>
    </div>
  </div>
  
 

</div>
</div>
  )
}

export default PubCarte
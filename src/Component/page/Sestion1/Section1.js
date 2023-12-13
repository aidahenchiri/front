import React from 'react'
import './Section1.css'
import cours1 from '../../image/coursCollectif.jpg'
import cours2 from '../../image/courskids.jpg'
import cours3 from '../../image/coaching.jpg'
import Coaching from '../Coaching/Coaching'
import { Link } from 'react-router-dom'

export const Section1 = () => {
  return (
    <div className="bodyS1">
       {/* fitness */}
       <div className="wrapp">
         <div className="carte">
            <div className="poster">
              <img src={cours1} alt="cours collectif"  />
              <div className="centered">
                <h2>FITNESS</h2> 
               <p> Partenariat Les Mills : cours simples et ludiques, exercices efficaces pour des résultats optimaux</p>
                <button>En savoir +</button>
              </div>
            </div>

         </div>
    {/* kids */}

    <div className="carte">
      <div className="poster">
        <img src={cours2} alt="kids"/>
        <div className="centered title">
           <h2>KIDS&JUNIOR</h2> 
          <p  className='coaching '> Cours de fitness adaptés aux enfants et juniors :fun et santé assurés !</p>
          <button>En savoir +</button>    
        </div>
      </div>
    </div>
       {/* coaching */}

    <div className="carte">
      <div className="poster">
        <img src={cours3} alt="coaching privé"/>
        <div className="centered">
           <h2>COACHING PRIVÉ</h2> 
           <p className='coaching'> Accompagnement personnalisé vers vos objectifs de fitness avec notre coaching privé. </p>
           <Link to="coaching">   <button >En savoir +</button> </Link>
        </div>
      </div>
      </div>
    </div>


    </div>
  )
}

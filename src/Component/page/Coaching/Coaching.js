import React from 'react'
import Nava from '../NavB/Nava'
import './Coaching.css'
import cours3 from '../../image/coachingPrive.jpg'
import coaching1 from '../../image/coaching.jpg'
import coaching2 from '../../image/coaching2.jpg'
import coaching3 from '../../image/coaching1.jpg'


const Coaching = () => {
  return ( 
    <div>
        <Nava />
        <div className='imgFond'>
        <img src={cours3}  alt="coaching" width="100%" />
<div className="descC">
        <h1 >COACHING PRIVÉ</h1>
        <p >Soyez guidé personnellement vers votre meilleure forme <br></br> avec notre Coaching privé</p>
        </div>
        </div>

<div class="gallery">
    <img src={coaching1} alt="Cinque Terre" width="600" height="500"/>
  
  <div className="desc"><h5 className='col'><b>COACHING SUR <br /> MESURE</b></h5>
  Atteignez vos objectifs avec un accompagnement personnalisé adapté à votre rythme et à vos besoins.
  </div>
</div>
<div class=" coching2">
    <img src={coaching2} width="800" height="400"/>
  
  <div class="desc"><h5><b>ATTEIGNEZ VOS OBJECTIFS  </b></h5>
  Un coaching privé pour vous aider à atteindre et dépasser vos objectifs de fitness de manière efficace. </div>
</div>
<div class="gallery">
    <img src={coaching3} alt="Cinque Terre" width="600" height="500"/>
    <div class="desc"><h5 className='col'><b>DÉPASSEZ VOS LIMITES </b></h5>
    Un accompagnement personnalisé pour repousser vos limites et atteindre de nouveaux sommets.
</div>
</div>

    </div>
  )
}

export default Coaching
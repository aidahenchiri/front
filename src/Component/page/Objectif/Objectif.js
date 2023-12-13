import React from 'react'
import './Objectif.css'
import Carousel from 'react-bootstrap/Carousel';
import photo1 from '../../image/muscler.jpg'
import photo2 from '../../image/pilates.jpg'
import photo3 from '../../image/min.jpg'
import photo4 from '../../image/danse.jpg'
import photo5 from '../../image/DEFAULER.jpg'

const Objectif = () => {
  return (     
    <div className='body'>
        <h3>UN OBJECTIF À ATTEINDRE ?</h3>
      <p> 
        Quel que soit votre parcours, votre objectif d entraînement ou votre niveau de pratique, vous trouverez des activités qui vous aideront à atteindre votre but.
      </p> 


     
        

      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={photo1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className="blanc" >SE MUSCLER</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={photo2}
          alt="Second slide"
        />
        <Carousel.Caption>
        <h1 className="blanc" >SE DÉTENDRE</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={photo3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1 className="BLACK">PERDRE DU POIDS
            
          </h1>
          
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={photo4}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1 className="BLACK">S'ENTRAINER EN DANSER</h1>
       
        </Carousel.Caption>
      </Carousel.Item>

      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={photo5}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1 className="blanc">SE DÉFAULER</h1>
       
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    </div>
  )
}

export default Objectif
import React from 'react'
import './Header.css'
import fond from '../../image/fondS.png'

const Header = () => {
  return (
    <div className='bodys'>
        

<header className="section__container header__container">
  {/* partie text */}

  <div className="header__content">
    <span className="bg__blur"></span>
    <span className="bg__blur header__blur"></span>
    <h4>BEST FITNESS IN THE TOWN</h4>
    <h1><span>MAKE</span> YOUR BODY SHAPE</h1>
    <p>
      Unleash your potential and embark on a journey towards a stronger,
      fitter, and more confident you. Sign up for 'Make Your Body Shape' now
      and witness the incredible transformation your body is capable of!
    </p>
    <button className="btns">Get Started</button>
  </div>
{/* partie image */}

<div className="header__image">
  <img src={fond} alt="header" />
</div>
</header>

    </div>
  )
}

export default Header
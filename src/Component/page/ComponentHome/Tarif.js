import React from 'react'
import '../ComponentHome/Tarif.css'

const Tarif = () => {

  
  return (
    <div className='bodyTarif'>
        <main class="main flow">
  <h1 class="main__heading">  NOS ENERGY TARIFS

</h1>
  <div class="main__cards cards">
    <div class="cards__inner">
<div></div>
      <div class="card">

        <h2 class="card__heading">90DT</h2>
        <p class="card__price">1 MOIS</p>
        <p class="card__ab"> ABONNEMENT </p>
        <ul role="list" class="card__bullets flow">
          <li>Frais D’inscription: 10 Dt</li>
          <li>Accès Ilimité A Tous Les Cours</li>
          <li>Accès Ilimité Au salle de musculation</li>

        </ul>
        <a href="#basic" class="card__cta cta">EN SAVOIR +</a>
      
      </div>

      <div class="cards__card card">
        <h2 class="card__heading">250DT</h2>
        <p class="card__price">3 MOIS</p>
        <p class="card__price"> ABONNEMENT </p>

        <ul role="list" class="card__bullets flow">
        <li>Frais D’inscription: 10 Dt</li>
          <li>Accès Ilimité A Tous Les Cours</li>
          <li>Accès Ilimité Au salle de musculation</li>
        </ul>
        <a href="#pro" class="card__cta cta">EN SAVOIR +</a>
      </div>

      <div class="cards__card card">
        <h2 class="card__heading">480DT</h2>
        <p class="card__price">6 MOIS</p>
        <p class="card__price"> ABONNEMENT </p>

        <ul role="list" class="card__bullets flow">
        <li>Frais D’inscription: 10 Dt</li>
          <li>Accès Ilimité A Tous Les Cours</li>
          <li>Accès Ilimité Au salle de musculation</li>
        </ul>
        <a href="#ultimate" class="card__cta cta">EN SAVOIR +</a>
      </div>

      <div class="cards__card card">
        <h2 class="card__heading">950DT</h2>
        <p class="card__price">12 MOIS</p>
        <p class="card__price"> ABONNEMENT </p>
        <ul role="list" class="card__bullets flow">
        <li>Frais D’inscription: 10 Dt</li>
          <li>Accès Ilimité A Tous Les Cours</li>
          <li>Accès Ilimité Au salle de musculation</li>
        </ul>
        <a href="#ultimate" class="card__cta cta">EN SAVOIR +</a>
      </div>



    </div>

    
    
  </div>
</main>
    </div>
  )
}

export default Tarif
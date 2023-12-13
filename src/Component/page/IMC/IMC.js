import React, { useState } from 'react'
import './IMC.css'

const IMC = () => {
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [Resultat, setResultat] = useState("");
  const [bmi, setBmi] = useState("");
  
  function calculate(){
 
    if(age=="" || height=="" || weight=="" || (male==false && female==false)){
      setResultat("Tous les champs sont obligatoires !");
  
    }else{
      countBmi();
    }
  
  }

  function countBmi(){
    var p = [age, height, weight];
    if(male==true){
      p.push("male");
    }else if(female==true){
      p.push("female");
    }
  
    setBmi (( Number(p[2])/(Number(p[1])/100*Number(p[1])/100)).toFixed(2));
        
    var result = '';
    if(bmi<18.5){
      result = 'Underweight';
       }else if(18.5<=bmi&&bmi<=24.9){
      result = 'Healthy';
       }else if(25<=bmi&&bmi<=29.9){
      result = 'Overweight';
       }else if(30<=bmi&&bmi<=34.9){
      result = 'Obese';
       }else if(35<=bmi){
      result = 'Extremely obese';
       } 
         setResultat(result);
  }
  


  return (
    <div className='BodyIMC' >
<form id="myForm">
<div className="containerimc">

        <div className="box">

          <h1>BMI Calculator</h1>
             {/* input age */}
          <div className="group">
                <input type="text" placeholder="Age" name="age"  onChange={(e) => setAge(e.target.value)} class="text-input" id="age" autocomplete="off" required  />
                <input type="number" name="height"  placeholder="Taille (cm)" id="height" onChange={(e) => setHeight(e.target.value)} required/>
                <input type="number" name="weight"  placeholder="Poids(kg)" id="weight" onChange={(e) => setWeight(e.target.value)} required/>

          <div className="groupR ">

            <label className="groupRA">
                <input type="radio" name="radio"  id="m" onClick={() => setMale(true)}/>
                  <p className="text">Homme</p>
              </label>


            <label className="groupRA">
                <input type="radio" name="radio"  id="f" onClick={() => setFemale(true)} />
                <p className="text">Femme</p>
                </label>

          </div>
            <button className="btns"  onClick={()=>calculate()}>Calculer BMI</button>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {/* <button className="btns" id="reset" onClick={()=>vider()}>Vider </button> */}

          </div>
          <div className="result">
            <div id="result"> {bmi?<p>Your BMI is : {bmi}</p>:<p> Your BMI is : 00.00</p> } </div>
            <p >{Resultat}</p>
          </div>
           </div>
      </div>
      </form>
    </div>
  )
}

export default IMC
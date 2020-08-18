import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHheartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css'
import api from '../../services/api';



function Landing() {
  
  const [totalConnecions, setTotalConnecions] = useState(0);

  useEffect(() => {
    api.get('/connections').then(response => {
      console.log(response.data.total)
      const total = response.data.total;
      setTotalConnecions(total);
    })
  }, []);


  return (
   <div id="page-landing">
    <div id="page-landing-content" className="container">
      <div className="logo-container">
        <img src={logoImg} alt="Proff"/>
        <h2>Sua plataforma de estudos online.</h2>
      </div>
      <img 
      src={landingImg} 
      alt="Plataforma de estudos" 
      className="hero-image"
      />

      <div className="buttons-container">
        <Link to="/study" className="study">
          <img src={studyIcon} alt="Estudar"/>
          Estudar
        </Link>
        <Link to="/give-classes" className="give-classes">
          <img src={giveClassesIcon} alt="Dar Aulas"/>
          Dar Aulas
        </Link>
      </div>
      <span className="total-connections">
        Total de {totalConnecions} conexõs já realizadas <img src={purpleHheartIcon} alt="Coração roxo"/>
      </span>
    </div>
   </div>
  );
}

export default Landing;

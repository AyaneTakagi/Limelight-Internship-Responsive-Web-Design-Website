import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="info-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I am <span className="font-semibold">Ayane</span> 👋🏻
            <br/>
            A Software Engineer from Japan.
        </h1>
    ),
    2: (
        <InfoBox 
            text="Building skills through hands-on internships and self-driven projects."
            link="/about"
            btnText="Learn more"
        />
    ),
    3: (
        <InfoBox 
            text="From frontend to backend — I love turning ideas into real products."
            link="/projects"
            btnText="See my work"
        />
    ),
    4: (
        <InfoBox 
            text="Always learning — check out my certificates and learning milestones!"
            link="/certificates"
            btnText="Check them out"
        />
    ),
    5: (
        <InfoBox 
            text="Have a project in mind? Let's build something great together."
            link="/contact"
            btnText="Let's connect"
        />
    ),
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo
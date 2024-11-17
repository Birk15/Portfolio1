import React from 'react';
import './hero.css';
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt="" />
      <h1><span className='amazing-font-color'>I am Birk Dinkelacker,</span> frontend<br />developer based in Germany</h1>
      <p>I am a frontend developer from Eberbach, I started when I was 14 Years old. Now I want to become a professionel Website Developer!</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero

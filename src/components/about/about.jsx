import React from 'react';
import './about.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/about_profile.svg';


const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am talking no importet stuff, because i have to fill the lines to have the real experience. I am talking no importet stuff, because i have to fill the lines to have the real experience. I am talking no importet stuff, because i have to fill the lines to have the real experience</p>
                <p>Now I have the same problem, that I dont know what to say. I am talking no importet stuff, because i have to fill the lines to have the real experience</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "60%"}}/></div>
                <div className="about-skill"><p>React JS</p><hr style={{width: "70%"}}/></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width: "40%"}}/></div>
                <div className="about-skill"><p>Next JS</p><hr style={{width: "50%"}}/></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1 className='amazing-font-color'>10+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1 className='amazing-font-color'>90+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1 className='amazing-font-color'>15+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About

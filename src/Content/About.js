import React from 'react'
import webpic from '../images/webpic.jpg'


export default function About(){
    return(
        <div className="About-Content show" id="main">
                  <img src={webpic} className="picture rounded-circle" alt="profile-pic"/>
                  
                  <h2 className="mt-4 mb-2 quatrocento">Timothy Poehlman</h2>
                  <p className="content-info quatrocento">Hello! I am a currently a computer science undergrad persuing my Bachelors at Western Washington University.  Throughout my education at WWU I have especially gained interest in Machine Learning and Data Sciences.  I have conductucted research as a Research Assistant with Dr. Qiang Hao at WWU, which has helped me gain experience
                  in not only the development of applications, but also in academic research.  My non-academic interests include backpacking, gaming, and music.
                  </p>
                  <p className="content-info quatrocento">
                    This site will act as a way for me to display what projects I've worked on as well as showcase some live demos.
                  </p>
                  <h5> Programming Languages:</h5>
                  <ul className="content-info">
                    <li><p className="quatrocento">Python</p></li>
                    <li><p className="quatrocento">Java</p></li>
                    <li><p className="quatrocento">C/C++</p></li>
                    <li><p className="quatrocento">Javascript</p></li>
                    <li><p className="quatrocento">HTML/CSS</p></li>
                    <li><p>Javascript</p></li>
                  </ul>
              </div>
    )
}
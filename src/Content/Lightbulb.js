import React from 'react'
import {SubHeadingItem, SubHeadingList, Motivation} from '../Components'

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));


export default function LightBulb(){

    return(
      <div className='show' id='Lightbulb'>

        <Motivation header='Lightbulb' motivation='Motivation:' reason="When we began Lightbulb, it was just for a winter course about Computer Science Education research.  Teamed up in groups of small groups of 1 - 5 people 
        we each were responsible for either a development project or a research paper.  Our team(4 members) decided to develop Lightbulb.  Our goal was to create an application for instant feedback and quizzing in the classroom.
          We looked at existing applications such as Socrative and Kahoot, and analyzed what exactly was missing.  We found that there really was not any Computer Science focused applications.  We decided to not only create a reliable 
          and user-friendly app for instant feedback and quizzing but also one that would be especially helpful in CS classrooms.">

        </Motivation>

        <img src={images[1]} className='my-2 border rounded img-fluid' alt=''></img>
        <SubHeadingList title='What is Lightbulb?'>
                <SubHeadingItem content='Lightbulb is an online classroom assessment and instant feedback tool that helps instructors assess the performance of their students.'></SubHeadingItem>
                
        </SubHeadingList>

        <SubHeadingList title='Capabalities:'>
                <SubHeadingItem content='Creating Classrooms and Quizzes'></SubHeadingItem>
                <SubHeadingItem content='Question options of Multiple Choice, True/False, and Short Answer'></SubHeadingItem>
                <SubHeadingItem content='Real time Data Visualization of quiz results per classroom.'></SubHeadingItem>
                <SubHeadingItem content='Built in code text editor for easier use in CS classroom'></SubHeadingItem>
        </SubHeadingList>

        <SubHeadingList title='Quizzes:'>
                <SubHeadingItem content='Quizzes can have multiple questions, each with their own question types.'></SubHeadingItem>
                <SubHeadingItem content='Instructors are able to create quizzes detatched from classroom, and add them to whichever they choose.'></SubHeadingItem>
                <SubHeadingItem content='Active quizzes cannot be edited by the instructor.'></SubHeadingItem>
                <SubHeadingItem content='Supports Latex/Mathjax integration for mathematical equations and symbols'></SubHeadingItem>
                <SubHeadingItem content='Questions have options for a code editor to make it easier to code questions and answers'></SubHeadingItem>
        </SubHeadingList>
        <img src={images[2]} className='my-2 mb-5 border rounded img-fluid' alt=''></img>

        <SubHeadingList title='Classrooms:'>
                <SubHeadingItem content='Classroom contain quizzes.'></SubHeadingItem>
                <SubHeadingItem content='Instructors are be able to add quizzes to a specific classroom they have created.'></SubHeadingItem>
                <SubHeadingItem content='Instructors are able to set classrooms quizzes to active for students to take.'></SubHeadingItem>
                <SubHeadingItem content='QR code integration for students to join the active quiz.'></SubHeadingItem>
                <SubHeadingItem content='Classrooms are limited to one active quiz at a time, but non active quizzes have no restrictions.'></SubHeadingItem>
        </SubHeadingList>
        <img src={images[3]} className='my-2 border rounded img-fluid' alt=''></img>
        <img src={images[4]} className='my-2 border rounded img-fluid' alt=''></img>

        <SubHeadingList title='Students:'>
                <SubHeadingItem content='Students can enter and take active quizzes given that they know the classroom name or QR code'></SubHeadingItem>
                <SubHeadingItem content='Responses are logged as students take the quiz for insant feedback to the instructor'></SubHeadingItem>
      
        </SubHeadingList>
        <img src={images[5]} className='my-2 border rounded img-fluid' alt=''></img>
        <img src={images[6]} className='my-2 border rounded img-fluid' alt=''></img>

        <SubHeadingList title='Data Visualization/Answers:'>
          <SubHeadingItem content='Instructors can get a live feed of their students resposnes through Chart.js integrations'></SubHeadingItem>
          <SubHeadingItem content='Short Answers are assessed by the instructor'></SubHeadingItem>
        </SubHeadingList>
        <img src={images[7]} className='my-2 mb-5 border rounded img-fluid' alt=''></img>


        <h5 className='quatrocento'>Teammates for this project:</h5>
          <ul className='content-info'>
           
            <li>
              <div id='teammate'>
                <span className='mb-0'>Katie</span>
                <a href="mailto:katieborl@gmail.com"  target='_blank' rel="noopener noreferrer" className="tag-cloud-link"><i className="mx-1 fa fa-envelope mail project-item-size"aria-hidden="true"></i> </a>
                <a href="https://github.com/katiebo1294" target='_blank' rel="noopener noreferrer" className="mx-1 tag-cloud-link"><i className="fa fa-github project-item-size" aria-hidden="true"></i> </a>
                <a href="https://www.linkedin.com/in/katie-borley/" className="tag-cloud-link" target='_blank' rel="noopener noreferrer"><i  className='mx-1 fa fa-linkedin project-item-size'  aria-hidden="true"></i> </a>
              </div>
            </li>

            <li>
              <div id='teammate'>
                <span className='mb-0'>Adrian</span>
                <a href="mailto:adriangabales1@gmail.com" className="tag-cloud-link"><i className="mx-1 fa fa-envelope mail project-item-size"aria-hidden="true"></i> </a>
                <a href="https://github.com/adrian-23" target='_blank' rel="noopener noreferrer" className="mx-1 tag-cloud-link"><i className="fa fa-github project-item-size" aria-hidden="true"></i> </a>
                <a href="https://www.linkedin.com/in/adrian-gabales/" target='_blank' rel="noopener noreferrer" className="tag-cloud-link"><i target='_blank' rel="noopener noreferrer" className='mx-1 fa fa-linkedin project-item-size'  aria-hidden="true"></i> </a>
              </div>
            </li>
            
            <li>
              <div id='teammate'>
                <span className='mb-0'>Hansel</span>
                <a href="mailto:soto26938@gmail.com" className="tag-cloud-link"><i className="mx-1 fa fa-envelope mail project-item-size"aria-hidden="true"></i> </a>
                <a href="https://github.com/HGuzman-Soto" target='_blank' rel="noopener noreferrer" className="mx-1 tag-cloud-link"><i className="fa fa-github project-item-size" aria-hidden="true"></i> </a>
                <a href="https://www.linkedin.com/in/hansel-guzman-soto-15b80a175/" target='_blank' rel="noopener noreferrer" className="tag-cloud-link"><i target='_blank' rel="noopener noreferrer" className='mx-1 fa fa-linkedin project-item-size'  aria-hidden="true"></i> </a>
              </div>
            </li>
          </ul>
        


      </div>
    )
}
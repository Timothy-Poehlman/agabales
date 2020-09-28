import React from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom';
import About from './Content/About'
import Lightbulb from './Content/Lightbulb'
import Microshell from './Content/Microshell'
import resume from './Resume/Resume.pdf'
import ScrollToTop from '../src/Utility/ScrolltoTop'
import { SideBarDropDown ,SideTabContainer, SideTab, TagCloud, TagCloudLink, ListLink, ListDescription, Credentials} from './Components';

function App() {
  

ScrollToTop();
  
  return (

    
    <div className="App container d-md-flex align-items-stretch">
      <div id='content' className='p-4 p-md-5 pt-5'>

      
          <Switch>
            <Route exact path='/' component={About}></Route>

            <Route exact path='/about' component={About}>

            </Route>
            <Route path='/lightbulb' component={Lightbulb}>
              
            </Route>
            <Route path='/microshell' component={Microshell}>
            </Route>

            <Route path='/publication_and_pattern_quality (TBA)' component={About}>
            </Route>

            <Route component={About}></Route>
          </Switch>
      </div>
      

      <nav id='sidebar'>
        <SideTabContainer>


            <TagCloud>
              <h3 className='text-center my-2' id='About-btn'> <Link to='/about' > About </Link></h3>
            </TagCloud>

            
            <SideTab title='Projects'>

              <SideBarDropDown id='description-lightbulb'  title='Lightbulb' logo='mr-2 fa fa-lightbulb-o project-item-size'  >
                  <ListDescription href='/lightbulb' id='description-lightbulb' content='Description'></ListDescription>
                  <ListLink href='https://github.com/wwu-csci-497/bettercrative' content='Github'><span className="text-success">(Public)</span></ListLink>
              </SideBarDropDown>

              <SideBarDropDown id='description-Microshell' title='Microshell' logo='mr-2 fa fa-linux project-item-size'>
                  <ListDescription href='/microshell' id='description-Microshell' content='Description'></ListDescription>
                  <ListLink  content='Github'><span className="text-danger">(Private)</span></ListLink>
              </SideBarDropDown>

              <SideBarDropDown id='description-publication_and_pattern_quality' title='publication_and_pat...' logo='mr-2 fa fa-linux project-item-size'>
                  <ListDescription href='/' id='description-publication_and_pattern_quality' content='publication_and_pattern_quality (TBA)'></ListDescription>
                  <ListLink  content='Github'><span className="text-danger">(Private)</span></ListLink>
              </SideBarDropDown>

            </SideTab>

            <Credentials>
              <TagCloud>
                <TagCloudLink href='https://github.com/Timothy-Poehlman' button_desc='fa fa-github' content=''></TagCloudLink>
                <TagCloudLink href='https://www.linkedin.com/in/Timothy-Poehlman/' button_desc='fa fa-linkedin mail' content=''></TagCloudLink>
                <TagCloudLink href={resume} button_desc='' content='CV'></TagCloudLink>
                <TagCloudLink href='mailto:timothypoehlman@gmail.com' content='timothypoehlman@gmail.com'></TagCloudLink>
              </TagCloud>
            </Credentials>
            

              
        </SideTabContainer>

        

        
      </nav>
    </div>


    
    
    

  );
}

export default App;

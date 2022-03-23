import React from 'react';
import AppHero from '../home/hero';
import AppAbout from '../home/about'
import AppFeature from '../home/feature'
import AppWorks from '../home/works'
import AppQuestions from '../home/questions';
import AppContact from '../home/contact'

function AppHome(){
    return(
        <div className= 'main'>
            <AppHero/>
            <AppAbout/>
            <AppFeature/>
            {/* <AppWorks/> */}
            
            <AppContact/>
            <AppQuestions/>

        </div>
    )
}
export default AppHome;
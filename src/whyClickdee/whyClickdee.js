import React from 'react'
import Hovercards from '../components/hovercards';
import './whyClickdee.scss'

const WhyClickdee = () => {
  return (
    <>
        <div className='left-sec'>
            <h2 className='section-heading'>Why the industry chooses Clickdee?</h2>
            <p className='section-text'>We understand performance marketing from every angle and every stage of the funnel. Our clients trust that we know what metrics move their business 
                towards growth. Our publisher and affiliate partners know that we make maximum revenue and ROAS a main focus when growing our partnerships.</p>
        </div>
        <div className='right-sec'>
          <div className='card-lists'>
            <div class="chooseitem-intro"></div>
            <Hovercards title= "Choose Your Local Targeting" description="Our targeted and tracked calls are tailored to your business needs, audience, and geolocation." icon="./assets/images/target.svg" />
            <Hovercards title= "Track Your Conversion" description="We use the most progressive tracking and analytics technology to ensure that every call can be tracked and evaluated" icon="./assets/images/filter.svg" />
            <Hovercards title= "Customized Campaigns" description="Audiences, budgets, and goals: you decide the criteria for your digital ad campaign, and we’ll do the rest." icon="./assets/images/customized.svg" />
            <Hovercards title= "Get Dedicated Support Team" description="We constantly monitor quality control! Our affiliate network of publishers are digital ad experts that have been vetted." icon="./assets/images/support-team.svg" />
            <Hovercards title= "Quality Assurance" description="We constantly monitor quality control! Our affiliate network of publishers are digital ad experts that have been vetted." icon="./assets/images/quality-insurance.svg" />
          </div>
            
        </div>
    </>
  )
}

export default WhyClickdee;
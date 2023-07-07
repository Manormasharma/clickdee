import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const Hovercards = (props) => {
  return (
      <Card className='hover-card'>
            <div className='card-bg'>
            <div class="chooseitem-backgroundhover"></div>
            </div>
            <div className='card-content'>
                <CardImg src={props.icon} className='hover-card-image m-3' alt="Card image cap" />
                <CardBody>
                    <CardTitle className='hover-card-title'>{props.title}</CardTitle>
                    <CardText className='hover-card-desc'>{props.description}</CardText>
                </CardBody>
            </div>

        
      </Card>
  )
}

export default Hovercards
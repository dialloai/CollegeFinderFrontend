import React from 'react'
import { Card , Image , Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";

const CollegeCard = props =>  (
      <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={props.college.image}
        /> 
        <Card.Header>{props.college.name}</Card.Header>
        <Card.Meta><strong>{props.college.location}</strong></Card.Meta>
        <Card.Meta><strong>{props.college.tuition}</strong></Card.Meta><Card.Meta><strong>{props.college.overview}</strong></Card.Meta>
        <Card.Meta><strong>{props.college.website}</strong></Card.Meta>
      </Card.Content> 
      <Link className ="item" to={`/colleges/${props.college.college_id}`}> 
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Show College Details
          </Button> 
        </div>
      </Card.Content> 
      </Link>
    </Card> 
  ) ; 
  
   export default CollegeCard
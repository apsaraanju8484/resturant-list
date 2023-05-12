import React from 'react'

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestaurantCard({restaurant}) {
 console.log(restaurant);
  return (
 

      <Link to={`/view-restaurant/${restaurant.id}`} style={{color:`white`,textDecoration:`none`}}>
        <Card >
        <Card.Img className='p-2 ' style={{ height: '480px'}} variant="top" src={restaurant.photograph} />
        <Card.Body>
          <Card.Title style={{ fontSize: '1.3rem'}}>{restaurant.name}</Card.Title>
          <Card.Text style={{ fontSize: '1rem'}}>
          
             Cuisine : {restaurant.cuisine_type}
             
          </Card.Text>
          <Card.Text style={{ fontSize: '1rem'}}>
            {restaurant.neighborhood}
          </Card.Text>
        </Card.Body>
       
        
      </Card>
      </Link>
  








  )
}

export default RestaurantCard
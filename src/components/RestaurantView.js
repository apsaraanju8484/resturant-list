import React from 'react'
import { useParams } from 'react-router-dom'
import { useState , useEffect } from 'react';
import { Row , Col , Image } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import RestReviews from './RestReviews';



function RestaurantView()
 {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




 const [restaurants,setRestaurants] = useState([])
  const params = useParams()
  console.log(params.id);

  // api call cheyan
  const fetchData = async ()=>{
    const res=await fetch('/restaurants.json')
  //  console.log(result);
  res.json().then((data)=>{
      setRestaurants(data.restaurants);
    }
  )
  
  
   }

   console.log(restaurants);
   useEffect(()=>{
    fetchData()  
   },[])

  //  particular values kittan
  const restaurant = restaurants.find(item=>item.id == params.id)
  console.log(restaurant);


  return (
  
      <>
       {
       restaurant ? (<Row className='p-5'>
          <Col md={3}>
          <Image className='rounded  border p-3' src={restaurant.photograph}  fluid></Image>
          </Col>
          <Col md={8} className='p-5'>
          <ListGroup>
        <ListGroup.Item><h2 className='py-4'>{restaurant.name}</h2></ListGroup.Item>
        <ListGroup.Item><p className='py-2'>{restaurant.neighborhood}</p></ListGroup.Item>
        <ListGroup.Item><p className='py-2'>Cuisine : {restaurant.cuisine_type}</p></ListGroup.Item>
        <ListGroup.Item><p className='py-2'>Address : {restaurant.address}</p></ListGroup.Item>
        <ListGroup.Item><Button variant="secondary" className='my-4 py-2'  onClick={handleShow}>
        Click Here To See  Operating Hours
      </Button></ListGroup.Item>
      <ListGroup.Item>
        <RestReviews reviews={restaurant.reviews}></RestReviews>
         </ListGroup.Item>
     
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup.Item className='py-2'>Monday : {restaurant.operating_hours.Monday}</ListGroup.Item>
        <ListGroup.Item className='py-2'>Tuesday : {restaurant.operating_hours.Tuesday}</ListGroup.Item>
        <ListGroup.Item className='py-2'>Wednesday : {restaurant.operating_hours.Wednesday}</ListGroup.Item>
        <ListGroup.Item className='py-2'>Thursday : {restaurant.operating_hours.Thursday}</ListGroup.Item>
        <ListGroup.Item className='py-2'>Friday : {restaurant.operating_hours.Friday}</ListGroup.Item>
        <ListGroup.Item className='py-2'>Saturday : {restaurant.operating_hours.Saturday}</ListGroup.Item>
        <ListGroup.Item className='py-2'>Sunday : {restaurant.operating_hours.Sunday}</ListGroup.Item>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>



      </ListGroup>
          </Col>
        </Row>) : ' nothing to display'


        }
        
      </>
  )
}

export default RestaurantView
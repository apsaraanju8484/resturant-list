import React, { useState } from 'react'
import { useEffect } from 'react'
import { Row,Col } from 'react-bootstrap'
import RestaurantCard from './RestaurantCard'
import {RestaurantsList} from '../action/homeAction' 
import { useDispatch ,useSelector} from 'react-redux'



function Home() {
//  const[restaurants,setRestaurants]=useState([])
 // function to get data from api
//  const fetchData = async ()=>{
//   const result=await fetch('/restaurants.json')
//  console.log(result);
// result.json().then(
//   data =>{
//     setRestaurants(data.restaurants);
//   }
// )


//  }
// console.log(restaurants);

 useEffect(() => {
  // fetchData()
  dispatch(RestaurantsList())
   
 },[])
   
const dispatch = useDispatch()

 const {restaurants} = useSelector(state=>state.restaurantReducer)
 console.log(restaurants);

  return (
   <Row>
     { 
      restaurants.map(item=>(
        <Col sm={6} lg={3} md={4} className='p-5'>
          <RestaurantCard restaurant={item} ></RestaurantCard>
          </Col>
      ))
    }
   </Row>
  )                                                                                                                                                                                                                                                                                  
}

export default Home
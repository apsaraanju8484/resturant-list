import React from 'react'
import { useState , useEffect } from 'react';
import { Button , Collapse } from 'react-bootstrap'
function RestReviews({reviews}) {
console.log(reviews);
 const [open, setOpen] = useState(false);
  return (
    <div>
     <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Click Here To See The Reviews
      </Button>
     <Collapse in={open}>
        <div id="example-collapse-text">
 {reviews.map(item=>(
  <div>
   <h6 className='py-3'>
    {item.name} : (<span>{item.date}</span>)
   </h6>
  <p>Rating : {item.rating}</p>
  <p>Comments : {item.comments}</p>
  <hr></hr>
  </div>
 
 ))}
        </div>
      </Collapse>
    </div>
  )
}

export default RestReviews
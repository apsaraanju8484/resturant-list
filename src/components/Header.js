import React from 'react'

import { Container ,Navbar } from 'react-bootstrap'
function Header() {
  return (
   <Navbar bg="dark" variant="dark">
   <Container>
     <Navbar.Brand href="/">
       <img
         alt=""
         src="https://www.cedarcrestdelivers.com/uploads/products/icon-white-restaurants1.png"
         width="100"
         
      
       />{' '}
       {/* <i class="fa-duotone fa-user-chef"></i> */}
       Nirfa Nirfin Resturant-List
     </Navbar.Brand>
   </Container>
 </Navbar>
  )
}

export default Header
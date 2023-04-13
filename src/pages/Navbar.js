import React from 'react'
import { Link } from 'react-router-dom'
import { BsHandbag } from "react-icons/bs";
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux'

const Navbar = () => {
    const cartItem = useSelector((state)=> state.cart)
  return (
    <>
      <header class="bg-gray-900 text-white body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
 
      <span class="ml-3 text-xl text-white">Redux ToolKit</span>
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <Link to={'/'}>
      <a class="mr-5 hover:text-gray-400 cursor-pointer">Home</a>
        </Link>
      <a class="mr-5 hover:text-gray-400 cursor-pointer">Contact</a>

    </nav>
    <Link to={"/cart"}>
    <Badge badgeContent={cartItem.length} color="primary">
                <button>
                <BsHandbag className=" font-bold text-2xl" />
              </button>
                </Badge>
    </Link>
  </div>
</header>
    </>
  )
}

export default Navbar

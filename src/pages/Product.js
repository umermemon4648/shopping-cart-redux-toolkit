import React, {useEffect, useState} from 'react'
import {add} from '../store/cartSlice'
import { useDispatch } from 'react-redux'
const Product = () => {
const [product, setProduct] = useState([])
const dispatch = useDispatch()
useEffect(()=>{
    let link = "https://fakestoreapi.com/products"
    const fetchData = async()=>{
        const res = await fetch(link)
        const data = await res.json()
        console.log(data)
        setProduct(data)
    }
    fetchData()
},[])

const addToCart = (productElement)=>{
    dispatch(add(productElement))
    alert("Clucke")
}

  return (
    <>

<section className="text-gray-600 body-font">
        <div className="container py-4 mx-auto">
          <div className="flex md:items-center md:justify-start justify-center  flex-wrap -mx-8">



{product?.map((element)=>
(
    <div  className="card mb-6 h-[64vh] mx-12 cursor-pointer lg:w-1/5 md:w-1/3  w-2/3 border-2 " >
    <div className="relative w-max-sm overflow-hidden items-center justify-center text-center w-3/4">
<img  alt="ecommerce" className="w-full shadow rounded max-w-full h-[28vh]"  src={element.image}/>
    </div>
    <div className="mt-4 p-3">
      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
        {element.category}
      </h3>
      <h2 className="text-gray-900 title-font">
        {element.title.length>80? element.title.slice(0,80) + "...":element.title}
      </h2>
      <p className="mt-1 text-orange-700 text-lg font-bold">Rs. {element.price}</p>

    </div>
      <button onClick={()=> addToCart(element)} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
Add to Cart
</button>
  </div>
)
)}
     




  </div>
        </div>
      </section>

    </>
  )
}

export default Product

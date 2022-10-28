import React from 'react'
import '../styles/Cards.css';

// import '../components/Images js';
// function handleClick(){}
const Cards = ({item, handleClick}) => {
    const {productName, price,img} = item;
  return (
    <div className='cards'>
        <div className='image-box'>
            <img src={img} alt=''/>
            {/* <img src='./components/food-picture/.jpeg'/> */}
        </div>
        <div className='details'>
            <p>{productName}</p>
            <p>price - {price}Rs</p>
            
            {/* <p>{productPicture}</p> */}
           
             <button onClick={()=>handleClick(item)}>Add to cart</button> 
            
            
        </div>
    </div>

  )

}


export default Cards;
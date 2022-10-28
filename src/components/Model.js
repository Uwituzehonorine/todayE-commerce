import React from 'react'
import '../styles/model.css'


const Model = (props) => {
    const modelState=props.toggle
  return (
    <div className='style.container'>Model
    <div className='style.model'>
        <form>
            <input  placeholder="productName">jjjjj</input>
        </form>
        <div className='style.colse'>hhh</div>
    </div>
    
    </div>
  )
}

export default Model
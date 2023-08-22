import React from 'react'
import './GrowingPlant.css'
// import './GrowingPlant.scss'

function GrowingPlant() {
    // variable
    const plantStyle ={
        color:'green'
    }

    // html code, js code -> {}
  return (
    <div>
      {/* css style */}
          <div className='plant'> GrowingPlant. This is the usage fo exteran css file </div> 
          <div style={plantStyle}> Plant color 2. This is the usage internal css style </div>
          <div style={{color:'blue'}}>This is the in line usage of the style</div>
{/* sass style */}
          <div className='plant'>This is sass styling
              <div className='text'>Growing Plant</div>
              <div className='logo'>This is sass logo</div>
          </div>
    
    </div>
  )
}

export default GrowingPlant
import React from 'react'
import './Loading.css'

const Loading = () => {
  return (
    <div className='containerLoading'>
      <h1 className='titleLoading'>Loading...</h1>
        <div className='spinnerBox'>
            <div className='circleBox'>
                <div className='circleCore'></div>
            </div>
        </div>
    </div>
  )
}

export default Loading
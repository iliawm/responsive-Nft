import { useState } from 'react'

import './App.css'

function App() {
  const price="0.041 ETH"

  return (
    <>
      <div className="wholepage">
        <div className="card">
          <div className="topcard">
            <img src="image-equilibrium.jpg" alt="" className="image"/>
            <h1 className="title">Equilibrium #3429</h1>
            <p className="disc">Our Equilibrium collection promotes balance and calm</p>
            <div className="price">
              <div className="pl">
              <img src="icon-ethereum.svg" alt="" className='eth' />
              <p className='ethprice'>{price}</p>
              </div>
              <div className="pr">
                <img src="icon-clock.svg" alt="" className="imgclock" />
                <p className="time">3 days left</p>
              </div>
            </div>
          </div>
          <div className="botcard">
            <img src="182183027.jpg" alt="" className="botimg" />
            <p className="CName">Creation of <p className="name">ILIAWM</p></p>

          </div>
        </div>
      </div>
    </>
  )
}

export default App

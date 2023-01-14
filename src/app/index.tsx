import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Home } from '../views'
import background from "../assets/img/ced2d0cc1832708a6a1ee95df0e285a1.gif"

export const App = () => {

  return (
    //  <Home/>
    <div style={{display:"flex",
      justifyContent: "center",
  alignItems: "center"
    
    }}>
      <img src={background} alt="" style={{width: "100vw", height: "100vh"}} />
    </div>
  )
}


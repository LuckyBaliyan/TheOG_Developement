import React from 'react'
import { Q1 } from '../components/Q1'
import Button from '../ui/btns/Button'

const Home = () => {
  return (
        <div>
          <Q1/>
          <Button text={"Primary BTN"} 
          onClick={()=>alert("Primary btn clicked!")}
          />

          <Button text={"secondary"} 
          classType={'secondary'}
          onClick={()=>alert("Secondary btn clicked!")}
          />
        </div>
    )
}

export default Home
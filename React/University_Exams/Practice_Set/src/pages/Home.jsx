import React from 'react'
import { Q1 } from '../components/Q1'
import Button from '../ui/btns/Button'
import Auth from '../components/Auth'
import UserName from '../components/UserName'
import ProductCard from '../components/Product'
import StudentsGrid from '../components/StudentsGrid'

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
          <br />
          <Auth />
          <br />
          <UserName />
          <br />
          <div className='flex'>
             <ProductCard />
          </div>
          <div>
            <StudentsGrid />
          </div>
        </div>
    )
}

export default Home
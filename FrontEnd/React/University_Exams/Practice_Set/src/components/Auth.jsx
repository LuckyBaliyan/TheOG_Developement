import React, { useState } from 'react'
import Button from '../ui/btns/Button';

const Auth = () => {
    const [isLogin,setIsLogin] = useState(false);
  return (
    <div style={{marginTop:'80px'}}>
        <h2>Login & Logout System Based on State</h2>

        {isLogin && <h4>Welcome Sir!</h4>}

        {
            !isLogin ? (
                <Button text={'login Please!'} onClick={()=>setIsLogin(true)} />
            )
            :
            (
                <Button text={"logout !"} classType={'secondary'} 
                onClick={()=>setIsLogin(false)}/>
            )
        }
    </div>
  )
}

export default Auth
import React, { useState } from 'react'

const UserName = () => {
    const [userName,setUserName] = useState('User');
  return (
    <div>
        <h2>Dynamic UserName Dashboard !</h2>

        <textarea name="username" id=""
        onChange={(e)=> setUserName(e.target.value)}>
        </textarea>

        <p>Welcome Mr.{userName}</p>
    </div>

  )
}

export default UserName
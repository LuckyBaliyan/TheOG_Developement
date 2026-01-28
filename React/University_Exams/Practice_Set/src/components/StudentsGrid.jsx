import React, { useState } from 'react'

const StudentsGrid = () => {
    const [isPresent,setIsPresent] = useState(Array(50).fill(false));

    const toggleAddtendence = (indx)=>{
        const update = [...isPresent];
        update[indx] = !update[indx];

        setIsPresent(update);
    }

  return (
    <div className='grid'>
        {Array.from({length:50}).map((_,i)=>(
            <div className='std' key={i}  style={{
                backgroundColor: isPresent[i] ? "green" : "",
              }}>
                <input type='checkbox'
                checked = {isPresent[i]}
                onClick={()=>toggleAddtendence(i)}
                className='check'
                />
            </div>
        ))}
    </div>
  )
}

export default StudentsGrid;
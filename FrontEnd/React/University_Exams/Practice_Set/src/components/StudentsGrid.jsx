import React, { useState } from 'react'

const StudentsGrid = () => {
    const [isPresent,setIsPresent] = useState(Array(50).fill(false));

    const toggleAddtendence = (indx)=>{
        const update = [...isPresent]; // make copy of all students
        update[indx] = !update[indx]; // udate the state at ith std at which we click

        setIsPresent(update); // update the array of stds with new copy
    }

  return (
    <div className='grid'>
        {Array.from({length:50}).map((_,i)=>(
            <div className='std' key={i}  style={{
                backgroundColor: isPresent[i] ? "green" : "",
              }}>
                <input type='checkbox'
                checked = {isPresent[i]} // becuase its array now so isPresent[i]
                onClick={()=>toggleAddtendence(i)} // pass the present std idx
                className='check'
                />
            </div>
        ))}
    </div>
  )
}

export default StudentsGrid;
import React, { useState,useRef } from 'react'

//Create a React component that takes text input from the user using a controlled 
//component and displays the typed text dynamically below the input field. 


export const Q1 = () => {
    
  const [text,setText] = useState("");
  const [string,setString] = useState('');

  const [toggle,setToggle] = useState(true);

  const btnRef = useRef(null);
  const paraRef = useRef(null);

 

  return (
    <div>
        <form action="">
            <input type="text"  placeholder='Enter Input'
            onChange={(e)=>setText(e.target.value)}/>

            <textarea name="" id="" onChange={(e)=>setString(e.target.value)}></textarea>

            <input type="text" readOnly value={text} />
            {
                string && <p>
                    you Entered : {string}
                </p>
            }

           {
            toggle &&  <p ref={paraRef}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate cupiditate quidem ipsa aliquam nemo praesentium animi facilis reiciendis impedit ratione, id similique 
                aut hic eum blanditiis eveniet velit natus eius.
            </p>
           }

            <button type='button' ref={btnRef} onClick={()=>setToggle(prev => !prev)}>
                toggle para
            </button>
        </form>
    </div>
  )
}

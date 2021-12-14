import React,{useState} from 'react'
import './Set.css'
const Counter = () => {

     const [Data, setData] = useState(0)

     const Addd=()=>{
     setData(Data+1)
     }

     const Subb=()=>{
         setData(Data - 1)
     }
  const Neutral=()=>{
      setData(Data*0)
  }
    return (
        <>
        <div className="Set">
            <h1>
                 THIS IS THE COUNTER PAGE
            </h1>
            <h2>{Data}</h2>

            <button type="button" onClick={Addd} className="add">ADD</button>
            <button type="button" onClick={Subb} className="sub">SUB</button>
            <button type="button" onClick={Neutral} className="neutral">neutral</button>
        </div>


        </>
    )
}

export default Counter

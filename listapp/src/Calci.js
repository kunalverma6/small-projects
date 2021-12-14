import React,{useState} from 'react'
//import bootstrap from './bootstrap'
import Calcicc from "./Calcicc.css"

 
const Calci = () => {
    
    
const [Data, setData] = useState('')

    const display=(value)=>{

        setData( Data + value);


    }
    
    
    const Calculate=()=>{
         var answer=eval(Data)
         setData(answer)


    }
    
    const Clear=()=>{
        setData(" ")
    }
    
    
    return (
        < >
          <div className="row justify-content-center" id="page">
              <div className="col-md-5" id="main" >
                  <h1>REACT CALCI</h1>
                  <table className="table" >
                      <tr><td>
                          <input type="text" style={{columnSpan:6}}  value={Data}></input>
                          </td><td>
                          <button type="button" onClick={()=>{Clear()}}>CLEAR</button>
                     </td> </tr>
                      <tr><td>
                          <button onClick={()=>{display('1')}}>1</button>
                          </td><td>
                            <button onClick={()=>{display('2')}}>2</button>
                          </td><td>
                                <button onClick={()=>{display('3')}}>3</button>
                          </td><td>
                          <button onClick={()=>{display('+')}}>+</button>
                      </td></tr>
                      <tr><td>
                            <button onClick={()=>{display('4')}} >4</button>
                          </td><td>
                            <button onClick={()=>{display('5')}}>5</button>
                          </td><td>
                          <button onClick={()=>{display('6')}}>6</button>
                          </td><td>
                          <button onClick={()=>{display('-')}}>-</button>
                    </td>  </tr>
                      <tr><td>
                          <button onClick={()=>{display('7')}}>7</button>
                          </td><td>
                          <button onClick={()=>{display('8')}}>8</button>
                          </td><td>
                          <button onClick={()=>{display('9')}}>9</button>
                          </td><td>
                          <button onClick={()=>{display('/')}}>/</button>
                      </td></tr>
                      <tr><td>
                          <button onClick={()=>{display('.')}}>.</button>
                          </td><td>
                          <button onClick={()=>{display('0')}}>0</button>
                          </td><td>
                          <button onClick={()=>{Calculate()}}>=</button>
                          </td><td>
                          <button onClick={()=>{display('*')}}>*</button>
                      </td></tr>
                  </table>
              </div>
              </div>  
        </>
    )
}

export default Calci

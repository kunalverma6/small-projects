import React,{useState} from 'react'
import './Calcss.css'

const Calculator = () => {
    const [Data, setData] = useState('')

    const display=(value)=>{
        setData( Data + value)

    }
    const But=()=>{
        var answer=eval(Data)
        setData(answer)
    }
  
   const et=()=>{
       setData('')
   } 

    return (
        <>
        <div className="container justify-content-center">
            <div id="ro" className="col-md-5 shadow-lg p-3 mb-5 bg-white rounded  calculator-keys ">
                <h1>
                    CALCULATOR
                </h1>
                <div className="table ">
                    <tr>
                        <td>
                            <input type="text" value={Data}></input>
                        
                        </td>
                        <td>
                        <button className="operator btn btn-info" onClick={()=>{et( )}}>CLEAR</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button className="equal-sign operator btn btn-default" onClick={()=>{display('1')}}>1</button>
                            <button className="equal-sign operator btn btn-default" onClick={()=>{display('2')}}>2</button>
                            <button  className="equal-sign operator btn btn-default" onClick={()=>{display('3')}}>3</button>
                            <button className="equal-sign operator btn btn-default" onClick={()=>{display('/')}}>/</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button className="equal-sign operator btn btn-default"  onClick={()=>{display('4')}}>4</button>
                            <button className="equal-sign operator btn btn-default"  onClick={()=>{display('5')}}>5</button>
                            <button className="equal-sign operator btn btn-default"  onClick={()=>{display('6')}}>6</button>
                            <button className="equal-sign operator btn btn-default"  onClick={()=>{display('*')}}>*</button>
                        </td>
                        </tr>
                        <tr>
                        <td>
                            <button className="equal-sign operator btn btn-default" onClick={()=>{display('7')}}>7</button>
                            <button className="equal-sign operator btn btn-default" onClick={()=>{display('8')}}>8</button>
                            <button className="equal-sign operator btn btn-default" onClick={()=>{display('9')}}>9</button>
                            <button className="equal-sign operator btn btn-default" onClick={()=>{display('+')}}>+</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button className="equal-sign operator btn btn-default" onClick={()=>{display('.')}}>.</button>
                            <button className="equal-sign operator btn btn-default" onClick={()=>{display('0')}}>0</button>
                            <button className="equal-sign operator btn btn-default" onClick={()=>{But()}}>=</button>
                            <button className="equal-sign operator btn btn-default" onClick={()=>{display('-')}}>-</button>
                        </td>
                    </tr>
                
                </div>
            </div>
        </div>
            
        </>
    )
}

export default Calculator

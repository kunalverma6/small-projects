import React,{useState} from 'react'

const Fom = () => {

    const [Data, setData] = useState({
        username:"",
        phone:"",
        email:"",
        password:""
    })

    const Handlet=()=>{
        
    }
    return (
        <>
        <div>
            <form>
                <h1>
                    FORM VALIDATION

                </h1>

                <div>
                    <label htmlFor="username">username</label>
                    <input type="text" name="username" id="username"
                    value={Data.username}
                    onchange={()=>{Handlet()}}>user</input>
                </div>
            </form>
        </div>
            
        </>
    )
}

export default Fom

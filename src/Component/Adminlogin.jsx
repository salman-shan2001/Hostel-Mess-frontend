import React, { useState } from 'react'
import NavBar from './NavBar'

const Adminlogin = () => {
    const [data,setdata] = useState([
        {
            "EmailId":"",
            "Password":""
        }
    ]



    )
    const inputhandler = (event) =>{
        setdata({...data,[event.target.name]:event.target.value})

    }
    const readvalue=()=>{
        console.log(data)
    }


  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form label">EmailId</label>
                            <input type="email" className="form-control"  name='EmailId' value={data.EmailId} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form label">password</label>
                            <input type="password" className="form-control"  name='password'  value={data.Password} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-primary" onClick={readvalue}>login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Adminlogin
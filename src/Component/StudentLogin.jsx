import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const StudentLogin = () => {
    const [data,setdata] =  useState([
        {
            "EmailId":"",
            "Password":""
        }
    ]

    )
    const inputhandler=(event)=>{
        setdata({...data,[event.target.name]:event.target.value})

    }
    const readvalue=()=>{
        console.log(data)
        axios.get("http://localhost:5050/SignIn",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status == "success") {
                    sessionStorage.setItem("token",response.data.token)
                    sessionStorage.setItem("userid",response.data.userid)
                    
                    
                } else {
                    alert("failed")
                }

            }
        ).catch(
            (error)=>{
                console.log(error.message)
                alert(error.message)

            }

        ).finally()
    }
    

  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                           <label htmlFor="" className="form-label">EmailId</label>
                           <input type="email" name="EmailId" id="" className="form-control" placeholder='EmailId' value={data.EmailId} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="Password" className="form-control" placeholder='Password' name='Password' value={data.Password} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-primary " onClick={readvalue}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StudentLogin
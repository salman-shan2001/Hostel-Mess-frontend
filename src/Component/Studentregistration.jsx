import axios from 'axios'
import React, { useState } from 'react'

const Studentregistration = () => {
    const [data, setData] = useState(
        {
            "Name": "",
            "AdmissionNumber": "",
            "Department": "",
            "EmailId": "",
            "Password": ""
        }
    )
    const inputHandler = (event) => {
        setData({...data, [event.target.name]: event.target.value})
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:5050/SignUp",data).then(
            (Response) => {
                console.log(Response.data)
                if (Response.data.status == "success") {
                    alert("Successfully added")
                } else {
                    alert("Error")
                }
            }
        ).catch().finally()
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="row g-3">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className='form-label'>Name</label>
                                    <input type="text" className='form-control' name="Name" value={data.Name} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className='form-label'>Admission Number</label>
                                    <input type="text" className='form-control' name="AdmissionNumber" value={data.AdmissionNumber} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className='form-label'>Department</label>
                                    <input type="text" className='form-control' name="Department" value={data.Department} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className='form-label'>Email ID</label>
                                    <input type="text" className='form-control' name="EmailId" value={data.EmailId} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className='form-label'>Password</label>
                                    <input type="text" className='form-control' name="Password" value={data.Password} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <center><button className="btn btn-primary" onClick={readValue}>Register</button></center>
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Studentregistration
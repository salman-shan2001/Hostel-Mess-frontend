import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Staffview = () => {
    const [data, setData] = useState([])
    const fetchData = () => {
        axios.post("http://localhost:5050/viewStudent").then(
            (Response) => {
                setData(Response.data)
            }
        ).catch().finally()
    }
    useEffect(() => { fetchData() }, [])
    return (
        <div>
            <div class="container">
                <h3><u><center>STUDENT DETAILS</center></u></h3>
                <div class="row">
                    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div class="row g-3">
                            <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Admission Number</th>
                                            <th scope="col">Department</th>
                                            <th scope="col">EmailId</th>
                                            <th scope="col">Password</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map(
                                            (value, index) => {
                                                return <tr>
                                                    <td>{value.Name}</td>
                                                    <td>{value.AdmissionNumber}</td>
                                                    <td>{value.Department}</td>
                                                    <td>{value.EmailId}</td>
                                                    <td>{value.Password}</td>
                                                </tr>
                                            }
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Staffview
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

const Homepage = () => {
    const [data, setdata] = useState(
        [
            {
                "img": "https://thefirstmess.com/wp-content/uploads/2024/05/strawberry-lemonade-protein-smoothie-2-400x606.jpg",
                "des": "Vegan Strawberry Lemonade Protein Smoothie",

            }
        ]
    )
    return (
        
            <div className="container">
                <div class="text-bg-dark p-3" >THE MESS</div>
                <NavBar />
                <div className="row">

                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div id="carouselExampleCaptions" class="carousel slide">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="https://imgs.search.brave.com/w71QM26-MHahyl-Y23t05rv6-ouys2D1KgIuaS-3ebY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NTEzMjY4NDQtNGRm/NzBmNzhkMGU5P3E9/ODAmdz0xMDAwJmF1/dG89Zm9ybWF0JmZp/dD1jcm9wJml4bGli/PXJiLTQuMC4zJml4/aWQ9TTN3eE1qQTNm/REI4TUh4elpXRnlZ/Mmg4TVRoOGZHWnZi/MlFsTWpCcGJXRm5a/WE44Wlc1OE1IeDhN/SHg4ZkRBPQ" class="d-block w-100" alt="..."></img>
                                        <div class="carousel-caption d-none d-md-block">
                                            <h5>First slide label</h5>
                                            <p>Some representative placeholder content for the first slide.</p>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <img src="https://imgs.search.brave.com/r5caNBDey9VSzOkJK8kVKK4BegW7gQP4Xy75Ag1btpY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2NjM4NTIy/OTcyNjctODI3Yzcz/ZTc1MjllP3E9ODAm/dz0xMDAwJmF1dG89/Zm9ybWF0JmZpdD1j/cm9wJml4bGliPXJi/LTQuMC4zJml4aWQ9/TTN3eE1qQTNmREI4/TUh4elpXRnlZMmg4/TVROOGZHWnZiMlFs/TWpCcGJXRm5aWE44/Wlc1OE1IeDhNSHg4/ZkRBPQ" class="d-block w-100" alt="..."></img>
                                        <div class="carousel-caption d-none d-md-block">
                                            <h5>Second slide label</h5>
                                            <p>Some representative placeholder content for the second slide.</p>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <img src="https://imgs.search.brave.com/HWoABy1RlDsTPZynPfB_QHlw9pzv2Y9-HzYYktsCPjA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2NzMxMDg4/NTIxNDEtZThjM2My/MmE0YTIyP3E9ODAm/dz0xMDAwJmF1dG89/Zm9ybWF0JmZpdD1j/cm9wJml4bGliPXJi/LTQuMC4zJml4aWQ9/TTN3eE1qQTNmREI4/TUh4elpXRnlZMmg4/Tlh4OFptOXZaQ1V5/TUdsdFlXZGxjM3hs/Ym53d2ZId3dmSHg4/TUE9PQ" class="d-block w-100" alt="..."></img>
                                        <div class="carousel-caption d-none d-md-block">
                                            <h5>Third slide label</h5>
                                            <p>Some representative placeholder content for the third slide.</p>
                                        </div>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>


                        </div>
                    </div>
                    <div className="row g-3">
                    <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded text-decoration-underline"> <h2 style={{ textAlign: "center" }}>MENU</h2></div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">

                            {
                                data.map(
                                    (value, index) => {
                                        return <div class="card" >
                                            <img src={value.img} class="card-img-top " alt="..."></img>
                                            <div class="card-body">
                                                <p class="card-text fst-italic text-decoration-underline">{value.des}</p>
                                            </div>
                                        </div>
                                    })
                            }

                        </div>
                    </div>



                </div>
            </div>
        


    )
}

export default Homepage

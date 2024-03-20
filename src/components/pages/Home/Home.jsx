import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import "./Home.css";




const Home = () => {

    const [searchValue, setSearchValue] = useState("")
    const [main, setMainvalue] = useState("")
    const [description, setDescriptionvalue] = useState("")
    const [temp, setTempvalue] = useState("")
    const [country, setCountryvalue] = useState("")
    const [name, setNamevalue] = useState("")

    function handleInput(value) {
        setSearchValue(value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=3c3065e366ee00be09b0a7a98ea53109&units=metric`).then((response) => {
         // setMainvalue(response.data.weather[0].main)
            setDescriptionvalue(response.data.weather[0].description)
            setTempvalue(response.data.main.temp)
            setCountryvalue(response.data.sys.country)
            setNamevalue(response.data.name)
        })

        if (description) {
            switch (description) {
                case "clouds":
                    setMainvalue("wi-day-cloudy");
                    break;
                case "haze":
                    setMainvalue("wi-fog");
                    break;
                case "clear":
                    setMainvalue("wi-day-sunny");
                    break;
                case "mist":
                    setMainvalue("wi-dust")
                    break;
                case "scattered clouds":
                    setMainvalue("wi-day-cloudy")
                    break
                default:
                    setMainvalue("wi-day-sunny");
                    console.log(description)
                    break;
            }
        }

    }

    return (
        <>
            <div className="container mt-0">
                <div className="row">
                    <div className="col">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3 searchbar" controlId="fullname">
                                <Form.Control
                                    type="text"
                                    placeholder="Search..."
                                    value={searchValue}
                                    onChange={(e) => handleInput(e.target.value)}
                                />
                            </Form.Group>
                        </Form>
                    </div>
                </div>
                <div className='card'>
                    <div className="row">
                        <div className="col">
                            <div className="weatherIcon">
                                <i className={`wi ${main}`}>
                                </i>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card-body description">
                                <h5 className="card-title">{description}</h5>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="temperature">
                                <span>{temp}<i className="wi wi-celsius"></i></span>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="country">
                                <span>{name},{country}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
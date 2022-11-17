import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import  {useNavigate }  from "react-router-dom";
function LoginPage() {
    const [user, setuser] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate();

    const [resp, setresp] = useState({
        className: "",
        Text: ""
    })
    const handlechange = (e) => {
        // console.log(e.target)
        setuser({

            ...user,
            [e.target.name]: e.target.value
        })
        // console.log(user.email)
        // console.log(user.password)




    }
    const handlesubmit = (e) => {
        e.preventDefault()
        // console.log(user)
        // console.log("submit")
        axios.post('http://apolis-grocery.herokuapp.com/api/auth/login', user).then((res) => { 
            console.log(res); 
            setresp({ className: "success", Text: "Login successfull" }) 
            localStorage.setItem('token',res.data.token)
            localStorage.setItem('user',JSON.stringify(res.data.user))
            navigate("/")
        
        
        
        }
            , err => { console.log(err); 
                setresp({ className: "danger", Text: err.response.data.message }) })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                        <div className="wrapper">
                            <h2>Login</h2>
                            <form >
                                <div className='form-group'>
                                    <label >EMail</label>
                                    <br />
                                    <input type="email" name="email" value={user.email} onChange={handlechange}></input><br />
                                    <label >Password</label><br />
                                    <input type="password" name="password" value={user.password} onChange={e => handlechange(e)}></input>
                                    <br /><br />
                                    <input type="submit" onClick={e => handlesubmit(e)} ></input>

                                </div>
                                <div className={"alert alert-" + resp.className} role="alert">
                                    {resp.Text}
                                </div>
                            </form>

                    <Link to="/register">New User ? Create Account</Link>




                        </div>





                    </div>
                    <div className="col-lg-3"></div>
                    <div className="text-center">

                    </div>
                </div>
            </div>


        </div>
    )
}

export default LoginPage
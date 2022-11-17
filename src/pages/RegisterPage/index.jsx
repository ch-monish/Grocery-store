import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
export default class RegisterPage extends Component {
  constructor() {
    super()
this.state={
  user:{firstName:"guest",
email:"",
mobile:"",
password:""},
response:{
  className:'',
  Text:""
}
}
  }

  onchangehandler=(e)=>{
   this.setState({
    
    user:{
...this.state.user,
      [e.target.name]:e.target.value
    }
    })
  }
  handlesubmit=(e)=>{
    e.preventDefault()
    console.log(this.state)
    axios.post('http://apolis-grocery.herokuapp.com/api/auth/register',this.state.user).then((res)=>{console.log(res.data.message);this.setState({response:{
      Text:'user registered succesfully',className:"success"
    }})},(error)=>{console.log(error.response.data.message);this.setState({response:{
      Text:error.response.data.message,
      className:"danger"
    }})} ).catch(err=>{console.log(err);})
  }
  render() {
    return (
      <div className='container'>
        <div className="wrapper">
          <h1>Register</h1>
          <form>
            <div className="form-group ">
              <label htmlFor="">Name</label>
              <input type="text" name="firstName" value={this.state.user.firstName} onChange={this.onchangehandler} placeholder='Enter Name' className="form-control"></input>
            </div>
              <label htmlFor="">Email</label>
              <input type="email" name="email" value={this.state.user.email} onChange={this.onchangehandler} placeholder='Enter Email' className="form-control"></input>
            
              <label htmlFor="">Mobile</label>
              <input type="number" name="mobile" value={this.state.user.mobile} onChange={this.onchangehandler} placeholder='Enter Mobile' className="form-control"></input>
            
              <label htmlFor="">Password</label>
              <input type="password" name="password" value={this.state.user.password} onChange={this.onchangehandler} placeholder='Enter Password' className="form-control"></input>
            <br />
            <button type="submit"  onClick={e=> this.handlesubmit(e)} className="btn btn-primary btn-block">submit</button>
          </form>
          <div className="text-center">

          <Link to="/Login">Already a User ? Go To Login Page</Link>
          </div>
          

          <div className={"alert alert-"+this.state.response.className} role="alert">
  {this.state.response.Text}
</div>
        </div>
      </div>
    )
  }
}

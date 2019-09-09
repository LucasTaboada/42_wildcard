import React, { Component } from 'react'

export default class login extends Component {
    constructor(props)
    {
        super(props);
        this.state =
        {
            email:"",
            password:""
        }
        this.update = this.update.bind(this);
    }
    update(e,name)
    {
        this.setState({
            [name]:e.target.value
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                <form>
                    <div className="form-group">
                        <label >Email address</label>
                        <input type="email" className="form-control" onChange={(e)=>this.update(e,"email")} id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.email} placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input type="password" className="form-control"onChange={(e)=>this.update(e,"password") } id="exampleInputPassword1" value={this.state.password} placeholder="Password"/>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox"  className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" >Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
               </div> 
            </div>
        )
    }
}

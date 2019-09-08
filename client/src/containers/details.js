import React, { Component } from 'react'
import axios from 'axios'



export default class details extends Component {
    constructor(props)
    {
        super(props);
        this.state=
        {
        }
    }
     componentDidMount()
    {   
        this.setState({loading:true})
         const movie = axios.get(`https://www.omdbapi.com/?t=${this.props.match.params.id}&apikey=baef1024`)
        .then((res)=> res.data).then((res)=>
        {
            this.setState({
                loading:false,
                movie:res
            });
            return(res);
        }
        ).catch((err)=>console.log(err));
        
    }
    render() {

        const poster = this.state.movie?this.state.movie.Poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCPyQE6Cd5uQpKJqWIaWRorf98Y2-DK02LUUmZONKausWb9ghg";
        return (
            <div className="container">
                <div className="row">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <img src={poster} className="img-fluid" alt="Responsive image"/>
                        <h1 className="display-4">{this.state.movie? this.state.movie.Title : "hello"}</h1>
                        <p className="lead">{this.state.movie? this.state.movie.Plot : "requires a peer of typescript@* but none is installed. You must install peer dependencies yourself."}</p>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

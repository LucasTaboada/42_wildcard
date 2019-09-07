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
     componentWillMount()
    {
        const movie = axios.get(`https://www.omdbapi.com/?t=${this.props.match.params.id}&apikey=baef1024`)
        .then((res)=> {console.log(res.data.Plot); return(res.data)}).catch((err)=>console.log(err))
        return this.setState({
            movie
        });
    }
    componentDidMount()
    {
    }
    render() {
        const movie = this.state.movie ? this.state.movie: "waiting";
        return (
            <div className="container">
                <div className="row">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">{movie.Plot? this.state.movie.Title : "hello"}</h1>
                        <p className="lead">{this.state.movie.Plot? this.state.move.Plot : "requires a peer of typescript@* but none is installed. You must install peer dependencies yourself."}</p>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

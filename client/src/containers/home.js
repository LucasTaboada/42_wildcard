import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import  _ from 'lodash';

export default class Home extends Component {
    constructor(props)
    {
        super(props);
        this.state =
        {
            title:""
        };
        this.movieInput = this.movieInput.bind(this);
        this.search = this.search.bind(this);
        this.enter = this.enter.bind(this);
    }
    movieInput(e)
    {
        this.setState({title:e.target.value});
    }
    enter(e)
    {
        if(e.key == "Enter")
        {
            this.search();
        }
    }
    async search()
    {
        let search = await axios.get(`https://www.omdbapi.com/?s=${this.state.title}&apikey=baef1024`).then(e=>{
            console.log(e.data.Search);   
        return(e.data.Search);
        }).catch(e=>{console.log(e)});
        return this.setState({
            movies:search
        });
    }
   render() {
        const cards = this.state.movies ? _.map(this.state.movies,(movie, i)=>{
            return(
            <div key={i} className="card" style={{width:"18rem"}}>
            <img src={movie.Poster} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{movie.Title}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Year</li>
              <li className="list-group-item">{movie.Year}</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
            <div className="card-body">
              <Link to={`/details/${movie.Title}`} className="card-link">Card link</Link>
            </div>
          </div>
          )
        }) : <div>this is going to be replaced</div>;
        console.log(this.props.match.params);
        return (
            <div className="container">
                <div className="row">
                <div className="input-group input-group-prepend mb-3">
                <button  type="button" className="btn btn-outline-primary" onClick={()=>{this.search()}}>search</button>
                <input type="text" className="form-control" value={this.state.title} onChange={(e)=>{this.movieInput(e)}} onKeyUp={(e)=>this.enter(e)}/>
                </div>
                <div className="container">
                    <div className="row">
                        {cards}
                    </div>

                </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import  _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators }  from 'redux';
import * as homeActions from '../actions/index';

 class Home extends Component {
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
        if(e.key === "Enter")
        {
         this.props.home.makeSearchCall(this.state.title);   
        }
    }
     search()
    {   
        this.props.home.makeSearchCall(this.state.title);
    }
   render() {
    const poster = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCPyQE6Cd5uQpKJqWIaWRorf98Y2-DK02LUUmZONKausWb9ghg";
        const cards = this.props.homeState[0] ? _.map(this.props.homeState,(movie, i)=>{
            return(
            <div key={i} className="card" style={{width:"18rem"}}>
            <img src={movie.Poster?movie.Poster:poster} className="card-img-top" alt="..."/>
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

function mapStateToProps(state)
{
    return{
        homeState:state.Home
    };
}
const mapDispatchToProps = dispatch =>{
    return {
        home:bindActionCreators(homeActions,dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
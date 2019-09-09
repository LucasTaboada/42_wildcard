import React, {Component} from 'react';
import './App.scss';
import { bindActionCreators} from 'redux';
import  { connect } from 'react-redux';
import * as testActions from '../src/actions/index';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from "./containers/home";
import About from "./containers/about";
import Nav from "./components/nav";
import Details from "./containers/details";
import Login from "./containers/login";

class App extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      test:0,
      tmp:"some state"
    }
  }
  render()
  {
    console.log(this.props);
    return (
      <Router>
        <div className= "app">
          <Nav {...this.props}/>
          <Route exact path="/" render={(props) => <Home {...props}/> } />
          <Route path="/login"  component={Login}/>
          <Route path="/details/:id" component={Details}/>
          <Route path="/about"  component={About} />
        </div>
      </Router>
    );
  } 
}
function  mapStateToProps(state)
{ 
  return{
    test: state.test
  }
}
const mapDispatchToProps = dispatch=>({
  actions: bindActionCreators(testActions,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(App);

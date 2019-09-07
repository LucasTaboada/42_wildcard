import React, {Component} from 'react';
import './App.scss';
import { bindActionCreators} from 'redux';
import  { connect } from 'react-redux';
import * as testActions from '../src/actions/index';

class App extends Component{
  constructor(props)
  {
    super(props);
    this.addCount = this.addCount.bind(this);
    this.state={
      test:0,
      tmp:"some state"
    }
  }
  addCount()
  {
    this.setState({test:this.state.test + 1}) 
  }
  render()
  {
    console.log(this.props);
    return (
      <div className="App">
        <h1 style={{textAlign:"center"}}> this is a test {this.props.test? this.props.test : null}</h1>
        <button onClick={()=>this.props.actions.test("this is a test3")}>clickme</button>
      </div>
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

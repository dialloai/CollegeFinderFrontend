import '../App.css';
import { Route , Switch , withRouter , Redirect} from "react-router-dom"
import collegeContainer from './collegeContainer'
import {connect} from 'react-redux'
import {fetchingColleges } from '../redux/actionCreators'
import React, { Component } from 'react'



class App extends Component {
  
  componentDidMount(){
    this.props.fetchingColleges()
  }
  
  render() {
    return (
      <div>
        <Switch>
        <Route path ="/colleges" component={collegeContainer}  />
        </Switch>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  fetchingColleges: () => {dispatch(fetchingColleges())}
})

export default withRouter(connect(null,mapDispatchToProps) (App)) ;


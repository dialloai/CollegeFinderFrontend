import '../App.css';
import { Route , Switch , withRouter , Redirect} from "react-router-dom"
import collegeList from '../components/collegeList'
import {connect} from 'react-redux'
import {fetchingColleges } from '../redux/actionCreators'
import React, { Component } from 'react'
import collegeInfo from '../components/collegeInfo'


//app with redux
class App extends Component {
  
  componentDidMount(){
    this.props.fetchingColleges()
  }
  
  render() {
    return (
      <div>
        <Switch>
        <Route exact path ='/' component={collegeList} />

        {/* <Route exact path ='/' render={() => this.props.user ? <CurrencyList /> : <Redirect to = '/login' /> } /> */}
        {/* <Route path ="/colleges" component={collegeList}  /> */}
        <Route path="/colleges/:collegeId" component={collegeInfo} />
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchingColleges: () => {dispatch(fetchingColleges())}
})

export default withRouter(connect(null,mapDispatchToProps) (App)) ;


import React, {Component} from 'react'
import {withRouter , Link } from 'react-router-dom' 
import {Card, Image, Button} from 'semantic-ui-react'
import {connect} from 'react-redux'


const favorites_url = 'http://localhost:3000/favorites'
const user_url = 'http://localhost:3000/users'


class collegeInfo extends Component {

    createFavorites = (collegeId , userId) => {
  
        // if ( !this.props.favorites.map(favorite => favorite.college.collegeId).includes(collegeId)) {

          let configOptions = {
            method: "POST", 
            headers: {
              "Accept":"application/json" ,
              "Content-Type":"application/json"
            } ,
            body: JSON.stringify({
              user_id: userId , 
              college_id: collegeId
            })  
      }

      fetch(favorites_url,configOptions)
      .then(response => response.json())
      .then(array => console.log(array))
    }

 


    render() {
        return (
            <div>
        <Image floated='center' size='medium'src={this.props.colleges.image}/>
        <Card.Meta><strong>{this.props.colleges.tuition}</strong></Card.Meta>
        <Card.Meta><strong>{this.props.colleges.overview}</strong></Card.Meta>
        <Card.Meta><strong>{this.props.colleges.website}</strong></Card.Meta>
        <Button
        onClick={()=> this.createFavorites(this.props.colleges.id, this.props.user.id)} > Add to Favorites </Button>
            </div>
        )
    }
}



const mapStateToProps = (store, ownProps) => ({
    colleges: store.colleges.find(
       college => {return college.id === parseInt(ownProps.match.params.collegeId)}
        ) 
        // user: store.currentUser ,
        // favorites: store.favorites 
   })


  
    //   const mapDispatchToProps = dispatch => {
    //     return {
    //       addedtoFavorites: (favorites) => {dispatch( addedtoFavorites(favorites))},
    //     }
    //   } 
  
  
   export default withRouter(connect(mapStateToProps,null)(collegeInfo));

// export default collegeInfo
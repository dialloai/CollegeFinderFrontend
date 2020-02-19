import React from 'react'
import collegeCard from './collegeCard'
import {connect} from 'react-redux'
import {Grid, Card , Segment} from 'semantic-ui-react'
import searchBar from './searchBar'


const collegeList = props => props.loading ? <p>Loading Colleges...</p> : (

    <div className ="ui container">
        <div> 
            <searchBar /> 
           <br /> 
           <br /> 
            <Grid columns="three" divided className={
                props.colleges.filter(college => college.name.toLowerCase().
                includes(props.searchText.toLowerCase())).length === 0 ? 'empty-row' : 'default'
            }>
            <Segment style={{overflow: 'auto', maxHeight: 350  , width:'100%'}} >

            {
                props.colleges.map(college=> college.name.toLowerCase().
                includes(props.searchText.toLowerCase())).length === 0 ? <h1> No Results Found</h1> : null 
            }
            <Card.Group itemsPerRow={5}>
            { props.colleges.map(college => college.name.toLowerCase().includes(props.searchText.toLowerCase()))
            .map(college => (
                < collegeCard
                key ={college.id}
                college={college}/> 
            ))}
            </Card.Group>
            </Segment>
            </Grid>
        </div>
    </div> 
)

const mapStateToProps = (store) => ({
   colleges: store.colleges ,
   loading: store.loading ,
   searchText: store.searchText 
}
);

export default connect(mapStateToProps)(collegeList)

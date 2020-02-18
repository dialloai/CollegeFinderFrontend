import { LOADING_COLLEGES, FETCHED_COLLEGES,
    CHANGING_SEARCH_TEXT} 
    from './actionType'

   const college_url = 'http://localhost:3000/colleges' 

   function onSearch(searchText){
    return {type: CHANGING_SEARCH_TEXT, payload: searchText}
  }

  function loadingColleges() {
    return {type: LOADING_COLLEGES} 
}

function fetchedColleges(collegeArray) {
    return {type: FETCHED_COLLEGES , payload: collegeArray}
}

function fetchingColleges(){
    return (dispatch) => {
        dispatch(loadingColleges())
         fetch(college_url)
        .then(response => response.json()) 
        .then(collegeArray => {
         dispatch(fetchedColleges(collegeArray))
        })
    } 
}


export {fetchingColleges, onSearch} 
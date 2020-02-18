import {combineReducers} from 'redux'
import {LOADING_COLLEGES , FETCHED_COLLEGES , CHANGING_SEARCH_TEXT
} from './actionType'

const loadingReducer = (oldState=false, action) => {
    switch(action.type) {
        case LOADING_COLLEGES:
            return true 
        case FETCHED_COLLEGES:
            return false 
            default:
            return oldState 
    }
}

const collegesReducer = (oldState=[] , action) => {
    switch(action.type) {
        case FETCHED_COLLEGES:
            return action.payload
            default:
            return oldState 
    }
}

const searchTextReducer = (oldState="", action) => {
    switch(action.type){
      case CHANGING_SEARCH_TEXT:
        return action.payload
      default:
        return oldState
    }
  }

  const rootreducer = combineReducers({
    loading: loadingReducer ,
    colleges: collegesReducer,
    searchText: searchTextReducer
})


export default rootreducer 

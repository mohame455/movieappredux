import {createStore,combineReducers} from 'redux'
import SetInputReducer from './Reducers/SetInputReducer'
import movieSearch from './Reducers/movieSearch';
import StarReducer from './Reducers/StarReducer';
const Store=createStore(combineReducers({
    InputVal:SetInputReducer,
    movieList:movieSearch,
    star:StarReducer
}))
export default Store;
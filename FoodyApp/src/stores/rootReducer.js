import {combineReducers} from 'redux';
import tabReducer from './tab/tabReducer';
import cartReducer from "./cart/cartReducer";
export default combineReducers({
    tabReducer,
    cartReducer
});

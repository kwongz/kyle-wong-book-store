import { combineReducers } from "redux"
import displayedBooks from "./displayedBooks"

//create variable to encompass all reducers, for future expandability 
const allReducers = combineReducers({
    bookList: displayedBooks,
})

export default allReducers
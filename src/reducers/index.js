import { combineReducers } from "redux"
import displayedBooks from "./displayedBooks"

const allReducers = combineReducers({
    bookList: displayedBooks
})

export default allReducers
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove, change} from './actions';


const Book = props => {

    const bookList = useSelector(state => state.bookList)
    const dispatch = useDispatch();



    return(
        <ul className="bookContainer">
            {bookList.map(book => {
            return (
            <li className="book" key={book.id}>
                <div onClick={() => dispatch(change())}>
                    <h2>{book.name}</h2>
                    <h3>{book.price}</h3>
                    <span>{book.genre}</span>
                </div>
                <button onClick={() => dispatch(remove())}></button>
            </li>
        )
        })}
        </ul>
    )
}

export default Book;
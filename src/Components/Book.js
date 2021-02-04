import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook, changeBook} from '../actions';


const Book = () => {

    const bookList = useSelector(state => state.bookList)
    const dispatch = useDispatch();

    return(
        <Fragment>
            {bookList.map(book => {
                return (
                    <li className="book" key={book.id}>
                        <div onClick={() => dispatch(changeBook())}>
                            <h2>{book.title}</h2>
                            <h3>{book.price}</h3>
                            <span>{book.genre}</span>
                        </div>
                        <button onClick={() => dispatch(removeBook())}></button>
                    </li>
                )
            })}
        </Fragment>
    )
}

export default Book;
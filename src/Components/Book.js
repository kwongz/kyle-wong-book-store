import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook} from '../actions';


const Book = ({book, openPopUp, handleGetBook}) => {
    const dispatch = useDispatch();

    const handleBookClick = book => {
        openPopUp(true);
        handleGetBook(book);
    }

    return(
        <li className="book" onClick={() => handleBookClick(book)}>
            <div>
                <h2>{book.title}</h2>
                <h3>{book.price}</h3>
                <span>{book.genre}</span>
            </div>
            <button onClick={() => dispatch(removeBook(book))}></button>
        </li>
    )
}

export default Book;
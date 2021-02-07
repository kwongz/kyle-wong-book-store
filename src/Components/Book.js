import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../actions';


const Book = ({book, openPopUp, getBook}) => {
    const dispatch = useDispatch();

    const handleBookClick = book => {
        openPopUp(true);
        getBook(book);

    }

    return(
        <li className="book">
            <div onClick={() => handleBookClick({book})}>
                <h2>{book.title}</h2>
                <h3>{book.price}</h3>
                <span>{book.genre}</span>
            </div>
            <button onClick={() => dispatch(removeBook(book))}>Delete</button>
        </li>
    )
}

export default Book;
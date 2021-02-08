import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../actions';


const Book = ({book, openPopUp, getBook}) => {
    const dispatch = useDispatch();

    const handleBookClick = book => {
        openPopUp(true);
        getBook(book);
    }

    const handleKeyUp = (e,book) => {
        if (e.keyCode === 13){
            openPopUp(true);
            getBook(book);
        }
    }

    return(
        <li className="book">
            <div tabIndex='0' onClick={() => handleBookClick({book})} onKeyDown={(e) => {handleKeyUp(e,{book})}}>
                <h2>{book.title}</h2>
                <h3>${book.price}</h3>
                <h4>{book.genre}</h4>
            </div>
            <button className='deleteBook' onClick={() => dispatch(removeBook(book))}>Delete</button>
        </li>
    )
}

export default Book;
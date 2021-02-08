import React, { Fragment, useState }from 'react'
import Book from './Book'
import ChangeBook from './ChangeBook'
import Modal from "./ChangeBookModal";
import { useSelector, useDispatch } from 'react-redux';
import { targetBook } from '../actions';

const BookContainer = () => {

    const bookArray = useSelector(state => state.bookList)
    const [showPopUp, setShowPopUp] = useState(false)
    const dispatch = useDispatch()

    const [selectedBook, setSelectedBook] = useState({
        book: {
            title:'',
            id: 0,
            price: 0,
            genre: '',
            description: ''
    }
    })

    const getBook = book => {
        setSelectedBook(book)
        dispatch(targetBook(book))
    }

    const closeFormOnSubmit = () => {
        setShowPopUp(false)
    }

    const listOfBooks = bookArray.bookList.map((book,index) => 
        <Book book={book} key={index} openPopUp={setShowPopUp} getBook={getBook}/>)

    return (
        <Fragment>
            <ul className='bookContainer'>
                {listOfBooks}
            </ul>
            <Modal show={showPopUp} setShowPopUp={setShowPopUp}>
                <div className="overlay">
                    <div className="formContainer changeBook">
                        <h2>Book Details</h2>
                        <div className="descriptionContainer">
                            <p><span className='categoryTitle'>Title:</span> {selectedBook.book.title}</p>
                            <p><span className='categoryTitle'>Price:</span> $ {selectedBook.book.price}</p>
                            <p><span className='categoryTitle'>Genre:</span> {selectedBook.book.genre}</p>
                            <p><span className='categoryTitle'>Description:</span> {selectedBook.book.description}</p>
                        </div>
                        <ChangeBook closeFormOnSubmit={closeFormOnSubmit}/>
                        <button className="closePopUp" onClick={() => {setShowPopUp(false)}}>Close</button>
                    </div>
                </div>
            </Modal>
        </Fragment>
    )
}

export default BookContainer;
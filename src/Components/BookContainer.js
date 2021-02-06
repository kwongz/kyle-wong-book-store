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

    console.log(bookArray.form)

    const listOfBooks = bookArray.bookList.map((book,index) => 
        <Book book={book} key={index} openPopUp={setShowPopUp} getBook={getBook}/>)

    return (
        <Fragment>
            <ul className='bookContainer'>
                {listOfBooks}
            </ul>
            <Modal show={showPopUp}>
                <h1>Form to change book values</h1>
                <h2>{selectedBook.book.title}</h2>
                <ChangeBook/>
                <button onClick={() => {setShowPopUp(false)}}>Close</button>
            </Modal>
        </Fragment>
    )
}

export default BookContainer;
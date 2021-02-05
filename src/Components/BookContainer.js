import React, { Fragment, useState }from 'react'
import Book from './Book'
import ChangeBook from './ChangeBook'
import Modal from "./ChangeBookModal";
import { useSelector } from 'react-redux';

const BookContainer = () => {

    const bookArray = useSelector(state => state.bookList)
    const [showPopUp, setShowPopUp] = useState(false)
    

    const handleGetBook = (book) => {
        console.log(book)
    }


    


    const listOfBooks = bookArray.map((book,index) => 
        <Book book={book} key={index} openPopUp={setShowPopUp} handleGetBook={handleGetBook}/>)

    return (
        <Fragment>
            <ul className='bookContainer'>
                {listOfBooks}
            </ul>
            <Modal show={showPopUp}>
                <h1>Form to change book values</h1>
                <ChangeBook/>
                <button onClick={() => {setShowPopUp(false)}}>Close</button>
            </Modal>
        </Fragment>
    )
}

export default BookContainer;
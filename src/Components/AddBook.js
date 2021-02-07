import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook }  from '../actions'
import Modal from "./AddBookModal";

const AddBook = () => {

    const bookArray = useSelector(state => state.bookList)
    const [showPopUp, setShowPopUp] = useState(false)
    const dispatch = useDispatch();

    //create state to store new book object
    const [newBook, setNewBook] = useState({
        title:'',
        id: bookArray.bookList.length,
        price: "",
        genre: '',
        description: ''
    })   

    const handleChange = (e) => {
    const value = e.target.value;
    setNewBook({
        ...newBook,
        [e.target.name]: value
    });
    }

    const handleNewBookId = () => {
        setNewBook({
            ...newBook,
            id: bookArray.bookList.length + 1
        })
    }

    //handle submit function
    const handleSubmit = e => {
        e.preventDefault();
        handleNewBookId();
        dispatch(addBook(newBook))
    }

    return(
        <section className='wrapper addBookSection'>
            <button className="addBook" onClick={() => {setShowPopUp(true)}}>Add Book</button>
            <Modal show={showPopUp} setShowPopUp={setShowPopUp}>
                <div className="formContainer">
                    <h2>Add New Book</h2>
                    <form className="popUpForm"onSubmit={handleSubmit}>
                        <label htmlFor='title'>Title</label>
                        <input type='text' id="title" name='title' onChange={handleChange} value={newBook.title}></input>

                        <label htmlFor='price'>Price</label>
                        <input type='number' id="price" name='price' value={newBook.price} onChange={handleChange}></input>

                        <label htmlFor='genre'>Genre</label>
                        <input type='text' id="genre" name='genre' value={newBook.genre} onChange={handleChange}></input>

                        <label htmlFor='description'>description</label>
                        <input type='text' id="description" name='description' value={newBook.description} onChange={handleChange}></input>

                        <button>Submit</button>
                    </form>
                    <button onClick={() => {setShowPopUp(false)}}>Close</button>
                </div>
            </Modal>
        </section>
    )
}

export default AddBook;
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
        price: '',
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
        setShowPopUp(false)
    }

    return(
        <section className='wrapper addBookSection'>
            <button className="addBook" onClick={() => {setShowPopUp(true)}}>Add Book</button>
            <Modal show={showPopUp} setShowPopUp={setShowPopUp}>
                <div className="overlay">
                    <div className="formContainer">
                        <h2>Add New Book</h2>
                        <form className="popUpForm"onSubmit={handleSubmit}>

                            <div className="inputContainer">
                                <label htmlFor='title'><span className='categoryTitle'>Title:</span></label>
                                <input type='text' id="title" name='title' onChange={handleChange} required></input>
                            </div>

                            <div className="inputContainer">                             
                                <label htmlFor='price'><span className='categoryTitle'>Price:</span></label>
                                <input type='number' id="price" name='price' onChange={handleChange} required></input>
                            </div>

                            <div className="inputContainer">
                                <label htmlFor='genre'><span className='categoryTitle'>Genre:</span></label>
                                <input type='text' id="genre" name='genre' onChange={handleChange} required></input>
                            </div>

                            <div className="inputContainer">
                                <label htmlFor='description'><span className='categoryTitle'>Description:</span></label>
                                <input type='textarea' id="description" name='description' onChange={handleChange} required></input>
                            </div>

                            <button className="submitPopUp">Submit</button>
                        </form>
                        <button className="closePopUp" onClick={() => {setShowPopUp(false)}}>Close</button>
                    </div>
                </div>
            </Modal>
        </section>
    )
}

export default AddBook;
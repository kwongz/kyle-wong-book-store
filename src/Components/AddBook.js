import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook }  from '../actions'

const AddBook = () => {

    const bookList = useSelector(state => state.bookList)
    const dispatch = useDispatch();

    //create state to store new book object
    const [newBook, setNewBook] = useState({
        title:'',
        id: 0,
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

    //handle submit function
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addBook(newBook))
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label for='title'>Title</label>
                <input type='text' id="title" name='title' onChange={handleChange} value={newBook.title}></input>

                <label for='price'>Price</label>
                <input type='number' id="price" name='price' value={newBook.price} onChange={handleChange}></input>

                <label for='genre'>Genre</label>
                <input type='text' id="genre" name='genre' value={newBook.genre} onChange={handleChange}></input>

                <label for='description'>description</label>
                <input type='text' id="description" name='description' value={newBook.description} onChange={handleChange}></input>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddBook;
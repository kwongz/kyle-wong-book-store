import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeBook }  from '../actions'

const ChangeBooks = () => {

    const dispatch = useDispatch();

    //create state to store new book object
    const [newBook, setNewBook] = useState({
        title:'',
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
        dispatch(changeBook(newBook))
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
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
        </div>
    )
}

export default ChangeBooks;
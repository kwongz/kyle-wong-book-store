import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeBook }  from '../actions'

const ChangeBooks = ({closeFormOnSubmit}) => {

    const dispatch = useDispatch();

    //create state to store new book object
    const [newBook, setNewBook] = useState({})   

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
        closeFormOnSubmit()
    }

    return(
        <div>
            <h2>Edit Book Details</h2>
            <form className="popUpForm" onSubmit={handleSubmit}>

                <div className="inputContainer">
                    <label htmlFor='title'><span className='categoryTitle'>Title:</span></label>
                    <input type='text' id="title" name='title' onChange={handleChange} ></input>
                </div>

                <div className="inputContainer">                             
                    <label htmlFor='price'><span className='categoryTitle'>Price:</span></label>
                    <input type='number' id="price" name='price' onChange={handleChange}></input>
                </div>

                <div className="inputContainer">
                    <label htmlFor='genre'><span className='categoryTitle'>Genre:</span></label>
                    <input type='text' id="genre" name='genre' onChange={handleChange}></input>
                </div>

                <div className="inputContainer">
                    <label htmlFor='description'><span className='categoryTitle'>Description:</span></label>
                    <textarea type='textarea' id="description" name='description' onChange={handleChange} rows="3"></textarea>
                </div>

                <button className="submitPopUp">Submit</button>
            </form>
        </div>
    )
}

export default ChangeBooks;
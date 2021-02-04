export const addBook = (newBook) => {
    console.log(newBook)
    return{
        type: 'ADD_BOOK',
        payload: newBook
    }
}

export const removeBook = () => {
    return{
        type: 'DELETE_BOOK',
    }
}

export const changeBook = () => {
    return{
        type: 'CHANGE_BOOK'
    }
}


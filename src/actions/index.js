export const addBook = newBook => {
    console.log(newBook)
    return{
        type: 'ADD_BOOK',
        payload: newBook
    }
}

export const removeBook = book => {
    return{
        type: 'DELETE_BOOK',
        payload: book
    }
}

export const changeBook = () => {
    return{
        type: 'CHANGE_BOOK'
    }
}




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

export const targetBook = targetBook => {
    return{
        type: 'TARGET_BOOK',
        payload: targetBook
    }
}

export const changeBook = changedBook => {
    return{
        type: 'CHANGE_BOOK',
        payload: changedBook
    }
}




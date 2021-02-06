//Book List Array
const initialState = {
    bookList:[
        {
        title:'World War Z',
        id: 0,
        price: 23.00,
        genre: `science-fiction`,
        description: `We survived the zombie apocalypse, but how many of us are still haunted by that terrible time? We have   (temporarily?) defeated the living dead, but at what cost? Told in the haunting and riveting voices of the men and women who witnessed the horror firsthand, World War Z is the only record of the pandemic.`,
        },
        {
        title:'The Martian',
        id: 1,
        price: 23.00,
        genre: `science-fiction`,
        description:`Six days ago, astronaut Mark Watney became one of the first people to walk on Mars. Now, he's sure he'll be the first person to die there. After a dust storm nearly kills him and forces his crew to evacuate while thinking him dead, Mark finds himself stranded and completely alone with no way to even signal Earth that he’s alive—and even if he could get word out, his supplies would be `,
        },
        {
        title:'The Last Lecture',
        id: 2,
        price: 20.34,
        genre: `Biographical`,
        description:`A lot of professors give talks titled - The Last Lecture. Professors are asked to consider their demise and to ruminate on what matters most to them. And while they speak, audiences can''t help but mull the same question: What wisdom would we impart to the world if we knew it was our last chance? If we had to vanish tomorrow, what would we want as our legacy?`,
        }
    ],
    form: {
        title:'',
        id: 0,
        price: 0,
        genre: '',
        description: ''
    }
}



const displayedBooks = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_BOOK':
            return {
                ...state, 
                    bookList:[
                        ...state.bookList, action.payload
                    ]}
        case 'DELETE_BOOK':
            return {
                ...state, 
                    bookList:[
                        ...state.bookList.filter(book => book !== action.payload)
                    ]}
        case 'TARGET_BOOK':
            return {
                ...state, 
                    form:{
                        ...action.payload.book
                    }
            }
        default:
            return state
        
    }
} 

export default displayedBooks;
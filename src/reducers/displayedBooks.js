//Book List Array
const bookArray = [
  {
    title:'World War Z',
    id: 0,
    price: 23.00,
    genre: `science-fiction`,
    description: `We survived the zombie apocalypse, but how many of us are still haunted by that terrible time? We have        (temporarily?) defeated the living dead, but at what cost? Told in the haunting and riveting voices of the men and women who witnessed the horror firsthand, World War Z is the only record of the pandemic.`,
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
  id: 3,
  price: 20.34,
  genre: `Biographical`,
  description:`Six days ago, astronaut Mark Watney became one of the first people to walk on Mars. Now, he's sure he'll be the first person to die there. After a dust storm nearly kills him and forces his crew to evacuate while thinking him dead, Mark finds himself stranded and completely alone with no way to even signal Earth that he’s alive—and even if he could get word out, his supplies would be `,
  },
]


const displayedBooks = (state = bookArray, action) => {
    switch(action.type){
        case 'ADD_BOOK':
            return [...state, action.payload]
        case 'DELETE_BOOK':
            console.log('book remove')
            return [...state.filter(book => book !== action.payload)]
        case 'CHANGE_BOOK':
            console.log('book changed')
            return state
        default:
            return state
        
    }
} 

export default displayedBooks;
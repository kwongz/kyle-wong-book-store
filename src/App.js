import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove, change} from './actions';
import  Book  from './Book';


function App() {

  const bookList = useSelector(state => state.bookList)
  const dispatch = useDispatch();


  return (
    <div className="App">
      <Book/>
    </div>
  );
}

export default App;

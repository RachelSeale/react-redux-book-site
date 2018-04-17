import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

//combineReducers telling react how to set our state
const rootReducer = combineReducers({
	//books is a piece of state and the value is the BooksReducer
	books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;

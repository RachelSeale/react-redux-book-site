import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
	renderList() {
		return this.props.books.map( (book) => {
			return (
				<li
          key={ book.title }
          onClick={()=> this.props.selectBook(book)}
          className="list-group-item">
          { book.title }
        </li>
			);
		});
	}
	render() {
		return (
			<ul className="list-group col-sm-4">
				{ this.renderList() }
			</ul>
		)
	}
}

//glue between react and redux
function mapStateToProps(state) {
	console.log(state);
	//Whatever is returned will show up as props inside BookList
	return {
		//books reducers is returning an array of books
		books: state.books
	};
}
//Anything returned from this function will end up as a props
// on the BookList container
function mapDispatchToProps(dispatch) {
	//Whenever select book is called result should be passed to all of our reducers
	return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//Promote BookList from a Component to a container - it needs to know
// about this new dispatch method, selectBook. Make it avaliable
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

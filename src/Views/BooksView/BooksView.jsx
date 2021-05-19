import React, { Component } from 'react';
import Axios from 'axios';

import BookList from '../../Components/BookList';

class BooksView extends Component {
  state = {
    books: [],
  };

  async componentDidMount() {
    const response = await Axios.get('http://localhost:4040/books');
    
    // console.log(response.data);

    this.setState({ books: response.data });
  }

  render() {
    return (
      <div>
        <h2 style={{ backgroundColor: 'yellow' }}>This is books page</h2>;
        <BookList books={this.state.books}  />
      </div>
    );
  }
}

export default BooksView;

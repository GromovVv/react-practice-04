import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

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
    const matchUrl = this.props.match.url;
    console.log(matchUrl);
    return (
      <div>
        <h2 style={{ backgroundColor: 'yellow' }}>This is books page</h2>;
        <ul>
          {this.state.books.map(book => (
            <li key={book.id}>
              <Link to={`${matchUrl}/${book.id}`}>{book.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default BooksView;

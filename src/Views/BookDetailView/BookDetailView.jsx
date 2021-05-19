import React, { Component } from 'react';
import Axios from 'axios';

import routs from '../../routs';
// import axios from 'axios';

// import { Link } from 'react-router-dom';

class BookDetailView extends Component {
  state = {
    book: null,
    authorId: null,
    descr: null,
    genre: null,
    id: null,
    imgUrl: null,
    title: null,
    author: null,
  };

  async componentDidMount() {
    const { bookId } = this.props.match.params;
    // const bookId = this.props.match.params.bookId;
    // const response = await Axios.get(`http://localhost:4040/books/${bookId}`);
    const response = await Axios.get(
      `http://localhost:4040/books/${bookId}?_expand=author`,
    );

    // this.setState({ book: response.data });
    this.setState({ ...response.data });
    // console.log(response.data);
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    // if (location.state && location.state.from) {
    //   return history.push(location.state.from)
    // }
    // history.push(routs.books)

    history.push(location?.state?.from || routs.books)

  }

  render() {
    const { descr, genre, imgUrl, title, author } = this.state;

    return (
      <div>
        <button type="button" onClick={this.handleGoBack}>
          Get back
        </button>
        <h2>Page of one book with id: {this.props.match.params.bookId}</h2>

        <img src={imgUrl} alt="Book img" />
        <h2>{title}</h2>
        {author && <p>Author: {author.name}</p>}
        <h3>{genre}</h3>
        <p>{descr}</p>
      </div>
    );
  }
}

export default BookDetailView;

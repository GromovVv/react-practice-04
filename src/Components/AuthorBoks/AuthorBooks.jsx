// import { Component } from 'react';
// // import PropTypes from 'prop-types'

// class AuthorBooks extends Component {
//   // static propTypes = {
//   //     prop: PropTypes
//   // }
// //   state = {
// //     books: [],
// //   };

// //   componentDidMount() {
// //     console.log('componentDidMount');
// //     // преобразуем this.props.match.params.authorId в число
// //     // console.log(Number(this.props.match.params.authorId));
// //     // console.log(this.props.authors);

// //     // const id = Number(this.props.match.params.authorId);

// //     // const author = this.props.authors.find(author => author.id === id);
// //     // console.log(author);

// //     // const { books } = author;
// //     // const { books } = this.props.authors.find(author => author.id === id);
// //     // console.log(books);

// //     // this.setState({ books: books })
// //     // this.setState({ books });
// //   }

// //   componentDidUpdate(prevProps, prevState) {
// //     console.log('componentDidUpdate');
// //     console.log(Number(this.props.match.params.authorId));
// //     console.log(this.props.authors);
// //   }

//   render() {
    // return (
    //   <>
    //     <h2 style={{ backgroundColor: 'white' }}>AuthorBookComponent</h2>
    //     {/* <ul>
    //     {this.state.books.map(book => (<li key={book.id}>{book.title}</li>))}
    //     </ul> */}
    //   </>
    // );
//   }
// }

// export default AuthorBooks;
import { Link } from 'react-router-dom';

const AuthorBooks = ({books}) => {
    return (
        <>
          <ul>
          {books.map(book => (<li key={book.id}>
              <Link to={`/books/${book.id}`}>{book.title}</Link>
              </li>))}
          </ul>
        </>
      );
}
      

export default AuthorBooks;

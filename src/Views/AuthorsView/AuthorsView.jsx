import React, { Component } from 'react';
import Axios from 'axios';
import { NavLink, Route } from 'react-router-dom';

import AuthorBooks from '../../Components/AuthorBoks';

class AuthorsView extends Component {
  state = {
    authors: [],
  };

  async componentDidMount() {
    // const response = await Axios.get('http://localhost:4040/authors');
    const response = await Axios.get('http://localhost:4040/authors?_embed=books');

    // console.log(response.data);

    this.setState({ authors: response.data });
  }

  render() {
    return (
      <div>
        <h2 style={{ backgroundColor: 'white' }}>This is author page</h2>;
        <ul>
          {this.state.authors.map(author => (
            <li key={author.id}>
              <NavLink to={`${this.props.match.url}/${author.id}`}>
                {author.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ПРИ ПЕРВОМ РЭНДЕРЕ МАССИВ ПУСТОЙ ПОЭТОМУ ВЕРНЕТ UNDERFIND AUTHOR.BOOKS */}
        {/* {this.state.authors.length >0 && <Route
          // path={'/authors/:authorId'}
          path={`${this.props.match.path}/:authorId`}
          // component={AuthorBooks}
          
        //   <ul>
        // {this.state.books.map(book => (<li key={book.id}>{book.title}</li>))}
        // </ul>
          render={props => {
            // console.log(props);
            const bookId = Number(props.match.params.authorId);
            // console.log(bookId);

            // const auther = this.state.authers.find(auther => auther.id === bookId);
            const auther = this.state.authors.find(({id}) => id === bookId);
            console.log(auther.books);
            
            return <AuthorBooks {...props} authors={this.state.authors}/>
          }}
        />} */}
           {this.state.authors.length >0 && <Route
          path={`${this.props.match.path}/:authorId`}
        
          render={props => {
            const bookId = Number(props.match.params.authorId);

            const author = this.state.authors.find(({id}) => id === bookId);

            if(author){
              console.log(author.books);
            }
            
            // return <AuthorBooks {...props} authors={this.state.authors}/>
            // return author ? <AuthorBooks {...props} books={author.books}/> : null;
            return author && <AuthorBooks {...props} books={author.books}/>;

          }}
        />}
      </div>
    );
  }
}

export default AuthorsView;

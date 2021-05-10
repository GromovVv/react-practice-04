import { Route, NavLink, Switch } from 'react-router-dom';

import HomeViewAuthorsView from './Views/HomeView';
import AuthorsView from './Views/AuthorsView';
import BooksView from './Views/BooksView';
import PageNotFound from './Views/PageNotFound';
import BookDetailView from './Views/BookDetailView';

import './App.css';
import './BaseStyles.css';

// const styles = {
//     base: {
//       color: "violet"
//     },
//     active: {
//       color: "tomato"
//     }
// }

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            className="base-link"
            activeClassName="active-link"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/authors"
            className="base-link"
            activeClassName="active-link"
          >
            Author
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/books"
            className="base-link"
            activeClassName="active-link"
          >
            Books
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={HomeViewAuthorsView} />
        <Route path="/authors" component={AuthorsView} />
        {/* Можно использовать такой вариант ПРОСТО МЕНЯЕМ ПОСЛЕДОВАТЕЛЬНОСТЬ И УБИРАЕМ EXACT У BOOKS 
          <Route path="/books/:bookId" component={BookDetailView} />
          <Route path="/books" component={BooksView} />
        */}
        <Route exact path="/books" component={BooksView} />
        <Route path="/books/:bookId" component={BookDetailView} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;

import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

// import HomeView from './Views/HomeView';
// import AuthorsView from './Views/AuthorsView';
// import BooksView from './Views/BooksView';
// import BookDetailView from './Views/BookDetailView';
import PageNotFound from './Views/PageNotFound';

import AppBar from './Components/AppBar';

import routs from './routs';

import './App.css';
import './BaseStyles.css';

const HomeView = lazy(() =>
  import('./Views/HomeView' /* webpackChunkName: "home-page" */),
);
const AuthorsView = lazy(() =>
  import('./Views/AuthorsView' /* webpackChunkName: "authors-page" */),
);
const BooksView = lazy(() =>
  import('./Views/BooksView' /* webpackChunkName: "books-page" */),
);
const BookDetailView = lazy(() =>
  import('./Views/BookDetailView' /* webpackChunkName: "book-details-page" */),
);

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
      <AppBar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path={routs.home} component={HomeView} />
          <Route path={routs.authors} component={AuthorsView} />
          {/* Можно использовать такой вариант ПРОСТО МЕНЯЕМ ПОСЛЕДОВАТЕЛЬНОСТЬ И УБИРАЕМ EXACT У BOOKS 
          <Route path="/books/:bookId" component={BookDetailView} />
          <Route path="/books" component={BooksView} />
        */}
          <Route exact path={routs.books} component={BooksView} />
          <Route path={routs.bookDetailView} component={BookDetailView} />
          <Route component={PageNotFound} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;

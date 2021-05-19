// import { Link, withRouter } from 'react-router-dom';

// import BookPreview from '../BookPreview';

// const BookList = ({ books, match }) => {
//   return (
//     <ul>
//       {books.map(({ id, imgUrl, title }) => (
//         <li key={id}>
//           <Link to={`${match.url}/${id}`}>
//             <BookPreview imgUrl={imgUrl} title={title}/>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default withRouter(BookList);

import { Link, withRouter } from 'react-router-dom';

import BookPreview from '../BookPreview';

const BookList = ({ books, location }) => {
  return (
    <ul>
      {books.map(({ id, imgUrl, title }) => (
        <li key={id}>
          <Link
            to={{
              pathname: `/books/${id}`,
              state: {
                from: location,
              },
            }}
          >
            <BookPreview imgUrl={imgUrl} title={title} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(BookList);

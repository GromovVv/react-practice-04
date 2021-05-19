import { NavLink } from 'react-router-dom';
import routs from '../routs';

const Navigation = () => {
    return (
        <ul>
        <li>
          <NavLink
            exact
            to={routs.home}
            className="base-link"
            activeClassName="active-link"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routs.authors}
            className="base-link"
            activeClassName="active-link"
          >
            Author
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routs.books}
            className="base-link"
            activeClassName="active-link"
          >
            Books
          </NavLink>
        </li>
      </ul>
     )   
}

export default Navigation
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ROUTES_LINKS } from 'routes';
import { logoutUser } from 'redux/slices/auth';

const AuthPanel = () => {
  const dispatch = useDispatch();

  const Logout = event => {
    event.preventDefault();
    dispatch(logoutUser());
  };

  return (
    <nav className="auth__panel">
      <div className="container auth__panel-container">
        <div>
          <Link to={ ROUTES_LINKS.PROFILE } className="btn__light btn">
            Профиль
          </Link>
        </div>

        <div className="ml-auto">
          <Link to={ ROUTES_LINKS.POST_ADD } className="btn__success btn">
            Добавить пост
          </Link>
        </div>

        <div className="ml-3">
          <button className="btn__secondary btn" onClick={ Logout }>
            Выйти
          </button>
        </div>
      </div>
    </nav>
  );
};

export default AuthPanel;

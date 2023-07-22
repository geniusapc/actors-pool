import Button from '../Button/Button';
import { logout, openSignInModal, openSignUpModal } from '../../features/auth/auth';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as HamBugerIcon } from '../../assets/icons/hamburger.svg';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { Link, useNavigate } from 'react-router-dom';

function GuestHeader() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <nav className="dark:bg-gray-900  w-full mt-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <Logo className="h-8 mr-3" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Actor’s Pool
          </span>
        </Link>
        <div className="flex md:order-2">
          {!isAuth ? (
            <Button className="hidden md:flex" onClick={() => dispatch(openSignUpModal())}>
              Get started
            </Button>
          ) : (
            <Button className="hidden md:flex" onClick={() => dispatch(logout())}>
              Logout
            </Button>
          )}

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <HamBugerIcon />
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-white  md:text-white  bg-blue-700 rounded md:bg-transparent  md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 pl-3 pr-4 text-gray-900  md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </Link>
            </li>
            {isAuth ? (
              <li>
                <button
                  className="text-gray-900  md:text-white pl-3 pr-4"
                  onClick={() => navigate('/talents')}
                >
                  Directory
                </button>
              </li>
            ) : (
              <li>
                <button
                  className="text-gray-900  md:text-white pl-3 pr-4"
                  onClick={() => dispatch(openSignInModal())}
                >
                  Login
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default GuestHeader;

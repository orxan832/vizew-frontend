import React, { Fragment, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import ScrollToTop from "react-scroll-up";
import { BsChevronUp } from "react-icons/bs";
import { decoder, setAuthToken } from "./helper/functions";
import Admin from "./containers/Admin";
import Main from "./Main";
import { login } from "./redux/actions/user";
import { ToastContainer } from 'react-toastify';

const App = () => {

  const history = useHistory();


  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decode = decoder(token);
      if (decode) {
        dispatch(login(decode));
        setAuthToken(token);
      } else {
        localStorage.removeItem("token");
        dispatch(login(false));
        history.replace("/login");
      }
    } else {
      switch (history.location.pathname) {
        case '/admin':
          history.replace('/login');
          break;
        default:
          break;
      }
    }
  }, [dispatch, history]);

  return (
    <Fragment>
      <ToastContainer theme='dark' position='bottom-right' />
      <div className='position-relative' style={{ zIndex: '999' }}>
        <ScrollToTop showUnder={100}>
          <BsChevronUp
            size="3rem"
            className="bg-dark rounded p-2 position-relative"
          />
        </ScrollToTop>
      </div>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/" component={Main} />
      </Switch>
    </Fragment>
  );
};

export default App;
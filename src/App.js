import React, { Fragment, useEffect } from "react";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ScrollToTop from "react-scroll-up";
import { BsChevronUp } from "react-icons/bs";
import ReactNotification from "react-notifications-component";
import { decoder, setAuthToken } from "./helper/functions";
import Admin from "./containers/Admin";
import Main from "./Main";
import { login } from "./redux/actions/user";

const App = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const history = useHistory();
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
    }
  }, []);

  return (
    <Fragment>
      <ReactNotification />
      <ScrollToTop showUnder={100}>
        <BsChevronUp
          size="3rem"
          className="bg-dark rounded p-2 position-relative"
        />
      </ScrollToTop>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/" component={Main} />
        {user && user.role > 1 && <Redirect from="/admin" to="/" />}
      </Switch>
    </Fragment>
  );
};

export default App;

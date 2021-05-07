import { Redirect, Route } from "react-router";
import { AuthContext } from "../AuthContext";
import { useContext } from "react";

const PrivateRoute = ({ children, ...rest }) => {
  const [auth, setAuth] = useContext(AuthContext);

  // Get saved data from sessionStorage
  let uid = sessionStorage.getItem('token');


 
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.email || uid ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;

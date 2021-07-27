import React from "react";
import { useSelector} from "react-redux";
import { Route , Redirect} from "react-router-dom";
// import { AuthContext } from "./AuthProvider";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  // const { currentUser } = useContext(AuthContext);
  const auth = useSelector(state => state.auth);
  return (
    <Route 
        {...rest}
        render = {
            props => 
                auth.isAuth === true ? (
                    <RouteComponent {...props} />
                ) : (
                    <Redirect to="/" />
                )
        }
    />
  )
};

export default PrivateRoute;
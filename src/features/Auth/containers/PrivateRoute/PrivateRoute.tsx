import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ROUTER_URLS } from "../../../../routes";
import { useSelector } from "react-redux";
import { selectAuthorizedStatus } from "../../AuthSelectors";

const PrivateRoute = ({ children, ...rest }: any) => {
    const isAuthorized = useSelector(selectAuthorizedStatus);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAuthorized ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: ROUTER_URLS.SIGN_IN,
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ROUTER_URLS } from "../../../../routes";
import _ from 'lodash';

const PrivateRoute = ({ component: Component, ...rest }: any) => {
    return (
        <Route
            {...rest}
            render={(props: any) =>
                !_.isEmpty(props.user) ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{ pathname: ROUTER_URLS.SIGN_IN, state: { from: props.location } }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;

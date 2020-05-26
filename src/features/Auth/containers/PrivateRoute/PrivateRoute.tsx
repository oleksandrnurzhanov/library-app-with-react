import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ROUTER_URLS_MAP } from "../../../../Routes";
import _ from 'lodash';
import { ROUTER_URLS } from "../../../../RoutesEnums";

const PrivateRoute = ({ component: Component, user, ...rest }: any) => {
    return (
        <Route
            {...rest}
            render={(props: any) =>
                !_.isEmpty(user) ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{ pathname: ROUTER_URLS_MAP[ROUTER_URLS.SignIn] }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;

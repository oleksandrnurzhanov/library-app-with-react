import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ROUTER_URLS_MAP } from "../../../../Routes";
import _ from 'lodash';
import { ROUTER_URLS } from "../../../../RoutesEnums";
import { User } from "../../AuthInterfaces";
import { useSelector } from "react-redux";
import { selectUser } from "../../AuthSelectors";
import { LocalStorageUtils } from "../../../../shared/utils/LocalStorageUtils";

const PrivateRoute = ({ component: Component, ...rest }: any) => {
    const userFromState: User = useSelector(selectUser);
    const user: User = !_.isEmpty(LocalStorageUtils.getItem('user'))
        ? LocalStorageUtils.getItem('user')
        : userFromState;

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

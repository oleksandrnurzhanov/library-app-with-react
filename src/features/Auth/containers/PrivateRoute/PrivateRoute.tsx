import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ROUTER_URLS } from "../../../../routes";
import _ from 'lodash';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, user, ...rest }: any) => {
    return (
        <Route
            {...rest}
            render={(props: any) =>
                !_.isEmpty(user) ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{ pathname: ROUTER_URLS.SIGN_IN }}
                    />
                )
            }
        />
    );
};

PrivateRoute.propTypes = {
    user: PropTypes.object.isRequired
};

const mapStateToProps = (state: any) => {
    const { auth } = state;

    return {
        user: auth.user
    }
};

export default connect(mapStateToProps)(PrivateRoute);

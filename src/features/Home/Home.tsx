import React from 'react';
import { connect } from "react-redux";
import _ from 'lodash';
import { ROUTER_URLS } from "../../routes";
import { useHistory, useLocation } from "react-router-dom";

const mapStateToProps = (state: any) => {
    const { auth } = state;

    return {
        user: auth.user
    }
};

const Home = (props: any) => {
    const history = useHistory();
    const location = useLocation();
    const { from }: any = location.state || { from: { pathname: ROUTER_URLS.SIGN_IN } };

    if (_.isEmpty(props.user)) {
        console.log('no user', props.user);
        // history.replace(from);
    } else {
        console.log('is user', props.user);
    }

    return (
        <div>Home</div>
    )
};

export default connect(mapStateToProps)(Home);

import React from 'react';
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuthorizedStatus } from "../Auth/AuthSelectors";
import { ROUTER_URLS } from "../../routes";

const Home = () => {
    const history = useHistory();
    const isAuthorized = useSelector(selectAuthorizedStatus);

    // Why do we need this check here if Home component is in `PrivateRoute` anyway? - should be rechecked
    if (!isAuthorized) {
        history.push(ROUTER_URLS.SIGN_IN);
        return null;
    }

    return (
        <div>Home</div>
    )
};

export default Home;

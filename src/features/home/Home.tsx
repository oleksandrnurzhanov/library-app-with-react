import React from 'react';
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuthorizedStatus } from "../auth/authSelectors";
import { ROUTER_URLS } from "../../Routes";

const Home = () => {
    const history = useHistory();
    const isAuthorized = useSelector(selectAuthorizedStatus);

    if (!isAuthorized) {
        history.push(ROUTER_URLS.SIGN_IN);
        return null;
    }

    return (
        <div>Home</div>
    )
};

export default Home;

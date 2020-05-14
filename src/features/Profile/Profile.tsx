import React from 'react';
import { connect } from "react-redux";

const mapStateToProps = (state: any) => {
    const { auth } = state;

    return {
        user: auth.user
    }
};

const Profile = (props: any) => {
    const { user } = props;

    return (
        <div>
            <div>Profile:</div>
            <ul>
                <li>First name: {user.firstName}</li>
                <li>Last name: {user.lastName}</li>
                <li>Email address: {user.email}</li>
                <li>Admin: {user.isAdmin ? "yes" : "no"}</li>
            </ul>
        </div>
    )
};

export default connect(mapStateToProps)(Profile);

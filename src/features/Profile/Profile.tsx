import React from 'react';
import { selectUser } from "../Auth/AuthSelectors";
import { User } from "../Auth/AuthInterfaces";
import { useSelector } from "react-redux";

const Profile = () => {
    const user: User = useSelector(selectUser);

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

export default Profile;

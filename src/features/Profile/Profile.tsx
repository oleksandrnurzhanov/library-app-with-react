import React from 'react';
import _ from "lodash";
import { useSelector } from "react-redux";
import { selectUser } from "../Auth/AuthSelectors";
import { User } from "../Auth/AuthInterfaces";

const Profile = () => {
    // TODO refactor this case and for all other cases also - done
    const user: User = useSelector(selectUser);

    return (
        <div>
            { _.isEmpty(user)
                ? <span>No user data found</span>
                : <div>
                    <div>Profile:</div>
                    <ul>
                        <li>First name: {user.firstName}</li>
                        <li>Last name: {user.lastName}</li>
                        <li>Email address: {user.email}</li>
                        <li>Admin: {user.isAdmin ? "yes" : "no"}</li>
                    </ul>
                </div> }
        </div>
    )
};

export default Profile;

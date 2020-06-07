import React from "react";
import { logout } from "redux/actions/auth";
import { auth } from "../config/firebase"
import { signOut } from 'config/firebase';
import { selectFirebaseToken } from 'redux/reducers';
import { useSelector, useDispatch } from "react-redux";
import {
    DropdownItem,
    NavLink,
  } from "reactstrap";
const Logout = (props) => {
    const dispatch = useDispatch();
    const logOut = () => {
        auth.signOut();
        signOut
            .then(
                dispatch(logout)
            )
            .catch(err =>
                console.log(err) 
            )
    }
    return (
        <>
            <DropdownItem divider tag="li" />
            <NavLink tag="li">
                <DropdownItem className="nav-item" onClick={logOut}>Log out</DropdownItem>
            </NavLink>
        </>
    );
};

export default Logout
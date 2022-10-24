import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import {useSelector} from "react-redux";
import {Avatar} from "@material-ui/core";

const UserCard = (props) => {
    const {themeSwitch = false, mode ="dark"} = props;
    const {type, user} = useSelector(state => state.auth);

    return (
        <div className="user-card d-flex flex-column align-items-center" id={mode}>
            <Avatar src={type === 0 ? user.prfImgUrl : user.logoUrl} className="user-card-image"/>
            <h3 className="user-card-text">{type === 0 ? user.disName : user.title}</h3>
            <p className="user-card-sub-text">{user?.email}</p>
            {themeSwitch && <ThemeSwitch/>}
        </div>
    );
}

export default UserCard;
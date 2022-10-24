import React from "react";
import MultiTypeDataField from "../components/body/MultiTypeDataField";
import {useSelector} from "react-redux";

const UserProfile = () => {
    const {user} = useSelector(state => state.auth);

    return (
        <div className="user-profile">
            <MultiTypeDataField label="Profile Picture" value={user?.prfImgUrl} type="avatar"/>
            <MultiTypeDataField label="Full Name" value={user?.fullName}/>
            <MultiTypeDataField label="Display Name" value={user?.disName}/>
            <MultiTypeDataField label="Contact Number" value={user?.cntNo}/>
            <MultiTypeDataField label="Email" value={user?.email}/>
        </div>
    );
}

export default UserProfile;
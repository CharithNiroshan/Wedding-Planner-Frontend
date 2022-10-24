import React, {useState} from 'react';
import {Avatar} from "@material-ui/core";
import List from "../components/body/List";
import {userDashboardItems} from "../constants/constant";
import {ConvertToDateString} from "../utils/covertToDate";
import {useSelector} from "react-redux";

const Dashboard = () => {
    const [index, setIndex] = useState(0);
    const {user} = useSelector(state => state.auth)

    return (
        <div className="sidebar d-flex">
            <div className="sidebar-left">
                <div className="sidebar-left-top d-flex flex-column align-items-center p-4">
                    <Avatar
                        src={user?.prfImgUrl}
                        alt="profile-image"
                        className="sidebar-left-image"
                    />
                    <div className="d-flex flex-column align-items-center">
                        <h3 className="sidebar-left-name">{user?.disName}</h3>
                        <p className="sidebar-left-email">{user?.email}</p>
                    </div>
                </div>
                <List
                    items={userDashboardItems}
                    selected={index}
                    setSelected={setIndex}
                />
            </div>
            <div className="sidebar-right flex-grow-1">
                <div className="sidebar-right-top d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        {userDashboardItems[index]?.icon}
                        <h4 className="sidebar-right-top-title mx-2">{userDashboardItems[index].text}</h4>
                    </div>
                    <p className="sidebar-right-top-date">{ConvertToDateString(Date.now())}</p>
                </div>
                {userDashboardItems[index]?.component}
            </div>
        </div>
    );
}

export default Dashboard;
import React, {useEffect, useState} from 'react';
import {AiFillSetting} from "react-icons/ai";
import {ConvertToDateString} from "../utils/covertToDate";
import List from "../components/body/List";
import {vendorSettingsListItems} from "../constants/constant";

const Settings = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {

    }, [])

    return (
        <div className="settings">
            <div className="bookings-top d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <AiFillSetting className="bookings-top-icon"/>
                    <h4 className="bookings-top-title mb-0">Settings</h4>
                </div>
                <p className="bookings-top-date mb-0">{ConvertToDateString(Date.now())}</p>
            </div>
            <div className="settings-bottom d-flex">
                <div className="settings-bottom-left">
                    <List
                        items={vendorSettingsListItems}
                        selected={index}
                        setSelected={setIndex}
                    />
                </div>
                <div className="settings-bottom-right flex-grow-1">
                    {vendorSettingsListItems[index].component}
                </div>
            </div>
        </div>
    );
}

export default Settings;
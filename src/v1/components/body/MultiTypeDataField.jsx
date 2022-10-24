import React from 'react';
import {Avatar} from "@material-ui/core";

const MultiTypeDataField = (props) => {
    const {label, value, type = "default"} = props;

    return (
        <div className="multi-type-data-field d-flex">
            <h1 className="multi-type-data-field-label">{label}</h1>
            {type === "default" && <h2 className="multi-type-data-field-text">{value}</h2>}
            {type === "avatar" && <Avatar className="multi-type-data-field-avatar" src={value}/>}
            {type === "image" &&
                <div
                    className="multi-type-data-field-image flex-grow-1"
                    style={{backgroundImage: `url(${value})`}}
                />
            }
            {type === "list" &&
                <div className="d-flex flex-column">
                    {value?.map((item, index) =>
                        <h2 className="multi-type-data-field-list-text mb-2" key={index}>{item}</h2>
                    )}
                </div>
            }
        </div>
    );
}

export default MultiTypeDataField;
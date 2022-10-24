import React from "react";

const DataField = (props) => {
    const {icon, text, label} = props;

    return (
        <div className="data-field d-flex align-items-center">
            <div className="data-field-left d-flex align-items-center">
                {icon && icon}
                <h1 className="data-field-label">{label}</h1>
            </div>
            <h2 className="data-field-text flex-grow-1">{text}</h2>
        </div>
    );
}

export default DataField;
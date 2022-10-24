import React from "react";

const Chip = (props) => {
    const {text, type} = props;

    return (
        <div className="chip d-flex align-items-center" id={type}>
            <h2 className="chip-text">{text}</h2>
        </div>
    );
}

export default Chip;
import React from "react";

const Title = (props) => {
    const {title, description} = props;

    return (
        <div className="title">
            <h1 className="title-text">{title}</h1>
            <p className="title-sub-text">{description}</p>
        </div>
    );
}

export default Title;
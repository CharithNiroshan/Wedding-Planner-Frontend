import React from "react";

const Button = (props) => {
    const {text, icon, onClick, type = "default", className} = props;

    return (
        <div
            className={`button ${className}`}
            id={type}
            onClick={onClick}
        >
            {icon}
            {text}
        </div>
    )
}

export default Button;
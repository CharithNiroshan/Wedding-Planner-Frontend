import React from "react";

const List = (props) => {
    const {items, setSelected, selected = 0} = props;

    return (
        <ul className="list">
            {
                items?.map((item, index) => (
                    <li className={`list-item ${index === selected && "list-item-selected"} p-3`}
                        key={index}
                        onClick={() => setSelected(index)}
                    >
                        <a  className="d-flex align-items-center">
                            {item?.icon}
                            <h2 className="list-item-text flex-grow-1">{item?.text}</h2>
                        </a>
                    </li>
                ))
            }
        </ul>
    );
}

export default List;
import React from "react";

const List = (props) => {
    const {items, setSelected, selected = 0} = props;

    return (
        <ul className="list">
            {
                items?.map((item, index) => (
                    <li className={`list-item ${index === selected && "list-item-selected"} d-flex align-items-center p-3`}
                        key={index}
                        onClick={() => setSelected(index)}
                    >
                            {item?.icon}
                            <h2 className="list-item-text flex-grow-1">{item?.text}</h2>
                    </li>
                ))
            }
        </ul>
    );
}

export default List;
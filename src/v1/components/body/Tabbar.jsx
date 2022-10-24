import React from 'react';

const Tabbar = (props) => {
    const {index, setIndex, children, items} = props;

    return (
        <div className="tab-bar">
            <div className="tab-bar-top d-flex justify-content-evenly mb-4">
                {
                    items?.map((item,key)=>
                        <div
                            className="d-flex align-items-center justify-content-center"
                             id={index === key ? "tab-bar-tab-active" : "tab-bar-tab-non-active"}
                             onClick={() => setIndex(key)}
                            key={key}
                        >
                            <h2 className="tab-bar-tab-text">{item}</h2>
                        </div>
                    )
                }
            </div>
            <div className="tab-bar-bottom">
                {children}
            </div>
        </div>
    );
}

export default Tabbar;
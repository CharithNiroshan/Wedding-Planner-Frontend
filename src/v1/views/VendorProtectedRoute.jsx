import React from "react";
import {Redirect} from "react-router-dom";
import {Route} from "react-router-dom";
import {useSelector} from "react-redux";

function VendorProtectedRoute({component: Component, ...rest}) {
    const {type, token} = useSelector(state => state.auth);

    return (
        <Route
            {...rest}
            render={(...props) => {
                if (token && type === 1) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect to={{pathname: "/auth/sign-in", state: {from: props.location}}}/>
                    );
                }
            }}
        />
    );
}

export default VendorProtectedRoute;
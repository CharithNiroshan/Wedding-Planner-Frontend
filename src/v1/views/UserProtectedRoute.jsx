import React from "react";
import {Redirect} from "react-router-dom";
import {Route} from "react-router-dom";
import {useSelector} from "react-redux";

function UserProtectedRoute({component: Component, ...rest}) {
    const {type, token} = useSelector(state => state.auth);

    return (
        <Route
            {...rest}
            render={(...props) => {
                if (token && type === 0) {
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

export default UserProtectedRoute;
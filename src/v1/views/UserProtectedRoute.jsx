import React, {useEffect} from "react";
import {Redirect} from "react-router-dom";
import {Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setAlert} from "../store/actions/common-actions";

function UserProtectedRoute({component: Component, ...rest}) {
    const dispatch = useDispatch();
    const {type, token} = useSelector(state => state.auth);

    useEffect(() => {
        if (token === undefined) {
            dispatch(setAlert({type: 1, message: "You need to be logged in as customer to navigate to the page."}));
        }
    }, [dispatch, token])

    return (
        <Route
            {...rest}
            render={(...props) => {
                if (token && type === 0) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect to={{pathname: "/auth/sign-in", state: {from: props[0].location.pathname}}}/>
                    );
                }
            }}
        />
    );
}

export default UserProtectedRoute;
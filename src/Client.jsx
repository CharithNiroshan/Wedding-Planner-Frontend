import React from "react";
import {Route, Switch} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {IconButton, Snackbar} from "@material-ui/core";
import {Alert} from "@material-ui/lab";
import {alertTypes} from "./v1/constants/constant";
import {setAlert} from "./v1/store/actions/common-actions";
import Footer from "./v1/components/footer/Footer";
import NavBar from "./v1/components/header/Header";
import Home from "./v1/views/Home";
import Register from "./v1/views/Register";
import Login from "./v1/views/Login";
import ForgetPassword from "./v1/views/ForgetPassword";
import ResetPassword from "./v1/views/ResetPassword";
import Search from "./v1/views/Search";
import BusinessProfile from "./v1/views/BusinessProfile";
import AddBooking from "./v1/views/AddBooking";
import AddReview from "./v1/views/AddReview";
import Loading from "./v1/components/body/Loading";
import Bookings from "./v1/views/Bookings";
import Booking from "./v1/views/Booking";
import Dashboard from "./v1/views/Dashboard";
import UserProtectedRoute from "./v1/views/UserProtectedRoute";
import VendorProtectedRoute from "./v1/views/VendorProtectedRoute";
import VendorProfile from "./v1/views/VendorProfile";
import Settings from "./v1/views/Settings";
import Appointments from "./v1/views/Appointments";
import BookingRequests from "./v1/views/BookingRequests";
import BookingRequest from "./v1/views/BookingRequest";

const Client = () => {
    const dispatch = useDispatch();
    const {isLoading, alert} = useSelector(state => state.common);

    const handleClose = () => {
        dispatch(setAlert(null))
    }

    const action = (
        <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={() => dispatch(setAlert(null))}
        />
    )


    return (
        <div className={isLoading ? "disable-client" : "client"}>
            {isLoading && <Loading/>}
            <NavBar/>
            <Switch>
                <VendorProtectedRoute path="/booking-requests/booking-request/:id" component={BookingRequest}/>
                <VendorProtectedRoute path="/booking-requests" component={BookingRequests}/>
                <VendorProtectedRoute path="/appointments" component={Appointments}/>
                <VendorProtectedRoute path="/settings" component={Settings}/>
                <VendorProtectedRoute path="/profile" component={VendorProfile}/>
                <UserProtectedRoute exact path="/bookings/booking/:id" component={Booking}/>
                <UserProtectedRoute path="/bookings" component={Bookings}/>
                <UserProtectedRoute path="/dashboard" component={Dashboard}/>
                <UserProtectedRoute path="/add-booking" component={AddBooking}/>
                <UserProtectedRoute path="/add-review" component={AddReview}/>
                <Route path="/search" component={Search}/>
                <Route path="/business-profile/:id" component={BusinessProfile}/>
                <Route path="/auth/forget-password" component={ForgetPassword}/>
                <Route path="/auth/reset-password/:resetToken" component={ResetPassword}/>
                <Route exact path="/auth/register" component={Register}/>
                <Route path="/auth/sign-in" component={Login}/>
                <Route path="/" component={Home}/>
            </Switch>
            <Footer/>
            {
                alert &&
                <Snackbar open={true} autoHideDuration={4000} onClose={handleClose} action={action}>
                    <Alert severity={alertTypes[alert.type]}>{alert.message}</Alert>
                </Snackbar>
            }
        </div>
    );
}

export default Client;
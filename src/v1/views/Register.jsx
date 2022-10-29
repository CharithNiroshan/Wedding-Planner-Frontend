import React, {useEffect} from "react";
import AuthForm from "../components/body/AuthForm";
import RegisterForm from "../components/body/RegisterForm";
import UserRegisterForm from "../components/body/UserRegisterForm";
import VendorBasicInfoForm from "../components/body/VendorBasicInfoForm";
import VendorContactInfoForm from "../components/body/VendorContactInfoForm";
import VendorRegistrationForm03 from "../components/body/VendorServicesForm";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {setAuthStep} from "../store/actions/auth-actions";

const Register = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const {authStep} = useSelector(state => state.auth);

    useEffect(() => {
        return () => {
            dispatch(setAuthStep(0));
        }
    }, [dispatch, location])

    return (
        <AuthForm title="Welcome, please provide below details to register with us." texts={["login"]}>
            {authStep === 0 && <RegisterForm/>}
            {authStep === 1 && <UserRegisterForm/>}
            {authStep === 2 && <VendorBasicInfoForm/>}
            {authStep === 3 && <VendorContactInfoForm/>}
            {authStep === 4 && <VendorRegistrationForm03/>}
        </AuthForm>
    );
}

export default Register;


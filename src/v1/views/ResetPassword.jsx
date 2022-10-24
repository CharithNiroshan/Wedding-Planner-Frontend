import React from "react";
import {BiReset} from "react-icons/bi";
import AuthForm from "../components/body/AuthForm";
import {useForm} from "../utils/formUtility";
import {Form} from "react-bootstrap";
import IconButton from "../components/body/Button";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {resetPassword} from "../services/auth-services";

const initialValues = {
    pwd: undefined,
    confirmPwd: undefined,
}

const ResetPassword = ({match}) => {
    const {resetToken} = match.params;
    const dispatch = useDispatch();
    const history = useHistory();
    const {errors, formData, onChange, onSubmit} = useForm(initialValues);

    const onValidated = () => {
        dispatch(resetPassword(formData, resetToken, history));
    }

    return (
        <AuthForm title="Welcome, Please enter the new password to update.">
            <Form.Group className="mb-3">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                    type='password'
                    name='pwd'
                    placeholder="Enter your new password here"
                    value={formData?.pwd}
                    isInvalid={errors && errors["pwd"]}
                    onChange={onChange}
                />
                <Form.Control.Feedback type="invalid">
                    {errors && errors["pwd"]}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Confirm New Password</Form.Label>
                <Form.Control
                    type='password'
                    name='confirmPwd'
                    placeholder="Enter your new password again here to confirm"
                    value={formData?.confirmPwd}
                    isInvalid={errors && errors["confirmPwd"]}
                    onChange={onChange}
                />
                <Form.Control.Feedback type="invalid">
                    {errors && errors["confirmPwd"]}
                </Form.Control.Feedback>
            </Form.Group>
            <IconButton
                className="mx-0"
                text="Reset Password"
                icon={<BiReset/>}
                onClick={() => onSubmit(onValidated)}
            />
        </AuthForm>
    );
}

export default ResetPassword;
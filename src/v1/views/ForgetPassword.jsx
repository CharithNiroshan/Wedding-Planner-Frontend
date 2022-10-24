import React from "react";
import {RiMailSendLine} from "react-icons/ri";
import AuthForm from "../components/body/AuthForm";
import {useForm} from "../utils/formUtility";
import {Form} from "react-bootstrap";
import IconButton from "../components/body/Button";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {forgetPassword} from "../services/auth-services";

const initialValues = {
    usrName: undefined
}

const ForgetPassword = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {formData, errors, onChange, onSubmit} = useForm(initialValues);

    const onValidated = () => {
        dispatch(forgetPassword(formData, history));
    }

    return (
        <AuthForm title="Don't worry, provide your account email address to get password reset link"
                  texts={["register", "login"]}>
            <Form.Group className="mb-4">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    aria-required={true}
                    type='text'
                    name='usrName'
                    placeholder="Enter your username here"
                    value={formData.usrName}
                    isInvalid={errors["usrName"]}
                    onChange={onChange}
                />
                <Form.Control.Feedback type="invalid">{errors["usrName"]}</Form.Control.Feedback>
            </Form.Group>
            <IconButton
                className="mx-0"
                text="Request Reset Password Link"
                icon={<RiMailSendLine/>}
                onClick={() => onSubmit(onValidated)}
            />
        </AuthForm>
    );
}

export default ForgetPassword;
import React from "react";
import {useHistory} from "react-router-dom";
import AuthForm from "../components/body/AuthForm";
import {useForm} from "../utils/formUtility";
import {Form} from "react-bootstrap";
import {RiLoginBoxFill} from "react-icons/ri";
import IconButton from "../components/body/Button";
import {useDispatch} from "react-redux";
import {signIn} from "../services/auth-services";

const initialValues = {
    usrName: undefined,
    pwd: undefined,
}

const Login = () => {
    const {errors, formData, onChange, onSubmit} = useForm(initialValues);
    const history = useHistory();
    const dispatch = useDispatch();

    const onValidated = async () => {
        await dispatch(signIn(formData, history))
    }

    return (
        <AuthForm title="Welcome back, please provide your credentials to Login." texts={["register", "forget"]}>
            <Form.Group className="mb-3">
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
            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type='password'
                    name='pwd'
                    placeholder="Enter password of your account"
                    value={formData.pwd}
                    isInvalid={errors["pwd"]}
                    onChange={onChange}
                />
                <Form.Control.Feedback type="invalid">{errors["pwd"]}</Form.Control.Feedback>
            </Form.Group>
            <IconButton
                className="mx-0"
                text="Login"
                icon={<RiLoginBoxFill/>}
                onClick={() => onSubmit(onValidated)}
            />
        </AuthForm>
    );
}

export default Login;
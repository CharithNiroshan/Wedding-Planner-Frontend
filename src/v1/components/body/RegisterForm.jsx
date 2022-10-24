import React from 'react';
import {Form} from "react-bootstrap";
import IconButton from "./Button";
import {IoIosArrowForward} from "react-icons/io";
import {useForm} from "../../utils/formUtility";
import {useDispatch} from "react-redux";
import {checkForUsername} from "../../services/auth-services";

const initialValues = {
    usrName: undefined,
    pwd: undefined,
    confirmPwd: undefined,
    type: '0'
}

const RegisterForm = () => {
    const dispatch = useDispatch();
    const {formData, errors, onChange, onSubmit} = useForm(initialValues);

    const onValidated = () => {
        dispatch(checkForUsername(formData));
    }

    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type='text'
                    name='usrName'
                    placeholder='Add a username here'
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
                    placeholder='Add the password here'
                    value={formData.pwd}
                    isInvalid={errors["pwd"]}
                    onChange={onChange}
                />
                <Form.Control.Feedback type="invalid">{errors["pwd"]}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Re-Type Password</Form.Label>
                <Form.Control
                    type='password'
                    name='confirmPwd'
                    placeholder="Add the same password here"
                    value={formData.confirmPwd}
                    isInvalid={errors["confirmPwd"]}
                    onChange={onChange}
                />
                <Form.Control.Feedback type="invalid">{errors["confirmPwd"]}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>How do you want to register</Form.Label>
                <div className="d-flex justify-content-center">
                    <Form.Check
                        inline
                        type="radio"
                        label="as a Customer"
                        value={0}
                        defaultChecked={true}
                        onChange={onChange}
                        name="type"
                    />
                    <Form.Check
                        inline
                        type="radio"
                        value={1}
                        onChange={onChange}
                        label="as a Vendor"
                        name="type"
                    />
                </div>
            </Form.Group>
            <IconButton
                className="mx-0"
                text="Next"
                icon={<IoIosArrowForward/>}
                onClick={() => onSubmit(onValidated)}
            />
        </Form>
    );
}

export default RegisterForm;
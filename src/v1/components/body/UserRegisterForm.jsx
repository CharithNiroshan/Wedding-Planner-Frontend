import React from 'react';
import {useHistory} from "react-router-dom";
import {Form} from "react-bootstrap";
import ImageSelector from "./ImageSelector";
import IconButton from "./Button";
import {BsFillPersonFill} from "react-icons/bs";
import {useForm} from "../../utils/formUtility";
import {useDispatch} from "react-redux";
import {register} from "../../services/auth-services";
import {setUserFormValues} from "../../store/actions/auth-actions";

const initialValues = {
    prfImgUrl: undefined,
    fullName: undefined,
    disName: undefined,
    email: undefined,
    cntNo: undefined,
}

const UserRegisterForm = () => {
    const {formData, errors, onChange, onSubmit} = useForm(initialValues);
    const dispatch = useDispatch();
    const history = useHistory();

    const onValidated = () => {
        dispatch(setUserFormValues(formData));
        dispatch(register(history));
    }

    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Profile Picture</Form.Label>
                <ImageSelector
                    name="prfImgUrl"
                    value={formData.prfImgUrl}
                    onChange={onChange}
                    errors={errors}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                    type='text'
                    name='fullName'
                    placeholder='Enter your full name here'
                    value={formData.fullName}
                    isInvalid={errors["fullName"]}
                    onChange={onChange}
                />
                <Form.Control.Feedback type="invalid">{errors["fullName"]}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Display Name</Form.Label>
                <Form.Control
                    type='text'
                    name='disName'
                    placeholder='Enter your display name here'
                    value={formData.disName}
                    isInvalid={errors["disName"]}
                    onChange={onChange}
                />
                <Form.Control.Feedback type="invalid">{errors["disName"]}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type='text'
                    name='email'
                    placeholder='Enter your email address here'
                    value={formData.email}
                    isInvalid={errors["email"]}
                    onChange={onChange}
                />
                <Form.Control.Feedback type="invalid">{errors["email"]}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                    type='text'
                    name='cntNo'
                    placeholder="Enter your contact number here"
                    value={formData.cntNo}
                    isInvalid={errors["cntNo"]}
                    onChange={onChange}
                />
                <Form.Control.Feedback type="invalid">{errors["cntNo"]}</Form.Control.Feedback>
            </Form.Group>
            <IconButton
                className="mx-0 mb-2"
                text="Finish"
                icon={<BsFillPersonFill/>}
                onClick={() => onSubmit(onValidated)}
            />
        </Form>
    );
}

export default UserRegisterForm;
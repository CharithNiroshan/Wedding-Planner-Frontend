import React, {useEffect} from 'react';
import {Form} from "react-bootstrap";
import IconButton from "./Button";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import {useForm} from "../../utils/formUtility";
import {useDispatch, useSelector} from "react-redux";
import {setAuthStep, setUserFormValues} from "../../store/actions/auth-actions";

const initialValues = {
    email: undefined,
    cntNo: undefined,
    address: undefined,
    district: undefined,
}

const VendorContactInfoForm = () => {
    const dispatch = useDispatch();
    const {districts} = useSelector(state => state.common);
    const {userFormValues} = useSelector(state => state.auth);
    const {formData, errors, onChange, onSubmit} = useForm(initialValues);

    useEffect(() => {
        for (let name in formData) {
            if (userFormValues.hasOwnProperty(name)) {
                formData[name] = userFormValues[name];
            }
        }
    }, [])


    const onValidated = () => {
        dispatch(setUserFormValues({...userFormValues, ...formData}));
        dispatch(setAuthStep(4));
    }

    const onBack = () => {
        dispatch(setAuthStep(2));
    }

    return (
        <Form>
            <Form.Group className="mb-4">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                    type='text'
                    name='email'
                    placeholder='Add your company email address here'
                    value={formData.email}
                    isInvalid={errors["email"]}
                    onChange={onChange}
                />
                <Form.Control.Feedback type="invalid">{errors["email"]}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                    type='text'
                    name='cntNo'
                    placeholder='Add your company contact number here'
                    value={formData.cntNo}
                    isInvalid={errors["cntNo"]}
                    onChange={onChange}
                />
                <Form.Control.Feedback type="invalid">{errors["cntNo"]}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Label>Address</Form.Label>
                <Form.Control
                    type='text'
                    name='address'
                    placeholder='Add your company address here'
                    value={formData.address}
                    isInvalid={errors["address"]}
                    onChange={onChange}
                />
                <Form.Control.Feedback type="invalid">{errors["address"]}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Label>District</Form.Label>
                <Form.Select
                    name='district'
                    placeholder='Select the District of Operating'
                    isInvalid={errors["district"]}
                    onChange={onChange}
                >
                    {districts.map((item, index) => (
                        <option value={item.title} key={index}>{item.title}</option>
                    ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">{errors["district"]}</Form.Control.Feedback>
            </Form.Group>
            <IconButton
                className="mx-0 mb-2"
                text="Next"
                icon={<IoIosArrowForward/>}
                onClick={() => onSubmit(onValidated)}
            />
            <IconButton
                className="mx-0"
                text="Back"
                icon={<IoIosArrowBack/>}
                type="secondary"
                onClick={onBack}
            />
        </Form>
    );
}

export default VendorContactInfoForm;
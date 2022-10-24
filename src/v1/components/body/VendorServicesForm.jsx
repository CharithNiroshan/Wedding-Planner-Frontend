import React from 'react';
import {Form} from "react-bootstrap";
import IconButton from "./Button";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import {useForm} from "../../utils/formUtility";
import {useHistory} from "react-router-dom";
import {setAuthStep, setUserFormValues} from "../../store/actions/auth-actions";
import {useDispatch, useSelector} from "react-redux";
import {register} from "../../services/auth-services";

const initialValues = {
    services: []
}

const VendorRegistrationForm03 = () => {
    const dispatch = useDispatch();
    const {userFormValues} = useSelector(state => state.auth);
    const {categories} = useSelector(state => state.common);
    const {formData, errors, onChange, onSubmit} = useForm(initialValues);
    const history = useHistory();

    const onValidated = () => {
        dispatch(setUserFormValues({...userFormValues, ...formData}));
        dispatch(register(history));
    }

    const onBack = () => {
        dispatch(setAuthStep(3));
    }

    const onChecked = (e) => {
        let temp = formData.services;
        if (e.target.checked) {
            if (e.target.value === "all") {
                temp = categories.filter(item => item.title === userFormValues.category)[0].services;
            } else {
                temp.push(e.target.value)
            }
        } else {
            if (e.target.value === "all") {
                temp = [];
            } else {
                let index = temp.indexOf(e.target.value);
                temp.splice(index, 1);
            }
        }
        onChange({target: {name: e.target.name, value: temp}})
    }

    return (
        <Form>
            <Form.Group className="mb-4 d-flex flex-column align-items-center" aria-invalid={errors["services"]}>
                <Form.Label>Services</Form.Label>
                <Form.Control style={{display: "none"}} isInvalid={errors && errors["services"]}/>
                <div className="form-check-container p-3">
                    <Form.Check
                        label="All Services"
                        name="services"
                        value="all"
                        checked={formData.services.length === categories.filter(item => item.title === userFormValues.category)[0].services.length}
                        onChange={onChecked}
                        className="mb-2"
                    />
                    <hr/>
                    {
                        categories.filter(item => item.title === userFormValues.category)[0].services.map((item, index) => (
                            <Form.Check
                                label={item}
                                name="services"
                                value={item}
                                checked={formData.services.includes(item)}
                                onChange={onChecked}
                                className="mb-2"
                                key={index}
                            />
                        ))
                    }
                </div>
                <Form.Control.Feedback type="invalid">{errors["services"]}</Form.Control.Feedback>
            </Form.Group>
            <IconButton
                className="mx-0 mb-2"
                text="Finish"
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

export default VendorRegistrationForm03;
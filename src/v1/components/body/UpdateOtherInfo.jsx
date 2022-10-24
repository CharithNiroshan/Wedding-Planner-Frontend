import React from 'react';
import {useForm} from "../../utils/formUtility";
import {Form} from "react-bootstrap";
import IconButton from "./Button";
import {AiFillSave} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";

const UpdateOtherInfo = () => {
    const {user} = useSelector(state => state.auth);
    const {districts, categories} = useSelector(state => state.common);
    const dispatch = useDispatch();
    const {formData, updatedValues, errors, onChange, onSubmit} = useForm(user);

    const onValidated = () => {
        if (Object.keys(updatedValues).length !== 0) {
        }
    }

    const onChecked = (e) => {
        let temp = formData.services;
        if (e.target.checked) {
            if (e.target.value === "all") {
                temp = categories.filter(item => item.title === user.category)[0].services;
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
                    value={formData.district}
                    onChange={onChange}
                >
                    {districts.map((item, index) => (
                        <option value={item.title} key={index}>{item.title}</option>
                    ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">{errors["district"]}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-4 d-flex flex-column align-items-center" aria-invalid={errors["services"]}>
                <Form.Label>Services</Form.Label>
                <Form.Control style={{display: "none"}} isInvalid={errors && errors["services"]}/>
                <div className="form-check-container p-3">
                    <Form.Check
                        label="All Services"
                        name="services"
                        value="all"
                        checked={formData.services.length === categories.filter(item => item.title === user.category)[0].services.length}
                        onChange={onChecked}
                        className="mb-2"
                    />
                    <hr/>
                    {
                        categories.filter(item => item.title === user.category)[0].services.map((item, index) => (
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
                className="mx-0 my-3"
                text="Save Changes"
                icon={<AiFillSave/>}
                onClick={() => onSubmit(onValidated)}
            />
        </Form>
    );
}

export default UpdateOtherInfo;
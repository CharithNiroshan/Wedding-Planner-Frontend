import React, {useEffect} from "react";
import AuthForm from "../components/body/AuthForm";
import {useForm} from "../utils/formUtility";
import {useHistory, useLocation} from "react-router-dom";
import {Form} from "react-bootstrap";
import {IoIosArrowForward} from "react-icons/io";
import IconButton from "../components/body/Button";
import {addBookingQueryStringtoObject} from "../utils/addBookingQueryStringtoObject";
import ConvertToDate from "../utils/covertToDate";
import {addBooking} from "../services/user-services";
import {useDispatch, useSelector} from "react-redux";

const initialValues = {
    bookingType: "0",
    bookingPackage: null,
    bookingServices: [],
    extReq: undefined,
    bookingDate: Date.now(),
}

const AddBooking = () => {
    const {search} = useLocation();
    const {formData, errors, onChange, onSubmit} = useForm(initialValues);
    const dispatch = useDispatch();
    const {vendor} = useSelector(state => state.vendorDS);
    const {user} = useSelector(state => state.auth);
    const history = useHistory();

    useEffect(() => {
        const {type, pack, services} = addBookingQueryStringtoObject(search);
        if (type === "0") {
            formData.bookingType = type;
            formData.bookingServices = services;
            formData.bookingPackage = null;
        } else {
            formData.bookingType = type;
            formData.bookingPackage = pack;
        }
    }, [search])

    const onValidated = async () => {
        await dispatch(addBooking(vendor._id, user._id, formData, history));
    }

    const onTypeChanged = (e) => {
        if (e.target.value === "0") {
            formData.bookingPackage = null;
            onChange(e);
        } else {
            formData.bookingServices = [];
            onChange(e);
        }
    }

    const onDateChanged = (e) => {
        const dateTimeStamp = new Date(e.target.value).getTime();
        onChange({target: {name: e.target.name, value: dateTimeStamp}})
    }

    const onChecked = (e) => {
        let temp = formData.bookingServices;
        if (e.target.checked) {
            if (e.target.value === "all") {
                temp = vendor?.services;
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
        <AuthForm title="You can add either a custom booking or package booking as per your choice.">
            <Form.Group className="mb-3">
                <Form.Label>What type of booking you prefer</Form.Label>
                <div className="d-flex justify-content-center">
                    <Form.Check
                        inline
                        type="radio"
                        label="Custom Booking"
                        value='0'
                        checked={formData?.bookingType === '0'}
                        onChange={(e) => onTypeChanged(e)}
                        name="bookingType"
                    />
                    <Form.Check
                        disabled={vendor?.packages.length === 0}
                        inline
                        type="radio"
                        value='1'
                        onChange={(e) => onTypeChanged(e)}
                        checked={formData?.bookingType === '1'}
                        label="Package Booking"
                        name="bookingType"
                    />
                </div>
            </Form.Group>
            {
                formData?.bookingType === '0' ?
                    <Form.Group className="mb-4 d-flex flex-column align-items-center"
                                aria-invalid={errors["bookingServices"]}>
                        <Form.Label>Services</Form.Label>
                        <Form.Control style={{display: "none"}} isInvalid={errors && errors["bookingServices"]}/>
                        <div className="form-check-container p-3">
                            <Form.Check
                                label="All Services"
                                name="bookingServices"
                                value="all"
                                checked={formData.bookingServices.length === vendor?.services?.length}
                                onChange={onChecked}
                                className="mb-2"
                            />
                            <hr/>
                            {
                                vendor?.services?.map((item, index) => (
                                    <Form.Check
                                        label={item}
                                        name="bookingServices"
                                        value={item}
                                        checked={formData.bookingServices.includes(item)}
                                        onChange={onChecked}
                                        className="mb-2"
                                        key={index}
                                    />
                                ))
                            }
                        </div>
                        <Form.Control.Feedback type="invalid">{errors["bookingServices"]}</Form.Control.Feedback>
                    </Form.Group>
                    :
                    <Form.Group className="mb-3">
                        <Form.Label>Select the package you want</Form.Label>
                        <Form.Control style={{display: "none"}} isInvalid={errors && errors["bookingPackage"]}/>
                        <div className="d-flex flex-column radio-container p-3">
                            {
                                vendor?.packages?.map((item, index) =>
                                    <Form.Check
                                        className="mb-2"
                                        type="radio"
                                        label={item?.title}
                                        value={item?._id}
                                        checked={formData?.bookingPackage === item?._id}
                                        onChange={onChange}
                                        name="bookingPackage"
                                        key={index}
                                    />
                                )
                            }
                        </div>
                        <Form.Control.Feedback type="invalid">{errors["bookingPackage"]}</Form.Control.Feedback>
                    </Form.Group>
            }
            <Form.Group className="mb-3">
                <Form.Label>Extra Requirements</Form.Label>
                <Form.Control
                    type='text'
                    name='extReq'
                    as="textarea"
                    rows={6}
                    placeholder='If you have any extra requirements add them here'
                    value={formData.extReq}
                    isInvalid={errors["extReq"]}
                    onChange={onChange}
                />
                <Form.Control.Feedback type="invalid">{errors["extReq"]}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Booking Date</Form.Label>
                <Form.Control
                    type="date"
                    name='bookingDate'
                    value={ConvertToDate(formData.bookingDate)}
                    isInvalid={errors["bookingDate"]}
                    onChange={(e) => onDateChanged(e)}
                />
                <Form.Control.Feedback type="invalid">{errors["bookingDate"]}</Form.Control.Feedback>
            </Form.Group>
            <IconButton
                className="mx-0"
                text="Submit"
                icon={<IoIosArrowForward/>}
                onClick={() => onSubmit(onValidated)}
            />
        </AuthForm>
    );
}

export default AddBooking;
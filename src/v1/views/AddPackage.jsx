import React from "react";
import {Form} from "react-bootstrap";
import ImageSelector from "../components/body/ImageSelector";
import IconButton from "../components/body/Button";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import {useForm} from "../utils/formUtility";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";

const initialValues = {
    packTitle: undefined,
    packDes: undefined,
    packImgUrl: undefined,
    packPrice: 0,
    packServices: [],
}

const AddPackageForm = (props) => {
    const {user} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const {onBack} = props;
    const {formData, errors, onChange, onSubmit} = useForm(initialValues);

    const onValidated = () => {
        dispatch({
            type: "SET_ISLOADING",
            payload: true,
        })

        axios.post(
            "http://localhost:4000/api/vendor/add-package",
            {...formData, venId: user._id}
        ).then(res => {
            dispatch({
                type: "SET_ISLOADING",
                payload: false,
            })

            console.log(res.data);
        }).catch(err => {
            dispatch({
                type: "SET_ISLOADING",
                payload: false,
            })

            console.log(err.message);
        })
    }

    const onChecked = (e) => {
        let temp = formData.packServices;

        if (e.target.checked) {
            if (e.target.value === "all") {
                temp = user?.services;
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

    console.log(formData, errors);

    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Package Title</Form.Label>
                <Form.Control
                    type='text'
                    name='packTitle'
                    placeholder={'Add your package title here'}
                    value={formData.packTitle}
                    isInvalid={errors["packTitle"]}
                    onChange={onChange}
                />
                <Form.Control.Feedback type="invalid">{errors["packTitle"]}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Package Description</Form.Label>
                <Form.Control
                    type='text'
                    as="textarea"
                    rows={6}
                    name='packDes'
                    placeholder={'Add a small description about the package here'}
                    value={formData.packDes}
                    isInvalid={errors["packDes"]}
                    onChange={onChange}
                />
                <Form.Control.Feedback type="invalid">{errors["packDes"]}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Package Image</Form.Label>
                <ImageSelector
                    name="packImgUrl"
                    value={formData.packImgUrl}
                    onChange={onChange}
                    errors={errors}
                    type="square"
                />
            </Form.Group>
            <Form.Group className="mb-4 d-flex flex-column align-items-center"
                        aria-invalid={errors["packServices"]}>
                <Form.Label>Package Services</Form.Label>
                <Form.Control style={{display: "none"}} isInvalid={errors && errors["packServices"]}/>
                <div className="form-check-container p-3">
                    <Form.Check
                        label="All Services"
                        name="packServices"
                        value="all"
                        checked={formData.packServices.length === user?.services?.length}
                        onChange={onChecked}
                        className="mb-2"
                    />
                    <hr/>
                    {
                        user?.services?.map((item, index) => (
                            <Form.Check
                                label={item}
                                name="packServices"
                                value={item}
                                checked={formData.packServices.includes(item)}
                                onChange={onChecked}
                                className="mb-2"
                                key={index}
                            />
                        ))
                    }
                </div>
                <Form.Control.Feedback type="invalid">{errors["packServices"]}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Package Price</Form.Label>
                <Form.Control
                    type='number'
                    name='packPrice'
                    placeholder={'Add a price of the package here'}
                    value={formData.packPrice}
                    isInvalid={errors["packPrice"]}
                    onChange={onChange}
                />
                <Form.Control.Feedback type="invalid">{errors["packPrice"]}</Form.Control.Feedback>
            </Form.Group>
            <IconButton
                className="mx-0 mb-2"
                text="Add"
                icon={<IoIosArrowForward/>}
                onClick={() => onSubmit(onValidated)}
            />
            <IconButton
                className="mx-0"
                text="Cancel"
                icon={<IoIosArrowBack/>}
                type="secondary"
                onClick={onBack}
            />
        </Form>
    )
}

export default AddPackageForm;
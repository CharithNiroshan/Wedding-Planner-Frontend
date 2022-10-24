import React, {useEffect} from 'react';
import {Form} from "react-bootstrap";
import ImageSelector from "./ImageSelector";
import IconButton from "./Button";
import {IoIosArrowForward} from "react-icons/io";
import {useForm} from "../../utils/formUtility";
import {useDispatch, useSelector} from "react-redux";
import {setAuthStep, setUserFormValues} from "../../store/actions/auth-actions";

const initialValues = {
    logoUrl: undefined,
    title: undefined,
    category: undefined,
    des: undefined,
    coverPhotoUrl: undefined,
}

const VendorBasicInfoForm = () => {
    const dispatch = useDispatch();
    const {categories} = useSelector(state => state.common);
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
        dispatch(setUserFormValues(formData));
        dispatch(setAuthStep(3));
    }

    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Logo</Form.Label>
                <ImageSelector
                    name="logoUrl"
                    value={formData.logoUrl}
                    onChange={onChange}
                    errors={errors}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type='text'
                    name='title'
                    placeholder={'Add your company title here'}
                    value={formData.title}
                    isInvalid={errors["title"]}
                    onChange={onChange}
                />
                <Form.Control.Feedback type="invalid">{errors["title"]}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    type='text'
                    as="textarea"
                    rows={8}
                    name='des'
                    placeholder={'Add a small description about your company here'}
                    value={formData.des}
                    isInvalid={errors["des"]}
                    onChange={onChange}
                />
                <Form.Control.Feedback type="invalid">{errors["des"]}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Select
                    placeholder="Select the category you want to your account"
                    name='category'
                    value={formData.category}
                    isInvalid={errors["category"]}
                    onChange={onChange}
                >
                    {categories?.map((item, index) => (
                        <option value={item.title} key={index}>{item.title}</option>
                    ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">{errors["category"]}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Cover Photo</Form.Label>
                <ImageSelector
                    name="coverPhotoUrl"
                    value={formData.coverPhotoUrl}
                    onChange={onChange}
                    errors={errors}
                    type="square"
                />
            </Form.Group>
            <IconButton
                className="mx-0 mb-2"
                text="Next"
                icon={<IoIosArrowForward/>}
                onClick={() => onSubmit(onValidated)}
            />
        </Form>
    );
}

export default VendorBasicInfoForm;
import React from 'react';
import {useForm} from "../../utils/formUtility";
import {Form} from "react-bootstrap";
import ImageSelector from "./ImageSelector";
import IconButton from "./Button";
import {AiFillSave} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";

const UpdateBasicInfo = () => {
    const {user} = useSelector(state => state.auth);
    const {categories}=useSelector(state => state.common);
    const dispatch = useDispatch();
    const {formData, updatedValues, errors, onChange, onSubmit} = useForm(user);

    const onValidated = () => {
        if (Object.keys(updatedValues).length !== 0) {

        }
    }

    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Logo</Form.Label>
                <ImageSelector
                    name="logoUrl"
                    value={formData?.logoUrl}
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
                    value={formData?.title}
                    isInvalid={errors["title"]}
                    onChange={onChange}
                />
                <Form.Control.Feedback type="invalid">{errors["title"]}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    type='text'
                    name='des'
                    placeholder={'Add a small description about your company here'}
                    value={formData?.des}
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
                    value={formData?.category}
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
                    value={formData?.coverPhotoUrl}
                    onChange={onChange}
                    errors={errors}
                    type="square"
                />
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

export default UpdateBasicInfo;
import React from "react";
import {Form} from "react-bootstrap";
import ImageSelector from "../components/body/ImageSelector";
import IconButton from "../components/body/Button";
import {AiFillSave} from "react-icons/ai";
import {useForm} from "../utils/formUtility";
import {useDispatch, useSelector} from "react-redux";
import {updateUserProfile} from "../services/user-services";

const UserEditProfile = () => {
    const {user} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const {formData, updatedValues, errors, onChange, onSubmit} = useForm(user);

    const onValidated = async () => {
        if (Object.keys(updatedValues).length !== 0) {
            await dispatch(updateUserProfile(updatedValues));
        }
    }

    return (
        <div className="user-edit-profile">
            <Form.Group className="mb-2">
                <Form.Label>Profile Picture</Form.Label>
                <ImageSelector name="prfImgUrl" value={formData.prfImgUrl} onChange={onChange} errors={errors}/>
            </Form.Group>
            <Form.Group className="mb-2">
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
            <Form.Group className="mb-2">
                <Form.Label>Display Name</Form.Label>
                <Form.Control
                    type='text'
                    name='disName'
                    placeholder='Enter the name you want to be displayed'
                    value={formData.disName}
                    isInvalid={errors["disName"]}
                    onChange={onChange}
                />
                <Form.Control.Feedback type="invalid">{errors["disName"]}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                    type='text'
                    name='email'
                    placeholder='Add your email address here'
                    value={formData.email}
                    isInvalid={errors["email"]}
                    onChange={onChange}
                />
                <Form.Control.Feedback type="invalid">{errors["email"]}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-2">
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
                type={Object.keys(updatedValues).length !== 0 ? "default" : "disabled"}
                className="mx-0 my-3"
                text="Save Changes"
                icon={<AiFillSave/>}
                onClick={() => onSubmit(onValidated)}
            />
        </div>
    );
}

export default UserEditProfile;
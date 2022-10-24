import React from "react";
import AuthForm from "../components/body/AuthForm";
import {useForm} from "../utils/formUtility";
import {Form} from "react-bootstrap";
import {IoIosArrowForward} from "react-icons/io";
import IconButton from "../components/body/Button";
import {Rating} from "@material-ui/lab";
import {useDispatch, useSelector} from "react-redux";
import {addReview} from "../services/user-services";
import {useHistory} from "react-router-dom";

const initialValues = {
    rating: 3,
    ratingDes: undefined,
}

const AddReview = () => {
    const dispatch = useDispatch();
    const {vendor} = useSelector(state => state.vendorDS);
    const {user} = useSelector(state => state.auth);
    const {formData, errors, onChange, onSubmit} = useForm(initialValues);
    const history = useHistory();

    const onValidated = async () => {
        await dispatch(addReview(vendor._id, user._id, formData, history));
    }

    return (
        <AuthForm title={`Let others know of your experiences with ${vendor.vendor?.title} by adding a review.`}>
            <Form.Group className="mb-3">
                <Form.Label>Rating to like to give</Form.Label>
                <div className="mx-4">
                    <Rating
                        name="rating"
                        value={formData?.rating}
                        onChange={onChange}
                    />
                </div>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    type='text'
                    name='ratingDes'
                    as="textarea"
                    rows={6}
                    placeholder='Add your experience here'
                    value={formData.ratingDes}
                    isInvalid={errors["ratingDes"]}
                    onChange={onChange}
                />
                <Form.Control.Feedback type="invalid">{errors["ratingDes"]}</Form.Control.Feedback>
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

export default AddReview;
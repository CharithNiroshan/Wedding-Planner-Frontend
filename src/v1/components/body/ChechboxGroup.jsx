import React from "react";
import {Form} from "react-bootstrap";

const CheckboxGroup = (props) => {
    const {label, name, values, setValues, items} = props;

    const onNormalCheckboxClicked = (e) => {
        let temp = values[name];

        if (e.target.checked) {
            temp.push(e.target.value);
        } else {
            let index = temp.indexOf(e.target.value);
            temp.splice(index, 1);
        }

        setValues({...values, [name]: temp});
    }

    const onAllCheckboxClicked = (e) => {
        let temp = [];

        if (e.target.checked) {
            items?.map(item => temp.push(item.title));
        }

        setValues({...values, [name]: temp});
    }

    return (
        <Form.Group className="mb-4 d-flex flex-column align-items-center">
            <Form.Label>{label}</Form.Label>
            <div className="form-check-container p-3">
                <Form.Check
                    label={`All ${label}`}
                    name={name}
                    value="all"
                    checked={values[name]?.length === items?.length}
                    onChange={onAllCheckboxClicked}
                    className="mb-2"
                />
                <hr/>
                {
                    items?.map((item, index) => (
                        <Form.Check
                            label={item?.title}
                            name={name}
                            value={item?.title}
                            checked={values[name]?.includes(item?.title)}
                            onChange={onNormalCheckboxClicked}
                            className="mb-2"
                            key={index}
                        />
                    ))
                }
            </div>
        </Form.Group>
    );
}

export default CheckboxGroup;
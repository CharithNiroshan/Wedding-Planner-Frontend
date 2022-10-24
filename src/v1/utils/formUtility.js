import {useEffect, useState} from "react";
import {
    validateEmail,
    validatePassword,
    validateConfirmPassword,
    validatePrfImgUrl,
    validateFullName,
    validateContactNumber,
    validateLogoUrl,
    validateTitle,
    validateDescription,
    validateCoverPhotoUrl,
    validateCategory,
    validateAddress,
    validateDistrict,
    validateServices,
    validateBookingDate,
    validateBookingPackage,
    validateUserName,
    validateRatingDescription,
    validateBookingServices,
    validateBookingExtraRequirement,
    validateOnBookingTypeChange,
    validatePackageTitle,
    validatePackageDescription,
    validatePackageImage, validatePackageServices, validatePackagePrice
} from "./clientSideValidation";
import {checkout_fields} from "../constants/formconstant";

export const errorSetter = (event, errors, formData) => {
    switch (event.target.name) {
        case checkout_fields.usrName:
            validateUserName(event.target.value, errors);
            break;
        case checkout_fields.pwd:
            validatePassword(event.target.value, errors);
            break;
        case checkout_fields.confirmPwd:
            validateConfirmPassword(event.target.value, errors, formData);
            break;
        case checkout_fields.prfImgUrl:
            validatePrfImgUrl(event.target.value, errors);
            break;
        case checkout_fields.fullName:
            validateFullName(event.target.value, errors);
            break;
        case  checkout_fields.email:
            validateEmail(event.target.value, errors);
            break;
        case checkout_fields.cntNo:
            validateContactNumber(event.target.value, errors);
            break;
        case checkout_fields.logoUrl:
            validateLogoUrl(event.target.value, errors);
            break;
        case checkout_fields.title:
            validateTitle(event.target.value, errors);
            break;
        case checkout_fields.category:
            validateCategory(event.target.value, errors);
            break;
        case checkout_fields.des:
            validateDescription(event.target.value, errors);
            break;
        case checkout_fields.coverPhotoUrl:
            validateCoverPhotoUrl(event.target.value, errors);
            break;
        case checkout_fields.address:
            validateAddress(event.target.value, errors);
            break;
        case checkout_fields.district:
            validateDistrict(event.target.value, errors);
            break;
        case checkout_fields.services:
            validateServices(event.target.value, errors);
            break;
        case checkout_fields.ratingDes:
            validateRatingDescription(event.target.value, errors);
            break;
        case checkout_fields.bookingType:
            validateOnBookingTypeChange(event.target.value, errors, formData);
            break;
        case checkout_fields.bookingDate:
            validateBookingDate(event.target.value, errors);
            break;
        case checkout_fields.bookingPackage:
            validateBookingPackage(event.target.value, errors, formData);
            break;
        case checkout_fields.bookingServices:
            validateBookingServices(event.target.value, errors, formData);
            break;
        case checkout_fields.extReq:
            validateBookingExtraRequirement(event.target.value, errors);
            break;
        case checkout_fields.packTitle:
            validatePackageTitle(event.target.value,errors);
            break;
        case checkout_fields.packDes:
            validatePackageDescription(event.target.value,errors);
            break;
        case checkout_fields.packImgUrl:
            validatePackageImage(event.target.value,errors);
            break;
        case checkout_fields.packServices:
            validatePackageServices(event.target.value,errors);
            break;
        case checkout_fields.packPrice:
            validatePackagePrice(event.target.value,errors);
            break;
        default:
            break;
    }
    return errors;
}

export const useForm = (initialValues) => {
    const [formData, setFormData] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [updatedValues, setUpdatedValues] = useState({});
    const [isFirstSubmit, setIsFirstSubmit] = useState(false);

    useEffect(() => {
        let updates = {};

        for (let name in formData) {
            if (name === "Services") {
                if (formData[name].length !== initialValues[name].length) {
                    updates = {...updates, [name]: formData[name]};
                } else {
                    delete updates[name];
                }
            } else {
                if (formData[name] !== initialValues[name]) {
                    updates = {...updates, [name]: formData[name]};
                } else {
                    delete updates[name];
                }
            }
        }

        setUpdatedValues(updates);
    }, [formData, initialValues])

    const validateFormFields = (e) => {
        if (e === undefined) {
            for (let name in formData) {
                errorSetter({target: {name: name, value: formData[name]}}, errors, formData)
            }
        } else {
            errorSetter(e, errors, formData);
        }
    }

    const onChange = (e) => {
        if (e.target.type !== "checkbox") {
            setFormData({...formData, [e.target.name]: e.target.value});
        } else {
            setFormData({...formData, [e.target.name]: e.target.checked});
        }
        if (isFirstSubmit) {
            validateFormFields(e);
        }
    }

    const onSubmit = (onValidated) => {
        if (!isFirstSubmit) {
            validateFormFields();
            setIsFirstSubmit(true);
        }
        if (Object.keys(errors).length === 0) {
            onValidated();
        }
    }

    return {
        updatedValues,
        formData,
        setFormData,
        errors,
        onChange,
        onSubmit
    }
}
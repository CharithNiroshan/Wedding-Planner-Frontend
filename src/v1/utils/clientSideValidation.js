export function validateUserName(usrNameValue, errors) {
    if (usrNameValue === '' || usrNameValue === undefined) {
        errors["usrName"] = "Please add a username";
    } else if (!usrNameValue.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%*?&])[A-Za-z\d@$!%#*?&]{8,}$/)) {
        errors["usrName"] = "Username should include minimum of 8 characters including at least one uppercase letter, one lowercase letter, one number and one special character"
    } else {
        delete errors.usrName;
    }
}

export function validatePassword(pwdValue, errors) {
    if (pwdValue === '' || pwdValue === undefined) {
        errors["pwd"] = "Please enter your password";
    } else if (!pwdValue.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%*?&])[A-Za-z\d@$!%#*?&]{8,}$/)) {
        errors["pwd"] = "your password should include Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
    } else {
        delete errors.pwd;
    }
}

export function validateConfirmPassword(confirmPasswordValue, errors, formData) {
    if (confirmPasswordValue === "" || confirmPasswordValue === undefined) {
        errors["confirmPwd"] = "Please fill the confirm password";
    } else if (confirmPasswordValue !== formData.pwd) {
        errors["confirmPwd"] = "Passwords don't match";
    } else {
        delete errors.confirmPwd;
    }
}


export function validateEmail(emailValue, errors) {
    if (emailValue === '' || emailValue === undefined) {
        errors["email"] = "Please fill in your email";
    } else if (!emailValue.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        errors["email"] = "Please enter a valid email";
    } else {
        delete errors.email;
    }
}

export function validateFullName(fullNameValue, errors) {
    if (fullNameValue === '' || fullNameValue === undefined) {
        errors["fullName"] = "Please fill in your Full Name";
    } else {
        delete errors.fullName;
    }
}

export function validateContactNumber(cntNoValue, errors) {
    if (cntNoValue === '' || cntNoValue === undefined) {
        errors["cntNo"] = "Please fill in your Contact Number";
    } else {
        delete errors.cntNo;
    }
}

export function validatePrfImgUrl(prfImgUrlValue, errors) {
    if (prfImgUrlValue === '' || prfImgUrlValue === undefined) {
        errors["prfImgUrl"] = "Please select a Profile Picture";
    } else {
        delete errors.prfImgUrl;
    }
}

export function validateLogoUrl(logoUrlValue, errors) {
    if (logoUrlValue === '' || logoUrlValue === undefined) {
        errors["logoUrl"] = "Please select a Logo";
    } else {
        delete errors.logoUrl;
    }
}

export function validateTitle(titleValue, errors) {
    if (titleValue === '' || titleValue === undefined) {
        errors["title"] = "Please fill in your title";
    } else {
        delete errors.title;
    }
}

export function validateCategory(titleValue, errors) {
    if (titleValue === '' || titleValue === undefined) {
        errors["category"] = "Please select a category";
    } else {
        delete errors.category;
    }
}

export function validateDescription(desValue, errors) {
    if (desValue === '' || desValue === undefined) {
        errors["des"] = "Please fill in the description";
    } else if (desValue.length < 200) {
        errors["des"] = "Description must have more than 200 characters";
    } else if (desValue.length > 600) {
        errors["des"] = "Description can't have more than 600 characters";
    } else {
        delete errors.des;
    }
}

export function validateCoverPhotoUrl(coverPhotoUrlValue, errors) {
    if (coverPhotoUrlValue === '' || coverPhotoUrlValue === undefined) {
        errors["coverPhotoUrl"] = "Please select a cover photo";
    } else {
        delete errors.coverPhotoUrl;
    }
}

export function validateAddress(addressValue, errors) {
    if (addressValue === '' || addressValue === undefined) {
        errors["address"] = "Please fill in the address";
    } else {
        delete errors.address;
    }
}

export function validateDistrict(districtValue, errors) {
    if (districtValue === '' || districtValue === undefined) {
        errors["district"] = "Please select a district";
    } else {
        delete errors.district;
    }
}

export function validateServices(servicesValue, errors) {
    if (servicesValue.length === 0) {
        errors["services"] = "You need to select at least one service";
    } else {
        delete errors.services;
    }
}

export function validateRatingDescription(ratingDesValue, errors) {
    if (ratingDesValue === '' || ratingDesValue === undefined) {
        errors["ratingDes"] = "Please fill in the description";
    } else if (ratingDesValue.length < 100) {
        errors["ratingDes"] = "Description must have more than 100 characters";
    } else if (ratingDesValue.length > 300) {
        errors["ratingDes"] = "Description can't have more than 300 characters";
    } else {
        delete errors.ratingDes;
    }
}

export function validateOnBookingTypeChange(typeValue, errors, formData) {
    console.log(typeValue);
    if (typeValue === "0") {
        if (formData.bookingServices.length === 0) {
            errors["bookingServices"] = "Please select at least one service";
        } else {
            delete errors.bookingServices;
        }
        delete errors.bookingPackage;
        formData["bookingPackage"] = null;
    } else {
        if (formData.bookingPackage === null) {
            errors["bookingPackage"] = "Please select a package";
        } else {
            delete errors.bookingServices;
        }
        delete errors.bookingServices;
        formData["bookingServices"] = [];
    }
}

export function validateBookingDate(bookingDateValue, errors) {
    if (bookingDateValue === null) {
        errors["bookingDate"] = "Please select a Date";
    } else if (Date.now() > new Date(bookingDateValue).getTime()) {
        errors["bookingDate"] = "Invalid Date. Please Select a date in the future";
    } else {
        delete errors.bookingDate;
    }
}

export function validateBookingPackage(bookingPackageValue, errors, formData) {
    if (formData.bookingType === '1' && bookingPackageValue === null) {
        errors["bookingPackage"] = "Please select a package";
    } else {
        delete errors.bookingPackage;
    }
}

export function validateBookingServices(bookingServicesValue, errors, formData) {
    if (formData.bookingType === '0' && bookingServicesValue.length === 0) {
        errors["bookingServices"] = "Please select at least one service";
    } else {
        delete errors.bookingServices;
    }
}

export function validateBookingExtraRequirement(extReqValue, errors) {
    if (extReqValue !== undefined) {
        if (extReqValue.length > 400) {
            errors["extReq"] = "Extra Requirements should be less than 400 characters";
        }
    } else {
        delete errors.extReq;
    }
}

export function validatePackageTitle(packTitleValue, errors) {
    if (packTitleValue === undefined) {
        errors["packTitle"] = "Package title is required"
    } else {
        delete errors.packTitle;
    }
}

export function validatePackageDescription(packDesValue, errors) {
    if (packDesValue === undefined) {
        errors["packDes"] = "Package description is required"
    } else if (packDesValue.length < 200) {
        errors["packDes"] = "Package description must have 200 characters at least"
    } else if (packDesValue.length > 800) {
        errors["packDes"] = "Package description should be less 1000 characters"
    } else {
        delete errors.packDes;
    }
}

export function validatePackageImage(packImgUrlValue, errors) {
    if (packImgUrlValue === undefined) {
        errors["packImgUrl"] = "Please select a image for package"
    } else {
        delete errors.packImgUrl;
    }
}

export function validatePackageServices(packServicesValue, errors) {
    if (packServicesValue.length === 0) {
        errors["packServices"] = "Please select at lease one service";
    } else {
        delete errors.packServices;
    }
}

export function validatePackagePrice(packPriceValue, errors) {
    if (packPriceValue === 0) {
        errors["packPrice"] = "Invalid package price";
    } else {
        delete errors.packPrice;
    }
}

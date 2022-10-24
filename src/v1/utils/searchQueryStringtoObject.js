export const searchQueryStringtoObject = (queryString) => {
    let queryObject = {};

    const org = decodeURI(queryString.split("?")[1]).split("&");

    org.forEach(item => {
        let key = item.split("=")[0];
        let value = item.split("=")[1];

        switch (key) {
            case "sortByRating":
                value = stringBooleantoBoolean(value);
                break;
            case "sortByNoOfReviews":
                value = stringBooleantoBoolean(value);
                break;
            case "categories":
                value = stringArraytoArray(value);
                break;
            case "districts":
                value = stringArraytoArray(value);
                break;
            case "query":
                value = value.toString();
                break;
            default:
                break;
        }

        queryObject = {...queryObject, [key]: value};
    })

    return queryObject;
}

export const stringArraytoArray = (stringArray) => {
    if (stringArray === "[]") {
        return [];
    } else {
        return stringArray.split(/[[\]]/)[1].split(",");
    }
}

const stringBooleantoBoolean = (stringBoolean) => {
    return stringBoolean === "true";
}
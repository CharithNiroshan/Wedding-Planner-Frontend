export const addBookingQueryStringtoObject = (queryString) => {
    let queryObject = {};

    const org = decodeURI(queryString.split("?")[1]).split("&");

    org.forEach(item => {
        let key = item.split("=")[0];
        let value = item.split("=")[1];

        switch (key) {
            case "type":
                value = value.toString();
                break;
            case "services":
                value = [];
                break;
            case "pack":
                value = value.toString();
                break;
            default:
                break;
        }

        queryObject = {...queryObject, [key]: value};
    })

    return queryObject;
}

export default function ConvertToDate(value) {
    let date = new Date(value);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dt = date.getDate();

    if (dt < 10) {
        dt = "0" + dt;
    }
    if (month < 10) {
        month = "0" + month;
    }

    return `${year}-${month}-${dt}`;
}

export const ConvertToDateString = (timeStamp) => {
    let date = new Date(timeStamp);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dt = date.getDate();

    let monthString, middleString;

    switch (month) {
        case 1:
            monthString = "January";
            break;
        case 2:
            monthString = "February";
            break;
        case 3:
            monthString = "March";
            break;
        case 4:
            monthString = "April";
            break;
        case 5:
            monthString = "May";
            break;
        case 6:
            monthString = "June";
            break;
        case 7:
            monthString = "July";
            break;
        case 8:
            monthString = "August";
            break;
        case 9:
            monthString = "September";
            break;
        case 10:
            monthString = "October";
            break;
        case 11:
            monthString = "November";
            break;
        case 12:
            monthString = "December";
            break;
        default:
            break;
    }

    if (dt === 1 || dt === 21 || dt === 31) {
        middleString = "st";
    } else if (dt === 2 || dt === 22) {
        middleString = "nd";
    } else if (dt === 3 || dt === 23) {
        middleString = "rd";
    } else {
        middleString = "th";
    }

    return `${dt} ${middleString} of ${monthString} ${year}`;
}



import {
    AiFillHome,
    AiFillBook,
    AiFillEdit,
    AiFillSetting,
    AiFillCalendar
} from "react-icons/ai";
import {MdLocalOffer} from "react-icons/md";
import {TbListDetails} from "react-icons/tb";
import {BsFillPersonFill,BsFillInfoCircleFill, BsFillImageFill} from "react-icons/bs";
import {MdDashboard} from "react-icons/md";
import UserProfile from "../views/UserProfile";
import UserEditProfile from "../views/UserEditProfile";
import UserHome from "../views/UserHome";
import VendorHome from "../views/VendorHome";
import AdminHome from "../views/AdminHome";
import UpdateBasicInfo from "../components/body/UpdateBasicInfo";
import UpdateOtherInfo from "../components/body/UpdateOtherInfo";
import Gallery from "../components/body/Gallery";
import Packages from "../components/body/Packages";

export const configurations = {
    baseUrl: "https://my-wedding-planner-lk.herokuapp.com"
}

export const homeContent = [
    <UserHome/>,
    <VendorHome/>,
    <AdminHome/>,
    <UserHome/>
]

export const guestListItems = [
    {
        link: "home",
        text: "Home",
        icon: <AiFillHome/>,
    },
    {
        link: "dashboard",
        text: "Dashboard",
        icon: <MdDashboard/>,
    },
    {
        link: "bookings",
        text: "Bookings",
        icon: <AiFillBook/>,
    }
]

export const vendorListItems = [
    {
        link: "home",
        text: "Home",
        icon: <AiFillHome/>,
    },
    {
        link: "profile",
        text: "Profile",
        icon: <BsFillPersonFill/>
    },
    {
        link: "appointments",
        text: "Appointments",
        icon: <AiFillCalendar/>
    },
    {
        link: "booking-requests",
        text: "Booking Requests",
        icon: <AiFillBook/>
    },
    {
        link: "settings",
        text: "Settings",
        icon: <AiFillSetting/>
    },
]

export const userDashboardItems = [
    {
        link: "profile",
        text: "Profile",
        icon: <BsFillPersonFill/>,
        component: <UserProfile/>
    },
    {
        link: "edit-profile",
        text: "Edit Profile",
        icon: <AiFillEdit/>,
        component: <UserEditProfile/>
    }
]

export const vendorSettingsListItems = [
    {
        text: "Basic Info",
        icon: <TbListDetails/>,
        component: <UpdateBasicInfo/>
    },
    {
        text: "Other Info",
        icon: <BsFillInfoCircleFill/>,
        component: <UpdateOtherInfo/>
    },
    {
        text: "Gallery",
        icon: <BsFillImageFill/>,
        component: <Gallery/>
    },
    {
        text: "Packages",
        icon: <MdLocalOffer/>,
        component: <Packages/>
    }
]

export const services = [
    "Wedding Photography",
    "Wedding Videography",
    "Thank You Card",
    "Wedding Cakes",
    "Couple Cake",
    "Hair Dressing",
    "Wedding Cars",
    "Poruwa Decorations",
    "Couple Chair Decorations",
    "Five Star Hotels",
    "Four Star Hotels",
    "Three Star Hotels",
]

export const bookingStatusTypes = ["Pending", "Accepted", "Rejected"]

export const bookingTypes = ["Custom Booking", "Package Booking"]

export const alertTypes = ["success", "warning", "error"];
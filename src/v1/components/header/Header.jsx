import React, {useState} from "react";
import logo from "../../assets/images/logo.png";
import {BsFillPersonFill} from "react-icons/bs";
import {RiLoginBoxFill} from "react-icons/ri";
import {AiOutlineMenu} from "react-icons/ai";
import {BiLogOut} from "react-icons/bi";
import {Offcanvas} from "react-bootstrap";
import UserCard from "../body/UserCard";
import {guestListItems, vendorListItems} from "../../constants/constant";
import {Link, useHistory} from "react-router-dom";
import Button from "../body/Button";
import {Avatar} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {removeAuth} from "../../store/actions/auth-actions";

const Header = () => {
    const dispatch = useDispatch();
    const {type, user, token} = useSelector(state => state.auth);
    const history = useHistory();
    const [show, setShow] = useState(false);

    const handleLogOut = () => {
        dispatch(removeAuth());
        history.push("/");
    }

    return (
        <div className="navbar d-flex align-items-center justify-content-between px-4 py-3">
            <img src={logo} className="navbar-logo" alt="wedding-planner-logo" onClick={() => history.push("/")}/>
            <div className="d-flex align-items-center">
                <ul className="navbar-list d-flex align-items-center">
                    {
                        type === 1 ?
                            vendorListItems?.map((item,index) =>
                                <li className="navbar-list-item" key={index}>
                                    <Link to={`/${item.link}`}>{item.text}</Link>
                                </li>
                            )
                            :
                            guestListItems?.map((item, index) =>
                                <li className="navbar-list-item" key={index}>
                                    <Link to={`/${item.link}`}>{item.text}</Link>
                                </li>
                            )
                    }
                </ul>
                <div className="navbar-buttons d-flex align-items-center">
                    {
                        token ?
                            <Button
                                text="Log Out"
                                icon={<BiLogOut/>}
                                type="secondary"
                                onClick={handleLogOut}
                            />
                            :
                            <>
                                <Button
                                    text="Register"
                                    icon={<BsFillPersonFill/>}
                                    type="secondary"
                                    onClick={() => history.push("/auth/register")}
                                />
                                <Button
                                    text="Login"
                                    icon={<RiLoginBoxFill/>}
                                    type="tertiary"
                                    onClick={() => history.push("/auth/sign-in")}
                                />
                            </>
                    }
                </div>
                {token &&
                    <Avatar
                        src={type === 0 ? user?.prfImgUrl : type === 1 && user.logoUrl}
                        className="navbar-profile-image"
                    />
                }
                {
                    token ?
                        <Avatar
                            src={type === 0 ? user?.prfImgUrl : type === 1 && user.logoUrl}
                            className="navbar-icon"
                            onClick={() => setShow(true)}
                        />
                        :
                        <AiOutlineMenu className="navbar-icon" onClick={() => setShow(true)}/>
                }
                <Offcanvas className="navbar-drawer" placement="end" show={show} onHide={() => setShow(false)}>
                    <div className="navbar-drawer-top d-flex flex-column align-items-center px-4 py-5">
                        {
                            token ?
                                <UserCard mode="light"/>
                                :
                                <img src={logo} className="navbar-logo" style={{marginBottom: "10px"}}
                                     alt="wedding-planner-logo"/>
                        }
                        <div
                            className="navbar-drawer-top-buttons d-flex align-items-center justify-content-center"
                            style={{marginTop: "15px"}}>
                            {
                                token ?
                                    <Button
                                        text="Log Out"
                                        icon={<BiLogOut/>}
                                        type="secondary"
                                        onClick={()=>{
                                            setShow(false);
                                            handleLogOut();
                                        }}
                                    />
                                    :
                                    <>
                                        <Button
                                            text="Register"
                                            icon={<BsFillPersonFill/>}
                                            type="secondary"
                                            onClick={() => {
                                                setShow(false);
                                                history.push("/auth/register");
                                            }}
                                        />
                                        <Button
                                            text="Login"
                                            icon={<RiLoginBoxFill/>}
                                            type="tertiary"
                                            onClick={() => {
                                                setShow(false);
                                                history.push("/auth/sign-in")
                                            }}
                                        />
                                    </>
                            }
                        </div>
                    </div>
                    <ul className="navbar-drawer-list">
                        {
                            type === 1 ?
                                vendorListItems?.map((item,index) =>
                                    <Link to={`/${item.link}`} onClick={()=>setShow(false)} key={index}>
                                        <li className="navbar-drawer-list-item d-flex align-items-center">
                                            {item?.icon}
                                            <h2 className="navbar-drawer-list-item-text flex-grow-1">{item?.text}</h2>
                                        </li>
                                    </Link>
                                )
                                :
                                guestListItems?.map((item,index) =>
                                    <Link to={`/${item.link}`} onClick={()=>setShow(false)} key={index}>
                                        <li className="navbar-drawer-list-item d-flex align-items-center">
                                            {item?.icon}
                                            <h2 className="navbar-drawer-list-item-text flex-grow-1">{item?.text}</h2>
                                        </li>
                                    </Link>
                                )
                        }
                    </ul>
                </Offcanvas>
            </div>
        </div>
    );
}

export default Header;
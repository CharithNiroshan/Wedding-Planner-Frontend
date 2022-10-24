import React from "react";
import {GoFileDirectory} from "react-icons/go";
import {BiWorld} from "react-icons/bi";
import {BsMusicNoteBeamed} from "react-icons/bs";
import {Link} from "react-router-dom";

const AuthForm = (props) => {
    const {title, texts = [], children} = props;

    return (
        <div className="auth-form d-flex">
            <div className="auth-form-left d-flex align-items-center">
                <div className="auth-form-left-form">
                    <h2 className="auth-form-title">{title}</h2>
                    {children}
                    {
                        texts.includes("login") && <h2 className="auth-form-text mt-4">
                            Already have a Account? <Link to="/auth/sign-in"><span>Login</span></Link>
                        </h2>
                    }
                    {
                        texts.includes("forget") && <h2 className="auth-form-text mt-4">
                            Don't remember password? <Link to="/auth/forget-password"><span>Reset Password</span></Link>
                        </h2>
                    }
                    {texts.length > 1 && <h2 className="auth-form-text">OR</h2>}
                    {
                        texts.includes("register") && <h2 className="auth-form-text">
                            Don't have a account? <Link to="/auth/register"><span>Register</span></Link>
                        </h2>
                    }
                </div>
            </div>
            <div className="auth-form-right flex-grow-1 d-flex align-items-center justify-content-center">
                <div>
                    <div className="d-flex align-items-center justify-content-center mb-5">
                        <GoFileDirectory className="auth-form-right-icon"/>
                        <h2 className="auth-form-right-text">
                            Join and be a part with the Most Exclusive Business Directory in Sri Lanka
                        </h2>
                    </div>
                    <div className="d-flex align-items-center justify-content-center mb-5">
                        <BiWorld className="auth-form-right-icon"/>
                        <h2 className="auth-form-right-text">
                            Showcase your Business profile to the local and international audience both.
                        </h2>
                    </div>
                    <div className="d-flex align-items-center justify-content-center mb-5">
                        <BsMusicNoteBeamed className="auth-form-right-icon"/>
                        <h2 className="auth-form-right-text">
                            Reach more clients and increase your sales easily and swiftly.
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthForm;
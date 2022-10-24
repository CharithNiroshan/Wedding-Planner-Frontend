import React, {useRef, useState} from 'react';
import {AiFillCamera} from "react-icons/ai";
import {MdOutlineImage} from "react-icons/md";
import {BsPersonFill} from "react-icons/bs";
import {Spinner} from "react-bootstrap";
import axios from "axios";
import {configurations} from "../../constants/constant";

const ImageSelector = (props) => {
    const {name, value, onChange, errors, type = "rounded"} = props;
    const [isUploading, setIsUploading] = useState(false);
    const fileInput = useRef(null);

    const onImageSelected = (file) => {
        if(file !== undefined){
            setIsUploading(true);

            const fileData = new FormData();

            fileData.append("file", file);

            axios.post(
                `${configurations.baseUrl}/api/file/upload/single`,
                fileData
            ).then(res => {
                onChange({target: {name: name, value: res?.data?.imgUrl}});
                setIsUploading(false);
            }).catch(err => {
                console.log(err?.response?.data);
                setIsUploading(false);
            });
        }
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <div
                style={{backgroundImage: `url(${value === undefined ? "../../assets/images/no-image.jpg" : value})`}}
                className="image-selector d-flex justify-content-center align-items-center"
                id={type === "rounded" ? "rounded" : "square"}
            >
                <input
                    type="file"
                    accept="image/png,image/jpeg,image/jpg"
                    className="image-selector-input"
                    ref={fileInput}
                    onChange={(e) => onImageSelected(e.target.files[0])}
                />
                {value === undefined && type === "rounded" && <BsPersonFill className="image-selector-empty-icon"/>}
                {value === undefined && type === "square" && <MdOutlineImage className="image-selector-empty-icon"/>}
                {
                    isUploading ?
                        <div className="image-selector-loading d-flex align-items-center justify-content-center">
                            <Spinner animation="border"/>
                        </div>
                        :
                        <div className="image-selector-bottom d-flex justify-content-center">
                            <AiFillCamera className="image-selector-bottom-icon"
                                          onClick={() => fileInput.current.click()}/>
                        </div>
                }
            </div>
            {!value && <p className="image-selector-error">{errors[name]}</p>}
        </div>
    );
}

export default ImageSelector;
import React, {useRef, useState} from 'react';
import IconButton from "./Button";
import {AiFillDelete, AiFillFileAdd} from "react-icons/ai";
import {Form} from "react-bootstrap";
import {Grid} from "@material-ui/core";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";

const Gallery = () => {
    const {user} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const [selected, setSelected] = useState([]);
    const fileInput = useRef(null);

    const handleCheckClick = (item) => {
        let temp = [...selected];
        if (selected.includes(item)) {
            let index = temp.indexOf(item);
            temp.splice(index, 1);
        } else {
            temp.push(item);
        }
        setSelected(temp);
    }

    const handleDelete = () => {
        let gallery = user?.gallery?.filter(item => !selected.includes(item));

        let updates = {gallery: gallery};

        dispatch({
            type: "SET_ISLOADING",
            payload: true,
        })

        handleUpdate(updates);
    }

    const handleAdd = (e) => {
        const fileData = new FormData();

        Array.from(e.target.files).map(file => fileData.append("file", file));

        dispatch({
            type: "SET_ISLOADING",
            payload: true,
        })

        axios.post(
            "http://localhost:4000/api/file/upload/multiple",
            fileData
        ).then(res => {
            console.log(res.data);
        }).catch(err => {
            dispatch({
                type: "SET_ISLOADING",
                payload: false,
            })
            console.log(err?.response?.data);
        });
    }

    const handleUpdate = (updates) => {
        axios.put(
            "http://localhost:4000/api/vendor/update-profile/633d06acd690a98c82782d5e",
            updates
        ).then(res => {
            dispatch({
                type: "SET_USER",
                payload: res.data.data.user
            })

            dispatch({
                type: "SET_ISLOADING",
                payload: false,
            })
        }).catch(err => {
            dispatch({
                type: "SET_ISLOADING",
                payload: false,
            })

            console.log(err.message);
        })
    }

    return (
        <div className="gallery d-flex flex-column">
            <div className="d-flex align-items-end justify-content-between mb-4">
                <p className="gallery-text mb-0">
                    You can have upto 20 images in your gallery.
                </p>
                <div className="d-flex align-items-center">
                    <input
                        className="visually-hidden"
                        type="file"
                        multiple
                        accept="image/png,image/jpeg,image/jpg"
                        ref={fileInput}
                        onChange={(e) => handleAdd(e)}
                    />
                    <IconButton
                        text="Add Images"
                        type="secondary"
                        icon={<AiFillFileAdd/>}
                        onClick={() => fileInput.current.click()}
                    />
                    <IconButton
                        text="Delete Selected"
                        type="warning"
                        icon={<AiFillDelete/>}
                        onClick={handleDelete}
                    />
                </div>
            </div>
            <div className="gallery-bottom flex-grow-1">
                <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="d-flex align-items-center">
                        <IconButton
                            text="Select All"
                            type="text"
                            icon={<AiFillFileAdd/>}
                            onClick={() => setSelected(user?.gallery)}
                        />
                        <IconButton
                            text="Deselect All"
                            type="text"
                            icon={<AiFillDelete/>}
                            onClick={() => setSelected([])}
                        />
                    </div>
                    <p className="gallery-selected-count mb-0">
                        {selected?.length === 0 ? "No" : selected?.length} {selected.length === 1 ? "image" : "images"} selected
                    </p>
                </div>
                <Grid container spacing={2}>
                    {user?.gallery?.map((item, index) =>
                        <Grid item lg={4} md={6} xs={12} key={index}>
                            <div className="d-flex flex-column align-items-center">
                                <div className="gallery-image" style={{backgroundImage: `url(${item})`}}/>
                                <Form.Check
                                    value={item}
                                    checked={selected.includes(item)}
                                    onChange={(e) => handleCheckClick(e.target.value)}
                                />
                            </div>
                        </Grid>
                    )}
                </Grid>
            </div>
        </div>
    );
}

export default Gallery;
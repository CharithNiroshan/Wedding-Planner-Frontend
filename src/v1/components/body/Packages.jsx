import React, {useState} from 'react';
import IconButton from "../body/Button";
import {AiFillDelete, AiFillEdit, AiFillFileAdd} from "react-icons/ai";
import {Table} from "react-bootstrap";
import axios from "axios";
import AddPackage from "../../views/AddPackage";
import {useDispatch, useSelector} from "react-redux";

const Packages = () => {
    const {user} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const [isAdd, setIsAdd] = useState(false);

    const handleDelete = (id) => {
        dispatch({
            type: "SET_ISLOADING",
            payload: true,
        })

        axios.delete(
            `http://localhost:4000/api/vendor/delete-package/${id}`
        ).then(res => {
            dispatch({
                type: "SET_ISLOADING",
                payload: false,
            })

            console.log(res.data);
        }).catch(err => {
            dispatch({
                type: "SET_ISLOADING",
                payload: false,
            })

            console.log(err.message);
        })
    }

    return isAdd ?
        <AddPackage onBack={() => setIsAdd(false)}/> :
        <div className="packages">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="packages-text mb-0">
                    Add the packages to your business profile to attract more customers.
                </h2>
                <IconButton
                    className="mx-0"
                    text="Add Package"
                    icon={<AiFillFileAdd/>}
                    type="secondary"
                    onClick={() => setIsAdd(true)}
                />
            </div>
            <div className="packages-bottom">
                <Table>
                    <thead>
                    <tr>
                        <th/>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Services</th>
                        <th>Image</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        user?.packages?.map(item => (
                            <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <IconButton
                                            className="packages-table-edit-button mx-0"
                                            type="text"
                                            icon={<AiFillEdit/>}
                                            onClick={handleDelete}
                                        />
                                        <IconButton
                                            className="packages-table-delete-button mx-0"
                                            type="text"
                                            icon={<AiFillDelete/>}
                                            onClick={() => handleDelete(item?._id)}
                                        />
                                    </div>
                                </td>
                                <td>
                                    <h2 className="packages-table-title mb-0">{item?.title}</h2>
                                </td>
                                <td>
                                    <p className="packages-table-des mb-0">{item?.des}</p>
                                </td>
                                <td>
                                    <ul className="d-flex flex-column">
                                        {item?.includes?.map((item, index) =>
                                            <li className="packages-table-service" key={index}>
                                                {item}
                                            </li>
                                        )}
                                    </ul>
                                </td>
                                <td>
                                    <div
                                        className="packages-table-image"
                                        style={{backgroundImage: `url(${item?.imgUrl})`}}
                                    />
                                </td>
                                <td>
                                    <p className="packages-table-price mb-0">{`Rs. ${item?.price} /=`}</p>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>
            </div>
        </div>;
}

export default Packages;
import React, {useEffect} from "react";
import IconButton from "../components/body/Button";
import {IoIosAddCircle} from "react-icons/io";
import {useHistory} from "react-router-dom";
import {Avatar, Grid} from "@material-ui/core";
import {Rating} from "@material-ui/lab";
import Chip from "../components/body/Chip";
import {AiFillBank, AiFillCompass, AiFillMail, AiFillPhone} from "react-icons/all";
import DataField from "../components/body/DataField";
import Slider from "../components/body/Slider";
import ReviewCard from "../components/body/ReviewCard";
import PackageCard from "../components/body/PackageCard";
import Title from "../components/body/Title";
import {useDispatch, useSelector} from "react-redux";
import {fetchVendor} from "../services/guest-services";

const BusinessProfile = ({match}) => {
    const {vendor} = useSelector(state => state.vendorDS);
    const {isLoading} = useSelector(state => state.common);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(fetchVendor(match.params.id));
        }

        fetchData();
    }, [dispatch, match.params.id])

    return !isLoading &&
        <div className="business-profile">
            <div
                className="business-profile-top"
                style={{backgroundImage: `url(${vendor?.coverPhotoUrl})`}}
            >
                <div
                    className="business-profile-top-content d-flex flex-wrap justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <Avatar
                            src={vendor?.logoUrl}
                            className="business-profile-top-content-logo"
                        />
                        <div className="d-flex flex-column mx-4">
                            <h1 className="business-profile-top-content-title">{vendor?.title}</h1>
                            {
                                vendor?.rating === null ?
                                    <h3 className="business-profile-top-content-text">Not Rated Yet</h3>
                                    :
                                    <div className="d-flex flex-wrap align-items-center">
                                        <Rating value={vendor?.rating} readOnly/>
                                        <h5 className="business-profile-top-content-rating">{vendor?.rating.toFixed(2)}</h5>
                                        <p className="business-profile-top-content-no-of-reviews">{`( ${vendor?.noOfReviews} ${vendor?.noOfReviews > 1 ? "Reviews" : "Review"} )`} </p>
                                    </div>
                            }
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <IconButton
                            className="mx-2"
                            text="Add Booking"
                            icon={<IoIosAddCircle/>}
                            onClick={() => history.push(`/add-booking?type=0&services=[]`)}
                        />
                        <IconButton
                            className="mx-2"
                            text="Add Review"
                            icon={<IoIosAddCircle/>}
                            onClick={() => history.push("/add-review")}
                        />
                    </div>
                </div>
            </div>
            <div className="business-profile-bottom">
                <Grid container spacing={3} alignItems="stretch">
                    <Grid item xs={12} md={7} lg={7} xl={8}>
                        <div className="business-profile-section">
                            <h2 className="business-profile-section-title">{`About ${vendor?.title}`}</h2>
                            <p className="business-profile-description">{vendor?.des}</p>
                            <Slider>
                                {vendor?.services?.map((item, index) => <Chip key={index} text={item}/>)}
                            </Slider>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={5} lg={5} xl={4}>
                        <div className="business-profile-section">
                            <h2 className="business-profile-section-title">{`Contact ${vendor?.title}`}</h2>
                            <div className="d-flex flex-column">
                                <DataField
                                    icon={<AiFillPhone/>}
                                    label="Contact Number"
                                    text={vendor?.cntNo}
                                />
                                <DataField
                                    icon={<AiFillMail/>}
                                    label="Email"
                                    text={vendor?.email}
                                />
                                <DataField
                                    icon={<AiFillCompass/>}
                                    label="Address"
                                    text={vendor?.address}
                                />
                                <DataField
                                    icon={<AiFillBank/>}
                                    label="District"
                                    text={vendor?.district}
                                />
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div>
                            <Title
                                title={`Gallery (${vendor?.gallery?.length} images)`}
                                description={`Snapshots from ${vendor?.title} previous works`}
                            />
                            <Slider>
                                {vendor?.gallery?.map((item, index) =>
                                    <img src={item} alt="galleryImage" key={index}
                                         className="business-profile-section-gallery-image"/>
                                )}
                            </Slider>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div>
                            <Title
                                title={`Packages (${vendor?.packages?.length} packages)`}
                                description={`Current Offers from ${vendor?.title}`}
                            />
                            <Slider>
                                {vendor?.packages?.map((item, index) =>
                                    <PackageCard {...item} key={index}/>
                                )}
                            </Slider>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div>
                            <Title
                                title={`Reviews (${vendor?.reviews?.length} reviews)`}
                                description={`What ${vendor?.title} customers say`}
                            />
                            <Slider>
                                {vendor?.reviews?.map((item, index) =>
                                    <ReviewCard {...item} key={index}/>
                                )}
                            </Slider>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>;
}

export default BusinessProfile;
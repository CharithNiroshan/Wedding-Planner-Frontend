import React, {useEffect} from 'react';
import SearchBox from "../components/body/SearchBox";
import Title from "../components/body/Title";
import {Grid} from "@material-ui/core";
import CategoryCard from "../components/body/CategoryCard";
import VendorCard from "../components/body/VendorCard";
import {fetchHomeContent} from "../services/guest-services";
import {useDispatch, useSelector} from "react-redux";

const UserHome = () => {
    const {userHomeData} = useSelector(state => state.common);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(fetchHomeContent());
        }
        fetchData();
    }, [dispatch]);

    return (
        <div className="user-home">
            <div className="user-home-search-box">
                <SearchBox/>
            </div>
            <div className="user-home-bottom">
                <Title
                    title="Most Viewed Categories Among Our Users"
                    description="Explore the profiles for most viewed categories among our users."
                    sub_text="Popular Categories"
                />
                <Grid container justifyContent="center">
                    {userHomeData?.categories?.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
                            <CategoryCard
                                {...item}
                                type="category"
                            />
                        </Grid>
                    ))}
                </Grid>
            </div>
            <div className="user-home-section">
                <Title
                    title="Most Rated Vendors"
                    description="Explore the favourite vendors of our users"
                    sub_text="Popular Vendors"
                />
                <Grid className="user-home-section-content" container justifyContent="center" wrap="wrap">
                    {userHomeData?.businessProfiles?.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
                            <VendorCard {...item} />
                        </Grid>
                    ))}
                </Grid>
            </div>
            <div className="user-home-bottom">
                <Title
                    title="Popular Places Around Sri Lanka"
                    description="Explore any vendors in your area."
                    sub_text="Popular Places"
                />
                <Grid container justifyContent="center">
                    {userHomeData?.districts?.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
                            <CategoryCard
                                {...item}
                                type="district"
                            />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
}

export default UserHome;
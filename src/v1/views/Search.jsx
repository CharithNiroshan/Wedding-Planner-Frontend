import React, {useEffect, useState} from "react";
import {Grid, TextField} from "@material-ui/core";
import {Form} from "react-bootstrap";
import {Pagination as MuiPagination} from "@material-ui/lab";
import VendorCard from "../components/body/VendorCard";
import NoResult from "../components/body/NoResult";
import {BsArrow90DegRight} from "react-icons/bs";
import IconButton from "../components/body/Button";
import CheckboxGroup from "../components/body/ChechboxGroup";
import {useLocation} from "react-router-dom";
import {searchQueryStringtoObject} from "../utils/searchQueryStringtoObject";
import {useDispatch, useSelector} from "react-redux";
import {fetchVendors} from "../services/guest-services";

function Search() {
    const [filters, setFilters] = useState({});
    const {search} = useLocation();
    const dispatch = useDispatch();
    const {vendors} = useSelector(state => state.vendorDS);
    const {categories, districts} = useSelector(state => state.common);

    useEffect(() => {
        setFilters(searchQueryStringtoObject(search));
    }, [search])

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(fetchVendors(filters));
        }

        if (Object.keys(filters).length !== 0) {
            fetchData();
        }
    }, [dispatch, filters])

    const onReset = () => {
        setFilters({
            query: "",
            districts: [],
            categories: [],
            sortByRating: false,
            sortByNoOfReviews: false,
        });
    }

    return (
        <div className="search">
            <div className="search-top d-flex align-items-center">
                <h2 className="search-top-text">
                    We found
                    <span className="search-top-no-of-results">
                            {vendors?.length} listings
                    </span>
                </h2>
                <IconButton
                    className="mx-0 search-top-button"
                    text="Reset"
                    icon={<BsArrow90DegRight/>}
                    onClick={onReset}
                />
            </div>
            <div className="search-bottom d-flex">
                <div className="search-bottom-left">
                    <TextField
                        variant="standard"
                        label="What are you looking for"
                        value={filters?.query}
                        onChange={(e) =>
                            setFilters({...filters, query: e.target.value})
                        }
                        className="search-box-input"
                        id="search-bottom-left-text-input"
                    />
                    <CheckboxGroup
                        label="Categories"
                        name="categories"
                        items={categories}
                        values={filters}
                        setValues={setFilters}
                    />
                    <CheckboxGroup
                        label="Districts"
                        name="districts"
                        items={districts}
                        values={filters}
                        setValues={setFilters}
                    />
                    <Form.Group className="d-flex mb-1">
                        <Form.Label>Sort by rating</Form.Label>
                        <Form.Check
                            type="switch"
                            checked={filters?.sortByRating}
                            onChange={(e) => {
                                setFilters({...filters, sortByRating: e.target.checked})
                            }}
                        />
                    </Form.Group>
                    <Form.Group className="d-flex">
                        <Form.Label>Sort by no of reviews</Form.Label>
                        <Form.Check
                            type="switch"
                            checked={filters?.sortByNoOfReviews}
                            onChange={(e) => {
                                setFilters({...filters, sortByNoOfReviews: e.target.checked})
                            }}
                        />
                    </Form.Group>
                </div>
                <div className="search-bottom-right flex-grow-1">
                    {vendors?.length === 0 ? (
                        <NoResult text="No vendors found matches your need."/>
                    ) : (
                        <Grid container spacing={1}>
                            {vendors?.map((result) => (
                                <Grid item xs={12} md={6} lg={4} xl={3}>
                                    <VendorCard {...result} />
                                </Grid>
                            ))}
                        </Grid>
                    )}
                    {vendors?.length > 10 && (
                        <div className="d-flex justify-content-center search-bottom-right-pagination">
                            <MuiPagination
                                count={100 / 10}
                                variant="outlined"
                                shape="rounded"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Search;

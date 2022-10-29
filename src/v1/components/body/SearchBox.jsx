import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {
    FormControl, Grid, InputLabel, MenuItem, Select, TextField,
} from "@material-ui/core";
import {Search} from "@material-ui/icons";
import {useSelector} from "react-redux";
import IconButton from "./Button";

function SearchBox() {
    const categories = useSelector(state => state.common.categories);
    const districts = useSelector(state => state.common.districts);
    const history = useHistory();

    const [searchValues, setSearchValues] = useState({
        query: "",
        district: "",
        category: "",
    });

    const handleSearch = () => {
        if (searchValues.query.length !== 0 || searchValues.district !== "" || searchValues.category !== "") {
            history.push(
                `/search?query=${searchValues?.query}&categories=[${searchValues?.category}]&districts=[${searchValues?.district}]&sortByRating=false&sortByNoOfReviews=false`
            );
        }
    };

    return (
        <Grid container spacing={2} alignItems="center" className="search-box">
            <Grid item xs={12} md={12} lg={4}>
                <TextField
                    variant="standard"
                    label="What are you looking for"
                    value={searchValues.query}
                    onChange={(e) =>
                        setSearchValues({...searchValues, query: e.target.value})
                    }
                    className="search-box-input"
                />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <FormControl variant="standard" className="search-box-select">
                    <InputLabel>Category</InputLabel>
                    <Select
                        value={searchValues.category}
                        onChange={(e) =>
                            setSearchValues({...searchValues, category: [e.target.value]})
                        }
                    >
                        {categories?.map((item, index) => (
                            <MenuItem value={item.title} key={index}>{item.title}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <FormControl variant="standard" className="search-box-select">
                    <InputLabel>District</InputLabel>
                    <Select
                        value={searchValues.district}
                        onChange={(e) =>
                            setSearchValues({...searchValues, district: [e.target.value]})
                        }
                    >
                        {districts?.map((item, index) => (
                            <MenuItem value={item.title} key={index}>{item.title}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} md={12} lg={2}>
                <IconButton
                    type={searchValues.query.length !== 0 || searchValues.district !== "" || searchValues.category !== "" ? "default" : "disabled"}
                    className="mx-0"
                    text="Search Now"
                    icon={<Search/>}
                    onClick={handleSearch}
                />
            </Grid>
        </Grid>
    );
}

export default SearchBox;

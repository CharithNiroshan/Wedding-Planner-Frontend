import React from "react";
import {useHistory} from "react-router-dom";

const CategoryCard = (props) => {
    const {title, imgUrl, noOfProfiles, type} = props;
    const history = useHistory();

    return (
        <div
            className="category-card"
            style={{background: `url(${imgUrl}`}}
            onClick={() => history.push(`/search?query=&categories=[${type === "category" ? title : ""}]&districts=[${type === "district" ? title : ""}]&sortByRating=false&sortByNoOfReviews=false`)}
        >
            <div className="category-card-content">
                <div className="category-card-content-container">
                    <h1 className="category-card-content-title">
                        {title}
                        <span className="category-card-content-sub-title"> {noOfProfiles} Profiles</span>
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default CategoryCard;

import { CDN_URL } from "../utils/constants";


const ResturantCard = (props) => {
    const resData = props?.resData.info
    const { name, cuisines, avgRating, cloudinaryImageId } = resData;
    return (
        <div className="res-card">
            <img
                alt="resturant-img"
                className="res-img"
                src={CDN_URL+ cloudinaryImageId}
            ></img>
            <div className="res-info">
                <h3>{name}</h3>
                <h5>{cuisines.join(", ")}</h5>
                <div id="rating">
                    <h6>{avgRating} Stars</h6>
                    <h6>{resData.sla.deliveryTime} minutes</h6>
                </div>
            </div>
        </div>
    );
};

export default ResturantCard
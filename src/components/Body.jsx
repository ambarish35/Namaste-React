import ResturantCard from "./RestaurantCard";
import resObj from "../utils/mockData"
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"

let restaurantList;


const Body = () => {

    //whenever a state variable changes react starts a new reconciliation cycle(re-renders the whole component)

    const [listOfRes, setListOfRes] = useState([])
    const [searchText, setSearchText] = useState("")
    console.log("Body Rendered")

    let ratingFilter = 4;

    const handleRatingChange = (event) => {
        // Update the ratingFilter value when the select value changes
        ratingFilter = (parseFloat(event.target.value));
    };



    const clickHandler = () => {
        let filteredList = restaurantList.filter((res) => res?.info?.avgRating > ratingFilter)
        setListOfRes(filteredList)
    }

    const dataFetcher = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        restaurantList = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setListOfRes(restaurantList)
    }


    useEffect(() => { dataFetcher() }, [])



    return (listOfRes.length === 0) ? (<div className="container">
        <div className="res-container">
            <Shimmer />
        </div>
    </div>) : (
        <div className="container">
            <div className="filters">
                <button className="filter-btn" onClick={clickHandler}>Top Rated Restaurants</button>
                <select name="" id="" onChange={handleRatingChange}>
                    <option>
                        4.1
                    </option>
                    <option>
                        4.3
                    </option>
                    <option>
                        4.5
                    </option>
                </select>
                <div className="search">
                    <input type="text" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }} />
                    <button onClick={() => {
                        const filteredRestaurants = restaurantList.filter(
                            (res) => res?.info?.name.toLowerCase().includes(searchText.toLowerCase()))
                        setListOfRes(filteredRestaurants)
                    }}>Search</button>
                </div>
            </div>
            <div className="res-container">
                {listOfRes.map(resturant => <ResturantCard key={resturant?.info?.id} resData={resturant} />)}
            </div>
        </div>
    );
};

export default Body
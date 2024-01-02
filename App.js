import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => object => HTML
const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Namaste React 🚀"
);

//JSX - It's not HTML inside JS, it's has HTML or XML like syntax. Babel transpiles JSX into React code

const jsxHeading = <h1 id="heading">Namaste React using JSX 🚀</h1>; //Babel transpiles this code and make it React.createElement(...), Babel is managed by Parcel here
//Checkout Babel website to see the magic. If we write jsx in multiple line then use ()
// JSX => React.createElement => object => HTML

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    alt="logo"
                    className="logo"
                    src="https://previews.123rf.com/images/lunarflox/lunarflox1903/lunarflox190300002/118507068-food-finder-app-logo-design-vector-template.jpg"
                ></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const resObj = [
    {
        "info": {
            "id": "431751",
            "name": "Adda 24",
            "cloudinaryImageId": "a4z8z6jqealfmzlfwmeu",
            "locality": "M.K. Road",
            "areaName": "Vhabani More[Kanirmore]",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Chinese",
                "Beverages",
                "Italian",
                "Burgers",
                "Snacks"
            ],
            "avgRating": 4.3,
            "parentId": "261707",
            "avgRatingString": "4.3",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 21,
                "lastMileTravel": 0.5,
                "serviceability": "SERVICEABLE",
                "slaString": "21 mins",
                "lastMileTravelString": "0.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-02 23:01:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹120 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/adda-24-m-k-road-vhabani-more-kanirmore-malda-431751",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "256705",
            "name": "7th Heaven Restaurant",
            "cloudinaryImageId": "jj1djrti0dm9onsyw7mi",
            "locality": "Chittaranjan Pally",
            "areaName": "Mirchak",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Bakery",
                "Snacks"
            ],
            "avgRating": 4.2,
            "veg": true,
            "parentId": "24169",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 15,
                "lastMileTravel": 0.1,
                "serviceability": "SERVICEABLE",
                "slaString": "15 mins",
                "lastMileTravelString": "0.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-02 22:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹120 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/7th-heaven-restaurant-chittaranjan-pally-mirchak-malda-256705",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "187603",
            "name": "G K Restaurant",
            "cloudinaryImageId": "wqkohk3opbntexzxguoa",
            "locality": "Station Road",
            "areaName": "Jhajhalia",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Chinese",
                "Indian",
                "Tandoor"
            ],
            "avgRating": 4,
            "parentId": "387497",
            "avgRatingString": "4.0",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 0.9,
                "serviceability": "SERVICEABLE",
                "slaString": "36 mins",
                "lastMileTravelString": "0.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-02 23:02:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹120 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/g-k-restaurant-station-road-jhajhalia-malda-187603",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "693516",
            "name": "Ahare Bangali",
            "cloudinaryImageId": "313774ada0dc4f878df143b7d7a095f0",
            "locality": "Khairati Para",
            "areaName": "Mirchak",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "North Indian",
                "Thalis"
            ],
            "avgRating": 4.1,
            "parentId": "363692",
            "avgRatingString": "4.1",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 1.2,
                "serviceability": "SERVICEABLE",
                "slaString": "24 mins",
                "lastMileTravelString": "1.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-02 23:45:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹120 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/ahare-bangali-khairati-para-mirchak-malda-693516",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "354721",
            "name": "Super Special Star Haji Biryani",
            "cloudinaryImageId": "rjsyrp9f1wrfgsrdao9z",
            "locality": "Atul Market",
            "areaName": "Pabitra Sen Gallery",
            "costForTwo": "₹100 for two",
            "cuisines": [
                "North Indian",
                "Indian"
            ],
            "avgRating": 4.2,
            "parentId": "197484",
            "avgRatingString": "4.2",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 15,
                "lastMileTravel": 1.7,
                "serviceability": "SERVICEABLE",
                "slaString": "15 mins",
                "lastMileTravelString": "1.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-02 23:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹120 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/super-special-star-haji-biryani-atul-market-pabitra-sen-gallery-malda-354721",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "485286",
            "name": "Babumosai Catering",
            "cloudinaryImageId": "armuaeoed9r8knsqjoi7",
            "locality": "Vivekananda Pally",
            "areaName": "Mirchak",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "Indian",
                "Thalis"
            ],
            "avgRating": 4.3,
            "parentId": "291291",
            "avgRatingString": "4.3",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 0.7,
                "serviceability": "SERVICEABLE",
                "slaString": "19 mins",
                "lastMileTravelString": "0.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-02 16:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹120 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/babumosai-catering-vivekananda-pally-mirchak-malda-485286",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "187615",
            "name": "Mahal Restaurant & Hotel",
            "cloudinaryImageId": "zmvztgngfk4bwddyakib",
            "locality": "KJ Sanyal Road",
            "areaName": "Mirchak",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Chinese",
                "Tandoor",
                "Indian"
            ],
            "avgRating": 4.1,
            "parentId": "129679",
            "avgRatingString": "4.1",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 2,
                "serviceability": "SERVICEABLE",
                "slaString": "28 mins",
                "lastMileTravelString": "2.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-03 00:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹120 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/mahal-restaurant-and-hotel-kj-sanyal-road-mirchak-malda-187615",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "387368",
            "name": "Ogo Bangali",
            "cloudinaryImageId": "kxvzfpz1s3q7v10a2gge",
            "locality": "Govt Colony",
            "areaName": "Bidhan Pally",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Indian"
            ],
            "avgRating": 4,
            "parentId": "252030",
            "avgRatingString": "4.0",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 2,
                "serviceability": "SERVICEABLE",
                "slaString": "27 mins",
                "lastMileTravelString": "2.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-03 00:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹120 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/ogo-bangali-govt-colony-bidhan-pally-malda-387368",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "187604",
            "name": "Mouchak",
            "cloudinaryImageId": "wykqqbjh8f8cx3gdlbzw",
            "locality": "Station Road",
            "areaName": "Jhajhalia",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Chinese",
                "Indian",
                "Tandoor"
            ],
            "avgRating": 4.1,
            "parentId": "139595",
            "avgRatingString": "4.1",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 0.9,
                "serviceability": "SERVICEABLE",
                "slaString": "34 mins",
                "lastMileTravelString": "0.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-02 23:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹120 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/mouchak-station-road-jhajhalia-malda-187604",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "342462",
            "name": "KFC",
            "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
            "locality": "English Bazar Road",
            "areaName": "Mirchak",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Biryani",
                "American",
                "Snacks",
                "Fast Food"
            ],
            "avgRating": 4.2,
            "parentId": "547",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 13,
                "lastMileTravel": 0.4,
                "serviceability": "SERVICEABLE",
                "slaString": "13 mins",
                "lastMileTravelString": "0.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-02 23:59:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹120 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/kfc-english-bazar-road-mirchak-malda-342462",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "296650",
            "name": "Domino's Pizza",
            "cloudinaryImageId": "ls3vb7ogknorgib8jmiv",
            "locality": "Mk Road",
            "areaName": "Malda Locality",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pizzas",
                "Italian",
                "Pastas",
                "Desserts"
            ],
            "avgRating": 4.4,
            "parentId": "2456",
            "avgRatingString": "4.4",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 25,
                "serviceability": "SERVICEABLE",
                "slaString": "25 mins",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-02 23:57:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹120 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/dominos-pizza-mk-road-malda-locality-malda-296650",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "728361",
            "name": "Wow! China",
            "cloudinaryImageId": "7d46fc6e6aeda7e135d17342a6c61eb8",
            "locality": "ENGLISH BAZAR MUNICIPALITY",
            "areaName": "Manaskamana Road,ENGLISH BAZAR",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Tibetan",
                "Chinese",
                "Asian",
                "Snacks",
                "Continental",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.2,
            "parentId": "226836",
            "avgRatingString": "4.2",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 20,
                "lastMileTravel": 0.5,
                "serviceability": "SERVICEABLE",
                "slaString": "20 mins",
                "lastMileTravelString": "0.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-02 23:59:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹120 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/wow-china-english-bazar-municipality-manaskamana-road-english-bazar-malda-728361",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "547456",
            "name": "The Old Gallery Restro Cafe",
            "cloudinaryImageId": "vrtp6lzd2xpvcntuij5k",
            "locality": "English Bazar",
            "areaName": "Mirchak",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "North Indian",
                "Chinese",
                "Biryani"
            ],
            "avgRating": 4.3,
            "parentId": "328938",
            "avgRatingString": "4.3",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 1.2,
                "serviceability": "SERVICEABLE",
                "slaString": "24 mins",
                "lastMileTravelString": "1.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-02 23:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹120 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/the-old-gallery-restro-cafe-english-bazar-mirchak-malda-547456",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "219837",
            "name": "Rajani Gandha- By Continental Lodge",
            "cloudinaryImageId": "xjxumbxy4rnxfwhzqqoo",
            "areaName": "Malda Locality",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "North Indian",
                "Chinese",
                "Biryani",
                "Kebabs"
            ],
            "avgRating": 4.3,
            "parentId": "165281",
            "avgRatingString": "4.3",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 2,
                "serviceability": "SERVICEABLE",
                "slaString": "28 mins",
                "lastMileTravelString": "2.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-02 22:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹120 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/rajani-gandha-by-continental-lodge-malda-locality-malda-219837",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "431742",
            "name": "Haji Biryani",
            "cloudinaryImageId": "kopcdpftkysdhbxt67qp",
            "locality": "Rathbari",
            "areaName": "Mirchak",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Biryani",
                "Indian"
            ],
            "avgRating": 4,
            "parentId": "21818",
            "avgRatingString": "4.0",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 13,
                "lastMileTravel": 0.9,
                "serviceability": "SERVICEABLE",
                "slaString": "13 mins",
                "lastMileTravelString": "0.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-02 22:30:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹120 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/haji-biryani-rathbari-mirchak-malda-431742",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "426916",
            "name": "Mr & Mrs Idly",
            "cloudinaryImageId": "me8wfkfc34hycrgu8j72",
            "locality": "Manaskamana Road",
            "areaName": "Manaskamana Rd",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "Indian",
                "South Indian",
                "Chinese",
                "Fast Food"
            ],
            "avgRating": 4.2,
            "veg": true,
            "parentId": "388168",
            "avgRatingString": "4.2",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 15,
                "lastMileTravel": 0.2,
                "serviceability": "SERVICEABLE",
                "slaString": "15 mins",
                "lastMileTravelString": "0.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-02 22:30:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹120 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/mr-and-mrs-idly-manaskamana-road-manaskamana-rd-malda-426916",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "524358",
            "name": "Gourmet Ice Cream Cakes by Baskin Robbins",
            "cloudinaryImageId": "d679c532ca07a6f3fd6d89d603861412",
            "areaName": "ENGLISH BAZAR",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Desserts",
                "Ice Cream",
                "Bakery"
            ],
            "avgRating": 4.8,
            "veg": true,
            "parentId": "21932",
            "avgRatingString": "4.8",
            "totalRatingsString": "20+",
            "sla": {
                "deliveryTime": 11,
                "lastMileTravel": 0.1,
                "serviceability": "SERVICEABLE",
                "slaString": "11 mins",
                "lastMileTravelString": "0.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-03 00:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹120 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/gourmet-ice-cream-cakes-by-baskin-robbins-english-bazar-malda-524358",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "334232",
            "name": "Pizza Hut",
            "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
            "locality": "Manashkamana Road",
            "areaName": "Mirchak",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Fast Food",
                "Pizzas"
            ],
            "avgRating": 4.3,
            "parentId": "721",
            "avgRatingString": "4.3",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 17,
                "lastMileTravel": 0.4,
                "serviceability": "SERVICEABLE",
                "slaString": "17 mins",
                "lastMileTravelString": "0.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-03 00:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹179"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/pizza-hut-manashkamana-road-mirchak-malda-334232",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "573206",
            "name": "Bawarchi",
            "cloudinaryImageId": "lm8fnqlnayiwvt8whk4x",
            "locality": "Subhas Pally",
            "areaName": "Mirchak",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Chinese"
            ],
            "avgRating": 4.2,
            "parentId": "100",
            "avgRatingString": "4.2",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 0.5,
                "serviceability": "SERVICEABLE",
                "slaString": "19 mins",
                "lastMileTravelString": "0.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-02 23:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹120 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/bawarchi-subhas-pally-mirchak-malda-573206",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "374336",
            "name": "Baskin Robbins - Ice Cream Desserts",
            "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
            "locality": "Vivekananda Pally",
            "areaName": "Mirchak",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Desserts",
                "Ice Cream"
            ],
            "avgRating": 4.6,
            "veg": true,
            "parentId": "5588",
            "avgRatingString": "4.6",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 11,
                "lastMileTravel": 0.1,
                "serviceability": "SERVICEABLE",
                "slaString": "11 mins",
                "lastMileTravelString": "0.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-02 22:30:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹120 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-vivekananda-pally-mirchak-malda-374336",
            "type": "WEBLINK"
        }
    }
]



const ResturantCard = (props) => {
    const resData = props?.resData.info
    console.log(resData)
    const { name, cuisines, avgRating, cloudinaryImageId } = resData;
    return (
        <div className="res-card">
            <img
                alt="resturant-img"
                className="res-img"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}
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

const Body = () => {
    return (
        <div className="container">
            <div className="search">Search</div>
            <div className="res-container">
                {resObj.map(resturant => <ResturantCard resData={resturant} />)}
            </div>
        </div>
    );
};

const App = () => {
    return (
        <>
        <Header />
        <Body />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

//Lecture 1 & 2

// {const heading = React.createElement("h1", {id: "heading"}, "Hello World from React!")
// console.log(heading) //createElement creates an element, which has type : "h1", it has props:{ id: : "heading", children: "Hello World from React!"}
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);}

{
    /* <div id= "parent">
      <div id="child1">
          <h1>I'm h1 tag</h1>
          <h2>I'm h2 tag</h2>
      </div>
      <div id="child2">
          <h1>I'm h1 tag</h1>
          <h2>I'm h2 tag</h2>
      </div>
  </div> */
}

// const parent = React.createElement("div", {id: "parent"}, [
//     React.createElement("div", {id: "child1"}, [
//         React.createElement("h1",{},"I'm an h1 tag"),
//         React.createElement("h2",{},"I'm an h2 tag")
//     ]),
//     React.createElement("div", {id: "child2"}, [
//         React.createElement("h1",{},"I'm an h1 tag"),
//         React.createElement("h2",{},"I'm an h2 tag")
//     ])
// ])

// root.render(parent); // If anything is there in div root, that will be replaced

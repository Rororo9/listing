import React from "react";
import Price from "./Price";
import Quantity from "./Quantity";
import Title from "./Title";

const Listing = ({ items }) => {
    return (
        <div className="item-list">
            {items.map((item) => (
                <div className="item" key={item.listing_id}>
                    <div className="item-image" key={item.listing_id}>
                        <a href={item.url}>
                            <img src={item.MainImage.url_570xN} alt="img" />
                        </a>
                    </div>
                    <div className="item-details">
                        <p className="item-title">
                            <Title title={item.title} />
                        </p>
                        <p className="item-price">
                            <Price price={item.price} currency_code={item.currency_code} />
                        </p>
                        <Quantity quantity={item.quantity} />
                    </div>
                </div>
            ))}
        </div>
    );
}

Listing.defaultProps = {
    items: []
};

export default Listing;
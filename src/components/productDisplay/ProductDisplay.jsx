import React from 'react'
import "./ProductDisplay.css"
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"

export const ProductDisplay = (props) => {
    const { product } = props;
    return (
        <div className="productDisplay">
            <div className="productDisplay-left">
                <div className="productDisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productDisplay-img">
                    <img className="productDisplay-main-img" src={product.image} alt="" />
                </div>
            </div>
            <div className="productDisplay-right">
                <h1>{product.name}</h1>
                <div className="productDisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productDisplay-right-prices">
                    <div className="productDisplay-right-price-old">${product.old_price}</div>
                    <div className="productDisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productDisplay-right-description">
                    A lightWeight ,usually knitted pullover shirt ,close-fitting and
                    with a round neckline and short sleeves ,worn as under
                    shirt or outer garment
                </div>
                <div className="productDisplay-right-size">
                    <h1>Select size</h1>
                    <div className="productDisplay-right-size">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button >ADD TO CART</button>
                <p className="productDisplay-right-category"><span>Category:</span>Women ,T-shirt , Crop Top</p>
                <p className="productDisplay-right-category"><span>Tags:</span>Modern , Latest</p>
            </div>
        </div>
    )
}

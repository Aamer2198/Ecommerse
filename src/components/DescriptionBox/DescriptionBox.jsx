import React from 'react'
import "./DescriptionBox.css"

export const DescriptionBox = () => {
    return (
        <div className="descriptionBox">
            <div className="descriptionBox-navigator">
                <div className="descriptionBox-nav-box">Description</div>
                <div className="descriptionBox-nav-box fade">Reviews(12)</div>
            </div>
            <div className="descriptionBox-description">
                <p>An E-commerce website is your digital storefront on the internet. It facilitates the transaction between a buyer and seller. It is the virtual space where you showcase products, and online customers make selections.</p>
            </div>
        </div>
    )
}

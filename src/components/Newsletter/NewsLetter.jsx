import React from 'react'
import "./newsLetter.css"

export const NewsLetter = () => {
    return (
        <div className="newsletter">
            <h1>Get Exclusive offers in Your Email</h1>
            <p>Subscribe to our newsletter and stay Connected</p>
            <div>
                <input
                    type="email"
                    placeholder='Your Email id '
                />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

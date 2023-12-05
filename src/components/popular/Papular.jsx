import React from 'react'
import "./papular.css"
import data_product from "../Assets/data"
import Item from "../item/Item"
export const Papular = () => {
    return (
        <div className='papular'>
            <h1>PAPULAR IN WOMEN</h1>
            <hr />
            <div className="papular-item">
                {
                    data_product.map((item, i) => {
                        return <Item
                            key={i}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price} />
                    })
                }
            </div>
        </div>
    )
}

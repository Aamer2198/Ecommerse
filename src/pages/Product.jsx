import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from "react-router-dom"
import { Breadcrum } from '../components/BreadCrums/Breadcrum'
import { ProductDisplay } from '../components/productDisplay/ProductDisplay'
import { DescriptionBox } from '../components/DescriptionBox/DescriptionBox'

export const Product = () => {
    const { all_product } = useContext(ShopContext)
    const { productId } = useParams()
    const product = all_product.find((e) => e.id === Number(productId))
    return (
        <div>
            <Breadcrum product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox />
        </div>
    )
}

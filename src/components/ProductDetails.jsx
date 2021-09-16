import React from 'react'

import '../assets/styles/components/ProductDetails.scss'

const ProductDetails = (props) => {

    return (
        <div className="row">
            <div className="col">
                <div className="ProductDetails z-depth-2">
                    <h5>Characteristics</h5>
                    <p>{ props.description }</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
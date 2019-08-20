import React from 'react';
import Stars from "./Stars";

const Product = ({ product, apiUrl,comments }) => {
            
    
    console.log(comments+"comment")
    console.log(product+"produc")


    return (
        <div>
            <h1>{product.title}</h1>
            <div>
                <img src={`${apiUrl}static/${product.img}`} alt="Here was product img" />
            </div>
            <div>
                <h3>Product Description</h3>
                <p>{product.text}</p>
            </div>
            <div>
            <Stars />
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>Click</button>
            <div className='row'>
                <h3>Reviews</h3>
                <ul>
                    <li>{comments.text}</li>
                </ul>
            </div>
            </div>
        </div>
    )

}

export default Product;
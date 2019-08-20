import React from 'react';
import Stars from "./Stars";

const Product = ({ product, apiUrl, comments }) => {


    console.log(comments + "comment")
    console.log(product + "produc")


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
                <textarea className="" id="" cols="30" rows="10"></textarea>
                <button>Click</button>
                <div className='row'>
                    <h3>Reviews</h3>
                    <ul className="review-list list-group">
                    {

                        comments.map(el => {
                            return (
                                <li className="list-group-item" key={el.id}>
                                    <p>{el.created_by.username} at {el.created_at}</p>
                                    <p>Rate:{el.rate}</p>
                                    <span>{el.text}</span>
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default Product;
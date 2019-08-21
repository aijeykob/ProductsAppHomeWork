import React, { Fragment, Component } from "react";
import Loda from 'lodash'
import Product from "./Product";
import axios from 'axios';
import Registration from "./Registration";

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            selectedProduct: null,
            apiUrl: "http://smktesting.herokuapp.com/",
            comments: []
        }
    }
    componentDidMount() {
        axios.get(this.state.apiUrl + 'api/products/')
            .then(res => {
                this.setState({
                    ...this.state,
                    products: res.data
                })
            })

    }


menuClickProduct(id) {
    axios.get(this.state.apiUrl + 'api/reviews/'+id)
    .then(res => {
        console.log(res.data)
        this.setState({
            ...this.state,
            comments: res.data

        })
    }

    )
    const selectedProduct = Loda.findLast(this.state.products, el => el.id == id)
    
    this.setState({
        ...this.state,
        selectedProduct: selectedProduct,
        
    })
    
}

render() {
    const { products, selectedProduct, apiUrl, comments } = this.state;
    return (
        <Fragment>
            <Registration />
            <nav>
                <ul>
                    {
                        products.map(el => {
                            return (
                                <li key={el.id}
                                    onClick={() => { this.menuClickProduct(el.id) }}
                                >{el.title}</li>
                            )
                        })

                    }

                </ul>
            </nav>
            {
                selectedProduct ? <Product product={selectedProduct} apiUrl={apiUrl} comments={comments} /> : ''

            }
        </Fragment>

    )

}
}

export default Page;
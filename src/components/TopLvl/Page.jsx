import React, { Fragment, Component } from "react";
import Loda from 'lodash'
import Product from "./Product";
import axios from 'axios';

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            selectedProduct: null,
            apiUrl: "http://smktesting.herokuapp.com/"
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
        const selectedProduct = Loda.findLast(this.state.products, el => el.id == id)
        this.setState({
            ...this.state,
            selectedProduct: selectedProduct
        })
    }

    render() {
        const { products, selectedProduct, apiUrl } = this.state;
        return (
            <Fragment>
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
                    selectedProduct ? <Product product={selectedProduct} apiUrl={apiUrl} /> : ''

                }
            </Fragment>
        )

    }
}

export default Page;
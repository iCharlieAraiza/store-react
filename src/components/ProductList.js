import React,{Component} from 'react'
import Product from './Product'

class ProductList extends Component{
    render(){
        return(
            <div>
                <h3>This one is the product list</h3>
                <Product></Product>
            </div>
        )
    }
}

export default ProductList;
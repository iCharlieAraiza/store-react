import React,{Component} from 'react'
import Product from './Product'
import Title from './Title'
import {storeProducts} from '../data'

class ProductList extends Component{
    state = {
        products:[]
    }

    componentDidMount(){
        this.setState(()=>{
            return {products:storeProducts}
        })
    }

    render(){
        console.log(this.state.products);

        return(
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                    
                    <Title name="our" title="products"/>
                        <div className="row">
                            <Product></Product>
                        </div>
                    
                    </div>
                </div>
            </React.Fragment>   
        )

    }
}

export default ProductList;
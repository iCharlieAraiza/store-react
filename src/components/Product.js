import React, {Component} from 'react'
//import Consumer from '../context'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

class Product extends Component{
    
    render(){
        const { title,img, price, inCart} = this.props.product;

        return (
                <div className="col-9 mx-auto col-md-6 col-lg-3 my-3 product-wrapper">
                    <div className="card">
                        <div className="img-container p-5" onClick={()=>console.log('You clicked')}>
                    
                    <Link to="/details">
                        <img src={img} alt="product" className="card-img-top"/>
                    </Link>
                    <button className="cart-btn" disabled={inCart ? true : false} onClick={()=>{console.log('Holo')}}>                   
                        {inCart? (<p className="text-capitalize mb-0" disabled> in cart</p>): (<i className="fas fa-cart-plus"></i>)}
                    </button>
                    </div>

                        <div className="card-footer d-flex justify-content-between">
                            <p className="align-self-center mb-0">{title}</p>
                            <h5 className="text-blue font-italic mb-0">
                                <span className="mr-1">$</span>{price}
                            </h5>
                        </div>

                    </div>
                </div>
            )
    }
}

const ProductWrapper = styled.div

export default Product;


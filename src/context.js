import React, {Component} from 'react'
import {storeProducts, detailProduct} from './data';

const MyContext = React.createContext();

const Consumer = MyContext.Consumer;


class ProductProvider extends Component{
    
    state={
        products:storeProducts,
        detailProduct:detailProduct,
    }

    handleDetail(){
        console.log('This is the handle detail')
    }

    addToCart = ()=>{
        console.log('You just added to cart');
    }

    render(){

        return (<MyContext.Provider value={{...this.state,
                                            handleDetail: this.handleDetail,
                                            addToCart:this.addToCart}}>
            {this.props.children}
        </MyContext.Provider>)
        
    }

}

export default Consumer;
export {ProductProvider};
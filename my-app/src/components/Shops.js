import React, { Component } from 'react'
import AddToCart from '../components/AddToCart';
import Footer from '../components/Footer';
import data from '../mockData.json'

class Shops extends Component {
    constructor(props) {
        super(props)
        this.state = {
            initialCount: 0,
            count: 0,
            productData: data
        }
    }
    handleAddToCart = (i) => {
        const newData = this.state.productData.map((data, index) => {
            if (data.Quantity == 0 && i == index) {
                const newItem = {
                    ...data,
                    Quantity: data.Quantity + 1
                }
                return newItem;
            }
            return data;
        })
        this.setState({
            productData: newData
        });
    };
    handleIncreaseItem = (i) => {
        const newData = this.state.productData.map((data, index) => {
            if (index == i) {
                const newItem = {
                    ...data,
                    Quantity: data.Quantity + 1,
                    Price: data.Quantity != 0 ? (data.Price + (data.Price * data.Quantity))/data.Quantity : data.Price
                }
                return newItem;
            }
            return data;
        })
        this.setState({
            productData: newData
        });
    };
    handleDecreaseItem = (i) => {
        const newData = this.state.productData.map((data, index) => {
            if (index == i && data.Quantity != 0) {
                const newItem = {
                    ...data,
                    Quantity: data.Quantity - 1,
                    Price: data.Quantity > 1 ? (data.Price - (data.Price / data.Quantity)) : data.Price
                }
                return newItem;  
            }
            return data;
        })
        this.setState({
            productData: newData
        });
    };

    render() {
        return (
            <div>
                <AddToCart
                    addToCart={this.handleAddToCart}
                    increaseItem={this.handleIncreaseItem}
                    decreaseItem={this.handleDecreaseItem}
                    count={this.state.count}
                    data={this.state.productData}
                />
                <Footer 
                
                />
            </div>

        )
    }

}
export default Shops
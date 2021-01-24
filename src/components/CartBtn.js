import React from 'react';
const CartBtn = (props) => {
    
    const handleAddClick = (e) => {
        let cart = localStorage.getItem('Cart');
        let cart2 = JSON.parse(cart);
        cart2.push(props.book);
        localStorage.setItem('Cart', JSON.stringify(cart2));
    }

    return (<button key={props.index} style={{ backgroundColor: 'Black', border: 'solid 1px white', color: 'white', marginBottom: '10px' }} onClick={handleAddClick}>
        Add To Cart
    </button>)
    
}
export default CartBtn;
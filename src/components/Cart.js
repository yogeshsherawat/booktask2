import React from 'react';

const Cart = (props) => {
    let b = localStorage.getItem('Cart')
    let books = JSON.parse(b);
    let sum = 0;
    books.forEach(book => {
        sum += book.price;
    })
    const handleClick = (e) => {
        props.setCartVisibility(false);
    }
    return (<div >
        
        {books.map((book, index) => 
            <div style={{  borderStyle: 'solid', borderColor: 'black' , borderWidth:'3px' }}>
        <h4 style={{ color: 'white',marginLeft: '5%' }}> {book.title} <br/> <small style={{color:'black'}}>{book.price}$</small></h4>
                
                </div>
            
        )}
        
        <h5 style={{color:'red',marginLeft: '5%'}}>Total Price:{sum}</h5>
        <button style={{ backgroundColor: 'black', marginLeft: '5%' ,color:'white' , borderRadius:'5px'}} onClick={handleClick}>Hide Cart</button>

        
    </div>)
    
}
export default Cart;
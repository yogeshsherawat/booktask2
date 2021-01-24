import React, { useState } from 'react';
import axios from 'axios';
import CartBtn from './CartBtn';
import Cart from './Cart';
import { Fragment } from 'react';

const GetBooks = () => {
    let [cartVisible, setCartVisibility] = useState(false);
    let [search, setSearch] = useState(false);
    const [books, setBooks] = useState([]);
    const [searchBooks, setSearchBooks] = useState([]);
    axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json').then(res => {
        setBooks([...res.data.slice(0,50)]);
    })
    let [query, setQuery] = useState('');
    const handleQueryChange = (e) => {
        setQuery(e.target.value);
    }
    const handleQueryClick = (e) => {
        if (query.length > 2) {
            setSearch(true);
            console.log("clicked btn")
            let foundBooks = []
            books.forEach(function (book) {
                let str1 = book.title;
                let str3 = str1.toLowerCase();
                let str2 = query.toLowerCase();
                //console.log(str3);
                //console.log(str2);
                if (str3.includes(str2)) {
                    
                    foundBooks.push(book);
                    console.log("found");
                    console.log(book);
            }

            })
            

            setSearchBooks(foundBooks);
        }
        // we can add alert here
    }
    const DeleteQueryClick = (e) => {
        setSearch(false);
    }
    const handleCartBtn = (e) => {
        setCartVisibility(true);
    }
    


    return (<div>
        
        {cartVisible ? <p><Cart  setCartVisibility={setCartVisibility} /></p> : <Fragment>

        <h2 style={{textAlign:'center'}}>Books List</h2>
        <input style={{ width: "80%", marginLeft:"10%" }} type='text' value={query} placeholder='Enter the title Query with minimum 3 letters'  onChange={handleQueryChange} />
        <br></br>
        <h3 style={{ textAlign: 'center' }} >
            <button
                onClick={handleCartBtn}
                style={{ color: 'white', backgroundColor: 'black', borderRadius: '5px' }}>
                    View Cart
            </button></h3>
        <div style={{display:'flex',alignItems:'center', justifyContent:'center'}}>
        <button style={{backgroundColor:'black',color:'white' , borderRadius:'10px'}} onClick={handleQueryClick}>Search Query</button>
            <button style={{ marginLeft: '2%', backgroundColor: 'black', color: 'white', borderRadius: '10px'}} onClick={DeleteQueryClick}>Delete Query</button>
        </div>
        
        <ul style={{ listStyleType: 'none'  }}>
            {search === true ? searchBooks.map((book, index) =>
                <li key={index} style={{ border: 'dotted black 2px', marginBottom: '2px' }}>
                    <div style={{ marginLeft: '5%' }}>
                        <h3>{book.title}
                            <br />
                            <small style={{ color: 'white' }}>{book.authors}</small>
                        </h3>
                        <h5>Rating: {book.average_rating} stars</h5>
                        <h5 style={{ color: 'white' }}>ISBN NO: {book.isbn}</h5>
                        <h5>Language: {book.language_code}</h5>
                        <h4 style={{ color: 'white' }}>Price: {book.price}$</h4>

                        <CartBtn book={book} index={index}/>

                    </div>
                </li>) :
                books.map((book, index) =>
                    <li key={index} style={{ border: 'dotted black 2px', marginBottom: '2px' }}>
                        <div style={{marginLeft:'5%'}}>
                        <h3>{book.title}
                            <br/>
                            <small style={{color:'white'}}>{book.authors}</small>
                            </h3>
                            <h5>Rating: {book.average_rating} stars</h5>
                            <h5 style={{ color: 'white' }}>ISBN NO: {book.isbn}</h5>
                            <h5>Language: {book.language_code}</h5>
                            <h4 style={{color:'white'}}>Price: {book.price}$</h4>
                            <CartBtn book={book}/>   
                        
                        </div>
                    </li>)}

            </ul>
        </Fragment>}
    </div>
    )

}
export default GetBooks;
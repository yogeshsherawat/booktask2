import React, { Fragment , useEffect } from 'react';
import GetBooks from './components/GetBooks';
function App() {
  
  useEffect(() => localStorage.setItem('Cart', JSON.stringify([])), [])
  
  
  return (
    <div style={{backgroundColor:'grey'}}>
      <GetBooks/>
    </div>
    
  );
}

export default App;

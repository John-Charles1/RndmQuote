import './App.css'
import { useEffect, useState } from "react";

var index = 1;
const App = () => {
  const [quotes, setQuotes] = useState([]);
  
  useEffect(()=>{
    fetch('https://type.fit/api/quotes')
      .then(response => response.json())
      .then(data => setQuotes(data))
      .catch(err => console.log(err))
    console.log('ran')
  }, [])

  
  const [quote, setQuote] = useState('Genius is one percent inspiration and ninety-nine percent perspiration.');
  const [name, setName] = useState('Thomas Edison, type.fit');
  
  function nextQuote(){
    setQuote(quotes[index].text);
    setName(quotes[index].author);
    index++;
    if(index >= 16)
      index = 1;
  }
  return (
    <>
      <div className='quote-card'>
          <blockquote className='quote'>{quote}</blockquote>
          <p className='author'>{name}</p>
          <button onClick={nextQuote}>Next</button>
      </div>
    </>
  );
}
 
export default App;
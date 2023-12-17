const [quotes, setQuotes] = useState([]);
  
  useEffect(()=>{
    fetch('https://type.fit/api/quotes')
      .then(response => response.json())
      .then(data => setQuotes(data))
      .catch(err => console.log(err))
    console.log('ran')
  }, [])
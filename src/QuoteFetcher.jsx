import { useEffect, useState } from "react";
const RANDOM_QUOTE_URl = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function QuoteFetcher(){
    const [quote,setQuote] = useState({text:"",author:""})

    useEffect(()=>{
        fetchQuote();
    },[]);
    async function fetchQuote(){
        const response = await fetch(RANDOM_QUOTE_URl);
        const jsonResponse = await response.json();
        const randomQuote = jsonResponse.quote;
        setQuote(randomQuote);
    }
    return (
        <div>
            <button onClick={fetchQuote}>
                Get Quote Using HAndler
            </button>
            <h1>{quote.text}</h1>
            <h3>{quote.author}</h3>
        </div>
    )
}
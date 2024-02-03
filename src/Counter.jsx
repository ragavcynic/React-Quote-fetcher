import {useState,useEffect} from "react";
export default function Counter(){
    const [count,setCount] = useState(0);
    const [name,setName] = useState("");

    useEffect(function myEffect(){ //run after first render and every re render 
        console.log("effect rendered!!")
    },[count]);

    const increment = ()=>{
        setCount(count+1)
    };
    const handleChange = (evt) =>{
        setName(evt.target.value)
    }
    return(
        <div>
        <h1>{count}</h1>
        <button onClick={increment}>+1</button>
        <p>NAme</p>
        <input type="text" value={name} onChange={handleChange}/>
        </div>
    )
}
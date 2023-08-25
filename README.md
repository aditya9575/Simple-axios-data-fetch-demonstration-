create react app  and set it up 
npm i axios 
import useEffect hook -> import { useEffect } from 'react';
import axios -> import axios from "axios"

//this is our sample api to use -> "https://jsonplaceholder.typicode.com/posts"

Now in the app function -> we call in useEffect hook ->

useEffect(()=>{

          },[])



Now inside this useEffect hook render the axios method -> axios.get("inside here we place the api from which we want to fetch data")

---------------------------------------------------------------
i.e-> 
useEffect(()=>{
axios.get("https://jsonplaceholder.typicode.com/posts")
     .then((res)=>console.log(res) ); //res.data for getting only data 
          },[])



---------------------------------------------------------------
this will give us an object in our console which will contain our data and if we specifically want to access data only we just simply 
have to add res.data instead of console.log res 






================================***********************************====================================*******************************
Till here we will get our data that is fetched from our api 

but now if we want to display this data onto our main screen we need to store it on some state so we make use of useState hook 

steps -> 

1stly import useState hook -> import { useEffect , useState } from 'react';


2ndly now we call in the useState hook -> const [data , setData ] = useState([]);   //here because data is in form of array so we 
                                                                                    //initialised the initial value with an empty array 


3rd Now instead of console.logging res.data inside our useEffect hook we simply call setData and pass the res.data to it 
i.e-> .then((res)=> setData(res.data));



4th now we use .map method to finally render the data -> 
go inside the return statement  -> 
{data.map((post) => {
        const { id, title, body } = post;
        return (
          <div className="card" key={id}>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        );
})}




//this will display the data onto the screen 




**************************************************************************************************************************************
                                                       COMPLETE PROGRAM

import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      //  .then((res)=>console.log(res.data) );    // it is for simply checking/logging in the data being fetched to the console
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="app">
      Hello World
      {data.map((post) => {
        const { id, title, body } = post;
        return (
          <div className="card" key={id}>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;

**************************************************************************************************************************************

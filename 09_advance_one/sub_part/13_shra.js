// API
// dusre bande ne ek system bnaya hua h hmne usko req bheji ki ek receipe chaiye tho vo hme response deti h
// hmne final output dekne ko milta h usne kese usko prepare kiya usse koi mtlb nhi hota

// Fetch API
// the fetch API provides an interfaces for fetching (sending/receiving) resouces
// It uses Request and Response object
// the fetch() method is used to fetch a resouse(data)
// let promise = fetch(url,[options])  jab bhi fetch bhejte h or kuch options specify nhi krte tho fetch GET request create krta h

const URL = "https://cat-fact.herokuapp.com/facts";

async function getData(){
    let response = await fetch(URL); // kishi bhi api ko call krke usse data mangwana async kaam h, kyoki usko time bhi lag skta h , isliye aage await likhna h 
    console.log(response); // JSON Object
    let data = await response.json();
    console.log(data);
}
// response (JSON)--> JS object
// Understanding Terms

// AJAX is Asynchronous JS & XML

// JSON is JavaScript Object Notation

// json() method: returns a second promise that resolves with the result of parsing the response body text as JSON. (Input is JSON, output is JS object

// Requests & Response
// Mdn -- HTTP Methods
// HTTP Verbs

// Response Status Code  -- like 200
// Mdn response status code

// *HTTP response headers also contain details about the responses, such as content type, HTTP status code etc.

// Using Promise
function getFacts(){
    fetch(URL)
    .then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
    })
}
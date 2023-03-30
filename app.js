console.log("hello");

const form = document.querySelector("form");
const APP_ID = `627ac528`;
const APP_KEY = `aa52691efb068fc3ce0149b1f3cb341c`;

const API_URL = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

fetchAPI();
